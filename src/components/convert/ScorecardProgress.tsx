"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ScorecardProgressProps {
  current: number;
  total: number;
}

export function ScorecardProgress({ current, total }: ScorecardProgressProps) {
  const reduceMotion = useReducedMotion();
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between font-mono text-xs text-text-muted">
        <span>
          {current + 1} of {total}
        </span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-ink-overlay">
        <motion.div
          className="h-full rounded-full bg-accent"
          initial={reduceMotion ? false : { width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}
