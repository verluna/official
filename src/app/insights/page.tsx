import { Metadata } from "next";
import { InsightsContent } from "./InsightsContent";
import { InsightsHero } from "./InsightsHero";
import { NewsletterSignup } from "@/components/insights";
import { getAllPosts, getCategoriesWithCount } from "@/lib/blog/posts";

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
    canonical: "https://verluna.de/insights",
  },
};

export default function InsightsPage() {
  const posts = getAllPosts();
  const categories = getCategoriesWithCount();

  return (
    <>
      <InsightsHero />
      <InsightsContent posts={posts} categories={categories} />
      <NewsletterSignup />
    </>
  );
}
