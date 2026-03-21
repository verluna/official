// Email templates for scorecard results, newsletter confirmation, and contact notifications.
// All emails use the Verluna dark terminal aesthetic.

import { Resend } from "resend";
import type { ScorecardResult } from "./scorecard-data";

let resendClient: Resend | null = null;

function getResend(): Resend | null {
  if (resendClient) return resendClient;
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.log(
      JSON.stringify({ route: "email", event: "skip", reason: "RESEND_API_KEY not set" })
    );
    return null;
  }
  resendClient = new Resend(key);
  return resendClient;
}

const FROM = process.env.RESEND_FROM_EMAIL || "Verluna <onboarding@resend.dev>";

// ---- Scorecard Results Email ----

export async function sendScorecardResultsEmail(
  to: string,
  firstName: string | undefined,
  result: ScorecardResult,
  reportUrl: string
): Promise<boolean> {
  const resend = getResend();
  if (!resend) return false;

  const name = firstName || "there";
  const tierColor =
    result.tierInfo.color === "green"
      ? "#00FF94"
      : result.tierInfo.color === "blue"
        ? "#3B82F6"
        : "#7C3AED";

  const categoryRows = result.categoryScores
    .map(
      (c) => `
      <tr>
        <td style="padding: 8px 0; color: #A1A1AA; font-family: monospace; font-size: 14px;">${c.label}</td>
        <td style="padding: 8px 0; text-align: right; font-family: monospace; font-size: 14px;">
          <span style="color: ${tierColor};">${c.normalized}</span>
          <span style="color: #52525b;">/100</span>
        </td>
      </tr>`
    )
    .join("");

  const html = `
    <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0A; border-radius: 12px; overflow: hidden;">
      <div style="padding: 32px;">
        <div style="font-family: monospace; color: #A1A1AA; font-size: 12px; margin-bottom: 24px;">
          > verluna agent-readiness-scorecard --results
        </div>

        <h1 style="color: #EDEDED; font-size: 24px; margin: 0 0 8px;">
          Hey ${name}, your results are ready.
        </h1>
        <p style="color: #A1A1AA; font-size: 16px; margin: 0 0 32px; line-height: 1.5;">
          Your organization scored <strong style="color: ${tierColor};">${result.normalizedScore}/100</strong> on the Agent Readiness Scorecard.
        </p>

        <div style="background: #111111; border: 1px solid #262626; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
          <div style="text-align: center; margin-bottom: 16px;">
            <span style="font-family: monospace; font-size: 48px; font-weight: bold; color: ${tierColor};">
              ${result.normalizedScore}
            </span>
            <span style="font-family: monospace; font-size: 20px; color: #52525b;">/100</span>
          </div>
          <div style="text-align: center;">
            <span style="display: inline-block; padding: 4px 12px; border-radius: 4px; font-family: monospace; font-size: 12px; background: ${tierColor}15; color: ${tierColor}; border: 1px solid ${tierColor}30;">
              ${result.tierInfo.label}
            </span>
          </div>
        </div>

        <div style="background: #111111; border: 1px solid #262626; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
          <h3 style="color: #EDEDED; font-family: monospace; font-size: 14px; margin: 0 0 16px;">
            Category Breakdown
          </h3>
          <table style="width: 100%; border-collapse: collapse;">
            ${categoryRows}
          </table>
        </div>

        <div style="background: #111111; border: 1px solid #262626; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
          <h3 style="color: #EDEDED; font-family: monospace; font-size: 14px; margin: 0 0 16px;">
            Top Recommendations
          </h3>
          ${result.tierInfo.recommendations
            .map(
              (r, i) => `
            <div style="margin-bottom: 12px; padding-left: 16px; border-left: 2px solid ${tierColor};">
              <p style="color: #A1A1AA; font-size: 14px; line-height: 1.5; margin: 0;">
                <span style="color: ${tierColor}; font-family: monospace;">${i + 1}.</span> ${r}
              </p>
            </div>`
            )
            .join("")}
        </div>

        <div style="text-align: center; margin-bottom: 32px;">
          <a href="${reportUrl}" style="display: inline-block; padding: 12px 32px; background: #EDEDED; color: #050505; font-weight: 600; text-decoration: none; border-radius: 6px; font-size: 14px;">
            Download Full Report (PDF)
          </a>
        </div>

        <div style="text-align: center;">
          <a href="${result.tierInfo.cta.href}" style="display: inline-block; padding: 12px 32px; background: transparent; color: ${tierColor}; font-weight: 600; text-decoration: none; border: 1px solid ${tierColor}; border-radius: 6px; font-size: 14px;">
            ${result.tierInfo.cta.label}
          </a>
        </div>

        <hr style="border: none; border-top: 1px solid #262626; margin: 32px 0 16px;">
        <p style="color: #52525b; font-size: 12px; font-family: monospace; text-align: center;">
          Verluna | Agent Operations for European Enterprises | Berlin, DE
        </p>
      </div>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: [to],
      subject: `Your Agent Readiness Score: ${result.normalizedScore}/100 - ${result.tierInfo.label}`,
      html,
    });
    if (error) {
      console.error(JSON.stringify({ route: "email", event: "scorecard_send_error", error }));
      return false;
    }
    return true;
  } catch (err) {
    console.error(
      JSON.stringify({
        route: "email",
        event: "scorecard_send_exception",
        error: err instanceof Error ? err.message : String(err),
      })
    );
    return false;
  }
}

// ---- Newsletter Double Opt-In ----

export async function sendNewsletterConfirmation(
  to: string,
  confirmUrl: string
): Promise<boolean> {
  const resend = getResend();
  if (!resend) return false;

  const html = `
    <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0A; border-radius: 12px; overflow: hidden;">
      <div style="padding: 32px;">
        <div style="font-family: monospace; color: #A1A1AA; font-size: 12px; margin-bottom: 24px;">
          > verluna newsletter --confirm
        </div>

        <h1 style="color: #EDEDED; font-size: 24px; margin: 0 0 16px;">
          Confirm your subscription
        </h1>
        <p style="color: #A1A1AA; font-size: 16px; margin: 0 0 32px; line-height: 1.5;">
          You requested to join <strong style="color: #EDEDED;">The Agent Operations Briefing</strong>.
          Click below to confirm your email and start receiving biweekly insights on agent architecture, AI governance, and operational automation.
        </p>

        <div style="text-align: center; margin-bottom: 32px;">
          <a href="${confirmUrl}" style="display: inline-block; padding: 14px 40px; background: #00FF94; color: #050505; font-weight: 700; text-decoration: none; border-radius: 6px; font-size: 16px; font-family: monospace;">
            Confirm Subscription
          </a>
        </div>

        <p style="color: #52525b; font-size: 13px; line-height: 1.5;">
          If you did not request this, you can safely ignore this email. This link expires in 72 hours.
        </p>

        <hr style="border: none; border-top: 1px solid #262626; margin: 32px 0 16px;">
        <p style="color: #52525b; font-size: 12px; font-family: monospace; text-align: center;">
          Verluna | Berlin, DE
        </p>
      </div>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: [to],
      subject: "Confirm your subscription to The Agent Operations Briefing",
      html,
    });
    return !error;
  } catch {
    return false;
  }
}

