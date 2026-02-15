import { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { ResourcesContent } from "./ResourcesContent";

export const metadata: Metadata = {
  title: "Resources | Verluna",
  description:
    "Free GTM engineering resources — audit checklists, automation patterns, and readiness assessments.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="Resources"
        description="Free tools to assess and improve your GTM operations."
      />
      <ResourcesContent />
    </>
  );
}
