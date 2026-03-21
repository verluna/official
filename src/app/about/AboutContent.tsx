"use client";

import { motion } from "framer-motion";
import { GlowCard, Button, Badge } from "@/components/ui";

const stats = [
  { value: "300+", label: "AI Production Sessions" },
  { value: "83", label: "Automation Skills Built" },
  { value: "12", label: "System Integrations" },
  { value: "44K+", label: "AI-Assisted Messages" },
];

const methodPhases = [
  { number: "01", name: "Observe", description: "Watch how operations actually work, not how the org chart says they work." },
  { number: "02", name: "Decompose", description: "Break messy reality into bounded domains with clear ownership and routing rules." },
  { number: "03", name: "Design", description: "Routing, specialization, governance, memory, cadences, observability." },
  { number: "04", name: "Build", description: "Production systems in weeks using AI as both the development medium and the runtime." },
  { number: "05", name: "Autonomize", description: "Push every process toward autonomous. Reserve human judgment for decisions that need it." },
  { number: "06", name: "Codify", description: "Turn implicit knowledge into explicit, repeatable frameworks your team owns." },
];

export function AboutContent() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-terminal-green font-mono">&gt;</span>
            <span className="text-sm font-mono text-steel-grey uppercase tracking-wider">
              About
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tighter">
            Built by a Practitioner,{" "}
            <span className="text-gradient">Not a Consultant</span>
          </h1>
          <p className="mt-6 text-lg text-steel-grey leading-relaxed">
            Verluna was not founded in a strategy session. It was founded because
            the same patterns kept repeating across every company, and someone
            needed to codify what actually works.
          </p>
        </motion.div>

        {/* The Story */}
        <div className="mt-20 grid lg:grid-cols-5 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold tracking-tight mb-4">
                The Origin
              </h2>
              <div className="space-y-4 text-steel-grey leading-relaxed">
                <p>
                  I am Tolga Oral, based in Berlin. I spent years building
                  marketing automation systems at scale for B2B SaaS companies
                  across DACH. I am not a traditional developer. I am a marketing
                  operations specialist who learned to code because the tools I
                  needed did not exist.
                </p>
                <p>
                  The realization came gradually, then all at once: every company
                  I worked with had the same problems. Disconnected tools that do
                  not talk to each other. Manual processes that someone built in a
                  spreadsheet three years ago and nobody dares to touch.
                  Attribution models that credit the last click and ignore
                  everything that came before it. Lead scoring that lives in
                  someone&apos;s head instead of in the system.
                </p>
                <p>
                  The gap was not technology. Every company had HubSpot, or
                  Salesforce, or both. The gap was architecture. Nobody was
                  designing the operating layer between these tools and the
                  business processes they were supposed to serve.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight mb-4">
                The Discovery
              </h2>
              <div className="space-y-4 text-steel-grey leading-relaxed">
                <p>
                  When AI coding tools became production-ready, the scope of what
                  one practitioner could build changed fundamentally. I went from
                  configuring platforms to building systems. From setting up
                  workflows in a GUI to writing semantic matching engines,
                  multi-language translation pipelines, and scoring architectures.
                </p>
                <p>
                  300+ sessions later, what I built was not a collection of
                  automations. It was an operating system: 7 operational domains,
                  83 specialized skills, 12 external integrations, all running
                  with explicit routing, governance, and memory. The methodology
                  that produced this system is what Verluna offers to every
                  client.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight mb-4">
                The Thesis
              </h2>
              <div className="space-y-4 text-steel-grey leading-relaxed">
                <p>
                  Every enterprise in Europe will run agent-powered operations
                  within three years. The question is whether those agents are
                  duct-taped together by overwhelmed teams or architected into
                  systems that scale and comply.
                </p>
                <p>
                  Verluna exists to build that operating layer. Not to sell AI
                  tools. Not to deliver strategy decks. To design, build, and run
                  the infrastructure between AI capabilities and business
                  processes for European enterprises that need it governed,
                  reliable, and compliant from day one.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight mb-4">
                What Verluna Is Not
              </h2>
              <div className="space-y-4 text-steel-grey leading-relaxed">
                <p>
                  <strong className="text-off-white">Not a dev shop.</strong> We
                  do not build apps to spec. We architect operations.
                </p>
                <p>
                  <strong className="text-off-white">
                    Not a strategy consultancy.
                  </strong>{" "}
                  We do not deliver slide decks with recommendations. We build
                  working systems and run them.
                </p>
                <p>
                  <strong className="text-off-white">
                    Not a staffing agency.
                  </strong>{" "}
                  One architect with an AI agent workforce delivers the throughput
                  of a 3-to-5-person internal team. You scale operations without
                  scaling payroll.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sidebar: Stats + Code Over Config */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <GlowCard glowColor="green" hover={false}>
              <div className="p-6">
                <h3 className="font-mono text-xs text-steel-grey uppercase tracking-widest mb-6">
                  <span className="text-terminal-green">&gt;</span> Production
                  Numbers
                </h3>
                <div className="space-y-6">
                  {stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-3xl font-mono text-terminal-green">
                        {stat.value}
                      </div>
                      <div className="text-sm text-steel-grey mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlowCard>

            <GlowCard glowColor="purple" hover={false}>
              <div className="p-6">
                <h3 className="font-mono text-xs text-steel-grey uppercase tracking-widest mb-4">
                  <span className="text-electric-purple">&gt;</span> Philosophy
                </h3>
                <p className="text-xl font-semibold tracking-tight text-off-white mb-3">
                  Code Over Config
                </p>
                <p className="text-sm text-steel-grey leading-relaxed">
                  Most operations are configured, not built. Configured systems
                  hit ceilings: the platform decides what is possible. Built
                  systems are designed from primitives: you decide what is
                  possible. Verluna builds from primitives.
                </p>
                <p className="text-sm text-steel-grey leading-relaxed mt-3">
                  This does not mean everything needs custom code. It means the
                  architecture is intentional. No-code where it makes sense. Code
                  where configuration fails. Agent-powered where human effort is
                  wasted.
                </p>
              </div>
            </GlowCard>

            <GlowCard glowColor="blue" hover={false}>
              <div className="p-6">
                <h3 className="font-mono text-xs text-steel-grey uppercase tracking-widest mb-4">
                  <span className="text-signal-blue">&gt;</span> European Roots
                </h3>
                <p className="text-sm text-steel-grey leading-relaxed">
                  Berlin-based. Built for European data sovereignty and GDPR
                  compliance from day one, not retrofitted for it. Deep
                  understanding of the DACH B2B SaaS landscape: the tools, the
                  buying cycles, the regulatory requirements.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <svg
                    className="w-4 h-4 text-signal-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-off-white font-mono">
                    Berlin, Germany
                  </span>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </div>

        {/* Speaking */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-terminal-green font-mono">&gt;</span>
            <span className="text-sm font-mono text-steel-grey uppercase tracking-wider">
              Speaking
            </span>
          </div>
          <div className="border border-surface-border rounded-xl bg-surface/50 p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="flex-shrink-0">
                <Badge variant="green">&gt;prompt 2026</Badge>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold tracking-tight">
                  Speaking at the &gt;prompt Developer Conference
                </h3>
                <p className="text-steel-grey leading-relaxed">
                  April 2026. Topic: AI coding as a non-developer. How a
                  marketing operations specialist went from zero programming
                  background to deploying production AI systems across 300+
                  sessions. The talk covers the methodology, the tradeoffs, and
                  the specific patterns that made it work.
                </p>
                <p className="text-steel-grey leading-relaxed">
                  Not a pitch for AI tools. An honest account of what it takes
                  to build real systems when your background is operations, not
                  engineering.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Methodology Preview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-terminal-green font-mono">&gt;</span>
            <span className="text-sm font-mono text-steel-grey uppercase tracking-wider">
              The Method
            </span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight mb-8">
            Six phases to AI-native operations
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {methodPhases.map((phase, i) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-lg border border-surface-border bg-surface/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-terminal-green text-sm">
                    {phase.number}
                  </span>
                  <span className="font-semibold text-off-white">
                    {phase.name}
                  </span>
                </div>
                <p className="text-sm text-steel-grey leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6">
            <Button href="/methodology" variant="secondary">
              Explore the Full Methodology
            </Button>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tighter">
              Ready to work together?
            </h2>
            <p className="mt-4 text-steel-grey">
              Tell me about your operations. What is working, what is not, and
              what you think agents could change.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Work With Me
              </Button>
              <Button href="/case-studies" variant="secondary" size="lg">
                See the Work
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
