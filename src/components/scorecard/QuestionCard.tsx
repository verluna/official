"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ScorecardQuestion } from "@/lib/scorecard-data";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: ScorecardQuestion;
  selectedValue: number | null;
  onSelect: (points: number) => void;
  direction: number; // 1 = forward, -1 = backward
}

export function QuestionCard({
  question,
  selectedValue,
  onSelect,
  direction,
}: QuestionCardProps) {
  const categoryLabels: Record<string, string> = {
    "operations-foundation": "Operations Foundation",
    "ai-readiness": "AI Readiness",
    "scale-indicators": "Scale Indicators",
    "strategic-alignment": "Strategic Alignment",
  };

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={question.id}
        custom={direction}
        initial={{ opacity: 0, x: direction * 60, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: direction * -60, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        {/* Category label */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 rounded font-mono text-xs bg-surface border border-surface-border text-steel-grey">
            {categoryLabels[question.category] || question.category}
          </span>
        </div>

        {/* Question */}
        <h2 className="text-xl sm:text-2xl font-semibold text-off-white leading-snug mb-8">
          {question.text}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, idx) => {
            const isSelected = selectedValue === option.points;
            return (
              <motion.button
                key={idx}
                onClick={() => onSelect(option.points)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={cn(
                  "w-full text-left px-5 py-4 rounded-lg border transition-all duration-200 font-medium",
                  "focus:outline-none focus:ring-2 focus:ring-terminal-green/50",
                  isSelected
                    ? "bg-terminal-green/10 border-terminal-green/50 text-terminal-green shadow-[0_0_20px_rgba(0,255,148,0.1)]"
                    : "bg-surface border-surface-border text-off-white hover:border-steel-grey/50 hover:bg-surface-hover"
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex items-center justify-center w-7 h-7 rounded-md font-mono text-xs border transition-all",
                      isSelected
                        ? "bg-terminal-green/20 border-terminal-green/40 text-terminal-green"
                        : "bg-surface-elevated border-surface-border text-steel-grey"
                    )}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-sm sm:text-base">{option.label}</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
