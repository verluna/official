import { Metadata } from "next";
import { ConsultingContent } from "./ConsultingContent";

export const metadata: Metadata = {
  title: "Agent Architecture Consulting | Verluna — For CTOs Building Agent Capabilities",
  description:
    "Strategic advisory for companies building their own agent capabilities. Domain decomposition, governance frameworks, autonomy classification, infrastructure blueprints, and team training.",
  keywords: [
    "agent architecture consulting",
    "AI governance framework",
    "multi-agent architecture patterns",
    "AI infrastructure consulting Europe",
    "agent strategy CTO",
  ],
  openGraph: {
    title: "Agent Architecture Consulting | Verluna",
    description:
      "Not a vendor. A practitioner. Architectural guidance for companies building internal agent systems.",
    url: "https://verluna.com/services/consulting",
  },
};

export default function ConsultingPage() {
  return <ConsultingContent />;
}
