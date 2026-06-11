import { Metadata } from "next";
import { ConsultingContent } from "./ConsultingContent";

export const metadata: Metadata = {
  title: "Architecture Advisory | Verluna, Guidance for In-House Agent Teams",
  description:
    "Advisory for companies building agent systems with their own engineers. Domain decomposition, governance for the EU AI Act, autonomy classification, platform selection, and team training.",
  keywords: [
    "agent architecture consulting",
    "AI governance framework",
    "multi-agent architecture patterns",
    "AI infrastructure consulting Europe",
    "agent strategy CTO",
  ],
  openGraph: {
    title: "Architecture Advisory | Verluna",
    description:
      "Your engineers build. We guide the architecture. Workshops, reviews, training, and standing advisory, scoped per engagement.",
    url: "https://verluna.de/services/consulting",
  },
};

export default function ConsultingPage() {
  return <ConsultingContent />;
}