// ---- Internal Notification (scorecard lead) ----

export async function sendScorecardNotification(
  data: {
    email: string;
    firstName?: string;
    companyName?: string;
    role?: string;
    score: number;
    tier: string;
    newsletterOptIn: boolean;
  }
): Promise<boolean> {
  const resend = getResend();
  if (!resend) return false;

  const html = `
    <div style="font-family: monospace; background: #0A0A0A; color: #EDEDED; padding: 24px; border-radius: 8px;">
      <h2 style="color: #00FF94; margin-bottom: 24px;">> New Scorecard Submission</h2>

      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="color: #A1A1AA; padding: 4px 0;">Email:</td><td>${data.email}</td></tr>
        <tr><td style="color: #A1A1AA; padding: 4px 0;">Name:</td><td>${data.firstName || "Not provided"}</td></tr>
        <tr><td style="color: #A1A1AA; padding: 4px 0;">Company:</td><td>${data.companyName || "Not provided"}</td></tr>
        <tr><td style="color: #A1A1AA; padding: 4px 0;">Role:</td><td>${data.role || "Not provided"}</td></tr>
        <tr><td style="color: #A1A1AA; padding: 4px 0;">Score:</td><td style="color: #00FF94; font-weight: bold;">${data.score}/100</td></tr>
        <tr><td style="color: #A1A1AA; padding: 4px 0;">Tier:</td><td>${data.tier}</td></tr>
        <tr><td style="color: #A1A1AA; padding: 4px 0;">Newsletter:</td><td>${data.newsletterOptIn ? "Yes" : "No"}</td></tr>
      </table>

      <hr style="border: none; border-top: 1px solid #262626; margin: 24px 0;">
      <p style="color: #A1A1AA; font-size: 12px;">Sent from verluna.de scorecard</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: ["info@verluna.de"],
      subject: `Scorecard: ${data.email} scored ${data.score}/100 (${data.tier})`,
      html,
    });
    return !error;
  } catch {
    return false;
  }
}
