// FAQ page copy.
// Voice: plain, confident, concrete. Pricing and engagement names follow the
// 2026-06 positioning: Readiness Audit, System Build, Managed Agent Operations.

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCategoryCopy {
  title: string;
  items: FAQItem[];
}

export interface FAQCopy {
  pageHeading: string;
  pageSubheading: string;
  categories: FAQCategoryCopy[];
  bottomCta: {
    heading: string;
    description: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
  };
}

export const faqCopy: FAQCopy = {
  pageHeading: "Questions before you build",
  pageSubheading:
    "Direct answers about pricing, timelines, and how we work. If your question is not here, book a call and ask it live.",

  categories: [
    {
      title: "Getting started",
      items: [
        {
          id: "gs-1",
          question: "What does the first week look like?",
          answer:
            "You book an intro call. Thirty minutes, no pitch: you describe your operations and constraints, we ask about your stack and your team. You leave with the three highest-leverage moves for your setup, whether we work together or not. If it is a fit, you get a proposal with fixed scope, a fixed price, and a start date.",
        },
        {
          id: "gs-2",
          question: "How fast will I see results?",
          answer:
            "The Readiness Audit delivers a complete diagnostic with prioritized fixes in 2 to 3 weeks. System Builds typically run 4 to 8 weeks, with working systems shipped along the way rather than at the end. Managed Agent Operations starts producing within the first month and compounds from there.",
        },
        {
          id: "gs-3",
          question: "How much does it cost?",
          answer:
            "The Readiness Audit runs EUR 7,000 to 10,000 for a 2 to 3 week diagnostic. System Builds range from EUR 20,000 to 60,000 at fixed scope. Managed Agent Operations is EUR 8,000 to 15,000 per month with a 6-month minimum. No hourly billing, no scope creep surprises. We publish pricing because you should know what you are getting into before the first conversation.",
        },
        {
          id: "gs-4",
          question: "What if I need ongoing support after a project?",
          answer:
            "Every build includes 30 days of post-launch support. If you want agents run, monitored, and improved continuously, that is what Managed Agent Operations is for: a monthly engagement where we operate the systems alongside your team. Either way, everything we build is designed to run without us.",
        },
      ],
    },
    {
      title: "Your stack",
      items: [
        {
          id: "stack-1",
          question: "Will you work with the tools I already have?",
          answer:
            "Yes. We build on top of your existing stack. We work deepest with HubSpot and Salesforce as CRMs, n8n for automation, and Python and TypeScript for custom integrations, and we connect to Slack, Google Workspace, and most common GTM tools. If something needs to change, we tell you why and handle the migration.",
        },
        {
          id: "stack-2",
          question: "Do I need to rip out what I have and start over?",
          answer:
            "No. Our approach is enhance and extend, not rip and replace. We assess what you have, fix what is broken, and build new layers on top. The only time we recommend replacing a tool is when it actively blocks your growth and the cost of keeping it exceeds the cost of migrating.",
        },
        {
          id: "stack-3",
          question: "Who maintains the systems after you leave?",
          answer:
            "Your team does. Every system ships with documentation, runbooks, monitoring, and a training session. We design for handoff from day one. For complex agent setups, Managed Agent Operations is available, but it is a choice, not a dependency. You own the code and the infrastructure.",
        },
        {
          id: "stack-4",
          question: "Is my data safe?",
          answer:
            "Yes. Encrypted connections, minimal access, signed NDAs, and data processing agreements as standard. We never store your data beyond what the build requires. For agent deployments, we can run entirely within your infrastructure so data never leaves your environment.",
        },
      ],
    },
    {
      title: "Working together",
      items: [
        {
          id: "work-1",
          question: "How much of my team's time will this take?",
          answer:
            "Minimal. We need 2 to 3 hours of stakeholder time during discovery, usually split across a few short calls, plus access to your tools. After that we work independently and deliver weekly updates. We embed in your Slack or Teams for async questions. Your team stays focused on their work.",
        },
        {
          id: "work-2",
          question: "What if our requirements change mid-project?",
          answer:
            "Scope changes happen. If new requirements emerge, we scope the impact, propose an adjustment, and get your approval before changing anything. We work in fixed-scope phases so changes stay contained and predictable. No surprise invoices.",
        },
        {
          id: "work-3",
          question: "How do you measure success?",
          answer:
            "We define success criteria before writing any code: hours saved, response times, data accuracy, whatever matters for your case. Every project ships with before-and-after measurements and a post-launch report that shows exactly what changed and by how much.",
        },
        {
          id: "work-4",
          question: "What kind of ROI should I expect?",
          answer:
            "We do not quote generic ROI multiples, because they depend entirely on your volumes and your cost of manual work. What we do instead: every proposal includes a projection built from your actual numbers, and every engagement is measured against it. If the math does not work for your case, we tell you on the first call.",
        },
      ],
    },
    {
      title: "Not ready yet?",
      items: [
        {
          id: "nr-1",
          question: "How do I know if I actually need this?",
          answer:
            "Some signals: your team spends hours every week on manual data entry, routing, or report building. Nobody can explain your full data flow from first touch to closed-won. You have automation that breaks silently and someone finds out days later. If any of these sound familiar, a 30-minute call will give you clarity either way.",
        },
        {
          id: "nr-2",
          question: "Can I start small?",
          answer:
            "Yes. The Readiness Audit is designed for exactly this. In 2 to 3 weeks you get a complete picture of your stack, a prioritized list of fixes, and enough quick wins to show value immediately. Many clients start with the audit and move to a build once they see the roadmap. There is no commitment beyond the current engagement.",
        },
        {
          id: "nr-3",
          question: "We tried automation before and it did not stick. Why would this be different?",
          answer:
            "Most failed automation projects fail for one of three reasons: they were built without understanding the data flow, they lacked error handling and monitoring, or nobody documented how they worked. We build differently. Every system starts with a data flow map, ships with monitoring from day one, and includes documentation and team training. The 30 days of post-launch support exist so nothing falls through the cracks after handoff.",
        },
        {
          id: "nr-4",
          question: "I do not have a technical team. Can you still help?",
          answer:
            "Yes. Many of our clients have no in-house engineering. We build systems that non-technical teams can operate: dashboards instead of terminals, alerts instead of log files, runbooks with screenshots instead of README files. Training sessions are designed for ops and marketing teams, not developers.",
        },
        {
          id: "nr-5",
          question: "What if I just want advice, not a build?",
          answer:
            "Start with the Readiness Audit. It is our advisory product: a complete diagnostic, a prioritized roadmap, and an executive summary you can take to your leadership team. If you decide to build internally, the roadmap gives you everything you need. If you decide to build with us, you already know exactly what comes next.",
        },
      ],
    },
  ],

  bottomCta: {
    heading: "Still have questions?",
    description:
      "Thirty minutes, no pitch. We answer your questions, look at your stack, and tell you the three highest-leverage moves, whether you hire us or not.",
    ctaPrimary: { label: "Book an intro call", href: "/contact" },
    ctaSecondary: { label: "Readiness assessment", href: "/scorecard" },
  },
};
