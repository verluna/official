"use client";

import { motion } from "framer-motion";
import { BentoCard } from "@/components/ui";
import { homeCopy } from "@/data/copy/home";
import {
  sectionPadding,
  containerWidth,
  sectionHeading,
  sectionSubheading,
} from "@/lib/design-tokens";

export function GuideIntro() {
  const { guideIntro } = homeCopy;

  return (
    <section className={sectionPadding}>
      <div className={containerWidth}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-terminal-green font-mono">&gt;</span>
          <span className="text-sm text-steel-grey uppercase tracking-wider">
            {guideIntro.sectionLabel}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${sectionHeading} mb-12`}
        >
          {guideIntro.heading}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Empathy + Authority */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${sectionSubheading} leading-relaxed`}
            >
              {guideIntro.empathy}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-off-white leading-relaxed"
            >
              {guideIntro.authority}
            </motion.p>
          </div>

          {/* Right: Metrics grid */}
          <div className="grid grid-cols-2 gap-4">
            {guideIntro.metrics.map((metric, index) => (
              <BentoCard
                key={metric.label}
                glowColor="green"
                hover={false}
              >
                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-3xl font-mono text-terminal-green mb-1"
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-sm text-steel-grey">
                    {metric.label}
                  </div>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
