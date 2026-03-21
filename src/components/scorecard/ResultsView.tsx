"use client";

import { motion } from "framer-motion";
import { ScoreRing } from "./ScoreRing";
import { cn } from "@/lib/utils";

interface CategoryScore {
  category: string;
  label: string;
  raw: number;
  max: number;
  normalized: number;
}

interface ResultsViewProps {
  score: number;
  tier: string;
  tierLabel: string;
  tierDescription: string;
  tierColor: "green" | "blue" | "purple";
  categoryScores: CategoryScore[];
  recommendations: string[];
  cta: { label: string; href: string };
  reportUrl: string;
}

const colorStyles = {
  green: {
    badge: "bg-terminal-green/10 text-terminal-green border-terminal-green/20",
    bar: "bg-terminal-green",
    border: "border-terminal-green",
    text: "text-terminal-green",
    glow: "shadow-[0_0_20px_rgba(0,255,148,0.15)]",
  },
  blue: {
    badge: "bg-signal-blue/10 text-signal-blue border-signal-blue/20",
    bar: "bg-signal-blue",
    border: "border-signal-blue",
    text: "text-signal-blue",
    glow: "shadow-[0_0_20px_rgba(59,130,246,0.15)]",
  },
  purple: {
    badge: "bg-electric-purple/10 text-electric-purple border-electric-purple/20",
    bar: "bg-electric-purple",
    border: "border-electric-purple",
    text: "text-electric-purple",
    glow: "shadow-[0_0_20px_rgba(124,58,237,0.15)]",
  },
};

export function ResultsView({
  score,
  tierLabel,
  tierDescription,
  tierColor,
  categoryScores,
  recommendations,
  cta,
  reportUrl,
}: ResultsViewProps) {
  const styles = colorStyles[tierColor];

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Score Ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center mb-8"
      >
        <ScoreRing score={score} color={tierColor} />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="mt-4"
        >
          <span
            className={cn(
              "inline-block px-4 py-1.5 rounded-md font-mono text-sm border",
              styles.badge
            )}
          >
            {tierLabel}
          </span>
        </motion.div>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.4 }}
        className="text-steel-grey text-center text-sm leading-relaxed mb-10 max-w-lg mx-auto"
      >
        {tierDescription}
      </motion.p>

      {/* Category Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className={cn(
          "bg-surface border border-surface-border rounded-xl p-6 mb-8",
          styles.glow
        )}
      >
        <h3 className="font-mono text-xs text-steel-grey uppercase tracking-wider mb-5">
          Category Breakdown
        </h3>
        <div className="space-y-4">
          {categoryScores.map((cat, idx) => (
            <div key={cat.category}>
              <div className="flex justify-between mb-1.5">
                <span className="text-sm text-off-white">{cat.label}</span>
                <span className={cn("font-mono text-sm", styles.text)}>
                  {cat.normalized}
                  <span className="text-steel-grey/60">/100</span>
                </span>
              </div>
              <div className="w-full h-1.5 bg-surface-border rounded-full overflow-hidden">
                <motion.div
                  className={cn("h-full rounded-full", styles.bar)}
                  initial={{ width: 0 }}
                  animate={{ width: `${cat.normalized}%` }}
                  transition={{
                    delay: 1.4 + idx * 0.15,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="mb-10"
      >
        <h3 className="font-mono text-xs text-steel-grey uppercase tracking-wider mb-5">
          Your Recommendations
        </h3>
        <div className="space-y-4">
          {recommendations.map((rec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 + idx * 0.2, duration: 0.4 }}
              className={cn(
                "pl-4 py-3 border-l-2 bg-surface/50 rounded-r-lg",
                styles.border
              )}
            >
              <span className={cn("font-mono text-xs block mb-1", styles.text)}>
                {idx + 1}.
              </span>
              <p className="text-sm text-steel-grey leading-relaxed">{rec}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.6, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-3 justify-center"
      >
        <motion.a
          href={cta.href}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center px-8 py-3.5 bg-off-white text-void font-semibold text-sm rounded-lg hover:bg-terminal-green transition-colors"
        >
          {cta.label}
        </motion.a>
        <motion.a
          href={reportUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent text-off-white font-medium text-sm rounded-lg border border-surface-border hover:border-terminal-green/50 hover:text-terminal-green transition-all"
        >
          Download Report (PDF)
        </motion.a>
      </motion.div>

      {/* Share Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.4 }}
        className="flex justify-center gap-3 mt-8"
      >
        <span className="text-xs text-steel-grey font-mono mr-2 self-center">
          Share:
        </span>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://verluna.com/scorecard")}&title=${encodeURIComponent(`I scored ${score}/100 on the Agent Readiness Scorecard`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 text-xs font-mono border border-surface-border rounded hover:border-signal-blue/50 hover:text-signal-blue text-steel-grey transition-all"
        >
          LinkedIn
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`I scored ${score}/100 on the Agent Readiness Scorecard by @verluna_de. How ready is your team for AI agents?`)}&url=${encodeURIComponent("https://verluna.com/scorecard")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 text-xs font-mono border border-surface-border rounded hover:border-steel-grey/50 hover:text-off-white text-steel-grey transition-all"
        >
          X / Twitter
        </a>
      </motion.div>
    </div>
  );
}
