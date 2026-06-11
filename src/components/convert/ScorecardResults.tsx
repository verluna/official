"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";

interface CategoryScore {
  category: string;
  label: string;
  raw: number;
  max: number;
  normalized: number;
}

interface ScorecardResultsProps {
  score: number;
  tier: string;
  tierLabel: string;
  tierDescription: string;
  tierColor: "green" | "blue" | "purple"; // kept for API compatibility, single accent in v2
  categoryScores: CategoryScore[];
  recommendations: string[];
  cta: { label: string; href: string };
  reportUrl: string;
}

export function ScorecardResults({
  score,
  tierLabel,
  tierDescription,
  categoryScores,
  recommendations,
  cta,
  reportUrl,
}: ScorecardResultsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="w-full">
      {/* Score */}
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-6xl font-semibold tracking-tight text-text">
          {score}
        </span>
        <span className="font-mono text-xl text-text-muted">/100</span>
      </div>
      <p className="mt-3 text-lg font-medium text-accent">{tierLabel}</p>
      <p className="mt-4 max-w-prose text-sm leading-relaxed text-text-muted">
        {tierDescription}
      </p>

      {/* Category breakdown */}
      <div className="mt-10 rounded-lg border border-line bg-ink-raised p-6">
        <h3 className="text-sm font-medium text-text">Category breakdown</h3>
        <div className="mt-5 space-y-4">
          {categoryScores.map((cat, idx) => (
            <div key={cat.category}>
              <div className="mb-1.5 flex justify-between">
                <span className="text-sm text-text">{cat.label}</span>
                <span className="font-mono text-sm text-text">
                  {cat.normalized}
                  <span className="text-text-faint">/100</span>
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-overlay">
                <motion.div
                  className="h-full rounded-full bg-accent"
                  initial={reduceMotion ? false : { width: 0 }}
                  animate={{ width: `${cat.normalized}%` }}
                  transition={{
                    delay: 0.3 + idx * 0.1,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="mt-10">
        <h3 className="text-sm font-medium text-text">What to do next</h3>
        <ul className="mt-4 divide-y divide-line border-t border-line">
          {recommendations.map((rec, idx) => (
            <li key={idx} className="py-4">
              <p className="text-sm leading-relaxed text-text-muted">{rec}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* CTAs */}
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button variant="primary" size="lg" href={cta.href}>
          {cta.label}
        </Button>
        <a
          href={reportUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-line-strong bg-transparent px-6 py-3 text-base font-medium tracking-tight text-text transition-[background-color,border-color,color] duration-200 hover:border-text/40 hover:bg-ink-raised focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          Download the report (PDF)
        </a>
      </div>

      {/* Share */}
      <div className="mt-8 flex items-center gap-4 text-sm">
        <span className="text-text-faint">Share your score:</span>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://verluna.de/scorecard")}&title=${encodeURIComponent(`I scored ${score}/100 on the Agent Readiness Scorecard`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted underline underline-offset-4 transition-colors hover:text-text"
        >
          LinkedIn
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`I scored ${score}/100 on the Agent Readiness Scorecard by @verluna_de. How ready is your team for AI agents?`)}&url=${encodeURIComponent("https://verluna.de/scorecard")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted underline underline-offset-4 transition-colors hover:text-text"
        >
          X
        </a>
      </div>
    </div>
  );
}
