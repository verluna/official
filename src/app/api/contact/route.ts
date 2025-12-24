import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 }
      );
    }

    // Initialize Resend client
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email notification to Verluna team
    const { error: notificationError } = await resend.emails.send({
      from: "Verluna Contact <onboarding@resend.dev>", // Use your verified domain in production
      to: ["info@verluna.de"], // Verluna contact email
      subject: `New Contact: ${body.name} from ${body.company || "N/A"}`,
      html: `
        <div style="font-family: monospace; background: #0A0A0A; color: #EDEDED; padding: 24px; border-radius: 8px;">
          <h2 style="color: #00FF94; margin-bottom: 24px;">&gt; New Project Inquiry</h2>

          <div style="margin-bottom: 16px;">
            <strong style="color: #A1A1AA;">Name:</strong>
            <p style="margin: 4px 0;">${body.name}</p>
          </div>

          <div style="margin-bottom: 16px;">
            <strong style="color: #A1A1AA;">Email:</strong>
            <p style="margin: 4px 0;"><a href="mailto:${body.email}" style="color: #3B82F6;">${body.email}</a></p>
          </div>

          ${
            body.company
              ? `
          <div style="margin-bottom: 16px;">
            <strong style="color: #A1A1AA;">Company:</strong>
            <p style="margin: 4px 0;">${body.company}</p>
          </div>
          `
              : ""
          }

          <div style="margin-bottom: 16px;">
            <strong style="color: #A1A1AA;">Message:</strong>
            <p style="margin: 4px 0; white-space: pre-wrap;">${body.message}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #262626; margin: 24px 0;">

          <p style="color: #A1A1AA; font-size: 12px;">
            Sent from verluna.com contact form
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

    // Send confirmation email to the user
    await resend.emails.send({
      from: "Verluna <onboarding@resend.dev>", // Use your verified domain in production
      to: [body.email],
      subject: "We received your message - Verluna",
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0A0A0A; color: #EDEDED; padding: 32px; border-radius: 8px;">
            <h1 style="color: #00FF94; font-size: 24px; margin-bottom: 16px;">Thanks for reaching out, ${body.name}!</h1>

            <p style="color: #A1A1AA; line-height: 1.6;">
              We've received your message and will get back to you within 24 hours.
            </p>

            <p style="color: #A1A1AA; line-height: 1.6;">
              In the meantime, feel free to:
            </p>

            <ul style="color: #EDEDED; line-height: 1.8;">
              <li>Check out our <a href="https://verluna.com/work" style="color: #3B82F6;">case studies</a></li>
              <li>Read our <a href="https://verluna.com/faq" style="color: #3B82F6;">FAQ</a></li>
              <li>Learn about our <a href="https://verluna.com/services" style="color: #3B82F6;">services</a></li>
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
