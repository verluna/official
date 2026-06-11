import { Metadata } from "next";
import { ServicesOverviewContent } from "./ServicesOverviewContent";

export const metadata: Metadata = {
  title: "Services | Verluna, Agent Operations for European Companies",
  description:
    "Three engagements: Readiness Audit (EUR 7-10K, 2-3 weeks), System Build (EUR 20-60K, fixed scope), and Managed Agent Operations (EUR 8-15K/month). Plus architecture advisory for in-house teams.",
  keywords: [
    "agent operations consulting",
    "GTM automation audit",
    "AI agent consulting Europe",
    "marketing operations automation DACH",
    "managed marketing operations",
    "agent architecture consulting",
  ],
  openGraph: {
    title: "Services | Verluna, Agent Operations",
    description:
      "Readiness Audit, System Build, and Managed Agent Operations. Fixed prices in EUR. Built for European companies adapting to the agentic era.",
    url: "https://verluna.de/services",
  },
};

export default function ServicesPage() {
  return <ServicesOverviewContent />;
}
