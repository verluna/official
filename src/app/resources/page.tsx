import { Metadata } from "next";
import { ResourceList } from "@/components/convert/ResourceList";
import { resourcesCopy } from "@/data/copy/resources";

export const metadata: Metadata = {
  title: "Resources | Verluna",
  description:
    "Free GTM engineering resources: audit checklists, automation patterns, and readiness assessments.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-text">
            {resourcesCopy.pageHeading}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
            {resourcesCopy.pageSubheading}
          </p>
        </div>
      </section>
      <ResourceList />
    </>
  );
}
