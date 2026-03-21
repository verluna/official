"use client";

import { motion } from "framer-motion";
import { BentoCard } from "@/components/ui";
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
    title: "Architecture Diagram",
    description:
      "A complete map of your GTM stack with data flows, decision points, and integration gaps. Not a slide deck. A working reference your team uses daily.",
  },
  {
    title: "Data Quality Scorecard",
    description:
      "Field-level audit of your CRM and connected systems. Null rates, format consistency, duplicate detection, and enrichment coverage.",
  },
  {
    title: "Agent Automation Opportunity Map",
    description:
      "Every process where agents can replace manual work, ranked by ROI. Includes hours saved, error rates reduced, and implementation complexity.",
  },
  {
    title: "3 Prioritized Recommendations",
    description:
      "The three highest-leverage changes you can make, with estimated ROI for each. Specific enough to scope as build engagements.",
  },
  {
    title: "Automation Maturity Scorecard",
    description:
      "Your operations scored against industry benchmarks across six dimensions: routing, specialization, governance, memory, cadences, and observability.",
  },
  {
    title: "90-Day Implementation Roadmap",
    description:
      "A sequenced plan for the next 90 days with quick wins in month one, structural changes in month two, and optimization in month three.",
  },
];

const processSteps = [
  {
    title: "Discovery + Intake",
    duration: "Days 1-3",
    description:
      "We interview 3-5 stakeholders, review your tech stack, and map how work actually flows. Not how the org chart says it flows. How it actually moves through your systems.",
    details: [
      "Pre-discovery questionnaire sent 48 hours before kickoff",
      "30-minute stakeholder interviews (3-5 people)",
      "Tech stack inventory and access confirmation",
      "Current-state workflow documentation",
    ],
  },
  {
    title: "Analysis + Scoring",
    duration: "Days 3-7",
    description:
      "Deep analysis of your data flows, integration points, and process inefficiencies. Every finding is quantified: hours lost, error rates, revenue impact.",
    details: [
      "CRM data quality analysis (field-level)",
      "Integration mapping and health check",
      "Process timing and bottleneck identification",
      "Automation maturity scoring against benchmarks",
    ],
  },
  {
    title: "Architecture Design",
    duration: "Days 7-10",
    description:
      "We design the target-state architecture. Where should agents operate? Where should humans decide? What does the operating layer look like?",
    details: [
      "Target-state architecture diagram",
      "Agent topology design (what each agent does)",
      "Governance framework (what runs autonomously)",
      "ROI estimation for each opportunity",
    ],
  },
  {
    title: "Presentation + Handoff",
    duration: "Days 10-14",
    description:
      "You receive the full deliverable package. We walk through every finding and recommendation in a 60-minute session. The architecture becomes yours.",
    details: [
      "60-minute walkthrough with your team",
      "Full documentation package delivered",
      "90-day roadmap with prioritized next steps",
      "30 days of follow-up support included",
    ],
  },
];

const fiveQuestions = [
  "What happens when the primary data source is unavailable?",
  "What does the agent do when it receives unexpected input?",
  "Which human approves before the agent takes irreversible action?",
  "How does the client know the system is working without asking us?",
  "What does rollback look like in the first 30 days?",
];

const faqItems = [
  {
    id: "audit-faq-1",
    question: "What does our team need to prepare?",
    answer:
      "Very little. We send a pre-discovery questionnaire to gather basics (tech stack, team structure, key pain points). The real discovery happens through stakeholder interviews and system access. We need read access to your CRM and connected tools. Total time commitment from your team: 3-5 hours across 2 weeks.",
  },
  {
    id: "audit-faq-2",
    question: "What if we already know our problems?",
    answer:
      "Most companies know their symptoms but not their root causes. The audit frequently reveals that the problem leadership identified is actually downstream of a structural issue. We have yet to run an audit where the client did not discover at least one significant blind spot. The architecture diagram alone is worth the investment for most teams.",
  },
  {
    id: "audit-faq-3",
    question: "Is the audit investment credited toward a Build?",
    answer:
      "Yes. If you proceed to a Build engagement within 60 days of audit completion, the full audit fee is credited toward the Build. The audit is never a sunk cost.",
  },
  {
    id: "audit-faq-4",
    question: "Can the audit be done remotely?",
    answer:
      "Yes. Most audits are fully remote. Stakeholder interviews happen via video call. System access is provided remotely. The final presentation is a video session with your team. On-site workshops are available for DACH-based clients who prefer face-to-face.",
  },
  {
    id: "audit-faq-5",
    question: "What CRM platforms do you audit?",
    answer:
      "HubSpot and Salesforce are our deepest expertise. We also audit operations built on Pipedrive, Close, and custom CRM setups. The methodology is platform-agnostic -- the six architectural components apply regardless of tools.",
  },
];

