import { NextResponse } from "next/server";

type ConsultationPayload = {
  parentName?: string;
  childName?: string;
  grade?: string;
  email?: string;
  telephone?: string;
  program?: string;
  preferredContactTime?: string;
  preferredTime?: string;
  consent?: string | boolean;
  location?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ConsultationPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

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
    return NextResponse.json(
      { ok: false, error: "Validation failed." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    ok: true,
    message:
      "Thank you for booking with Eye Level Learning Center of Hicksville. Our instructional coordinator will call you to confirm your child’s free diagnostic level test.",
  });
}
