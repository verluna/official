import {
  HeroSB7,
  TrustBar,
  ProblemSolution,
  GuideIntro,
  PlanSteps,
  SuccessStories,
  LatestInsights,
  CTASection,
} from "@/components/sections";
import { getFeaturedPosts } from "@/lib/blog/posts";

export default function Home() {
  const featuredPosts = getFeaturedPosts();

  return (
    <>
      <HeroSB7 />
      <TrustBar />
      <ProblemSolution />
      <GuideIntro />
      <PlanSteps />
      <SuccessStories />
      <LatestInsights posts={featuredPosts} />
      <CTASection />
    </>
  );
}
