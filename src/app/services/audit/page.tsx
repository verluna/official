import { Metadata } from "next";
import { AuditContent } from "./AuditContent";

export const metadata: Metadata = {
  title: "Agent Readiness Audit | Verluna — Two Weeks to See Your Operations Clearly",
  description:
    "A two-week diagnostic that maps your GTM stack, scores automation maturity, and delivers an architecture diagram with the three highest-ROI agent opportunities. EUR 5,000-10,000.",
  keywords: [
    "GTM automation audit",
    "agent readiness assessment",
    "marketing operations audit Europe",
    "automation maturity scorecard",
    "agent operations diagnostic",
  ],
  openGraph: {
    title: "Agent Readiness Audit | Verluna",
    description:
      "Two-week diagnostic. Architecture diagram. Automation maturity scorecard. 3 prioritized opportunities with ROI. EUR 5,000-10,000.",
    url: "https://verluna.com/services/audit",
  },
};

export default function AuditPage() {
  return <AuditContent />;
}
