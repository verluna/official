"use client";

import { motion } from "framer-motion";
import { Badge, Button, GlowCard, Accordion } from "@/components/ui";
import { SectionLabel } from "@/components/services";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "audit",
    name: "Agent Readiness Audit",
    tagline: "Find the gaps.",
    accent: "blue" as const,
    badgeVariant: "blue" as const,
    price: "EUR 5,000 -- 10,000",
    timeline: "2 weeks",
    href: "/services/audit",
    description:
      "A two-week diagnostic that maps your current stack, scores your automation maturity, and identifies the three highest-leverage agent opportunities in your go-to-market.",
    highlights: [
      "Architecture diagram of your GTM stack",
      "Automation maturity scorecard",
      "3 prioritized opportunities with ROI",
      "90-day implementation roadmap",
    ],
    idealFor: "Operations leaders who need clarity before investing.",
    ctaLabel: "Learn More",
  },
  {
    id: "build",
    name: "Agent Architecture Build",
    tagline: "Fix the systems.",
    accent: "green" as const,
    badgeVariant: "green" as const,
    price: "EUR 15,000 -- 50,000",
    timeline: "4 -- 8 weeks",
    href: "/services/build",
    description:
      "We take the top priorities from your audit and build them. Working automations, tested integrations, trained team. Not a prototype. Production.",
    highlights: [
      "Custom agent architecture",
      "Production-deployed automations",
      "Full documentation package",
      "30-day post-launch support",
    ],
    idealFor: "Teams ready to move from diagnosis to production systems.",
    ctaLabel: "Learn More",
  },
  {
    id: "managed",
    name: "Managed Agent Operations",
    tagline: "Run the operations.",
    accent: "purple" as const,
    badgeVariant: "purple" as const,
    price: "From EUR 5,000/month",
    timeline: "Ongoing",
    href: "/services/managed",
    description:
      "We run your agent infrastructure on two-week experiment sprints. Continuous optimization, monthly performance reviews, and an architect who knows your systems.",
    highlights: [
      "Two-week experiment sprints",
      "Monthly performance reports",
      "Agent fleet management",
      "Priority 4-hour response SLA",
    ],
    idealFor: "Companies that need capacity without headcount.",
    ctaLabel: "Learn More",
  },
  {
    id: "consulting",
    name: "Agent Architecture Consulting",
    tagline: "Design the layer.",
    accent: "default" as const,
    badgeVariant: "default" as const,
    price: "Custom scope",
    timeline: "Custom",
    href: "/services/consulting",
    description:
      "For companies building internal agent systems that need architectural guidance. Domain decomposition, governance, autonomy classification, and infrastructure blueprints.",
    highlights: [
      "Domain decomposition",
      "Governance framework",
      "Agent infrastructure blueprint",
      "Team training workshops",
    ],
    idealFor: "CTOs and Heads of AI building their own agent capabilities.",
    ctaLabel: "Learn More",
  },
];

const comparisonRows = [
  { label: "Best for", audit: "Understanding your gaps", build: "Getting to production", managed: "Ongoing operations", consulting: "Internal capability building" },
  { label: "Timeline", audit: "2 weeks", build: "4--8 weeks", managed: "Ongoing", consulting: "Custom" },
  { label: "Investment", audit: "EUR 5K--10K", build: "EUR 15K--50K", managed: "From EUR 5K/mo", consulting: "Custom" },
  { label: "Your team's time", audit: "3--5 hours total", build: "4--8 hours/week", managed: "2--4 hours/month", consulting: "Varies by format" },
  { label: "Deliverable", audit: "Architecture + roadmap", build: "Production systems", managed: "Continuous improvement", consulting: "Blueprints + training" },
  { label: "Post-engagement", audit: "30-day support", build: "30-day support", managed: "Ongoing retainer", consulting: "As agreed" },
];

