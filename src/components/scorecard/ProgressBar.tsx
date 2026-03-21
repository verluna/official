"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-xs text-steel-grey">
          {current + 1} of {total}
        </span>
        <span className="font-mono text-xs text-steel-grey">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="w-full h-1 bg-surface-border rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-terminal-green rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            boxShadow: "0 0 12px rgba(0, 255, 148, 0.4)",
          }}
        />
      </div>
    </div>
  );
}
