import { Metadata } from "next";
import { AuditContent } from "./AuditContent";

export const metadata: Metadata = {
  title: "Readiness Audit | Verluna, Know What Is Ready for Autonomy",
  description:
    "A two-to-three-week diagnostic. We map your systems and workflows, score readiness for agents, and deliver a prioritized roadmap with effort and risk per item. EUR 7-10K, fixed price.",
  keywords: [
    "GTM automation audit",
    "agent readiness assessment",
    "marketing operations audit Europe",
    "automation maturity scorecard",
    "agent operations diagnostic",
  ],
  openGraph: {
    title: "Readiness Audit | Verluna",
    description:
      "Two to three weeks. Architecture map, readiness scorecard, three priority recommendations, 90-day roadmap. EUR 7-10K, fixed price.",
    url: "https://verluna.de/services/audit",
  },
};

export default function AuditPage() {
  return <AuditContent />;
}
