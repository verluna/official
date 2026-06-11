import { Metadata } from "next";
import { CaseStudyList } from "@/components/case-studies/CaseStudyList";

export const metadata: Metadata = {
  title: "Case Studies | Verluna - Agent Operations Results",
  description:
    "Real operations problems, engineered systems, measurable results. See how Verluna builds agent-powered operations for European enterprises.",
  openGraph: {
    title: "Case Studies | Verluna - Results, Not Promises",
    description:
      "From 4 hours to 90 seconds. From 3 days to 15 minutes. From zero scoring to three-score attribution. Real results from real systems.",
    type: "website",
  },
  alternates: {
    canonical: "https://verluna.de/case-studies",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudyList />;
}
