import {
  HeroNew,
  ProblemStatement,
  HowWeSolveIt,
  MethodologyInteractive,
  ServicesGrid,
  EuropeanDifferentiator,
  SocialProof,
  CaseStudyFeature,
  ScorecardCTA,
  InsightsTease,
  FounderAbout,
  FinalCTA,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      {/* 1. Hero — above the fold */}
      <HeroNew />

      {/* 2. Problem Statement — pain awareness */}
      <ProblemStatement />

      {/* 3. How We Solve It — operating layer pillars */}
      <HowWeSolveIt />

      {/* 4. Methodology — interactive 6-phase framework */}
      <MethodologyInteractive />

      {/* 5. Services — four tiers with pricing */}
      <ServicesGrid />

      {/* 6. European Differentiator — EU AI Act, GDPR, Berlin */}
      <EuropeanDifferentiator />

      {/* 7. Social Proof — animated metrics + evidence */}
      <SocialProof />

      {/* 8. Case Study Feature — before/after comparison */}
      <CaseStudyFeature />

      {/* 9. Scorecard CTA — lead capture with terminal preview */}
      <ScorecardCTA />

      {/* 10. Insights — blog tease + newsletter signup */}
      <InsightsTease />

      {/* 11. Founder About — practitioner story + credentials */}
      <FounderAbout />

      {/* 12. Final CTA — conversion close */}
      <FinalCTA />
    </>
  );
}
