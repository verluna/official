"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CaseStudy } from "@/data/copy/caseStudies";
import { Badge, Button } from "@/components/ui";
import { trackColors } from "@/lib/design-tokens";

interface CaseStudyDetailProps {
  study: CaseStudy;
  nextStudy: CaseStudy | null;
}

export function CaseStudyDetail({ study, nextStudy }: CaseStudyDetailProps) {
  const track = trackColors[study.trackAlignment];

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
            <span className="font-mono text-xs text-terminal-green/60">
              #{study.commitHash}
            </span>
            <span className="font-mono text-sm text-steel-grey">
              {study.date}
            </span>
            <Badge variant={track.badge}>{study.trackAlignment}</Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-off-white">
            {study.title}
          </h1>

          <p className="mt-3 text-steel-grey">
            {study.client.industry} &middot; {study.client.size} &middot;{" "}
            {study.duration}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {study.tags.map((tag, i) => (
              <Badge key={i} variant={tag.variant}>
                {tag.label}
              </Badge>
            ))}
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

        {/* Problem */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h2 className="font-mono text-sm text-red-400 uppercase tracking-wider mb-4">
            <span className="text-red-400/60">&gt;</span> The Problem
          </h2>
          <p className="text-off-white leading-relaxed">{study.problem}</p>
        </motion.section>

        {/* Failure stakes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 p-6 rounded-lg border border-red-400/20 bg-red-400/5"
        >
          <h3 className="font-mono text-sm text-red-400 uppercase tracking-wider mb-3">
            What Was at Stake
          </h3>
          <p className="text-steel-grey leading-relaxed">
            {study.failureStakes}
          </p>
        </motion.section>

        {/* Solution */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h2 className="font-mono text-sm text-signal-blue uppercase tracking-wider mb-4">
            <span className="text-signal-blue/60">&gt;</span> The Solution
          </h2>
          <p className="text-off-white leading-relaxed">{study.solution}</p>
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

        {/* Success outcome */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 p-6 rounded-lg border border-terminal-green/20 bg-terminal-green/5"
        >
          <h3 className="font-mono text-sm text-terminal-green uppercase tracking-wider mb-3">
            The Outcome
          </h3>
          <p className="text-steel-grey leading-relaxed">
            {study.successOutcome}
          </p>
        </motion.section>

        {/* Testimonial */}
        {study.testimonial && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 py-8 border-y border-surface-border"
          >
            <blockquote className="relative">
              <span className="absolute -top-3 -left-2 text-5xl text-terminal-green/20">
                &ldquo;
              </span>
              <p className="text-lg text-off-white italic pl-8 leading-relaxed">
                {study.testimonial.quote}
              </p>
              <footer className="mt-4 pl-8 text-sm text-steel-grey">
                &mdash; {study.testimonial.author}, {study.testimonial.role}
              </footer>
            </blockquote>
          </motion.section>
        )}

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex items-center justify-between"
        >
          <Button href="/case-studies" variant="secondary">
            &larr; All Case Studies
          </Button>
          {nextStudy && (
            <Button href={`/case-studies/${nextStudy.id}`} variant="secondary">
              Next: {nextStudy.title.slice(0, 30)}
              {nextStudy.title.length > 30 ? "..." : ""} &rarr;
            </Button>
          )}
        </motion.div>
      </div>
    </div>
  );
}
