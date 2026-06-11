// Services copy, v2 (2026-06)
// Three engagements plus an advisory track. Plain, confident, concrete.
// Audience: European companies adapting systems, workflows, and workforce
// for the agentic era. No hype verbs, no em-dashes, no numbered steps.

export interface Phase {
  name: string;
  timing: string;
  description: string;
}

export interface Deliverable {
  title: string;
  description: string;
}

export interface EngagementSummary {
  id: "managed" | "audit" | "build";
  name: string;
  href: string;
  price: string;
  priceNote: string;
  summary: string;
}

export interface PlainAnswer {
  question: string;
  answer: string;
}

/* ===== Overview page ===== */

export const overviewCopy = {
  heading: "Three engagements, one practice.",
  subheading:
    "Audit what you have, build what is missing, then run it as an ongoing operation. Most clients move through all three. You can enter at any point.",
};

export const engagements: EngagementSummary[] = [
  {
    id: "managed",
    name: "Managed Agent Operations",
    href: "/services/managed",
    price: "EUR 8-15K/month",
    priceNote: "6-month minimum",
    summary:
      "We run your agent fleet as an ongoing practice: monitoring, governance, iteration, and new capabilities every month. Your team focuses on the business. We keep the autonomy reliable.",
  },
  {
    id: "audit",
    name: "Readiness Audit",
    href: "/services/audit",
    price: "EUR 7-10K",
    priceNote: "2-3 weeks",
    summary:
      "We map your systems, data, and workflows, then deliver a prioritized agent roadmap with effort and risk per item. The fastest way to replace opinions about AI with a plan.",
  },
  {
    id: "build",
    name: "System Build",
    href: "/services/build",
    price: "EUR 20-60K",
    priceNote: "fixed scope",
    summary:
      "One agent system designed, built, and deployed to production. Integrated with your stack, observable from day one, handed over with documentation your team can maintain.",
  },
];

export const engagementPath: { name: string; description: string }[] = [
  {
    name: "Audit",
    description:
      "Two to three weeks of diagnosis. You learn what is ready for autonomy, what is not, and what to do first.",
  },
  {
    name: "Build",
    description:
      "The top priority from the audit becomes a production system. Fixed scope, agreed before work begins.",
  },
  {
    name: "Operate",
    description:
      "Managed operations keeps the system reliable and extends it month by month. This is where the value compounds.",
  },
];

export const plainAnswers: PlainAnswer[] = [
  {
    question: "What do we own after an engagement?",
    answer:
      "Everything. Code, documentation, architecture decisions, runbooks, and agent configurations are yours. The handoff is written so your team can maintain and extend the systems without us.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Fixed scope, fixed price. The audit is EUR 7-10K depending on stack complexity. Builds are scoped and priced before work begins. Managed operations is a flat monthly fee. No hourly billing, no surprise invoices.",
  },
  {
    question: "How much of our team's time is needed?",
    answer:
      "Audit: 3-5 hours total. Build: a weekly sync plus async feedback. Managed: a short planning call every month and a review every quarter. We design for minimal disruption.",
  },
  {
    question: "Do you work with our existing tools?",
    answer:
      "Yes. We build on your stack rather than replacing it. Architecture decisions come first, tool selection second, and governance is designed in from the start, including EU AI Act obligations.",
  },
];

/* ===== Readiness Audit ===== */

export const auditCopy = {
  name: "Readiness Audit",
  heading: "Know what is ready for autonomy before you spend on it.",
  intro:
    "The Readiness Audit is a two-to-three-week diagnostic. We map your systems, data, and workflows, score what is ready for agents and what is not, and deliver a roadmap your leadership can act on.",
  price: "EUR 7-10K",
  priceNote: "2-3 weeks, fixed price",
  whoFor: [
    "Operations leaders who need clarity before committing budget",
    "Teams running five or more tools that do not work as one system",
    "Companies that have piloted AI in experiments but run nothing in production",
  ],
  notFor: [
    "Companies that want a single tool configured",
    "Organizations not ready to act on findings within 90 days",
  ],
  deliverables: [
    {
      title: "Architecture map",
      description:
        "Your stack as it actually works: data flows, decision points, and integration gaps. A reference your team keeps using after we leave.",
    },
    {
      title: "Readiness scorecard",
      description:
        "Your operations scored across six dimensions: routing, specialization, governance, memory, cadences, and observability.",
    },
    {
      title: "Opportunity map",
      description:
        "Every process where agents can replace manual work, ranked by expected return, effort, and risk.",
    },
    {
      title: "Three priority recommendations",
      description:
        "The three highest-leverage changes, specific enough to scope as fixed-price builds.",
    },
    {
      title: "90-day roadmap",
      description:
        "A sequenced plan: quick wins first, structural changes second, optimization third.",
    },
    {
      title: "Walkthrough session",
      description:
        "Sixty minutes with your team. We go through every finding and what to do about it.",
    },
  ] as Deliverable[],
  phases: [
    {
      name: "Discover",
      timing: "Days 1-3",
      description:
        "We interview three to five stakeholders, get read access to your stack, and map how work actually moves through your systems. Not how the org chart says it moves.",
    },
    {
      name: "Analyze",
      timing: "Days 4-8",
      description:
        "Data quality, integration health, process bottlenecks. Every finding is quantified: hours lost, error rates, where value leaks.",
    },
    {
      name: "Design",
      timing: "Days 9-12",
      description:
        "We draft the target architecture. Where agents should operate, where humans must decide, and what each change would return.",
    },
    {
      name: "Hand over",
      timing: "Final days",
      description:
        "You receive the full package and a walkthrough with your team. The roadmap is yours, whether you build with us or not.",
    },
  ] as Phase[],
  pricingNotes: [
    "Fixed price within the range, set by stack complexity before we start.",
    "Your team commits 3-5 hours in total across the engagement.",
    "The audit fee is credited toward a System Build started within 60 days.",
  ],
};

