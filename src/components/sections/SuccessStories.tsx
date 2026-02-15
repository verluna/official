"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SpotlightCard } from "@/components/ui";
import { homeCopy } from "@/data/copy/home";
import {
  sectionPadding,
  containerWidth,
  sectionHeading,
} from "@/lib/design-tokens";

export function SuccessStories() {
  const { successStories } = homeCopy;

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
          <span className="text-sm font-mono text-steel-grey uppercase tracking-wider">
            {successStories.sectionLabel}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${sectionHeading} mb-12`}
        >
          {successStories.heading}
        </motion.h2>

        {/* Stories grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {successStories.stories.map((story, index) => (
            <Link
              key={story.caseStudyId}
              href={`/case-studies#${story.caseStudyId}`}
            >
              <SpotlightCard
                glowColor="green"
                delay={index * 0.1}
              >
                <div className="p-6">
                  <span className="text-xs font-mono text-steel-grey uppercase tracking-wider">
                    {story.industry}
                  </span>
                  <div className="text-2xl font-mono text-terminal-green mt-2 mb-3">
                    {story.metric}
                  </div>
                  <p className="text-sm text-steel-grey leading-relaxed">
                    {story.result}
                  </p>
                </div>
              </SpotlightCard>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <Link
            href="/case-studies"
            className="text-sm font-mono text-terminal-green hover:underline"
          >
            View all case studies &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
