"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalHeader, Button } from "@/components/ui";
import { SectionTransition } from "@/components/ui";
import { containerWidth, sectionPadding, sectionHeading } from "@/lib/design-tokens";

interface Phase {
  num: string;
  name: string;
  description: string;
  deliverables: string[];
  tools: string[];
  evidence: string;
  evidenceHighlight: string;
}

const phases: Phase[] = [
  {
    num: "01",
    name: "Observe",
    description:
      "Never start by building. Start by watching how things actually work. Not how the org chart says they work. Not how the process document describes them. How people actually spend their time, where information breaks, and where humans do work that machines should handle.",
    deliverables: [
      "Process observation report",
      "Information flow map",
      "Decision-point inventory",
      "Bottleneck identification",
    ],
    tools: ["Stakeholder interviews", "Process shadowing", "Data flow analysis"],
    evidence:
      "Watched a field marketer spend 4 hours doing XLOOKUP to match event attendees against target accounts. The observation: fuzzy matching with German company name variants (GmbH, AG, spelling variants) was the actual bottleneck.",
    evidenceHighlight: "4 hours to 90 seconds.",
  },
  {
    num: "02",
    name: "Decompose",
    description:
      "Break the messy reality into bounded domains. Each domain has its own logic, its own data, its own decision patterns. Boundaries between domains become routing rules. Never build one system that does everything.",
    deliverables: [
      "Domain map with boundaries",
      "Routing rule definitions",
      "Input/output contracts",
      "Ownership assignments",
    ],
    tools: [
      "Domain-driven design",
      "Bounded context mapping",
      "Decision tree analysis",
    ],
    evidence:
      "Broke marketing operations into 7 bounded domains with explicit routing rules. Each domain has its own capture format, routing logic, and review cadence.",
    evidenceHighlight: "7 bounded domains.",
  },
  {
    num: "03",
    name: "Design",
    description:
      "Routing. Specialization. Governance. Memory. Cadences. Observability. This is the phase that separates building a tool from building an operating system. Every human touchpoint is a design failure until proven otherwise.",
    deliverables: [
      "Architecture diagram",
      "Governance framework",
      "Autonomy classification",
      "Integration blueprint",
    ],
    tools: [
      "Architecture decision records",
      "Autonomy gradient framework",
      "EU AI Act compliance checklist",
    ],
    evidence:
      "Architecture: routing, specialization, governance, memory, cadences, observability. Six architectural components that define the operating layer.",
    evidenceHighlight: "6 architectural components.",
  },
  {
    num: "04",
    name: "Build",
    description:
      "Use AI as both the development medium and the runtime. Production systems in weeks, not quarters. Iteration based on real usage, not specifications. Stay at the design level where human judgment matters most.",
    deliverables: [
      "Production-deployed system",
      "Tested integrations",
      "CI/CD pipeline",
      "Monitoring dashboards",
    ],
    tools: [
      "Claude Code",
      "Next.js / FastAPI",
      "Kubernetes / Helm",
      "HubSpot / Salesforce APIs",
    ],
    evidence:
      "From observation to production Kubernetes deployment in a single session. Next.js 15, React 19, Tailwind 4, Claude AI SDK semantic matching, Helm chart, GitLab CI.",
    evidenceHighlight: "Production in a single session.",
  },
  {
    num: "05",
    name: "Autonomize",
    description:
      "Push every process as far toward autonomous as possible. Most AI tools stop at assisted. We target autonomous and invisible for operations, reserving supervised for decisions and creative work.",
    deliverables: [
      "Autonomy tier assignments",
      "Escalation path definitions",
      "Human-in-the-loop checkpoints",
      "Performance benchmarks",
    ],
    tools: [
      "Autonomy gradient (Manual > Assisted > Supervised > Autonomous > Invisible)",
      "Error handling patterns",
      "Fallback chains",
    ],
    evidence:
      "83 specialized skills running autonomously across 7 domains. Scheduled operations ensure morning briefs, weekly reviews, and monthly reports happen without manual triggers.",
    evidenceHighlight: "83 skills, 7 domains.",
  },
  {
    num: "06",
    name: "Codify",
    description:
      "Turn implicit knowledge into explicit, repeatable frameworks. Your team owns the architecture. Documentation, training, runbooks. No vendor dependency by design.",
    deliverables: [
      "Architecture documentation",
      "Team runbooks",
      "Training materials",
      "Knowledge transfer sessions",
    ],
    tools: [
      "Structured documentation",
      "Decision record templates",
      "Knowledge base architecture",
    ],
    evidence:
      "10 structured reference documents synthesized from 7,179 lines of enterprise code. Each file self-contained. A decision tree at the top routes readers to the right domain.",
    evidenceHighlight: "7,179 lines codified.",
  },
];