const faqItems = [
  {
    id: "faq-1",
    question: "How do engagements typically flow?",
    answer:
      "80% of clients start with the Agent Readiness Audit. The audit identifies the highest-leverage opportunities, which naturally scopes a Build engagement. After Build, Managed Operations sustains and extends what was built. Architecture Consulting is a separate track for engineering-led organizations. You can enter at any point.",
  },
  {
    id: "faq-2",
    question: "Do we need the audit before a build?",
    answer:
      "Not technically, but we strongly recommend it. The audit ensures we solve the right problems. Companies that skip the audit tend to build automations that address symptoms, not root causes. The audit investment is credited toward the Build if you proceed within 60 days.",
  },
  {
    id: "faq-3",
    question: "What does 'agent operations' actually mean?",
    answer:
      "Agent operations is the infrastructure layer between AI capabilities and your business processes. It includes routing (directing work to the right agent or person), specialization (dedicated agents per domain), governance (rules for what runs autonomously), memory (persistent context across sessions), cadences (scheduled operations), and observability (seeing what every agent did and what it cost).",
  },
  {
    id: "faq-4",
    question: "What tech stack do you work with?",
    answer:
      "We work with your existing stack. Common integrations include HubSpot, Salesforce, custom APIs, and various enrichment tools. On the agent side, we primarily use Claude (Anthropic) and build with production-grade tooling. We are vendor-neutral on platforms -- the architecture decisions come first, tool selection comes second.",
  },
  {
    id: "faq-5",
    question: "How much of our team's time is required?",
    answer:
      "Audit: 3-5 hours total (stakeholder interviews + review sessions). Build: 4-8 hours per week (weekly syncs + feedback). Managed: 2-4 hours per month (monthly reviews + async Slack). We minimize disruption by design.",
  },
  {
    id: "faq-6",
    question: "What do we own after the engagement?",
    answer:
      "Everything. All code, documentation, architecture decisions, runbooks, and agent configurations are yours. We do not create vendor dependency by design. The documentation package is specifically written so your team can maintain and extend the systems independently.",
  },
  {
    id: "faq-7",
    question: "Are you compliant with the EU AI Act?",
    answer:
      "Governance is built into every engagement from day one, not bolted on later. We classify every agent by autonomy level, define explicit human checkpoints for high-risk decisions, and document the governance framework as a core deliverable. European regulatory compliance is a competitive advantage, not a constraint.",
  },
  {
    id: "faq-8",
    question: "What is the difference between Verluna and a traditional consultancy?",
    answer:
      "Traditional consultancies produce strategy decks and recommendations. Verluna produces working systems. We design the architecture, build the automations, deploy to production, and document everything. When we leave, you have running infrastructure, not a PowerPoint. We are practitioners, not advisors.",
  },
  {
    id: "faq-9",
    question: "Can we start with a single automation instead of a full audit?",
    answer:
      "Yes, but we will be honest: isolated automations without architectural context tend to create more problems than they solve. If you know exactly what you need and the scope is clear, we can scope a focused Build. But most companies benefit from the diagnostic first.",
  },
  {
    id: "faq-10",
    question: "What is your pricing model?",
    answer:
      "Fixed scope, fixed price. No hourly billing, no surprise invoices. The Audit has a fixed range (EUR 5,000-10,000 depending on stack complexity). Build engagements are scoped and priced before work begins. Managed is a monthly retainer with defined deliverables. You always know the cost before you commit.",
  },
];

const accentBorderMap: Record<string, string> = {
  blue: "border-l-signal-blue",
  green: "border-l-terminal-green",
  purple: "border-l-electric-purple",
  default: "border-l-steel-grey",
};

const accentTextMap: Record<string, string> = {
  blue: "text-signal-blue",
  green: "text-terminal-green",
  purple: "text-electric-purple",
  default: "text-steel-grey",
};

