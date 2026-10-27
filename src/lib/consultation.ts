import { mkdir, appendFile, readFile, writeFile } from "fs/promises";
import path from "path";

export type ConsultationInput = {
  parentName: string;
  childName: string;
  grade: string;
  email: string;
  telephone: string;
  program: string;
  preferredContactTime: string;
  location: string;
};

export type ConsultationRecord = ConsultationInput & {
  id: string;
  createdAt: string;
  source: "website-form";
  delivery: {
    stored: boolean;
    emailed: boolean;
    webhook: boolean;
    errors: string[];
  };
};

const DATA_DIR = path.join(process.cwd(), "data");
const STORE_FILE = path.join(DATA_DIR, "consultations.jsonl");

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function normalizeConsultation(body: Record<string, unknown>): {
  data?: ConsultationInput;
  error?: string;
} {
  const parentName = String(body.parentName || "").trim();
  const childName = String(body.childName || "").trim();
  const grade = String(body.grade || "").trim();
  const email = String(body.email || "").trim();
  const telephone = String(body.telephone || "").trim();
  const program = String(body.program || "").trim();
  const preferredContactTime = String(
    body.preferredContactTime || body.preferredTime || ""
  ).trim();
  const consent =
    body.consent === true ||
    String(body.consent || "").toLowerCase() === "yes" ||
    String(body.consent || "").toLowerCase() === "true";
  const location = String(body.location || "").trim();

  if (
    !parentName ||
    !childName ||
    !grade ||
    !isValidEmail(email) ||
    telephone.replace(/\D/g, "").length < 10 ||
    !program ||
    !preferredContactTime ||
    !consent ||
    location !== "Hicksville"
  ) {
    return { error: "Validation failed." };
  }

  return {
    data: {
      parentName,
      childName,
      grade,
      email,
      telephone,
      program,
      preferredContactTime,
      location,
    },
  };
}

export async function persistConsultation(
  record: ConsultationRecord
): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await appendFile(STORE_FILE, `${JSON.stringify(record)}\n`, "utf8");
}

export async function listConsultations(
  limit = 50
): Promise<ConsultationRecord[]> {
  try {
    const raw = await readFile(STORE_FILE, "utf8");
    return raw
      .split("\n")
      .filter(Boolean)
      .map((line) => JSON.parse(line) as ConsultationRecord)
      .reverse()
      .slice(0, limit);
  } catch {
    return [];
  }
}

function buildEmailText(data: ConsultationInput, id: string): string {
  return `New free level test / consultation request

Submission ID: ${id}
Business: Eye Level Learning Center of Hicksville
Location field: ${data.location}

Parent / guardian: ${data.parentName}
Child: ${data.childName}
Grade: ${data.grade}
Email: ${data.email}
Telephone: ${data.telephone}
Program of interest: ${data.program}
Preferred contact time: ${data.preferredContactTime}

Source: website consultation form
Canonical site: https://www.myeyelevelhicksville.com
`;
}

export async function emailConsultation(
  data: ConsultationInput,
  id: string
): Promise<{ sent: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return { sent: false, error: "RESEND_API_KEY not configured" };
  }

  const to =
    process.env.CONTACT_EMAIL_RECIPIENT?.trim() ||
    "eyelevelhicksville@gmail.com";
  const from =
    process.env.DEFAULT_FROM_EMAIL?.trim() ||
    "Eye Level Hicksville <onboarding@resend.dev>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `Eye Level Hicksville consultation | ${data.parentName} | ${data.program}`,
      text: buildEmailText(data, id),
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    return {
      sent: false,
      error: `Resend ${response.status}: ${detail.slice(0, 300)}`,
    };
  }

  return { sent: true };
}

export async function forwardConsultationWebhook(
  record: ConsultationRecord
): Promise<{ sent: boolean; error?: string }> {
  const webhook = process.env.CONSULTATION_WEBHOOK_URL?.trim();
  if (!webhook) {
    return { sent: false, error: "CONSULTATION_WEBHOOK_URL not configured" };
  }

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record),
  });

  if (!response.ok) {
    const detail = await response.text();
    return {
      sent: false,
      error: `Webhook ${response.status}: ${detail.slice(0, 300)}`,
    };
  }

  return { sent: true };
}

export async function processConsultation(
  data: ConsultationInput
): Promise<ConsultationRecord> {
  const id = `elc_${Date.now().toString(36)}_${Math.random()
    .toString(36)
    .slice(2, 8)}`;
  const errors: string[] = [];

  const record: ConsultationRecord = {
    ...data,
    id,
    createdAt: new Date().toISOString(),
    source: "website-form",
    delivery: {
      stored: false,
      emailed: false,
      webhook: false,
      errors,
    },
  };

  try {
    await persistConsultation(record);
    record.delivery.stored = true;
  } catch (error) {
    errors.push(
      `store: ${error instanceof Error ? error.message : "unknown error"}`
    );
  }

  const emailResult = await emailConsultation(data, id).catch((error) => ({
    sent: false,
    error: error instanceof Error ? error.message : "email failed",
  }));
  record.delivery.emailed = emailResult.sent;
  if (!emailResult.sent && emailResult.error) {
    // Missing key is expected in local/dev without secrets — don't treat as hard failure.
    if (!emailResult.error.includes("not configured")) {
      errors.push(`email: ${emailResult.error}`);
    }
  }

  const webhookResult = await forwardConsultationWebhook(record).catch(
    (error) => ({
      sent: false,
      error: error instanceof Error ? error.message : "webhook failed",
    })
  );
  record.delivery.webhook = webhookResult.sent;
  if (!webhookResult.sent && webhookResult.error) {
    if (!webhookResult.error.includes("not configured")) {
      errors.push(`webhook: ${webhookResult.error}`);
    }
  }

  // Rewrite last line with final delivery status when possible
  if (record.delivery.stored) {
    try {
      const raw = await readFile(STORE_FILE, "utf8");
      const lines = raw.split("\n").filter(Boolean);
      if (lines.length) {
        lines[lines.length - 1] = JSON.stringify(record);
        await writeFile(STORE_FILE, `${lines.join("\n")}\n`, "utf8");
      }
    } catch {
      // Non-fatal: original append already saved the request.
    }
  }

  return record;
}
