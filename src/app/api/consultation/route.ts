import { NextResponse } from "next/server";
import {
  normalizeConsultation,
  processConsultation,
} from "@/lib/consultation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, success: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const normalized = normalizeConsultation(body);
  if (!normalized.data) {
    return NextResponse.json(
      { ok: false, success: false, error: normalized.error || "Validation failed." },
      { status: 400 }
    );
  }

  try {
    const record = await processConsultation(normalized.data);

    if (!record.delivery.stored && !record.delivery.emailed && !record.delivery.webhook) {
      return NextResponse.json(
        {
          ok: false,
          success: false,
          error:
            "We could not save your request. Please call (516) 597-5300 to book directly.",
          delivery: record.delivery,
        },
        { status: 503 }
      );
    }

    return NextResponse.json({
      ok: true,
      success: true,
      id: record.id,
      message: `Thank you, ${normalized.data.parentName}. Your consultation request for Eye Level Learning Center of Hicksville has been received. Our team will contact you at ${normalized.data.telephone} to confirm your child's diagnostic level test.`,
      delivery: {
        stored: record.delivery.stored,
        emailed: record.delivery.emailed,
        webhook: record.delivery.webhook,
      },
    });
  } catch (error) {
    console.error("consultation processing failed", error);
    return NextResponse.json(
      {
        ok: false,
        success: false,
        error:
          "Something went wrong saving your request. Please call (516) 597-5300.",
      },
      { status: 500 }
    );
  }
}