/* ===== System Build ===== */

export const buildCopy = {
  name: "System Build",
  heading: "One agent system, built to production.",
  intro:
    "A System Build turns one scoped opportunity into a working production system. Fixed scope and fixed price, agreed before any code is written. The result is deployed, observable, documented, and owned by you.",
  price: "EUR 20-60K",
  priceNote: "fixed scope, priced before start",
  whoFor: [
    "Teams ready to move from diagnosis to a production system",
    "Companies with a clear, well-scoped problem and the data to support it",
    "Organizations that want working infrastructure, not another prototype",
  ],
  notFor: [
    "Teams still deciding where agents should operate. Start with the audit.",
    "Open-ended research projects without a defined outcome",
  ],
  deliverables: [
    {
      title: "Production system",
      description:
        "Agents wired into your CRM, support desk, or data stack, running on real data in your environment. Not a staging demo.",
    },
    {
      title: "Integration layer",
      description:
        "Connections to your existing tools with validation on every data flow in and out.",
    },
    {
      title: "Monitoring and alerting",
      description:
        "Dashboards showing what each agent did, what it cost, and whether it worked. Alerts before problems become incidents.",
    },
    {
      title: "Decision records",
      description:
        "Every architecture choice documented: the problem, the options, the decision, the risks. Your team can reason about the system after we leave.",
    },
    {
      title: "Runbooks",
      description:
        "Operating guides written so anyone on your team can troubleshoot without calling us.",
    },
    {
      title: "Training and support",
      description:
        "A hands-on session with your team and 30 days of post-launch support. Nobody is left alone on day one.",
    },
  ] as Deliverable[],
  phases: [
    {
      name: "Design",
      timing: "Week 1",
      description:
        "Audit findings, or a fresh scoping session, become a concrete architecture: agent topology, governance rules, human checkpoints. You sign off before we build.",
    },
    {
      name: "Build",
      timing: "Weeks 2-4",
      description:
        "Each component is built against a written validation spec, with error handling and tests from the start. Weekly syncs keep your team in the loop.",
    },
    {
      name: "Integrate",
      timing: "Weeks 4-6",
      description:
        "Components are wired together and tested end to end with production-like data, including failure scenarios: downtime, bad input, rate limits.",
    },
    {
      name: "Hand over",
      timing: "Final weeks",
      description:
        "Production deployment with a runbook, the full documentation package, a team training session, and 30 days of support.",
    },
  ] as Phase[],
  pricingNotes: [
    "Scope and price are fixed in writing before work begins.",
    "Scope changes are documented and priced separately, never absorbed silently.",
    "Everything we build is yours: code, documentation, and configuration.",
  ],
};

/* ===== Managed Agent Operations ===== */

