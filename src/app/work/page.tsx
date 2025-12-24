import { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { WorkContent } from "./WorkContent";

export const metadata: Metadata = {
  title: "Our Work | Verluna - Case Studies & Build Logs",
  description:
    "Browse our portfolio of GTM engineering projects. Real implementations, real results, real impact on revenue operations.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        label="The Repository"
        title="Build Logs"
        description="Real projects. Real results. Browse our commit history of successful GTM engineering implementations. Each entry represents a system we've built, optimized, or automated."
      />
      <WorkContent />
    </>
  );
}
