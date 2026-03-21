import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validation";
import { upsertContactFormLead } from "@/lib/hubspot";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  // Rate limit: 10 req/min per IP
  const rl = await checkRateLimit(request, {
    maxRequests: 10,
    windowMs: 60_000,
  });
  if (!rl.success) return rl.response!;

  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: parsed.error.issues[0]?.message || "Invalid input",
          code: "VALIDATION_ERROR",
        },
        { status: 400 }
      );
    }

    const { name, email, company, message, companySize, source } = parsed.data;

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // HubSpot upsert (fire and forget)
    upsertContactFormLead({ email, name, company, companySize, source }).catch(
      () => {}
    );

    // Send notification to Verluna team
    const { error: notificationError } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL || "Verluna Contact <onboarding@resend.dev>",
      to: ["info@verluna.de"],
      subject: `New Contact: ${name} from ${company || "N/A"}`,
      html: `
        <div style="font-family: monospace; background: #0A0A0A; color: #EDEDED; padding: 24px; border-radius: 8px;">
          <h2 style="color: #00FF94; margin-bottom: 24px;">> New Project Inquiry</h2>

          <div style="margin-bottom: 16px;">
            <strong style="color: #A1A1AA;">Name:</strong>
            <p style="margin: 4px 0;">${name}</p>
          </div>

          <div style="margin-bottom: 16px;">
            <strong style="color: #A1A1AA;">Email:</strong>
            <p style="margin: 4px 0;"><a href="mailto:${email}" style="color: #3B82F6;">${email}</a></p>
          </div>

          ${company ? `
          <div style="margin-bottom: 16px;">
            <strong style="color: #A1A1AA;">Company:</strong>
            <p style="margin: 4px 0;">${company}</p>
          </div>` : ""}

          ${companySize ? `
          <div style="margin-bottom: 16px;">
            <strong style="color: #A1A1AA;">Company Size:</strong>
            <p style="margin: 4px 0;">${companySize}</p>
          </div>` : ""}

          <div style="margin-bottom: 16px;">
            <strong style="color: #A1A1AA;">Message:</strong>
            <p style="margin: 4px 0; white-space: pre-wrap;">${message}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #262626; margin: 24px 0;">
          <p style="color: #A1A1AA; font-size: 12px;">
            Sent from verluna.de contact form${source ? ` (${source})` : ""}
          </p>
        </div>
      `,
    });

    if (notificationError) {
      console.error("Failed to send notification email:", notificationError);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    // Send confirmation to user
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Verluna <onboarding@resend.dev>",
      to: [email],
      subject: "We received your message - Verluna",
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0A0A0A; color: #EDEDED; padding: 32px; border-radius: 8px;">
            <h1 style="color: #00FF94; font-size: 24px; margin-bottom: 16px;">Thanks for reaching out, ${name.split(" ")[0]}!</h1>

            <p style="color: #A1A1AA; line-height: 1.6;">
              We've received your message and will get back to you within 24 hours.
            </p>

            <p style="color: #A1A1AA; line-height: 1.6;">
              In the meantime, feel free to:
            </p>

            <ul style="color: #EDEDED; line-height: 1.8;">
              <li>Take the <a href="https://verluna.de/scorecard" style="color: #3B82F6;">Agent Readiness Scorecard</a></li>
              <li>Read our <a href="https://verluna.de/case-studies" style="color: #3B82F6;">case studies</a></li>
              <li>Learn about our <a href="https://verluna.de/services" style="color: #3B82F6;">services</a></li>
            </ul>

            <hr style="border: none; border-top: 1px solid #262626; margin: 24px 0;">

            <p style="color: #A1A1AA; font-size: 14px;">
              Best,<br>
              The Verluna Team
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
