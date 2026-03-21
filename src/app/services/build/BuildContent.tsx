"use client";

import { motion } from "framer-motion";
import { BentoCard, Badge } from "@/components/ui";
import {
  ServiceHero,
  ProcessTimeline,
  DeliverableGrid,
  SectionLabel,
  ServiceFAQ,
  ServiceCTA,
} from "@/components/services";

const deliverables = [
  {
    title: "Custom Agent Architecture",
    description:
      "Agent topology designed for your specific operations. Which agents exist, what each handles, how they route work, and where humans decide.",
  },
  {
    title: "Production-Deployed Automations",
    description:
      "Working systems in your environment, handling real data. Not a staging demo. Production infrastructure your team relies on.",
  },
  {
    title: "Integration Layer",
    description:
      "Connections to your existing CRM, enrichment tools, analytics, and communication platforms. Entry and exit validators on every data flow.",
  },
  {
    title: "Architecture Decision Records",
    description:
      "Every design choice documented: the problem, options considered, decision made, rationale, and risks. Your team can reason about the system after we leave.",
  },
  {
    title: "Agent Runbooks",
    description:
      "What each agent does, its inputs and outputs, failure behavior, and monitoring. Written so anyone on your team can troubleshoot without calling us.",
  },
  {
    title: "Monitoring + Alerting",
    description:
      "Dashboards showing what every agent did, what it cost, and whether it worked. Alerts for error rates, latency spikes, and unexpected patterns.",
  },
  {
    title: "Team Training Session",
    description:
      "A 90-minute hands-on session with your team. They learn how the system works, how to extend it, and when to escalate.",
  },
  {
    title: "30-Day Post-Launch Support",
    description:
      "We stay available for 30 days after go-live. Bug fixes, tuning, and questions. Your team is never left alone on day one.",
  },
];

const processSteps = [
  {
    title: "Architecture Design",
    duration: "Week 1",
    description:
      "We translate audit findings (or a fresh scoping session) into a concrete architecture. Agent topology, data flows, governance rules, and human checkpoints.",
    details: [
      "Architecture Decision Record (ADR) drafted",
      "Agent topology diagram (Mermaid)",
      "Five Questions quality gate passed",
      "Client sign-off on architecture before build starts",
    ],
  },
  {
    title: "Component Build",
    duration: "Weeks 2-4",
    description:
      "Each agent component is built against a validation spec. Entry validators, exit validators, and automated tests for every acceptance criterion. No component moves to integration without passing.",
    details: [
      "Validation spec written before each component",
      "Quality Agent checks for hardcoded values and missing error handling",
      "New patterns documented for future reuse",
      "Weekly progress syncs with your team",
    ],
  },
  {
    title: "Integration + Staging",
    duration: "Weeks 4-6",
    description:
      "Components wired together. End-to-end testing with production-like data. Performance profiling. Failure scenarios tested explicitly. Staging deployment for your team to validate.",
    details: [
      "End-to-end test suite with realistic data",
      "Failure scenario testing (downtime, bad data, rate limits)",
      "Idempotency verification",
      "Staging walkthrough recorded for your team",
    ],
  },
  {
    title: "Production + Handoff",
    duration: "Weeks 6-8",
    description:
      "Production deployment with runbook. 24-hour post-deploy monitoring. Documentation package delivered. Training session with your team. 30-day support period begins.",
    details: [
      "Deployment runbook with numbered steps",
      "Production smoke tests immediately after deploy",
      "Full documentation package handed off",
      "90-minute team training session",
    ],
  },
];

const qualityGates = [
  "No component moves to integration without a passing spec test",
  "No staging deployment without architect review",
  "No production deployment without a written runbook",
  "No handoff without complete documentation package",
  "Five Questions gate passed before any implementation begins",
];

const techStack = [
  { category: "CRM", tools: "HubSpot, Salesforce, Pipedrive" },
  { category: "AI/Agent", tools: "Claude (Anthropic), custom agent architectures" },
  { category: "Workflow", tools: "Custom orchestration, webhook infrastructure" },
  { category: "Enrichment", tools: "Clearbit, ZoomInfo, custom enrichment APIs" },
  { category: "Deployment", tools: "Kubernetes, Vercel, Docker, GitLab CI" },
  { category: "Monitoring", tools: "Custom dashboards, alerting pipelines" },
];

const faqItems = [
  {
    id: "build-faq-1",
    question: "Do we need the audit first?",
    answer:
      "We strongly recommend it. The audit ensures we solve the right problems and provides the architecture blueprint the Build follows. That said, if you have a clear, well-scoped problem and we can validate it in a 90-minute scoping session, we can start a Build directly. The audit fee is credited toward the Build if completed within 60 days.",
  },
  {
    id: "build-faq-2",
    question: "What is our team's involvement during the build?",
    answer:
      "4-8 hours per week. Weekly sync calls (30 min), async feedback on staging demos, and access provisioning. We do the building. Your team provides context, validates assumptions, and tests against real-world scenarios.",
  },
  {
    id: "build-faq-3",
    question: "Do you replace our existing tools?",
    answer:
      "No. We build on your existing stack. HubSpot stays HubSpot. Salesforce stays Salesforce. We add the operating layer on top -- the agents, integrations, governance, and monitoring that make your existing tools work together as a system.",
  },
  {
    id: "build-faq-4",
    question: "What happens after the 30-day support period?",
    answer:
      "You own everything. Code, documentation, architecture. Your team can maintain and extend independently. If you want ongoing optimization, the Managed Operations retainer is the natural next step. But there is no lock-in. The handoff is designed for independence.",
  },
  {
    id: "build-faq-5",
    question: "How do you handle scope changes during the build?",
    answer:
      "Scope creep is flagged immediately and never absorbed into the existing engagement. If we discover something mid-build that requires additional work, we document the delta, present options, and get your approval before proceeding. No surprise invoices.",
  },
];

