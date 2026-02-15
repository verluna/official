// Resources page copy — StoryBrand SB7 aligned
// Three lead magnets, each mapped to a service track color.
// Transitional CTAs: value-first, low commitment.

export interface LeadMagnet {
  id: string;
  title: string;
  description: string;
  valueProposition: string;
  color: "blue" | "green" | "purple";
  ctaLabel: string;
  type: "pdf" | "preview" | "assessment";
  trackAlignment: string;
  contents: string[];
}

export interface ResourcesCopy {
  pageHeading: string;
  pageSubheading: string;
  leadMagnets: LeadMagnet[];
  bottomCta: {
    heading: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
  };
}

export const resourcesCopy: ResourcesCopy = {
  pageHeading: "Free Tools to Diagnose Your GTM Stack",
  pageSubheading:
    "Every resource below gives you something actionable today. No email gates on the checklist. No fluff in the library. No trick questions in the assessment.",

  leadMagnets: [
    {
      id: "gtm-checklist",
      title: "GTM Audit Checklist",
      description:
        "A 47-point self-diagnostic for your go-to-market infrastructure. Score your data flows, integrations, lead routing, attribution, and CRM health. Takes 20 minutes. Tells you exactly where your stack is leaking.",
      valueProposition:
        "The same framework we use in $10K audit engagements, distilled into a checklist you can run yourself this afternoon.",
      color: "blue",
      ctaLabel: "Download the Checklist",
      type: "pdf",
      trackAlignment: "Track A: GTM Audit",
      contents: [
        "Data flow health check (12 points)",
        "Integration quality scoring (8 points)",
        "Lead routing audit (7 points)",
        "Attribution accuracy assessment (6 points)",
        "CRM hygiene scorecard (8 points)",
        "Priority matrix template (effort vs. impact)",
      ],
    },
    {
      id: "automation-patterns",
      title: "Automation Patterns Library",
      description:
        "14 production-tested automation patterns we deploy for clients. Each pattern includes the trigger, the logic, the tools involved, and the metrics you should track. From lead routing to lifecycle workflows to data sync pipelines.",
      valueProposition:
        "Stop reinventing workflows from scratch. These patterns are battle-tested across 50+ deployments and 6 industries.",
      color: "green",
      ctaLabel: "Browse the Patterns",
      type: "preview",
      trackAlignment: "Track B: Autonomous Ops",
      contents: [
        "Lead scoring and routing (3 patterns)",
        "CRM data hygiene automation (2 patterns)",
        "Multi-channel attribution pipeline (2 patterns)",
        "Lifecycle email triggering (3 patterns)",
        "Cross-platform data sync (2 patterns)",
        "Alert and escalation workflows (2 patterns)",
      ],
    },
    {
      id: "stack-readiness",
      title: "Stack Readiness Assessment",
      description:
        "5 questions that tell you whether your GTM stack is ready for AI agents. Not whether AI is cool. Whether your data, processes, and team are set up to actually benefit from automated intelligence. Takes 3 minutes.",
      valueProposition:
        "Most companies jump to AI agents before their data is ready. This assessment tells you if you are one of them, and what to fix first.",
      color: "purple",
      ctaLabel: "Take the Assessment",
      type: "assessment",
      trackAlignment: "Track C: Custom AI Agents",
      contents: [
        "Data readiness evaluation (structured vs. unstructured)",
        "Process documentation maturity check",
        "Integration API coverage assessment",
        "Team capacity and handoff readiness",
        "ROI projection for agent deployment",
      ],
    },
  ],

  bottomCta: {
    heading: "Want the Full Picture?",
    description:
      "The resources above give you a starting point. If you want a complete diagnostic of your GTM infrastructure with dollar values attached to every fix, book a GTM Audit.",
    ctaLabel: "Book Your Free Audit Call",
    ctaHref: "/contact",
  },
};
