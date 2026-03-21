"use client";

import { motion } from "framer-motion";

type AccentColor = "blue" | "green" | "purple" | "default";

interface Deliverable {
  title: string;
  description: string;
}

interface DeliverableGridProps {
  deliverables: Deliverable[];
  accentColor?: AccentColor;
  className?: string;
}

const accentMap: Record<AccentColor, string> = {
  blue: "text-signal-blue",
  green: "text-terminal-green",
  purple: "text-electric-purple",
  default: "text-terminal-green",
};

export function DeliverableGrid({
  deliverables,
  accentColor = "default",
  className = "",
}: DeliverableGridProps) {
  const checkColor = accentMap[accentColor];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      {deliverables.map((d, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          className="p-4 rounded-lg border border-surface-border bg-surface/30"
        >
          <div className="flex items-start gap-3">
            <svg
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${checkColor}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div>
              <h4 className="font-medium text-off-white text-sm">
                {d.title}
              </h4>
              <p className="text-xs text-steel-grey mt-1 leading-relaxed">
                {d.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
