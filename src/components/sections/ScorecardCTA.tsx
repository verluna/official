"use client";

import { motion } from "framer-motion";
import { TerminalHeader, Button } from "@/components/ui";
import { SectionTransition } from "@/components/ui";
import { containerWidth, sectionPadding, sectionHeading } from "@/lib/design-tokens";

export function ScorecardCTA() {
  return (
    <section id="scorecard" className={`${sectionPadding} bg-charcoal`}>
      <div className={containerWidth}>
        <TerminalHeader>Diagnostic</TerminalHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-6">
          {/* Left: Copy */}
          <SectionTransition>
            <div>
              <h2 className={`${sectionHeading} mb-4`}>
                How Ready Is Your Organization for Agent Operations?
              </h2>
              <p className="text-steel-grey text-lg leading-relaxed mb-4">
                Take the Verluna Agent Operations Scorecard. 12 questions. 5
                minutes. You get a benchmark score across four dimensions: Agent
                Governance, Infrastructure Readiness, Team & Skills, and
                Compliance & Security.
              </p>
              <p className="text-steel-grey leading-relaxed mb-4">
                Plus a one-page recommendation on where to start.
              </p>
              <p className="text-sm text-steel-grey/70 mb-8">
                No sales call required. No email sequence. Just the score and
                the recommendation.
              </p>
              <Button
                variant="primary"
                size="lg"
                href="/scorecard"
                className="bg-terminal-green text-void hover:bg-terminal-green/90 font-semibold"
              >
                Take the Free Assessment (5 minutes)
                <svg
                  className="w-4 h-4"
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
              </Button>
            </div>
          </SectionTransition>

          {/* Right: Terminal-styled preview */}
          <SectionTransition delay={0.2}>
            <div className="bg-charcoal border border-surface-border rounded-xl overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-surface-border">
                <span className="w-2.5 h-2.5 rounded-full bg-error-red" />
                <span className="w-2.5 h-2.5 rounded-full bg-warning-amber" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
                <span className="font-mono text-xs text-steel-grey ml-2">
                  verluna-scorecard v1.0
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-6 font-mono text-sm leading-[2]">
                <div className="text-steel-grey">
                  <span className="text-terminal-green">$</span> verluna
                  assess --org &quot;your-company&quot;
                </div>
                <div className="text-steel-grey mt-4">
                  <span className="text-terminal-green">?</span>{" "}
                  <span className="text-off-white">
                    Agent Governance (Q1/3)
                  </span>
                </div>
                <div className="text-steel-grey">
                  How are AI agent decisions currently governed in your
                  organization?
                </div>
                <div className="mt-3 space-y-1">
                  <div className="text-steel-grey/50">
                    {"  "}(a) No formal governance
                  </div>
                  <div className="text-steel-grey/50">
                    {"  "}(b) Informal team agreements
                  </div>
                  <div className="text-off-white">
                    {"  "}
                    <span className="text-terminal-green">{">"}</span> (c)
                    Documented policies per use case
                  </div>
                  <div className="text-steel-grey/50">
                    {"  "}(d) Formal framework with audit trails
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex-1 h-1 bg-surface-border rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-terminal-green rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "25%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                  <span className="text-xs text-steel-grey">3/12</span>
                </div>
              </div>
            </div>
          </SectionTransition>
        </div>
      </div>
    </section>
  );
}