export const managedCopy = {
  name: "Managed Agent Operations",
  heading: "We run your agents. You run your business.",
  intro:
    "Agent systems do not maintain themselves. APIs change, data drifts, business rules evolve, and the system that was perfect at launch degrades within months. Managed Agent Operations is the ongoing practice that prevents the decay: monitoring, governance, iteration, and new capabilities every month.",
  price: "EUR 8-15K/month",
  priceNote: "6-month minimum",
  whoFor: [
    "Companies with agent systems in production, often after a build with us",
    "Teams that need operations capacity without a hiring timeline",
    "Organizations whose compliance function needs governance reporting it can stand behind",
  ],
  notFor: [
    "Companies starting from zero. Begin with the audit, then build.",
    "Teams looking for a ticket queue. This is a working partnership.",
  ],
  deliverables: [
    {
      title: "Continuous monitoring",
      description:
        "Every deployed agent is monitored and evaluated. We see degradation before your team feels it.",
    },
    {
      title: "Monthly capability releases",
      description:
        "One new capability every month, planned with your leadership. New agents, new integrations, new domains.",
    },
    {
      title: "Governance reporting",
      description:
        "What ran autonomously, what required approval, what changed. Reporting your compliance team can stand behind, aligned with EU AI Act obligations.",
    },
    {
      title: "Proactive maintenance",
      description:
        "API changes, schema drift, and rule changes are handled before they break anything. No silent failures.",
    },
    {
      title: "Direct access",
      description:
        "A direct line to the architect who knows your systems, with defined response times for production issues.",
    },
    {
      title: "Quarterly reviews",
      description:
        "Return on investment reported against the baseline we set in month one. What changed, what it cost, what to do next.",
    },
  ] as Deliverable[],
  phases: [
    {
      name: "Onboard",
      timing: "Month 1",
      description:
        "We establish baselines, take over operation of what exists, and agree the governance rules: what runs autonomously and what needs a human.",
    },
    {
      name: "Operate",
      timing: "Every week",
      description:
        "Monitoring, evaluation, and tuning across the fleet. Issues are found and fixed before they reach your team.",
    },
    {
      name: "Release",
      timing: "Every month",
      description:
        "A new capability is planned with your leadership and shipped. The system grows instead of standing still.",
    },
    {
      name: "Review",
      timing: "Every quarter",
      description:
        "Results against baseline, in plain numbers. Together we decide where the next quarter's investment goes.",
    },
  ] as Phase[],
  pricingNotes: [
    "Flat monthly fee within the range, set by fleet size and governance requirements.",
    "Six-month minimum. Operations work needs time to compound.",
    "Limited to a small number of concurrent clients by design.",
  ],
};

/* ===== Architecture Advisory (consulting) ===== */

export const consultingCopy = {
  name: "Architecture Advisory",
  heading: "Your engineers build. We guide the architecture.",
  intro:
    "Advisory for companies building agent systems with their own engineering teams. We bring the patterns from production deployments: domain decomposition, governance, autonomy classification, and the infrastructure decisions that determine whether agents scale or stall. We design the blueprint. Your team builds it.",
  price: "Scoped per engagement",
  priceNote: "fixed price, agreed before start",
  topics: [
    {
      title: "Agent strategy",
      description:
        "Where agents should operate in your organization, which processes can run autonomously, and which need human oversight.",
    },
    {
      title: "Domain decomposition",
      description:
        "Breaking operations into bounded domains with clear ownership, inputs, and outputs. The foundation that prevents the one-agent-does-everything failure.",
    },
    {
      title: "Governance design",
      description:
        "What runs autonomously, what requires approval, and how escalation works. Built for EU AI Act compliance from the architecture layer, not retrofitted.",
    },
    {
      title: "Platform selection",
      description:
        "Vendor-neutral guidance on orchestration, models, memory, and tooling. Based on production experience, not marketing material.",
    },
    {
      title: "Team structure",
      description:
        "How to staff for agent operations: roles, hiring profiles, and the collaboration model between engineers and agents.",
    },
    {
      title: "Cost and observability",
      description:
        "What to measure, what dashboards should show, and how to keep agent costs predictable instead of discovering them on the invoice.",
    },
  ] as Deliverable[],
  formats: [
    {
      title: "Architecture workshop",
      duration: "1-2 days",
      description:
        "An intensive working session with your engineering and operations teams. You leave with a documented architecture blueprint.",
    },
    {
      title: "Architecture review",
      duration: "About a week",
      description:
        "We review your existing or proposed agent architecture against production patterns. You get a written assessment with specific recommendations and risk areas.",
    },
    {
      title: "Team training",
      duration: "2-4 sessions",
      description:
        "Structured training for your engineers on agent architecture patterns: decomposition, governance, autonomy classification, and operations.",
    },
    {
      title: "Ongoing advisory",
      duration: "Monthly",
      description:
        "Standing access to an architect for design reviews and technical decisions as your team builds. Guidance, not execution.",
    },
  ],
  phases: [
    {
      name: "Frame",
      timing: "First session",
      description:
        "We define the problem, agree the format, and gather the context your architecture has to survive: systems, constraints, regulation, team.",
    },
    {
      name: "Work",
      timing: "Core sessions",
      description:
        "Workshops, reviews, or training with your team. Every session works on your real architecture, not abstract examples.",
    },
    {
      name: "Document",
      timing: "Close",
      description:
        "You receive the blueprint, decision records, and recommendations in writing. Your team builds against them at their own pace.",
    },
  ] as Phase[],
  pricingNotes: [
    "Scoped and priced per engagement, fixed before work begins.",
    "Advisory can convert into a System Build if you want us to implement parts of the blueprint.",
    "All deliverables are vendor-neutral and remain yours.",
  ],
};
