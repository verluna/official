"use client";

import { TerminalHeader, GlowCard } from "@/components/ui";
import { SectionTransition, StaggeredList, StaggeredItem } from "@/components/ui";
import { containerWidth, sectionPadding, sectionHeading } from "@/lib/design-tokens";

const pillars = [
  {
    number: "01",
    title: "Routing & Specialization",
    desc: "Every piece of incoming work goes to the right agent, the right process, the right human. No manual triage. Dedicated agents per domain instead of one general-purpose system that does everything poorly.",
    example:
      "A field marketing team had one person manually routing event leads, enriching data, and matching accounts. We decomposed this into three bounded agents -- each with a clear mandate, clear boundaries, and clear escalation paths.",
    color: "green" as const,
  },
  {
    number: "02",
    title: "Governance & Compliance",
    desc: "Explicit rules for what runs autonomously, what requires human approval, and how the system behaves when something unexpected happens. Built for the EU AI Act from day one, not retrofitted.",
    example:
      "An autonomy classification system with three tiers: autonomous (lead routing, data enrichment), supervised (scoring adjustments, content generation), and human-only (budget decisions, strategic pivots). Every agent knows its tier.",
    color: "blue" as const,
  },
  {
    number: "03",
    title: "Memory & Observability",
    desc: "Persistent context that survives across sessions, across agents, across teams. You can see what every agent did, why it did it, what it cost, and whether it worked. No black boxes.",
    example:
      "An operating system with persistent memory across 7 domains, event-driven hooks that auto-sync state, and cadence scheduling that ensures morning briefs, weekly reviews, and monthly reports happen without manual triggers.",
    color: "purple" as const,
  },
];

export function HowWeSolveIt() {
  return (
    <section id="solution" className={sectionPadding}>
      <div className={containerWidth}>
        <TerminalHeader>The Operating Layer</TerminalHeader>

        <SectionTransition>
          <h2 className={`${sectionHeading} max-w-xl mt-4 mb-4`}>
            We Build the Operating Layer.
          </h2>
          <p className="text-steel-grey text-lg max-w-2xl mb-12 leading-relaxed">
            Verluna architects agent systems the way infrastructure engineers
            architect cloud deployments. Not one tool at a time. The entire
            operating layer.
          </p>
        </SectionTransition>

        <StaggeredList className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <StaggeredItem key={i}>
              <GlowCard
                glowColor={p.color}
                hover={true}
                delay={i * 0.1}
                className="h-full"
              >
                <div className="p-6">
                  {/* Top accent line */}
                  <div
                    className={`w-full h-0.5 mb-6 ${
                      p.color === "green"
                        ? "bg-terminal-green"
                        : p.color === "blue"
                        ? "bg-signal-blue"
                        : "bg-electric-purple"
                    }`}
                  />

                  <span className="font-mono text-xs text-terminal-green font-semibold block mb-4">
                    {p.number}
                  </span>
                  <h3 className="text-xl font-semibold text-off-white mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-steel-grey leading-relaxed mb-6">
                    {p.desc}
                  </p>

                  {/* Evidence block */}
                  <div className="bg-charcoal border border-surface-border rounded-lg p-4">
                    <span className="font-mono text-[11px] text-terminal-green/70 block mb-2">
                      // EVIDENCE
                    </span>
                    <p className="text-sm text-steel-grey leading-relaxed">
                      {p.example}
                    </p>
                  </div>
                </div>
              </GlowCard>
            </StaggeredItem>
          ))}
        </StaggeredList>
      </div>
    </section>
  );
}
