import { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { InsightsContent } from "./InsightsContent";
import {
  getAllPosts,
  getCategoriesWithCount,
  getTagsWithCount,
} from "@/lib/blog/posts";
import { InsightsHero } from "./InsightsHero";

export const metadata: Metadata = {
  title: "Insights | Verluna - Agent Operations Knowledge",
  description:
    "Patterns, frameworks, and operational intelligence on agent operations, GTM engineering, and AI-native systems for European enterprises.",
  openGraph: {
    title: "Insights | Verluna - Agent Operations Knowledge",
    description:
      "Patterns from real engagements, architectural decisions, and frameworks for agent-powered operations.",
    type: "website",
  },
  alternates: {
    canonical: "https://verluna.com/insights",
  },
};

export default function InsightsPage() {
  const posts = getAllPosts();
  const categories = getCategoriesWithCount();
  const tags = getTagsWithCount();

  return (
    <>
      <InsightsHero />
      <InsightsContent
        initialPosts={posts}
        categories={categories}
        tags={tags}
      />
    </>
  );
}