export function MethodologyInteractive() {
  const [activePhase, setActivePhase] = useState(0);
  const phase = phases[activePhase];

  return (
    <section id="methodology" className={`${sectionPadding} bg-charcoal`}>
      <div className={containerWidth}>
        <TerminalHeader>The Methodology</TerminalHeader>

        <SectionTransition>
          <h2 className={`${sectionHeading} max-w-xl mt-4 mb-4`}>
            Six Phases. One Operating Layer.
          </h2>
          <p className="text-steel-grey text-lg max-w-2xl mb-10 leading-relaxed">
            Emerged from 300+ production AI sessions, enterprise deployments,
            and the experience of redesigning real operations as AI-native
            systems. Not a theory. How we work on every engagement.
          </p>
        </SectionTransition>

        {/* Phase tabs */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-8">
          {phases.map((p, i) => (
            <motion.button
              key={i}
              onClick={() => setActivePhase(i)}
              className={`
                rounded-lg px-3 py-4 text-center transition-all duration-250 border cursor-pointer
                ${
                  activePhase === i
                    ? "border-terminal-green bg-terminal-green/5 text-off-white shadow-[0_0_16px_rgba(0,255,148,0.1)]"
                    : "border-surface-border bg-surface text-steel-grey hover:border-terminal-green/30 hover:text-off-white"
                }
              `}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="font-mono text-[11px] text-terminal-green font-semibold block mb-1">
                {p.num}
              </span>
              <span className="text-sm font-medium block">{p.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Phase detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-surface border border-surface-border rounded-xl p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left: Description */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold text-off-white mb-4">
                  Phase {phase.num}: {phase.name} the Operation
                </h3>
                <p className="text-steel-grey leading-relaxed mb-6">
                  {phase.description}
                </p>

                {/* Evidence block */}
                <div className="bg-charcoal border border-surface-border rounded-lg p-5">
                  <span className="font-mono text-[11px] text-terminal-green/70 block mb-3">
                    // EVIDENCE
                  </span>
                  <p className="text-sm text-steel-grey leading-relaxed mb-2">
                    {phase.evidence}
                  </p>
                  <span className="font-mono text-sm text-terminal-green font-medium">
                    {phase.evidenceHighlight}
                  </span>
                </div>
              </div>

              {/* Right: Deliverables & Tools */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-mono text-xs text-terminal-green uppercase tracking-wider mb-3">
                    Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {phase.deliverables.map((d, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-steel-grey"
                      >
                        <span className="text-terminal-green mt-0.5 text-xs">
                          +
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-terminal-green uppercase tracking-wider mb-3">
                    Tools & Methods
                  </h4>
                  <ul className="space-y-2">
                    {phase.tools.map((t, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-steel-grey"
                      >
                        <span className="text-signal-blue mt-0.5 text-xs">
                          $
                        </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <SectionTransition delay={0.2}>
          <div className="mt-10 text-center">
            <Button variant="secondary" href="/methodology">
              Explore the Full Methodology
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
