import { Metadata } from "next";
import { ManagedContent } from "./ManagedContent";

export const metadata: Metadata = {
  title: "Managed Agent Operations | Verluna, We Run Your Agents",
  description:
    "Our lead engagement. Continuous monitoring, governance reporting, proactive maintenance, and a new capability every month. EUR 8-15K/month, six-month minimum.",
  keywords: [
    "managed marketing operations",
    "outsourced agent operations",
    "AI operations retainer Europe",
    "managed automation services",
    "agent fleet management",
  ],
  openGraph: {
    title: "Managed Agent Operations | Verluna",
    description:
      "We run your agent fleet as an ongoing practice: monitoring, governance, iteration, and new capabilities every month. EUR 8-15K/month, six-month minimum.",
    url: "https://verluna.de/services/managed",
  },
};

export default function ManagedPage() {
  return <ManagedContent />;
}
