"use client";

import { motion } from "framer-motion";
import { BentoCard } from "@/components/ui";
import {
  ServiceHero,
  DeliverableGrid,
  SectionLabel,
  ServiceFAQ,
  ServiceCTA,
} from "@/components/services";

const topics = [
  {
    title: "Agent Strategy",
    description:
      "Where should agents operate in your organization? Which processes are candidates for full autonomy? Which require human oversight? Strategy grounded in production patterns, not vendor documentation.",
  },
  {
    title: "Domain Decomposition",
    description:
      "Breaking your operations into bounded domains with clear ownership, inputs, outputs, and agent classification. The architectural foundation that prevents the 'one agent that does everything' failure mode.",
  },
  {
    title: "Governance Framework",
    description:
      "What agents can do autonomously, what requires human approval, and how escalation works. Built for EU AI Act compliance from day one. Not retrofitted.",
  },
  {
    title: "Framework Selection",
    description:
      "Vendor-neutral guidance on orchestration platforms, model selection, memory architectures, and tooling. Based on production patterns across multiple deployments, not marketing materials.",
  },
  {
    title: "Team Structure",
    description:
      "How to staff for agent operations. Roles, responsibilities, hiring profiles, and the agent-human collaboration model. What your engineering team needs to own, and what agents handle.",
  },
  {
    title: "Security + Compliance",
    description:
      "Agent infrastructure security patterns: credential management, data classification, access control, audit logging, and incident response. European regulatory requirements integrated from the architecture layer.",
  },
  {
    title: "Cost Architecture",
    description:
      "Agent infrastructure cost modeling, optimization strategies, and predictability patterns. How to avoid the 'runaway API bill' problem that kills agent initiatives.",
  },
  {
    title: "Observability Design",
    description:
      "What to measure, how to measure it, and what the dashboards should show. Agent performance, cost per operation, decision quality, and drift detection.",
  },
];

const formats = [
  {
    title: "Architecture Workshop",
    duration: "1 -- 2 days",
    description:
      "Intensive working session with your engineering and operations teams. We work through your specific architecture using the six-phase methodology. You leave with a documented architecture blueprint.",
  },
  {
    title: "Architecture Review",
    duration: "1 week",
    description:
      "We review your existing or proposed agent architecture against production patterns. Deliverable: written assessment with specific recommendations, risk areas, and architectural debt identification.",
  },
  {
    title: "Team Training",
    duration: "2 -- 4 sessions",
    description:
      "Structured training on agent architecture patterns for your engineering team. Domain decomposition, governance design, autonomy classification, and operational patterns from production deployments.",
  },
  {
    title: "Ongoing Advisory",
    duration: "Monthly retainer",
    description:
      "Standing access to an architect for design reviews, technical decisions, and architecture questions as your team builds. Not a managed service. Guidance when your team needs it.",
  },
];

const faqItems = [
  {
    id: "consulting-faq-1",
    question: "How is this different from the Build service?",
    answer:
      "Build means we do the implementation. Consulting means we guide your team as they implement. Consulting is for companies with engineering capacity that need architectural direction, not execution. We design the blueprint. Your team builds it.",
  },
  {
    id: "consulting-faq-2",
    question: "Do we need a specific tech stack?",
    answer:
      "No. Consulting is vendor-neutral and framework-agnostic. We have production experience across multiple AI platforms and orchestration frameworks. The architectural patterns apply regardless of whether you use Claude, GPT, open-source models, or a combination. We guide the decisions. You make them.",
  },
  {
    id: "consulting-faq-3",
    question: "What level of engineering maturity do we need?",
    answer:
      "Your team should be able to build and deploy software. We are not teaching people to code. We are teaching software engineers how to think about agent architecture -- domain decomposition, governance, autonomy classification, and operational patterns that most teams learn the hard way through failed deployments.",
  },
  {
    id: "consulting-faq-4",
    question: "Can consulting convert to a Build engagement?",
    answer:
      "Yes. Some companies start with consulting to validate their architecture, then engage Verluna to build specific components. Others start with consulting and build everything internally. Both are valid paths. The consulting deliverables (blueprints, ADRs, governance frameworks) serve as the foundation for either approach.",
  },
  {
    id: "consulting-faq-5",
    question: "What does the ongoing advisory retainer include?",
    answer:
      "A defined number of hours per month for architecture reviews, technical decisions, and design guidance. Typically 8-16 hours/month. Access via Slack and scheduled review sessions. No sprint execution -- this is strategic advisory, not implementation capacity.",
  },
];

