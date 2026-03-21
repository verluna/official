"use client";

import { motion } from "framer-motion";
import { TerminalHeader, GlowCard } from "@/components/ui";
import { SectionTransition, StaggeredList, StaggeredItem } from "@/components/ui";
import { containerWidth, sectionPadding, sectionHeading } from "@/lib/design-tokens";

const painPoints = [
  {
    title: "Agents Piloted, Not Governed",
    desc: "Teams bolt agents onto existing workflows. A chatbot here. An automation there. Each one works in isolation. None of them talk to each other.",
  },
  {
    title: "No Governance Framework",
    desc: "Nobody has defined what agents can do autonomously and what requires a human decision. The EU AI Act requires this. Most companies have not started.",
  },
  {
    title: "51% Piloting, 0% Operating",
    desc: "Experiments and operations are different things. Most enterprise AI initiatives produce demos, not systems that run without daily intervention.",
  },
  {
    title: "ROI Unclear After POC",
    desc: "Proof-of-concept succeeds. Budget is approved. Then the real question: who architects the production system? The POC team has moved on.",
  },
  {
    title: "Security and Compliance Exposure",
    desc: "Every unarchitected agent is a compliance risk. Data flowing through unmonitored prompts. No audit trail. No access controls. No observability.",
  },
  {
    title: "Talent Gap: Who Runs This?",
    desc: "The role of 'agent operations architect' barely exists. Companies need the capability now. Hiring takes 6 to 18 months. The gap is widening.",
  },
];

export function ProblemStatement() {
  return (
    <section id="problem" className={`${sectionPadding} bg-charcoal`}>
      <div className={containerWidth}>
        <TerminalHeader>The Problem</TerminalHeader>

        <SectionTransition>
          <h2 className={`${sectionHeading} max-w-2xl mt-4 mb-4`}>
            Your AI Strategy Is a Deck.{" "}
            <span className="text-steel-grey">
              Your Operations Are Still Manual.
            </span>
          </h2>
          <p className="text-steel-grey text-lg max-w-2xl mb-12 leading-relaxed">
            Every enterprise is piloting agents. Almost none have the
            architecture to run them. The problem is not the technology. The
            problem is the operating layer.
          </p>
        </SectionTransition>

        {/* Pain point cards */}
        <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {painPoints.map((p, i) => (
            <StaggeredItem key={i}>
              <div className="relative rounded-xl bg-surface/50 border border-error-red/15 p-6 transition-all duration-300 hover:border-error-red/35 hover:bg-surface/80 h-full">
                {/* Error badge */}
                <div className="flex items-center gap-2 font-mono text-xs text-error-red mb-4">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  ERR_{String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold text-off-white mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-steel-grey leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </StaggeredItem>
          ))}
        </StaggeredList>

        {/* Stat callout */}
        <SectionTransition delay={0.3}>
          <div className="border-l-2 border-terminal-green pl-6 max-w-2xl">
            <p className="text-lg text-off-white leading-relaxed italic">
              &ldquo;51% of enterprises are piloting agents. Most have no plan
              for operating them.&rdquo;
            </p>
            <cite className="block mt-3 font-mono text-xs text-steel-grey not-italic">
              -- Capgemini Research Institute, 2026
            </cite>
          </div>
        </SectionTransition>
      </div>
    </section>
  );
}
