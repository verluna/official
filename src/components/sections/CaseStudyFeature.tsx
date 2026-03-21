"use client";

import { TerminalHeader, Badge, GlowCard, Button } from "@/components/ui";
import { SectionTransition, StaggeredList, StaggeredItem } from "@/components/ui";
import { containerWidth, sectionPadding, sectionHeading } from "@/lib/design-tokens";

export function CaseStudyFeature() {
  return (
    <section id="case-studies" className={sectionPadding}>
      <div className={containerWidth}>
        <TerminalHeader>Results</TerminalHeader>

        <SectionTransition>
          <h2 className={`${sectionHeading} max-w-xl mt-4 mb-10`}>
            How It Works in Practice.
          </h2>
        </SectionTransition>

        {/* Featured case study */}
        <SectionTransition>
          <div className="bg-surface border border-surface-border rounded-xl p-6 sm:p-8 mb-5">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              {/* Left: Copy */}
              <div className="lg:col-span-3">
                <Badge variant="blue" className="mb-4">
                  B2B SaaS -- Enterprise Software
                </Badge>
                <h3 className="text-2xl font-semibold text-off-white mb-4 leading-tight">
                  4 hours of manual matching became 90 seconds of semantic AI.
                </h3>
                <p className="text-steel-grey leading-relaxed mb-6">
                  A global language technology company&apos;s field marketing
                  team was spending 4 hours per event matching attendee lists
                  against target accounts using XLOOKUP with German company name
                  variants. Verluna built a semantic matching system that handles
                  fuzzy matching across GmbH, AG, and spelling variants.
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  <Badge variant="default">Phase 01: Observe</Badge>
                  <Badge variant="default">Phase 04: Build</Badge>
                  <Badge variant="default">Phase 05: Autonomize</Badge>
                </div>
              </div>

              {/* Right: Before/After comparison */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 gap-4">
                  {/* Before */}
                  <div className="bg-charcoal border border-error-red/20 rounded-lg p-5">
                    <span className="font-mono text-[11px] text-error-red uppercase tracking-wider block mb-3">
                      Before
                    </span>
                    <div className="space-y-3">
                      <div>
                        <span className="font-mono text-2xl font-bold text-off-white block">
                          4 hrs
                        </span>
                        <span className="text-xs text-steel-grey">
                          per event
                        </span>
                      </div>
                      <div>
                        <span className="font-mono text-2xl font-bold text-off-white block">
                          ~70%
                        </span>
                        <span className="text-xs text-steel-grey">
                          match accuracy
                        </span>
                      </div>
                      <div>
                        <span className="font-mono text-sm text-steel-grey">
                          XLOOKUP
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* After */}
                  <div className="bg-charcoal border border-terminal-green/20 rounded-lg p-5">
                    <span className="font-mono text-[11px] text-terminal-green uppercase tracking-wider block mb-3">
                      After
                    </span>
                    <div className="space-y-3">
                      <div>
                        <span className="font-mono text-2xl font-bold text-terminal-green block">
                          90 sec
                        </span>
                        <span className="text-xs text-steel-grey">
                          per event
                        </span>
                      </div>
                      <div>
                        <span className="font-mono text-2xl font-bold text-terminal-green block">
                          99.2%
                        </span>
                        <span className="text-xs text-steel-grey">
                          match rate
                        </span>
                      </div>
                      <div>
                        <span className="font-mono text-sm text-terminal-green">
                          Claude AI + Kubernetes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionTransition>

        {/* Two smaller case study cards */}
        <StaggeredList className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StaggeredItem>
            <GlowCard glowColor="green" hover={true} className="h-full">
              <div className="p-6">
                <Badge variant="default" className="mb-4">
                  Marketing Intelligence
                </Badge>
                <h3 className="text-lg font-semibold text-off-white mb-3">
                  Designing a multi-touch attribution architecture with
                  agent-powered research. Zero external software.
                </h3>
                <p className="text-sm text-steel-grey leading-relaxed mb-4">
                  7 research sessions produced a complete attribution
                  architecture. Three independent scoring domains (Fit,
                  Engagement, Product), each with its own data sources and
                  models. Built entirely on existing CRM infrastructure.
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="default">Phase 02: Decompose</Badge>
                  <Badge variant="default">Phase 03: Design</Badge>
                </div>
              </div>
            </GlowCard>
          </StaggeredItem>

          <StaggeredItem>
            <GlowCard glowColor="purple" hover={true} className="h-full">
              <div className="p-6">
                <Badge variant="default" className="mb-4">
                  Knowledge Codification
                </Badge>
                <h3 className="text-lg font-semibold text-off-white mb-3">
                  7,179 lines of enterprise documentation synthesized into 10
                  operational reference files.
                </h3>
                <p className="text-sm text-steel-grey leading-relaxed mb-4">
                  A complex enterprise codebase decomposed into 10 bounded
                  domains. Each file self-contained. A decision tree at the top
                  routes readers to the right domain. Used daily by the
                  operations team.
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="default">Phase 06: Codify</Badge>
                </div>
              </div>
            </GlowCard>
          </StaggeredItem>
        </StaggeredList>

        <SectionTransition delay={0.2}>
          <div className="mt-10 text-center">
            <Button variant="secondary" href="/case-studies">
              See All Case Studies
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
      </div>
    </section>
  );
}
