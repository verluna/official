import { Metadata } from "next";
import { BuildContent } from "./BuildContent";

export const metadata: Metadata = {
  title: "Agent Architecture Build | Verluna — Working Systems in 8 Weeks",
  description:
    "We build production agent systems in 4-8 weeks. Working automations, tested integrations, documented architecture, trained team. EUR 15,000-50,000.",
  keywords: [
    "agentic AI implementation",
    "marketing automation build",
    "HubSpot automation consulting Germany",
    "agent architecture implementation",
    "production AI systems Europe",
  ],
  openGraph: {
    title: "Agent Architecture Build | Verluna",
    description:
      "4-8 weeks to production. Working automations, tested integrations, documented architecture. EUR 15,000-50,000.",
    url: "https://verluna.com/services/build",
  },
};

export default function BuildPage() {
  return <BuildContent />;
}
