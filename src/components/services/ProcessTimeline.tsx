"use client";

import { motion } from "framer-motion";
import { BentoCard } from "@/components/ui";

type AccentColor = "blue" | "green" | "purple" | "default";

interface ProcessStep {
  title: string;
  duration: string;
  description: string;
  details?: string[];
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  accentColor?: AccentColor;
  className?: string;
}

const accentMap: Record<AccentColor, { text: string; bg: string; border: string; ring: string }> = {
  blue: {
    text: "text-signal-blue",
    bg: "bg-signal-blue/10",
    border: "border-signal-blue/30",
    ring: "ring-signal-blue/20",
  },
  green: {
    text: "text-terminal-green",
    bg: "bg-terminal-green/10",
    border: "border-terminal-green/30",
    ring: "ring-terminal-green/20",
  },
  purple: {
    text: "text-electric-purple",
    bg: "bg-electric-purple/10",
    border: "border-electric-purple/30",
    ring: "ring-electric-purple/20",
  },
  default: {
    text: "text-steel-grey",
    bg: "bg-surface",
    border: "border-surface-border",
    ring: "ring-surface-border",
  },
};

export function ProcessTimeline({
  steps,
  accentColor = "default",
  className = "",
}: ProcessTimelineProps) {
  const accent = accentMap[accentColor];

  return (
    <div className={`relative ${className}`}>
      {/* Vertical connecting line */}
      <div className={`absolute left-6 top-0 bottom-0 w-px ${accent.border} hidden md:block`} />

      <div className="space-y-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative"
          >
            <div className="flex gap-6 items-start">
              {/* Step number */}
              <div
                className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-mono text-sm font-medium ${accent.bg} ${accent.text} border ${accent.border}`}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <BentoCard hover={false} className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-lg font-semibold text-off-white">
                    {step.title}
                  </h3>
                  <span className={`text-xs font-mono ${accent.text}`}>
                    {step.duration}
                  </span>
                </div>
                <p className="text-steel-grey leading-relaxed">
                  {step.description}
                </p>
                {step.details && step.details.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {step.details.map((detail, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-steel-grey"
                      >
                        <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${accent.bg} ${accent.text}`} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </BentoCard>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
