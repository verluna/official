"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge, BentoCard } from "@/components/ui";
import { buildLogs } from "@/data/buildLogs";

export function Repository() {
  return (
    <section id="repository" className="py-24 bg-charcoal/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-terminal-green font-mono">&gt;</span>
            <span className="text-sm font-mono text-steel-grey uppercase tracking-wider">
              The Repository
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter">
            Build Logs
          </h2>
          <p className="mt-4 text-steel-grey max-w-2xl">
            Real projects. Real results. Browse our commit history of successful
            GTM engineering implementations.
          </p>
        </motion.div>

        {/* Git-style header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6 p-4 rounded-lg border border-surface-border bg-surface/30 font-mono text-sm"
        >
          <div className="flex items-center gap-4 text-steel-grey">
            <span className="text-terminal-green">main</span>
            <span className="text-surface-border">|</span>
            <span>{buildLogs.length} commits</span>
            <span className="text-surface-border">|</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-terminal-green" />
              all systems operational
            </span>
          </div>
        </motion.div>

        {/* Build logs list */}
        <div className="space-y-4">
          {buildLogs.slice(0, 3).map((log, index) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/work#${log.id}`} className="block group">
                <BentoCard className="hover:border-terminal-green/50 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Left: Date & ID */}
                    <div className="lg:w-36 flex-shrink-0">
                      <span className="font-mono text-sm text-steel-grey">
                        {log.date}
                      </span>
                      <div className="mt-1 font-mono text-xs text-terminal-green/60">
                        {log.commitHash}
                      </div>
                      {log.industry && (
                        <div className="mt-2 text-xs text-steel-grey/70">
                          {log.industry}
                        </div>
                      )}
                      {log.duration && (
                        <div className="text-xs text-steel-grey/50">
                          {log.duration}
                        </div>
                      )}
                    </div>

                    {/* Middle: Content */}
                    <div className="flex-grow">
                      <h3 className="text-lg font-medium tracking-tight text-off-white group-hover:text-terminal-green transition-colors">
                        {log.title}
                      </h3>
                      <p className="mt-2 text-sm text-steel-grey leading-relaxed">
                        {log.description}
                      </p>

                      {/* Client Quote */}
                      {log.clientQuote && (
                        <blockquote className="mt-4 pl-3 border-l-2 border-terminal-green/30">
                          <p className="text-sm text-steel-grey/80 italic">
                            &ldquo;{log.clientQuote.text}&rdquo;
                          </p>
                          <cite className="mt-1 block text-xs text-steel-grey/60 not-italic">
                            — {log.clientQuote.author}, {log.clientQuote.role}
                          </cite>
                        </blockquote>
                      )}

                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {log.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant={tag.variant}>
                            {tag.label}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Right: Metrics */}
                    <div className="lg:w-48 flex-shrink-0 flex lg:flex-col gap-4 lg:gap-2">
                      {log.metrics.map((metric, metricIndex) => (
                        <div
                          key={metricIndex}
                          className="flex items-center gap-2 lg:justify-end"
                        >
                          <span className="text-xs text-steel-grey">
                            {metric.label}:
                          </span>
                          <span className="font-mono text-sm text-terminal-green">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </BentoCard>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-mono text-steel-grey hover:text-terminal-green transition-colors"
          >
            <span className="text-terminal-green">&gt;</span>
            View all {buildLogs.length} commits
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
