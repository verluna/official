import { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { CaseStudiesContent } from "./CaseStudiesContent";

export const metadata: Metadata = {
  title: "Case Studies | Verluna",
  description:
    "See how we've helped B2B companies automate their GTM operations and grow pipeline.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        title="Case Studies"
        description="Real problems. Engineered solutions. Measurable results."
      />
      <CaseStudiesContent />
    </>
  );
}