const whoItsFor = [
  "Marketing Ops Managers spending more time maintaining automations than building new ones",
  "VP/Directors who know AI should be transforming operations but have no architecture for it",
  "Operations teams with 5+ tools that do not talk to each other properly",
  "Companies that have piloted AI in isolated experiments but have no production deployment",
  "Organizations where lead routing, data enrichment, or reporting is still manual",
];

const whoItsNotFor = [
  "Companies with fewer than 50 employees (the overhead of the audit exceeds the value)",
  "Teams looking for a single-tool implementation (we design systems, not configure tools)",
  "Organizations not ready to act on findings within 90 days",
];

export function AuditContent() {
  return (
    <>
      <ServiceHero
        badge="Agent Readiness Audit"
        badgeVariant="blue"
        title="Two Weeks to See Your Operations Clearly"
        subtitle="See your operations the way an architect sees a building."
        description="The Agent Readiness Audit is a diagnostic. We map your entire go-to-market stack, score your automation maturity against industry benchmarks, and deliver an architecture diagram with the three highest-ROI opportunities. The deliverable is a working reference, not a slide deck. Most clients use it as the basis for their next 6 months of operations investment."
        price="EUR 5,000 -- 10,000"
        timeline="2 weeks"
        accentColor="blue"
        ctaPrimary={{ label: "Book Your Audit", href: "/contact" }}
        ctaSecondary={{
          label: "Take the Free Assessment First",
          href: "/scorecard",
        }}
      />

      {/* What You Get */}
      <section className="py-16 md:py-24 bg-charcoal/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Deliverables</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-4">
            What You Walk Away With
          </h2>
          <p className="text-steel-grey mb-8 max-w-2xl">
            Every deliverable is a working reference document, not a slide in a
            deck. Your team uses these daily, not just in the review meeting.
          </p>
          <DeliverableGrid deliverables={deliverables} accentColor="blue" />
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Process</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-4">
            Week by Week
          </h2>
          <p className="text-steel-grey mb-12 max-w-2xl">
            Two weeks. Four phases. Your team commits 3-5 hours total. We handle
            the rest.
          </p>
          <ProcessTimeline steps={processSteps} accentColor="blue" />
        </div>
      </section>

      {/* Five Questions Quality Gate */}
      <section className="py-16 md:py-24 bg-charcoal/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Quality Gate</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-4">
            The Five Questions
          </h2>
          <p className="text-steel-grey mb-8 max-w-2xl">
            Every architecture we design must pass these five questions before we
            present it. If any answer is missing, the design goes back to the
            drawing board. This is not optional.
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
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-signal-blue/10 text-signal-blue border border-signal-blue/20 flex items-center justify-center font-mono text-sm">
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

      {/* Who It's For */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <SectionLabel>For You If</SectionLabel>
              <h3 className="text-2xl font-semibold tracking-tighter mb-6">
                The Audit Is Designed For
              </h3>
              <ul className="space-y-3">
                {whoItsFor.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 text-steel-grey"
                  >
                    <svg
                      className="w-4 h-4 flex-shrink-0 mt-1 text-signal-blue"
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
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <SectionLabel>Not For You If</SectionLabel>
              <h3 className="text-2xl font-semibold tracking-tighter mb-6">
                Skip the Audit If
              </h3>
              <ul className="space-y-3">
                {whoItsNotFor.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 text-steel-grey"
                  >
                    <svg
                      className="w-4 h-4 flex-shrink-0 mt-1 text-error"
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
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-24 bg-charcoal/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Results</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-8">
            What Audits Have Revealed
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                metric: "4 hrs to 90 sec",
                description:
                  "Manual attendee matching replaced with semantic AI. A process that consumed half a day now runs in under two minutes.",
              },
              {
                metric: "7 sessions, EUR 0 software",
                description:
                  "A complete multi-touch attribution architecture designed through agent-powered research. Built entirely on existing CRM infrastructure.",
              },
              {
                metric: "10 reference documents",
                description:
                  "7,179 lines of enterprise code synthesized into structured operational documentation. Implicit knowledge made explicit and searchable.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <BentoCard hover={false}>
                  <span className="block text-2xl font-mono text-signal-blue mb-3">
                    {item.metric}
                  </span>
                  <p className="text-steel-grey text-sm leading-relaxed">
                    {item.description}
                  </p>
                </BentoCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceFAQ items={faqItems} title="Audit Questions" />

      <ServiceCTA
        title="See Your Operations Clearly"
        description="Two weeks. EUR 5,000-10,000. An architecture diagram, a maturity scorecard, and the three highest-ROI opportunities in your go-to-market. The audit fee is credited if you proceed to a Build."
        ctaPrimary={{ label: "Book Your Audit", href: "/contact" }}
        ctaSecondary={{
          label: "Take the Free Assessment",
          href: "/scorecard",
        }}
      />
    </>
  );
}
