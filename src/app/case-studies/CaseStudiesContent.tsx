"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { caseStudies, CaseStudy } from "@/data/copy/caseStudies";
import { BentoCard, Badge, Button, InlineFilterBar } from "@/components/ui";
import { trackColors, TrackKey } from "@/lib/design-tokens";

const trackLabels: Record<TrackKey, string> = {
  audit: "Audit",
  ops: "Ops",
  agents: "Agents",
};

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const track = trackColors[study.trackAlignment];

  return (
    <Link href={`/case-studies/${study.id}`} className="block">
      <BentoCard hover glowColor={track.badge}>
        <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6">
          <div className="lg:w-28 flex-shrink-0 flex lg:flex-col gap-2 lg:gap-1">
            <span className="font-mono text-sm text-steel-grey">
              {study.date}
            </span>
            <span className="font-mono text-xs text-terminal-green/60">
              #{study.commitHash}
            </span>
          </div>

          <div className="flex-grow">
            <h3 className="text-lg font-medium tracking-tight text-off-white">
              {study.title}
            </h3>
            <p className="mt-1 text-sm text-steel-grey">
              {study.client.industry} &middot; {study.client.size}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {study.tags.map((tag, i) => (
                <Badge key={i} variant={tag.variant}>
                  {tag.label}
                </Badge>
              ))}
              <Badge>{study.duration}</Badge>
            </div>
          </div>

          <div className="lg:w-44 flex-shrink-0 flex lg:flex-col gap-3 lg:gap-1">
            {study.metrics.slice(0, 2).map((metric, i) => (
              <div
                key={i}
                className="flex items-center gap-2 lg:justify-end text-sm"
              >
                <span className="text-steel-grey">{metric.label}:</span>
                <span className="font-mono text-terminal-green">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </BentoCard>
    </Link>
  );
}

export function CaseStudiesContent() {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

  const filtered = selectedTrack
    ? caseStudies.filter((cs) => cs.trackAlignment === selectedTrack)
    : caseStudies;

  const featured = filtered[0];
  const rest = filtered.slice(1);
  const track = featured ? trackColors[featured.trackAlignment] : trackColors.ops;

  return (
    <div className="pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filter */}
        <InlineFilterBar
          tags={Object.keys(trackLabels)}
          selectedTag={selectedTrack}
          onSelectTag={setSelectedTrack}
          className="mb-8"
        />

        {/* Featured case study */}
        {featured && (
          <motion.div
            key={featured.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link href={`/case-studies/${featured.id}`} className="block">
              <BentoCard hover glowColor={track.badge} className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-terminal-green/60">
                    #{featured.commitHash}
                  </span>
                  <span className="font-mono text-sm text-steel-grey">
                    {featured.date}
                  </span>
                  <Badge variant={track.badge}>
                    {trackLabels[featured.trackAlignment]}
                  </Badge>
                </div>

                <h2 className="text-2xl font-semibold tracking-tight text-off-white mb-2">
                  {featured.title}
                </h2>
                <p className="text-sm text-steel-grey mb-6">
                  {featured.client.industry} &middot; {featured.client.size}
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-2">
                      Problem
                    </h4>
                    <p className="text-sm text-steel-grey leading-relaxed line-clamp-3">
                      {featured.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-mono text-signal-blue uppercase tracking-wider mb-2">
                      Solution
                    </h4>
                    <p className="text-sm text-steel-grey leading-relaxed line-clamp-3">
                      {featured.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-mono text-terminal-green uppercase tracking-wider mb-2">
                      Results
                    </h4>
                    <p className="text-sm text-steel-grey leading-relaxed line-clamp-3">
                      {featured.results}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 pt-4 border-t border-surface-border">
                  {featured.metrics.map((metric, i) => (
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
              </BentoCard>
            </Link>
          </motion.div>
        )}

        {/* Remaining case studies grid */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {rest.map((study, index) => (
              <motion.div
                key={study.id}
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-steel-grey mb-4">
            Want to see your project in this repository?
          </p>
          <Button href="/contact">Start Your Build</Button>
        </motion.div>
      </div>
    </div>
  );
}
