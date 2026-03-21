import { Metadata } from "next";
import { ServicesOverviewContent } from "./ServicesOverviewContent";

export const metadata: Metadata = {
  title: "Services | Verluna — Agent Operations for European Enterprises",
  description:
    "Four ways to operationalize your agents. From a two-week diagnostic to ongoing managed operations. Audit, Build, Managed, or Architecture Consulting.",
  keywords: [
    "agent operations consulting",
    "GTM automation audit",
    "AI agent consulting Europe",
    "marketing operations automation DACH",
    "managed marketing operations",
    "agent architecture consulting",
  ],
  openGraph: {
    title: "Services | Verluna — Agent Operations",
    description:
      "Four ways to operationalize your agents. Audit, Build, Managed, or Architecture Consulting. EUR pricing. European enterprises.",
    url: "https://verluna.de/services",
  },
};

export default function ServicesPage() {
  return <ServicesOverviewContent />;
}
