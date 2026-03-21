"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { NewCaseStudy, categoryLabels, categoryColors } from "@/data/copy/newCaseStudies";
import { Badge, Button } from "@/components/ui";

interface CaseStudyDetailContentProps {
  study: NewCaseStudy;
  nextStudy: NewCaseStudy | null;
}

export function CaseStudyDetailContent({ study, nextStudy }: CaseStudyDetailContentProps) {
  const glowColor = categoryColors[study.category] || "green";

  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <Link
            href="/case-studies"
            className="font-mono text-sm text-steel-grey hover:text-terminal-green transition-colors"
          >
            <span className="text-terminal-green">$</span> cd ../case-studies
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Badge variant={glowColor}>{categoryLabels[study.category]}</Badge>
            <span className="font-mono text-sm text-steel-grey">
              {study.industry}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-off-white">
            {study.title}
          </h1>

          <p className="mt-4 text-lg text-steel-grey leading-relaxed">
            {study.headline}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {study.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded bg-surface-elevated text-steel-grey border border-surface-border"
              >
                {tech}
              </span>
            ))}
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-surface-elevated text-steel-grey border border-surface-border">
              {study.duration}
            </span>
          </div>
        </motion.div>

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-10 flex flex-wrap gap-8 py-6 border-y border-surface-border"
        >
          {study.metrics.map((metric, i) => (
            <div key={i}>
              <div className="text-2xl font-mono text-terminal-green">
                {metric.value}
              </div>
              <div className="text-xs text-steel-grey mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Client context */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h2 className="font-mono text-sm text-steel-grey uppercase tracking-wider mb-4">
            <span className="text-steel-grey/60">&gt;</span> The Client
          </h2>
          <p className="text-off-white leading-relaxed">{study.companyDescription}</p>
        </motion.section>

        {/* Challenge */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h2 className="font-mono text-sm text-red-400 uppercase tracking-wider mb-4">
            <span className="text-red-400/60">&gt;</span> The Challenge
          </h2>
          <p className="text-off-white leading-relaxed">{study.challenge}</p>
        </motion.section>

        {/* Solution */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h2 className="font-mono text-sm text-signal-blue uppercase tracking-wider mb-4">
            <span className="text-signal-blue/60">&gt;</span> The Approach
          </h2>
          <p className="text-off-white leading-relaxed">{study.solution}</p>
        </motion.section>

        {/* Methodology phases used */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <h3 className="font-mono text-sm text-electric-purple uppercase tracking-wider mb-4">
            <span className="text-electric-purple/60">&gt;</span> Methodology Phases Applied
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {study.phases.map((phase, i) => (
              <div
                key={i}
                className="p-4 rounded-lg border border-surface-border bg-surface/30"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs text-terminal-green">
                    0{i + 1}
                  </span>
                  <span className="text-sm font-semibold text-off-white">
                    {phase.name}
                  </span>
                </div>
                <p className="text-sm text-steel-grey leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Results */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h2 className="font-mono text-sm text-terminal-green uppercase tracking-wider mb-4">
            <span className="text-terminal-green/60">&gt;</span> The Results
          </h2>
          <p className="text-off-white leading-relaxed">{study.results}</p>
        </motion.section>

        {/* Results highlight box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-6 rounded-lg border border-terminal-green/20 bg-terminal-green/5"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {study.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-xl font-mono text-terminal-green">
                  {metric.value}
                </div>
                <div className="text-xs text-steel-grey mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl bg-surface/50 border border-surface-border text-center"
        >
          <h3 className="text-xl font-semibold tracking-tight mb-3">
            {study.cta}
          </h3>
          <p className="text-steel-grey mb-6">
            Tell us about your operations challenge. We will tell you exactly
            how agent operations can address it.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Discuss Your Use Case
          </Button>
        </motion.section>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex items-center justify-between"
        >
          <Button href="/case-studies" variant="secondary">
            All Case Studies
          </Button>
          {nextStudy && (
            <Button href={`/case-studies/${nextStudy.slug}`} variant="secondary">
              Next: {nextStudy.title.slice(0, 30)}
              {nextStudy.title.length > 30 ? "..." : ""}
            </Button>
          )}
        </motion.div>
      </div>
    </div>
  );
}