export function ConsultingContent() {
  return (
    <>
      <ServiceHero
        badge="Agent Architecture Consulting"
        badgeVariant="default"
        title="Design the Operating Layer Your Agents Actually Need"
        subtitle="Not a vendor. A practitioner."
        description="For companies building internal agent systems that need architectural guidance: domain decomposition, governance frameworks, autonomy classification, and the infrastructure decisions that determine whether your agents scale or stall. We work alongside your engineering team, not instead of it."
        price="Custom scope"
        timeline="Custom"
        accentColor="default"
        ctaPrimary={{ label: "Book a Strategy Session", href: "/contact" }}
        ctaSecondary={{
          label: "Read the Methodology",
          href: "/methodology",
        }}
      />

      {/* Topics */}
      <section className="py-16 md:py-24 bg-charcoal/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Topics</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-4">
            What We Consult On
          </h2>
          <p className="text-steel-grey mb-8 max-w-2xl">
            Every topic is grounded in production deployments. We have built,
            broken, and rebuilt these patterns. The guidance comes from
            experience, not theory.
          </p>
          <DeliverableGrid deliverables={topics} accentColor="default" />
        </div>
      </section>

      {/* Formats */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Formats</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-8">
            How We Work Together
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formats.map((format, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <BentoCard hover={false} className="h-full">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-off-white">
                      {format.title}
                    </h3>
                    <span className="text-xs font-mono text-steel-grey">
                      {format.duration}
                    </span>
                  </div>
                  <p className="text-sm text-steel-grey leading-relaxed">
                    {format.description}
                  </p>
                </BentoCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-16 md:py-24 bg-charcoal/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Positioning</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-8">
            What Consulting Is and Is Not
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <BentoCard hover={false}>
              <h3 className="font-semibold text-off-white mb-4">
                What this is
              </h3>
              <ul className="space-y-2">
                {[
                  "Architectural guidance from a practitioner who has shipped production agent systems",
                  "Design patterns tested across multiple enterprise deployments",
                  "Governance frameworks built for European regulatory requirements",
                  "Vendor-neutral infrastructure blueprints",
                  "Knowledge transfer to your engineering team",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-steel-grey"
                  >
                    <svg
                      className="w-4 h-4 flex-shrink-0 mt-0.5 text-terminal-green"
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

            <BentoCard hover={false}>
              <h3 className="font-semibold text-off-white mb-4">
                What this is not
              </h3>
              <ul className="space-y-2">
                {[
                  "Strategy decks without implementation guidance",
                  "Vendor-affiliated platform recommendations",
                  "Prompt engineering training",
                  "Staff augmentation or body shopping",
                  "A sales funnel for implementation services",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-steel-grey"
                  >
                    <svg
                      className="w-4 h-4 flex-shrink-0 mt-0.5 text-error"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Agent Architecture Blueprint */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>The Blueprint</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-4">
            What an Agent Infrastructure Blueprint Covers
          </h2>
          <p className="text-steel-grey mb-8 max-w-2xl">
            The core deliverable of architecture consulting. A vendor-neutral
            blueprint based on production patterns.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
            {[
              { component: "Routing", desc: "How work reaches the right agent or human" },
              { component: "Specialization", desc: "Dedicated agents per domain" },
              { component: "Governance", desc: "Autonomy rules and human checkpoints" },
              { component: "Memory", desc: "Persistent context across sessions" },
              { component: "Cadences", desc: "Scheduled operations and rhythms" },
              { component: "Observability", desc: "What happened, why, what it cost" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-4 rounded-lg border border-surface-border bg-surface/30 text-center"
              >
                <span className="block font-mono text-sm text-off-white mb-1">
                  {item.component}
                </span>
                <span className="text-xs text-steel-grey">{item.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceFAQ items={faqItems} title="Consulting Questions" />

      <ServiceCTA
        title="Architecture That Scales"
        description="The infrastructure decisions you make now determine whether your agents create value or create chaos. Get them right the first time."
        ctaPrimary={{ label: "Book a Strategy Session", href: "/contact" }}
        ctaSecondary={{
          label: "Read the Methodology",
          href: "/methodology",
        }}
      />
    </>
  );
}
