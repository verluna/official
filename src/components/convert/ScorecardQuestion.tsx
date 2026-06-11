"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ScorecardQuestion as ScorecardQuestionData } from "@/lib/scorecard-data";
import { cn } from "@/lib/utils";

interface ScorecardQuestionProps {
  question: ScorecardQuestionData;
  selectedValue: number | null;
  onSelect: (points: number) => void;
  direction: number; // 1 = forward, -1 = backward
}

const categoryLabels: Record<string, string> = {
  "operations-foundation": "Operations foundation",
  "ai-readiness": "AI readiness",
  "scale-indicators": "Scale indicators",
  "strategic-alignment": "Strategic alignment",
};

export function ScorecardQuestion({
  question,
  selectedValue,
  onSelect,
  direction,
}: ScorecardQuestionProps) {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={question.id}
        custom={direction}
        initial={{ opacity: 0, x: direction * 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: direction * -40 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <p className="mb-4 text-sm text-text-muted">
          {categoryLabels[question.category] || question.category}
        </p>

        <h2 className="mb-8 text-xl sm:text-2xl font-semibold leading-snug tracking-tight text-text">
          {question.text}
        </h2>

        <div className="space-y-3">
          {question.options.map((option, idx) => {
            const isSelected = selectedValue === option.points;
            return (
              <button
                key={idx}
                onClick={() => onSelect(option.points)}
                aria-pressed={isSelected}
                className={cn(
                  "w-full rounded-md border px-5 py-4 text-left transition-colors duration-200",
                  "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
                  isSelected
                    ? "border-accent bg-accent-soft text-text"
                    : "border-line bg-ink-raised text-text hover:border-line-strong hover:bg-ink-overlay"
                )}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex size-7 shrink-0 items-center justify-center rounded-md border text-xs font-medium transition-colors",
                      isSelected
                        ? "border-accent text-accent"
                        : "border-line-strong text-text-muted"
                    )}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-sm sm:text-base">{option.label}</span>
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
