import { NextRequest, NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validation";
import { upsertNewsletterContact } from "@/lib/hubspot";
import { createNewsletterToken } from "@/lib/tokens";
import { sendNewsletterConfirmation } from "@/lib/emails";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  // Rate limit: 5 req/15min per IP
  const rl = await checkRateLimit(request, {
    maxRequests: 5,
    windowMs: 900_000,
  });
  if (!rl.success) return rl.response!;

  try {
    const body = await request.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: parsed.error.issues[0]?.message || "Invalid input",
          code: "VALIDATION_ERROR",
        },
        { status: 400 }
      );
    }

    const { email, source } = parsed.data;

    // HubSpot upsert (fire and forget — do not block)
    upsertNewsletterContact(email, source).catch(() => {});

    // Generate confirmation token and send email
    const token = await createNewsletterToken(email);
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://verluna.de";
    const confirmUrl = `${baseUrl}/api/newsletter/confirm?token=${token}`;

    await sendNewsletterConfirmation(email, confirmUrl);

    return NextResponse.json({
      success: true,
      message: "Check your email to confirm your subscription.",
    });
  } catch (err) {
    console.error(
      JSON.stringify({
        route: "newsletter/subscribe",
        event: "error",
        error: err instanceof Error ? err.message : String(err),
      })
    );
    return NextResponse.json(
      {
        error: "An unexpected error occurred. Please try again.",
        code: "INTERNAL_ERROR",
      },
      { status: 500 }
    );
  }
}
