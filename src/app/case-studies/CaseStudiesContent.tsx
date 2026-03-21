"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { newCaseStudies, categoryLabels, categoryColors, NewCaseStudy } from "@/data/copy/newCaseStudies";
import { GlowCard, Badge, Button } from "@/components/ui";

const categories = ["all", "automation", "intelligence", "localization"] as const;

function CaseStudyCard({ study, featured = false }: { study: NewCaseStudy; featured?: boolean }) {
  const glowColor = categoryColors[study.category] || "green";

  if (featured) {
    return (
      <Link href={`/case-studies/${study.slug}`} className="block">
        <GlowCard glowColor={glowColor} className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant={glowColor}>{categoryLabels[study.category]}</Badge>
            <span className="font-mono text-sm text-steel-grey">{study.industry}</span>
            <span className="font-mono text-xs text-steel-grey">{study.duration}</span>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-off-white mb-2">
            {study.title}
          </h2>
          <p className="text-steel-grey leading-relaxed mb-6 max-w-3xl">
            {study.headline}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-2">
                Challenge
              </h4>
              <p className="text-sm text-steel-grey leading-relaxed line-clamp-3">
                {study.challenge.slice(0, 200)}...
              </p>
            </div>
            <div>
              <h4 className="text-sm font-mono text-signal-blue uppercase tracking-wider mb-2">
                Approach
              </h4>
              <p className="text-sm text-steel-grey leading-relaxed line-clamp-3">
                {study.solution.slice(0, 200)}...
              </p>
            </div>
            <div>
              <h4 className="text-sm font-mono text-terminal-green uppercase tracking-wider mb-2">
                Results
              </h4>
              <p className="text-sm text-steel-grey leading-relaxed line-clamp-3">
                {study.results.slice(0, 200)}...
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 pt-4 border-t border-surface-border">
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
        </GlowCard>
      </Link>
    );
  }

  return (
    <Link href={`/case-studies/${study.slug}`} className="block">
      <GlowCard glowColor={glowColor}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <Badge variant={glowColor}>{categoryLabels[study.category]}</Badge>
            <span className="font-mono text-xs text-steel-grey">{study.industry}</span>
          </div>

          <h3 className="text-lg font-semibold tracking-tight text-off-white mb-2">
            {study.title}
          </h3>
          <p className="text-sm text-steel-grey leading-relaxed mb-4 line-clamp-2">
            {study.headline}
          </p>

          <div className="flex flex-wrap gap-4">
            {study.metrics.slice(0, 3).map((metric, i) => (
              <div key={i}>
                <span className="font-mono text-sm text-terminal-green">{metric.value}</span>
                <span className="text-xs text-steel-grey ml-2">{metric.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {study.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2 py-0.5 rounded bg-surface-elevated text-steel-grey border border-surface-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </GlowCard>
    </Link>
  );
}

export function CaseStudiesContent() {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all"
    ? newCaseStudies
    : newCaseStudies.filter((cs) => cs.category === filter);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-terminal-green font-mono">&gt;</span>
            <span className="text-sm font-mono text-steel-grey uppercase tracking-wider">
              Case Studies
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tighter">
            Results, Not Promises
          </h1>
          <p className="mt-6 text-lg text-steel-grey leading-relaxed">
            Every case study follows the same structure: the operation before,
            the architectural decisions, the implementation, and the measurable
            results after. We show the architecture, not just the outcome. We
            name the tradeoffs, not just the wins.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm font-mono rounded border transition-colors ${
                filter === cat
                  ? "border-terminal-green text-terminal-green bg-terminal-green/10"
                  : "border-surface-border text-steel-grey hover:text-off-white hover:border-surface-border"
              }`}
            >
              {cat === "all" ? "All" : categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Featured */}
        {featured && (
          <motion.div
            key={featured.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <CaseStudyCard study={featured} featured />
          </motion.div>
        )}

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {rest.map((study, index) => (
              <motion.div
                key={study.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
              >
                <CaseStudyCard study={study} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Aggregate metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl bg-surface/50 border border-surface-border"
        >
          <h3 className="font-mono text-xs text-steel-grey uppercase tracking-widest mb-6">
            <span className="text-terminal-green">&gt;</span> Aggregate Results
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-mono text-terminal-green">99.2%</div>
              <div className="text-sm text-steel-grey mt-1">Highest match accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-mono text-terminal-green">12</div>
              <div className="text-sm text-steel-grey mt-1">Languages automated simultaneously</div>
            </div>
            <div>
              <div className="text-2xl font-mono text-terminal-green">EUR 0</div>
              <div className="text-sm text-steel-grey mt-1">Additional software cost (intelligence system)</div>
            </div>
            <div>
              <div className="text-2xl font-mono text-terminal-green">90 sec</div>
              <div className="text-sm text-steel-grey mt-1">Fastest processing (from 4 hours)</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-steel-grey mb-4">
            See how agent operations applies to your specific challenge.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Discuss Your Use Case
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
