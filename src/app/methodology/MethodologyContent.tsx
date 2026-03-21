"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge, BentoCard, Button } from "@/components/ui";
import { SectionLabel, ServiceCTA } from "@/components/services";
import { ArrowRight } from "lucide-react";

const phases = [
  {
    id: "observe",
    number: "01",
    name: "Observe the Operation",
    color: "text-signal-blue",
    colorBg: "bg-signal-blue/10",
    colorBorder: "border-signal-blue/20",
    tagline: "Never start by building. Start by watching.",
    description:
      "Watch how things actually work today. Not how people say they work. Not how the process document describes them. How people actually spend their time, where information breaks, and where humans do work that machines should handle.",
    whatToLookFor: [
      "Who does what? Where does information flow? Where does it break?",
      "Where are humans doing work that is repetitive, error-prone, or invisible?",
      "What decisions get made? Which require judgment? Which are mechanical?",
      "Where is institutional knowledge trapped in one person's head?",
    ],
    deliverables: [
      "Current-state process map",
      "Information flow diagram",
      "Pain point severity ranking",
      "Judgment vs. mechanical decision classification",
    ],
    tools: "Stakeholder interviews, process observation, system access review, Granola transcription",
    duration: "2-5 days",
    example:
      "Before designing anything for a marketing team, we mapped their entire measurement landscape. Discovered that marketing's revenue contribution was undervalued because of last-touch attribution. The observation revealed the real problem was not a missing dashboard. It was a missing measurement architecture.",
  },
  {
    id: "decompose",
    number: "02",
    name: "Decompose into Domains",
    color: "text-terminal-green",
    colorBg: "bg-terminal-green/10",
    colorBorder: "border-terminal-green/20",
    tagline: "Break the messy reality into bounded domains.",
    description:
      "Each domain has its own logic, its own data, its own decision patterns. Never build one system that does everything. Build a system of systems where each part has clear boundaries and its own rules.",
    whatToLookFor: [
      "Group related activities by decision type, not by org chart",
      "Each domain needs a single owner (human or agent) and clear inputs/outputs",
      "Boundaries between domains become routing rules",
      "Data flows across boundaries define the integration requirements",
    ],
    deliverables: [
      "Domain boundary map",
      "Routing rules between domains",
      "Owner assignment (human or agent per domain)",
      "Input/output specification per domain",
    ],
    tools: "Domain-driven design principles, bounded context mapping, data flow analysis",
    duration: "2-3 days",
    example:
      "Marketing measurement decomposed into three independent scoring domains: Fit (firmographic match), Engagement (behavioral signals), Product (usage signals). Each has different data sources, different models, different owners. A three-score architecture, not a single monolithic score.",
  },
  {
    id: "design",
    number: "03",
    name: "Design the Architecture",
    color: "text-electric-purple",
    colorBg: "bg-electric-purple/10",
    colorBorder: "border-electric-purple/20",
    tagline: "The phase that separates building a tool from building an operating system.",
    description:
      "Do not jump to features. Design the infrastructure that makes features possible. Six architectural components form the operating layer: routing, specialization, governance, memory, cadences, and observability.",
    whatToLookFor: [
      "Routing: how does incoming work reach the right agent or process?",
      "Specialization: dedicated agents per domain, not one general-purpose system",
      "Governance: what runs autonomously, what requires human approval",
      "Memory, cadences, and observability complete the layer",
    ],
    deliverables: [
      "Architecture Decision Record (ADR)",
      "Agent topology diagram",
      "Governance framework",
      "Operating layer blueprint (6 components)",
    ],
    tools: "Mermaid diagrams, Architecture Decision Records, Five Questions quality gate",
    duration: "3-5 days",
    example:
      "For a personal knowledge management system: User input flows to routing rules, which classify by domain and dispatch to specialized agents. Each agent executes skills, triggers hooks for validation and sync, updates persistent memory, and schedules cadence operations. Not an app. An operating system.",
  },
  {
    id: "build",
    number: "04",
    name: "Build Fast, Through AI",
    color: "text-signal-blue",
    colorBg: "bg-signal-blue/10",
    colorBorder: "border-signal-blue/20",
    tagline: "AI as both the development medium and the runtime.",
    description:
      "Use AI to build AI-powered systems. This creates a compounding advantage: every system you build makes you better at building the next one. Production systems in weeks, not quarters. Iteration based on real usage, not specifications.",
    whatToLookFor: [
      "Describe architecture at the system level, use AI to implement",
      "Ship production software in hours, not weeks",
      "Iterate based on real usage, not specifications",
      "Stay at the design level where human judgment matters most",
    ],
    deliverables: [
      "Production-deployed agent system",
      "Integration layer with existing tools",
      "Automated test suite",
      "Deployment runbook",
    ],
    tools: "Claude Code, custom orchestration, CI/CD pipelines, Kubernetes, Helm",
    duration: "1-4 weeks",
    example:
      "From observation (watching a field marketer do XLOOKUP) to production Kubernetes deployment in a single session. Next.js, React, Claude AI semantic matching, Helm chart, GitLab CI. Used by real employees, processing real data, deployed on enterprise infrastructure.",
  },
  {
    id: "autonomize",
    number: "05",
    name: "Autonomize",
    color: "text-terminal-green",
    colorBg: "bg-terminal-green/10",
    colorBorder: "border-terminal-green/20",
    tagline: "Push every process as far toward autonomous as possible.",
    description:
      "Most people build tools that help humans work faster. This methodology builds systems that run without humans and only involve them for judgment calls. The autonomy gradient: Manual, Assisted, Supervised, Autonomous, Invisible. Target Autonomous and Invisible for operations.",
    whatToLookFor: [
      "Manual: human does the work (starting state for most processes)",
      "Assisted: AI helps the human (where most tools stop)",
      "Supervised: AI does the work, human approves",
      "Autonomous: AI does the work, human is notified",
      "Invisible: AI does the work, human does not think about it (target state)",
    ],
    deliverables: [
      "Autonomy classification per process",
      "Human checkpoint definition (only where judgment is required)",
      "Escalation paths for edge cases",
      "Monitoring for autonomous operations",
    ],
    tools: "Event-driven hooks, scheduled cadences, background agents, health scoring",
    duration: "1-2 weeks",
    example:
      "Multi-agent research swarms (5-8 agents in parallel) ran autonomously across 7 sessions. Each agent had a specific mandate. They produced synthesized strategy documents. The human made strategic decisions based on the output. The research was autonomous. The judgment was human.",
  },
  {
    id: "codify",
    number: "06",
    name: "Codify and Teach",
    color: "text-electric-purple",
    colorBg: "bg-electric-purple/10",
    colorBorder: "border-electric-purple/20",
    tagline: "Turn implicit knowledge into explicit, repeatable frameworks.",
    description:
      "This is what transforms a one-time solution into a methodology and a practitioner into a thought leader. Codify the architectural patterns, the decision criteria, the failure modes, and the methodology itself so the approach scales beyond one person.",
    whatToLookFor: [
      "Architectural patterns that can be replicated",
      "Decision criteria that others can apply",
      "Failure modes that others can avoid",
      "The methodology itself as a teachable framework",
    ],
    deliverables: [
      "Architecture documentation package",
      "Team training materials",
      "Pattern library additions",
      "Client independence validation",
    ],
    tools: "Documentation generation, knowledge synthesis, structured training sessions",
    duration: "3-5 days",
    example:
      "7,179 lines of enterprise code synthesized into 10 structured reference files with department playbooks, error handling guides, and a decision tree. Implicit knowledge (how the system works, when to use which component) became explicit operational infrastructure that anyone on the team can use.",
  },
];