export function BuildContent() {
  return (
    <>
      <ServiceHero
        badge="Agent Architecture Build"
        badgeVariant="green"
        title="From Architecture to Running Systems in 8 Weeks"
        subtitle="Working systems in production. Not a prototype engagement."
        description="The Agent Architecture Build takes the priorities identified in your audit and turns them into production systems. Autonomous workflows, tested integrations, documented architecture, trained team. We build with your existing stack wherever possible. No rip-and-replace. No new platforms to learn. Your tools, architected properly."
        price="EUR 15,000 -- 50,000"
        timeline="4 -- 8 weeks"
        accentColor="green"
        ctaPrimary={{ label: "Scope Your Build", href: "/contact" }}
        ctaSecondary={{
          label: "Start with an Audit",
          href: "/services/audit",
        }}
      />

      {/* Deliverables */}
      <section className="py-16 md:py-24 bg-charcoal/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>What Gets Built</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-4">
            Every Build Ships With
          </h2>
          <p className="text-steel-grey mb-8 max-w-2xl">
            Not just automations. A complete system with documentation, monitoring,
            training, and post-launch support. You own everything.
          </p>
          <DeliverableGrid deliverables={deliverables} accentColor="green" />
        </div>
      </section>

      {/* Autonomy Gradient */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>The Autonomy Gradient</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-4">
            Humans at the Judgment Points. Agents Everywhere Else.
          </h2>
          <p className="text-steel-grey mb-8 max-w-2xl">
            Every process we build is classified on the autonomy gradient. The
            goal is to push everything as far toward autonomous as possible,
            reserving human involvement for genuine judgment calls.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              {
                level: "Manual",
                desc: "Human does the work",
                opacity: "opacity-30",
              },
              {
                level: "Assisted",
                desc: "AI helps the human",
                opacity: "opacity-40",
              },
              {
                level: "Supervised",
                desc: "AI does, human approves",
                opacity: "opacity-60",
              },
              {
                level: "Autonomous",
                desc: "AI does, human notified",
                opacity: "opacity-80",
              },
              {
                level: "Invisible",
                desc: "AI does, no one thinks about it",
                opacity: "opacity-100",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`p-4 rounded-lg border border-terminal-green/20 bg-terminal-green/5 text-center ${item.opacity}`}
              >
                <span className="block font-mono text-sm text-terminal-green mb-1">
                  {item.level}
                </span>
                <span className="text-xs text-steel-grey">{item.desc}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-4 text-xs text-steel-grey font-mono">
            Most &quot;AI tools&quot; stop at Assisted. We target Autonomous and
            Invisible for operations.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24 bg-charcoal/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>How We Build</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-4">
            Architecture to Production
          </h2>
          <p className="text-steel-grey mb-12 max-w-2xl">
            Every build follows the same disciplined process. Quality gates at
            every stage. No shortcuts to production.
          </p>
          <ProcessTimeline steps={processSteps} accentColor="green" />
        </div>
      </section>

      {/* Quality Gates */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Quality Gates</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-8">
            Non-Negotiable Standards
          </h2>
          <div className="max-w-2xl space-y-3">
            {qualityGates.map((gate, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-3 p-3 rounded-lg border border-surface-border bg-surface/30"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-terminal-green/10 text-terminal-green flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5"
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
                </span>
                <span className="text-sm text-off-white">{gate}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 md:py-24 bg-charcoal/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Technology</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-4">
            What We Build With
          </h2>
          <p className="text-steel-grey mb-8 max-w-2xl">
            We are vendor-neutral. Architecture decisions come first. Tool
            selection comes second. These are the platforms we work with most
            frequently.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <BentoCard hover={false}>
                  <span className="block text-xs font-mono text-terminal-green uppercase tracking-wider mb-2">
                    {item.category}
                  </span>
                  <span className="text-sm text-steel-grey">{item.tools}</span>
                </BentoCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceFAQ items={faqItems} title="Build Questions" />

      <ServiceCTA
        title="Ready to Build?"
        description="Most builds begin as audit upsells. If you have already completed the audit, you have the architecture. Let us build it. If not, start with the diagnostic."
        ctaPrimary={{ label: "Scope Your Build", href: "/contact" }}
        ctaSecondary={{
          label: "Start with an Audit",
          href: "/services/audit",
        }}
      />
    </>
  );
}
