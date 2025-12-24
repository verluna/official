import { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { InsightsContent } from "./InsightsContent";
import {
  getAllPosts,
  getCategoriesWithCount,
  getTagsWithCount,
} from "@/lib/blog/posts";

export const metadata: Metadata = {
  title: "Insights | Verluna - GTM Engineering Blog",
  description:
    "Explore insights on GTM Engineering, AI Agents, Automation, and Revenue Operations. Technical deep-dives and case studies from the Verluna team.",
  openGraph: {
    title: "Insights | Verluna - GTM Engineering Blog",
    description:
      "Technical insights on GTM Engineering, AI Agents, and Automation.",
    type: "website",
  },
};

export default function InsightsPage() {
  const posts = getAllPosts();
  const categories = getCategoriesWithCount();
  const tags = getTagsWithCount();

  return (
    <>
      <PageHeader
        label="Insights"
        title="Engineering Knowledge Base"
        description="Technical deep-dives, case studies, and insights on GTM Engineering, AI Agents, and Revenue Operations. We share what we learn building autonomous revenue engines."
      />
      <InsightsContent
        initialPosts={posts}
        categories={categories}
        tags={tags}
      />
    </>
  );
}