const principles = [
  {
    principle: "Systems over tasks",
    meaning: "Design the system that handles a category of work",
    alternative: "Automate one task at a time",
  },
  {
    principle: "Autonomy over assistance",
    meaning: "Build systems that run themselves",
    alternative: "Build tools that help humans run things",
  },
  {
    principle: "Architecture over features",
    meaning: "Design the infrastructure layer first",
    alternative: "Jump to building features",
  },
  {
    principle: "Domains over monoliths",
    meaning: "Decompose into bounded, specialized areas",
    alternative: "One AI tool that does everything",
  },
  {
    principle: "Judgment at the edges",
    meaning: "Humans make decisions, AI handles operations",
    alternative: "Human in the loop for every step",
  },
  {
    principle: "Codify over improvise",
    meaning: "Turn knowledge into repeatable frameworks",
    alternative: "Figure it out each time",
  },
];

const fiveQuestions = [
  "What happens when the primary data source is unavailable?",
  "What does the agent do when it receives unexpected input?",
  "Which human approves before the agent takes irreversible action?",
  "How does the client know the system is working without asking us?",
  "What does rollback look like in the first 30 days?",
];

export function MethodologyContent() {
  const [activePhase, setActivePhase] = useState("observe");

  // Update active phase based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      for (const phase of phases) {
        const el = document.getElementById(`phase-${phase.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom > 200) {
            setActivePhase(phase.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <Badge variant="default">Methodology</Badge>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter">
              The Verluna Method
            </h1>
            <p className="mt-4 text-xl font-mono text-terminal-green">
              Six phases to AI-native operations.
            </p>
            <p className="mt-6 text-lg text-steel-grey leading-relaxed max-w-3xl">
              This methodology emerged from production experience, not theory.
              300+ AI sessions, enterprise deployments, and the work of
              redesigning real operations as agent-powered systems. The principle
              is simple: take any human-operated process, decompose it into
              domains, design an AI-native operating layer, and build it so it
              runs autonomously with humans only at the judgment points. The
              execution is where the work lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Principle */}
      <section className="py-12 bg-charcoal/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <blockquote className="text-xl sm:text-2xl font-medium text-off-white leading-relaxed border-l-4 border-terminal-green pl-6 text-left">
              Take any human-operated process, decompose it into domains, design
              an AI-native operating layer, and build it so it runs autonomously
              -- with humans only at the judgment points.
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Phases with sticky sidebar */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-12">
            {/* Sticky sidebar navigation */}
            <div className="hidden lg:block w-56 flex-shrink-0">
              <div className="sticky top-32 space-y-2">
                <span className="text-xs font-mono text-steel-grey uppercase tracking-wider block mb-4">
                  Phases
                </span>
                {phases.map((phase) => (
                  <a
                    key={phase.id}
                    href={`#phase-${phase.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(`phase-${phase.id}`)
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`flex items-center gap-3 py-2 px-3 rounded-lg text-sm transition-all duration-200 ${
                      activePhase === phase.id
                        ? "bg-surface text-off-white border border-surface-border"
                        : "text-steel-grey hover:text-off-white"
                    }`}
                  >
                    <span
                      className={`font-mono text-xs ${
                        activePhase === phase.id
                          ? phase.color
                          : "text-steel-grey"
                      }`}
                    >
                      {phase.number}
                    </span>
                    <span className="truncate">{phase.name.split(" ").slice(0, 2).join(" ")}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 space-y-24">
              {phases.map((phase, i) => (
                <div
                  key={phase.id}
                  id={`phase-${phase.id}`}
                  className="scroll-mt-32"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Phase header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center font-mono text-lg font-medium ${phase.colorBg} ${phase.color} border ${phase.colorBorder}`}
                      >
                        {phase.number}
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tighter">
                          {phase.name}
                        </h2>
                        <p className={`font-mono text-sm ${phase.color}`}>
                          {phase.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-steel-grey leading-relaxed mb-8 max-w-3xl">
                      {phase.description}
                    </p>

                    {/* What to look for */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <BentoCard hover={false}>
                        <h3 className="text-sm font-mono text-steel-grey uppercase tracking-wider mb-4">
                          What Happens
                        </h3>
                        <ul className="space-y-2">
                          {phase.whatToLookFor.map((item, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-sm text-off-white"
                            >
                              <span
                                className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${phase.colorBg} ${phase.color}`}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </BentoCard>

                      <BentoCard hover={false}>
                        <h3 className="text-sm font-mono text-steel-grey uppercase tracking-wider mb-4">
                          Deliverables
                        </h3>
                        <ul className="space-y-2">
                          {phase.deliverables.map((item, j) => (
                            <li
                              key={j}
                              className="flex items-center gap-2 text-sm text-off-white"
                            >
                              <svg
                                className={`w-3.5 h-3.5 flex-shrink-0 ${phase.color}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </BentoCard>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      <span className="text-xs font-mono text-steel-grey">
                        Tools: {phase.tools}
                      </span>
                      <span className="text-xs font-mono text-steel-grey">
                        Duration: <span className={phase.color}>{phase.duration}</span>
                      </span>
                    </div>

                    {/* Example */}
                    <div className="p-4 rounded-lg border border-surface-border bg-surface/30">
                      <span className="text-xs font-mono text-steel-grey uppercase tracking-wider block mb-2">
                        Real Example (Anonymized)
                      </span>
                      <p className="text-sm text-steel-grey leading-relaxed italic">
                        {phase.example}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 md:py-24 bg-charcoal/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Principles</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-8">
            Six Principles Behind the Method
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm max-w-4xl">
              <thead>
                <tr className="border-b border-surface-border">
                  <th className="text-left py-4 pr-6 font-mono text-terminal-green uppercase tracking-wider text-xs">
                    Principle
                  </th>
                  <th className="text-left py-4 px-4 font-mono text-steel-grey uppercase tracking-wider text-xs">
                    What It Means
                  </th>
                  <th className="text-left py-4 px-4 font-mono text-steel-grey uppercase tracking-wider text-xs">
                    What Most People Do Instead
                  </th>
                </tr>
              </thead>
              <tbody>
                {principles.map((p, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-surface-border/50"
                  >
                    <td className="py-4 pr-6 font-medium text-off-white whitespace-nowrap">
                      {p.principle}
                    </td>
                    <td className="py-4 px-4 text-steel-grey">
                      {p.meaning}
                    </td>
                    <td className="py-4 px-4 text-steel-grey/60 italic">
                      {p.alternative}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Five Questions */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Quality Gate</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-4">
            The Five Questions
          </h2>
          <p className="text-steel-grey mb-8 max-w-2xl">
            Every architecture Verluna designs must pass these five questions.
            All five must have written answers before implementation begins. No
            exceptions.
          </p>

          <div className="max-w-3xl space-y-4">
            {fiveQuestions.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <BentoCard hover={false}>
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-terminal-green/10 text-terminal-green border border-terminal-green/20 flex items-center justify-center font-mono text-sm">
                      {i + 1}
                    </span>
                    <p className="text-off-white leading-relaxed pt-1">{q}</p>
                  </div>
                </BentoCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What This Is Not */}
      <section className="py-16 md:py-24 bg-charcoal/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Boundaries</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-8">
            What This Methodology Is Not
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {[
              {
                label: "Not prompt engineering",
                desc: "Prompt engineering is about getting better output from a single interaction. This is about designing systems of interactions.",
              },
              {
                label: "Not workflow automation",
                desc: "Workflow automation connects existing tools in sequences. This redesigns the operation itself as AI-native.",
              },
              {
                label: "Not AI strategy consulting",
                desc: "Strategy consulting produces PowerPoint decks. This produces working systems.",
              },
              {
                label: "Not software engineering",
                desc: "Software engineering builds applications. This builds operating layers -- the infrastructure between AI capabilities and human organizations.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <BentoCard hover={false}>
                  <h4 className="font-medium text-off-white mb-2">
                    {item.label}
                  </h4>
                  <p className="text-sm text-steel-grey leading-relaxed">
                    {item.desc}
                  </p>
                </BentoCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        title="See How It Applies to You"
        description="The methodology is the constant. Your operations are the variable. Take the Agent Readiness Assessment to see which phases matter most for your organization."
        ctaPrimary={{
          label: "Take the Assessment",
          href: "/scorecard",
        }}
        ctaSecondary={{
          label: "Book an Audit",
          href: "/services/audit",
        }}
      />
    </>
  );
}
