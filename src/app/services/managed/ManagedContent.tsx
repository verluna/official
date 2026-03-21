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

const included = [
  {
    title: "Two-Week Experiment Sprints",
    description:
      "Every two weeks: test new automations, tune existing ones, ship improvements. A cadence your internal team cannot sustain alone.",
  },
  {
    title: "Monthly Performance Reviews",
    description:
      "Metrics that matter: hours reclaimed, error rates, pipeline velocity changes, cost per automated process. Not vanity dashboards.",
  },
  {
    title: "Proactive Optimization",
    description:
      "We do not wait for things to break. Pattern analysis, performance profiling, and preemptive adjustments before problems surface.",
  },
  {
    title: "Agent Fleet Management",
    description:
      "Updates, scaling, cost optimization, and governance audits across your entire agent infrastructure. One person managing the fleet.",
  },
  {
    title: "Quarterly Business Reviews",
    description:
      "Full ROI reporting against baseline metrics. What changed, what it cost, what to invest in next. The review your leadership team actually reads.",
  },
  {
    title: "Priority Support (4-Hour SLA)",
    description:
      "Production issues get a response within 4 hours. Dedicated Slack channel. No ticket queue. Direct access to the architect who built your systems.",
  },
  {
    title: "Health Scoring Dashboard",
    description:
      "Five-dimension client health score computed weekly: delivery velocity, engagement, sentiment, scope stability, and payment. Transparent and data-driven.",
  },
  {
    title: "Architecture Extension",
    description:
      "New automations built on the existing foundation. Each sprint can introduce new agents, new integrations, or new domains into your operating layer.",
  },
];

const healthDimensions = [
  {
    dimension: "Delivery Velocity",
    description: "Are milestones being hit on time?",
  },
  {
    dimension: "Engagement",
    description: "Are you responding to requests, attending calls, providing feedback?",
  },
  {
    dimension: "Sentiment",
    description: "Tone analysis across communications. Early warning for dissatisfaction.",
  },
  {
    dimension: "Scope Stability",
    description: "How many change requests versus original agreement? Stability signals health.",
  },
  {
    dimension: "Payment",
    description: "On-time invoices. No outstanding amounts beyond 15 days.",
  },
];

const economics = [
  {
    label: "Internal hire (1 Marketing Ops Manager, DACH)",
    cost: "EUR 65,000 -- 85,000/year",
    notes: "Plus benefits, equipment, ramp time, management overhead. One person.",
  },
  {
    label: "Verluna Managed (1 architect + agent workforce)",
    cost: "From EUR 60,000/year",
    notes: "Delivers 3-5x throughput. No ramp time. No management overhead. Immediate production capacity.",
  },
];

const faqItems = [
  {
    id: "managed-faq-1",
    question: "What is the minimum commitment?",
    answer:
      "Three months. The first month is onboarding and baseline establishment. Months two and three are the first full sprint cycles. After the initial three months, the retainer continues month-to-month with 30-day notice to end.",
  },
  {
    id: "managed-faq-2",
    question: "Do we need to have completed a Build first?",
    answer:
      "Not necessarily, but Managed works best when there is existing infrastructure to operate and extend. If you are starting from zero, we recommend Audit then Build first. Managed is the operational layer that sustains and grows what was built.",
  },
  {
    id: "managed-faq-3",
    question: "How does the sprint rhythm work?",
    answer:
      "Two-week cycles. Sprint planning on Monday (30 min with your team to prioritize). Async execution during the sprint. Demo and retrospective at sprint end. You always know what is being worked on and what shipped.",
  },
  {
    id: "managed-faq-4",
    question: "What if we want to bring operations in-house later?",
    answer:
      "That is the goal. The documentation and knowledge transfer are continuous, not just at exit. When you are ready to hire an internal team, we help with the transition: handoff documentation, role scoping, and optionally interviewing candidates. No lock-in.",
  },
  {
    id: "managed-faq-5",
    question: "How do you measure success?",
    answer:
      "Every managed engagement has baseline metrics established in month one. Common KPIs: hours reclaimed per week, automation error rate, pipeline velocity change, cost per automated process, and coverage (percentage of addressable operations running autonomously). Quarterly reviews report against these baselines.",
  },
];

