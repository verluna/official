import { Metadata } from "next";
import { ManagedContent } from "./ManagedContent";

export const metadata: Metadata = {
  title: "Managed Agent Operations | Verluna — Your Operations Team Without the Hiring Timeline",
  description:
    "Ongoing agent operations partnership. Two-week experiment sprints, monthly performance reviews, agent fleet management, and priority SLA. From EUR 5,000/month.",
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
      "One architect with an AI agent workforce delivers the throughput of a 3-5 person team. From EUR 5,000/month.",
    url: "https://verluna.com/services/managed",
  },
};

export default function ManagedPage() {
  return <ManagedContent />;
}
