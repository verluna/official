import { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About | Verluna - GTM Engineering",
  description:
    "Meet the team behind Verluna. Engineers who understand go-to-market. We build autonomous revenue engines using code, not configuration.",
  openGraph: {
    title: "About Verluna | GTM Engineering Team",
    description:
      "Engineers who understand go-to-market. We build autonomous revenue engines using code, not configuration.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="Engineers Who Understand Go-To-Market"
        description="We're not a marketing agency. We're engineers who apply software engineering principles to revenue operations because that's what modern GTM requires."
      />
      <AboutContent />
    </>
  );
}
