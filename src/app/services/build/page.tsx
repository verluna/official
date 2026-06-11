import { Metadata } from "next";
import { BuildContent } from "./BuildContent";

export const metadata: Metadata = {
  title: "System Build | Verluna, One Agent System Built to Production",
  description:
    "Fixed-scope builds of production agent systems: integrated with your stack, observable from day one, documented and handed over. EUR 20-60K, priced before work begins.",
  keywords: [
    "agentic AI implementation",
    "marketing automation build",
    "HubSpot automation consulting Germany",
    "agent architecture implementation",
    "production AI systems Europe",
  ],
  openGraph: {
    title: "System Build | Verluna",
    description:
      "One agent system designed, built, and deployed to production. Fixed scope, fixed price. EUR 20-60K.",
    url: "https://verluna.de/services/build",
  },
};

export default function BuildPage() {
  return <BuildContent />;
}
