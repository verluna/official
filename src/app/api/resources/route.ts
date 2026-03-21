import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface ResourceRequest {
  email: string;
  resourceId: string;
}

const resourceTitles: Record<string, string> = {
  "gtm-checklist": "GTM Audit Checklist",
  "automation-patterns": "Automation Patterns Library",
  "stack-readiness": "Stack Readiness Assessment",
};

export async function POST(request: NextRequest) {
  try {
    const body: ResourceRequest = await request.json();

    if (!body.email || !body.resourceId) {
      return NextResponse.json(
        { error: "Email and resource ID are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    const resourceTitle = resourceTitles[body.resourceId];
    if (!resourceTitle) {
      return NextResponse.json(
        { error: "Invalid resource ID" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send resource to user
    const { error: deliveryError } = await resend.emails.send({
      from: "Verluna Resources <onboarding@resend.dev>",
      to: [body.email],
      subject: `Your ${resourceTitle} from Verluna`,
      html: `
        <div style="font-family: monospace; background: #0A0A0A; color: #EDEDED; padding: 32px; border-radius: 8px; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #00FF94; font-size: 20px; margin-bottom: 16px;">&gt; ${resourceTitle}</h1>

          <p style="color: #A1A1AA; line-height: 1.6; margin-bottom: 24px;">
            Thanks for downloading the ${resourceTitle}. Here is your resource:
          </p>

          <div style="padding: 16px; border: 1px solid #262626; border-radius: 8px; margin-bottom: 24px;">
            <p style="color: #EDEDED; margin: 0;">
              Your resource is being prepared. We will follow up with the full document shortly.
            </p>
          </div>

          <p style="color: #A1A1AA; line-height: 1.6;">
            Want a personalized walkthrough? <a href="https://verluna.de/contact" style="color: #3B82F6;">Book a free audit call</a> and we will review your GTM stack together.
          </p>

          <hr style="border: none; border-top: 1px solid #262626; margin: 24px 0;">

          <p style="color: #A1A1AA; font-size: 12px;">
            Best,<br>
            The Verluna Team
          </p>
        </div>
      `,
    });

    if (deliveryError) {
      console.error("Failed to send resource email:", deliveryError);
      return NextResponse.json(
        { error: "Failed to send resource. Please try again." },
        { status: 500 }
      );
    }

    // Notify Verluna about the lead
    await resend.emails.send({
      from: "Verluna Resources <onboarding@resend.dev>",
      to: ["info@verluna.de"],
      subject: `New Lead: ${resourceTitle} download`,
      html: `
        <div style="font-family: monospace; background: #0A0A0A; color: #EDEDED; padding: 24px; border-radius: 8px;">
          <h2 style="color: #00FF94; margin-bottom: 24px;">&gt; New Resource Download</h2>

          <div style="margin-bottom: 16px;">
            <strong style="color: #A1A1AA;">Email:</strong>
            <p style="margin: 4px 0;"><a href="mailto:${body.email}" style="color: #3B82F6;">${body.email}</a></p>
          </div>

          <div style="margin-bottom: 16px;">
            <strong style="color: #A1A1AA;">Resource:</strong>
            <p style="margin: 4px 0;">${resourceTitle}</p>
          </div>

          <div style="margin-bottom: 16px;">
            <strong style="color: #A1A1AA;">Resource ID:</strong>
            <p style="margin: 4px 0; color: #00FF94;">${body.resourceId}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #262626; margin: 24px 0;">

          <p style="color: #A1A1AA; font-size: 12px;">
            Sent from verluna.de resources page
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Resource sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Resource request error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
