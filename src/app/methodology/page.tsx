import { Metadata } from "next";
import { MethodologyContent } from "./MethodologyContent";

export const metadata: Metadata = {
  title: "The Verluna Method | Six Phases to AI-Native Operations",
  description:
    "A six-phase methodology for redesigning human operations as AI-native systems. Emerged from 300+ production sessions and enterprise deployments. Observe, Decompose, Design, Build, Autonomize, Codify.",
  keywords: [
    "AI-native operations design",
    "agent architecture methodology",
    "marketing automation architecture",
    "multi-agent architecture patterns",
    "AI governance framework",
    "autonomous operations methodology",
  ],
  openGraph: {
    title: "The Verluna Method | Six Phases to AI-Native Operations",
    description:
      "Take any human-operated process, decompose it into domains, design an AI-native operating layer, and build it so it runs autonomously. The methodology behind Verluna.",
    url: "https://verluna.com/methodology",
  },
};

export default function MethodologyPage() {
  return <MethodologyContent />;
}
