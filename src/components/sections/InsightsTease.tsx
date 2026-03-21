"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TerminalHeader, Badge, GlowCard, Button } from "@/components/ui";
import { SectionTransition, StaggeredList, StaggeredItem } from "@/components/ui";
import { containerWidth, sectionPadding, sectionHeading } from "@/lib/design-tokens";

const articles = [
  {
    tag: "Agent Architecture",
    title: "Why the Operating Layer Is the Most Valuable Thing to Build Right Now",
    excerpt:
      "Every company is buying AI tools. Almost none are designing the infrastructure between those tools and their business processes. That gap is where value lives.",
    date: "March 2026",
  },
  {
    tag: "EU Compliance",
    title: "EU AI Act Compliance for Agent Systems: What Your Engineering Team Needs to Know",
    excerpt:
      "Article 9 risk assessments, human oversight requirements, and audit trail obligations. A practical guide for companies deploying autonomous agents in Europe.",
    date: "March 2026",
  },
  {
    tag: "Methodology",
    title: "From Observation to Autonomy: How We Turn Manual Operations into Agent-Powered Systems",
    excerpt:
      "A detailed walkthrough of the six-phase methodology using a real engagement. From watching someone do XLOOKUP to shipping a production Kubernetes deployment.",
    date: "April 2026",
  },
];

export function InsightsTease() {
  const [email, setEmail] = useState("");

  return (
    <section id="insights" className={sectionPadding}>
      <div className={containerWidth}>
        <TerminalHeader>Stay Current</TerminalHeader>

        <SectionTransition>
          <h2 className={`${sectionHeading} max-w-xl mt-4 mb-10`}>
            The Agent Operations Briefing.
          </h2>
        </SectionTransition>

        {/* Articles grid */}
        <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {articles.map((a, i) => (
            <StaggeredItem key={i}>
              <GlowCard glowColor="green" hover={true} className="h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="default">{a.tag}</Badge>
                    <span className="font-mono text-xs text-steel-grey">
                      {a.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-off-white mb-3 leading-snug">
                    {a.title}
                  </h3>
                  <p className="text-sm text-steel-grey leading-relaxed flex-1 mb-4">
                    {a.excerpt}
                  </p>
                  <span className="text-sm text-terminal-green font-medium flex items-center gap-1 cursor-pointer hover:gap-2 transition-all">
                    Read article
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </div>
              </GlowCard>
            </StaggeredItem>
          ))}
        </StaggeredList>

        {/* Newsletter signup */}
        <SectionTransition delay={0.2}>
          <div className="bg-surface border border-surface-border rounded-xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-off-white mb-2 text-center">
              The Agent Operations Briefing
            </h3>
            <p className="text-steel-grey text-center mb-6">
              Every two weeks: one actionable insight on AI agent
              infrastructure, governance patterns, and European compliance.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-charcoal border border-surface-border rounded-lg px-4 py-3 text-off-white placeholder:text-steel-grey/50 font-mono text-sm focus:outline-none focus:border-terminal-green transition-colors"
              />
              <Button
                variant="primary"
                className="bg-terminal-green text-void hover:bg-terminal-green/90 font-semibold whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-steel-grey/60 text-center mt-3">
              No spam. Unsubscribe anytime. GDPR compliant.
            </p>
          </div>
        </SectionTransition>
      </div>
    </section>
  );
}