export function ManagedContent() {
  return (
    <>
      <ServiceHero
        badge="Managed Agent Operations"
        badgeVariant="purple"
        title="Your Agent Operations Team, Without the Hiring Timeline"
        subtitle="Capacity without headcount. Operations without overhead."
        description="Building the system is the beginning, not the end. Operations need continuous tuning, new automations, performance monitoring, and someone who understands the architecture well enough to extend it. One Verluna architect with an AI agent workforce delivers the throughput of a 3-to-5-person internal team. On two-week experiment sprints."
        price="From EUR 5,000/month"
        timeline="Ongoing"
        accentColor="purple"
        ctaPrimary={{ label: "Discuss a Retainer", href: "/contact" }}
        ctaSecondary={{
          label: "Start with an Audit",
          href: "/services/audit",
        }}
      />

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-charcoal/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Included</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-4">
            Everything in the Retainer
          </h2>
          <p className="text-steel-grey mb-8 max-w-2xl">
            Not just monitoring. Active optimization, new builds, performance
            reporting, and strategic architecture extension every sprint.
          </p>
          <DeliverableGrid deliverables={included} accentColor="purple" />
        </div>
      </section>

      {/* Why Managed */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Why Managed</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-4">
            Automations Do Not Maintain Themselves
          </h2>
          <div className="max-w-3xl">
            <p className="text-steel-grey leading-relaxed mb-6">
              Every automation degrades. APIs change. Data schemas drift. Business
              rules evolve. New tools enter the stack. The system that was perfect
              at launch is suboptimal within 90 days without active maintenance.
            </p>
            <p className="text-steel-grey leading-relaxed mb-6">
              Most companies discover this the hard way: automations break
              silently. Data quality erodes. The team reverts to manual processes
              because nobody has time to debug the pipeline. The investment in the
              Build erodes because nobody owns the operations.
            </p>
            <p className="text-off-white leading-relaxed font-medium">
              Managed Operations prevents that decay. We own the health of your
              agent infrastructure the way a DevOps team owns the health of your
              cloud infrastructure. Proactive, measured, and continuously improving.
            </p>
          </div>
        </div>
      </section>

      {/* Health Scoring */}
      <section className="py-16 md:py-24 bg-charcoal/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Health Scoring</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-4">
            Five-Dimension Health Model
          </h2>
          <p className="text-steel-grey mb-8 max-w-2xl">
            Client health is computed weekly across five dimensions, each scored
            1-5. Aggregate score below 20 triggers a yellow alert. Below 15
            triggers immediate intervention. Transparent and automated.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {healthDimensions.map((dim, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <BentoCard hover={false} className="text-center h-full">
                  <div className="w-10 h-10 rounded-full bg-electric-purple/10 text-electric-purple border border-electric-purple/20 flex items-center justify-center font-mono text-sm mx-auto mb-3">
                    {i + 1}
                  </div>
                  <h4 className="font-medium text-off-white text-sm mb-2">
                    {dim.dimension}
                  </h4>
                  <p className="text-xs text-steel-grey leading-relaxed">
                    {dim.description}
                  </p>
                </BentoCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Economics */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Economics</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-8">
            The Math
          </h2>
          <div className="max-w-3xl space-y-4">
            {economics.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <BentoCard hover={false}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h4 className="font-medium text-off-white">
                      {item.label}
                    </h4>
                    <span className="font-mono text-electric-purple text-sm">
                      {item.cost}
                    </span>
                  </div>
                  <p className="text-sm text-steel-grey">{item.notes}</p>
                </BentoCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion */}
      <section className="py-16 md:py-24 bg-charcoal/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Expansion</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-4">
            How Managed Relationships Grow
          </h2>
          <div className="max-w-3xl">
            <p className="text-steel-grey leading-relaxed mb-6">
              Managed engagements naturally expand. Once your first domain is
              running autonomously, adjacent domains become obvious candidates.
              Lead routing works, so now attribution needs the same treatment.
              Marketing ops is automated, so customer success wants the same
              architecture.
            </p>
            <p className="text-steel-grey leading-relaxed">
              Expansion triggers: health score green for 6+ consecutive weeks.
              Client achieves a key result and asks &quot;what is next?&quot;
              Adjacent team mentions a problem the managed architect recognizes.
              Growth is organic, not upsold.
            </p>
          </div>
        </div>
      </section>

      <ServiceFAQ items={faqItems} title="Managed Operations Questions" />

      <ServiceCTA
        title="Operations Without the Overhead"
        description="One architect. An AI agent workforce. The throughput of a 3-5 person team. Two-week sprints. Monthly reports. No hiring timeline."
        ctaPrimary={{ label: "Discuss a Retainer", href: "/contact" }}
        ctaSecondary={{
          label: "Start with an Audit",
          href: "/services/audit",
        }}
      />
    </>
  );
}