export function ServicesOverviewContent() {
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
            <Badge variant="default">Services</Badge>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter">
              Your Path to Agent-Native Operations
            </h1>
            <p className="mt-6 text-lg text-steel-grey leading-relaxed max-w-3xl">
              Every engagement starts with the same question: where are humans
              doing work that agents should handle? From there, the scope depends
              on where you are. Some companies need a diagnostic. Some need
              implementation. Some need an ongoing operations partner. Some need
              architectural guidance for their own engineering teams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link href={service.href} className="block h-full">
                  <GlowCard
                    glowColor={service.accent === "default" ? "green" : service.accent}
                    className={`h-full p-6 border-l-4 ${accentBorderMap[service.accent]}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant={service.badgeVariant}>
                        {service.name}
                      </Badge>
                      <div className="flex items-center gap-3 text-xs font-mono text-steel-grey">
                        <span>{service.timeline}</span>
                        <span className="text-surface-border">|</span>
                        <span className={accentTextMap[service.accent]}>
                          {service.price}
                        </span>
                      </div>
                    </div>

                    <p className={`font-mono text-sm mb-3 ${accentTextMap[service.accent]}`}>
                      {service.tagline}
                    </p>

                    <p className="text-steel-grey text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {service.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-center gap-2 text-sm text-off-white"
                        >
                          <CheckCircle
                            className={`w-3.5 h-3.5 flex-shrink-0 ${accentTextMap[service.accent]}`}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <p className="text-xs text-steel-grey italic">
                      {service.idealFor}
                    </p>

                    <div className="mt-4 pt-4 border-t border-surface-border">
                      <span
                        className={`inline-flex items-center gap-1 text-sm font-medium ${accentTextMap[service.accent]}`}
                      >
                        {service.ctaLabel}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </GlowCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How engagements flow */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Engagement Flow</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-4">
            How Engagements Typically Progress
          </h2>
          <p className="text-steel-grey mb-12 max-w-2xl">
            Most clients follow the same path. The audit discovers. The build
            implements. Managed operations sustains and extends. Architecture
            consulting runs as a parallel track for engineering-led
            organizations.
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0">
            {[
              { label: "Audit", sub: "Diagnose", color: "signal-blue" },
              { label: "Build", sub: "Implement", color: "terminal-green" },
              { label: "Managed", sub: "Operate", color: "electric-purple" },
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-4 md:gap-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`flex flex-col items-center justify-center w-40 h-24 rounded-lg border bg-surface/50`}
                  style={{ borderColor: `var(--color-${step.color}, #262626)` }}
                >
                  <span className="font-mono text-sm font-medium text-off-white">
                    {step.label}
                  </span>
                  <span className="text-xs text-steel-grey mt-1">
                    {step.sub}
                  </span>
                </motion.div>
                {i < 2 && (
                  <div className="hidden md:flex items-center px-4">
                    <ArrowRight className="w-5 h-5 text-steel-grey" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-steel-grey">
            80% of clients begin with the audit. The audit investment is credited
            toward the Build if you proceed within 60 days.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-charcoal/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Compare</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-8">
            Side by Side
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-surface-border">
                  <th className="text-left py-4 pr-6 font-mono text-steel-grey uppercase tracking-wider text-xs w-40">
                    &nbsp;
                  </th>
                  <th className="text-left py-4 px-4 font-mono text-signal-blue uppercase tracking-wider text-xs">
                    Audit
                  </th>
                  <th className="text-left py-4 px-4 font-mono text-terminal-green uppercase tracking-wider text-xs">
                    Build
                  </th>
                  <th className="text-left py-4 px-4 font-mono text-electric-purple uppercase tracking-wider text-xs">
                    Managed
                  </th>
                  <th className="text-left py-4 px-4 font-mono text-steel-grey uppercase tracking-wider text-xs">
                    Consulting
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-surface-border/50"
                  >
                    <td className="py-4 pr-6 font-medium text-off-white whitespace-nowrap">
                      {row.label}
                    </td>
                    <td className="py-4 px-4 text-steel-grey">
                      {row.audit}
                    </td>
                    <td className="py-4 px-4 text-steel-grey">
                      {row.build}
                    </td>
                    <td className="py-4 px-4 text-steel-grey">
                      {row.managed}
                    </td>
                    <td className="py-4 px-4 text-steel-grey">
                      {row.consulting}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Decision Helper */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionLabel>Not Sure Where to Start?</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-4">
              Take the Agent Readiness Assessment
            </h2>
            <p className="text-steel-grey max-w-2xl mx-auto mb-8">
              12 questions. 5 minutes. You get a benchmark score across four
              dimensions plus a one-page recommendation on where to start. No
              sales call required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/scorecard" size="lg">
                Take the Assessment
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Book a Discovery Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-charcoal/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-8">
            Questions About Working With Verluna
          </h2>
          <div className="max-w-3xl">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>
    </>
  );
}
