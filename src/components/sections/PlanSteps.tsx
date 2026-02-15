"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge, GlowCard } from "@/components/ui";
import { homeCopy } from "@/data/copy/home";
import { trackColors } from "@/lib/design-tokens";
import {
  sectionPadding,
  containerWidth,
  sectionHeading,
  sectionSubheading,
} from "@/lib/design-tokens";

const trackMap = {
  blue: "audit",
  green: "ops",
  purple: "agents",
} as const;

export function PlanSteps() {
  const { planSteps } = homeCopy;

  return (
    <section className={`${sectionPadding} border-t border-surface-border`}>
      <div className={containerWidth}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-terminal-green font-mono">&gt;</span>
          <span className="text-sm font-mono text-steel-grey uppercase tracking-wider">
            {planSteps.sectionLabel}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${sectionHeading} mb-4`}
        >
          {planSteps.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`${sectionSubheading} mb-12`}
        >
          {planSteps.subheading}
        </motion.p>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {planSteps.steps.map((step) => {
            const track = trackColors[trackMap[step.color]];

            return (
              <GlowCard
                key={step.number}
                glowColor={step.color}
                delay={step.number * 0.1}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant={track.badge}>
                      {String(step.number).padStart(2, "0")}
                    </Badge>
                    <h3 className={`text-lg font-semibold ${track.text}`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-steel-grey text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <Link
                    href={step.href}
                    className={`text-sm font-mono ${track.text} hover:underline`}
                  >
                    Learn more &rarr;
                  </Link>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
