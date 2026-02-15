// FAQ page copy — StoryBrand SB7 aligned
// Every answer reframed around the customer's journey, not Verluna's process.
// New "Not Ready Yet?" category for objection handling with transitional CTAs.

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
  pageHeading: "Questions Before You Build",
  pageSubheading:
    "Every answer below is written from your perspective. If your question is not here, book a call and we will answer it live.",

  categories: [
    {
      title: "Getting Started",
      items: [
        {
          id: "gs-1",
          question: "What does the first week look like?",
          answer:
            "You fill out a brief intake form about your stack and challenges. Within 48 hours, we schedule a 30-minute discovery call. On that call, we diagnose your top 3 automation opportunities and recommend a track. If it is a fit, you get a proposal with fixed scope, fixed price, and a start date within 2 weeks. If it is not a fit, you still walk away with actionable insights.",
        },
        {
          id: "gs-2",
          question: "How fast will I see results?",
          answer:
            "Track A (Audit): you have a complete diagnostic with prioritized fixes in 2-3 weeks. Track B (Ops): your first automation is live and running by end of week 1, with full deployment in 4-8 weeks. Track C (Agents): you have a working prototype against your real data within 2 weeks, full deployment in 6-12 weeks.",
        },
        {
          id: "gs-3",
          question: "How much does it cost?",
          answer:
            "GTM Audits start at $10,000. Autonomous Ops projects range from $15,000 to $50,000 depending on the number of workflows and integrations. Custom AI Agents start at $25,000. All pricing is fixed scope. No hourly billing, no scope creep surprises. We include 30 days of post-launch support in every engagement.",
        },
        {
          id: "gs-4",
          question: "What if I need ongoing support after the project?",
          answer:
            "Every project includes 30 days of post-launch support. After that, many clients keep us on a monthly retainer for continuous optimization, new workflow builds, and AI agent tuning. Retainers are optional and month-to-month. The systems we build are designed to run without us.",
        },
      ],
    },
    {
      title: "Your Stack",
      items: [
        {
          id: "stack-1",
          question: "Will you work with the tools I already have?",
          answer:
            "Yes. We build on top of your existing stack. We specialize in HubSpot and Salesforce as primary CRMs, n8n for automation, and Python and FastAPI for custom integrations. We also work with Clearbit, Apollo, ZoomInfo, Slack, Google Workspace, and most common GTM tools. If something needs to change, we tell you why and handle the migration.",
        },
        {
          id: "stack-2",
          question: "Do I need to rip out what I have and start over?",
          answer:
            "No. Our approach is enhance and extend, not rip and replace. We assess what you have, fix what is broken, and build new layers on top. The only time we recommend replacing a tool is when it is actively blocking your growth and the cost of keeping it exceeds the cost of migrating.",
        },
        {
          id: "stack-3",
          question: "Who maintains the systems after you leave?",
          answer:
            "Your team does. Every system we build ships with documentation, runbooks, monitoring dashboards, and a training session. We design for handoff from day one. For complex AI agents or high-volume automation suites, we recommend a support retainer, but it is optional. You own the code and the infrastructure.",
        },
        {
          id: "stack-4",
          question: "Is my data safe?",
          answer:
            "Yes. We follow security best practices: encrypted connections, minimal access, signed NDAs, and data handling agreements. We never store your data beyond what is necessary for the build. For AI agents, we can deploy entirely within your infrastructure so data never leaves your environment.",
        },
      ],
    },
    {
      title: "Working Together",
      items: [
        {
          id: "work-1",
          question: "How much of my team's time will this take?",
          answer:
            "Minimal. We need 2-3 hours of stakeholder time during discovery (usually split across a few short calls) and access to your tools. After that, we work independently and deliver weekly updates. We embed in your Slack or Teams for async questions. Your team stays focused on their work.",
        },
        {
          id: "work-2",
          question: "What if our requirements change mid-project?",
          answer:
            "Scope changes happen. We handle them transparently. If new requirements emerge, we scope the impact, propose an adjustment, and get your approval before changing anything. We use fixed-scope phases so changes are contained and predictable. No surprise invoices.",
        },
        {
          id: "work-3",
          question: "How do you measure success?",
          answer:
            "We define success criteria before writing any code. Every project ships with before-and-after metrics: hours saved, lead response time reduction, data accuracy improvement, pipeline attributed. We provide a post-launch report that shows exactly what changed and by how much.",
        },
        {
          id: "work-4",
          question: "What kind of ROI should I expect?",
          answer:
            "Most clients see positive ROI within 90 days. Common outcomes: 15-20 hours per week saved on manual tasks, 95% faster lead response times, 25-40% improvement in pipeline attribution accuracy, and $50K+ per year in recovered pipeline leakage. We provide ROI projections specific to your stack in every proposal.",
        },
      ],
    },
    {
      title: "Not Ready Yet?",
      items: [
        {
          id: "nr-1",
          question: "What if I am not sure I need automation?",
          answer:
            "If your team spends more than 5 hours per week on manual data entry, lead routing, report building, or CRM cleanup, you need automation. If your lead response time is over 5 minutes, you need automation. If nobody on your team can explain your full data flow from first touch to closed-won, you at least need an audit. Our free 30-minute call will give you clarity either way.",
        },
        {
          id: "nr-2",
          question: "Can I start small?",
          answer:
            "Absolutely. The GTM Audit (Track A) is designed exactly for this. In 2-3 weeks, you get a complete picture of your stack, a prioritized list of fixes, and enough quick wins to show immediate value. Many clients start with the audit and move to Track B or C once they see the roadmap. There is no commitment beyond the current engagement.",
        },
        {
          id: "nr-3",
          question: "What if we have tried automation before and it did not work?",
          answer:
            "Most failed automation projects fail for one of three reasons: they were built without understanding the data flow, they lacked error handling and monitoring, or nobody documented how they worked. We build differently. Every system starts with a data flow map, ships with monitoring from day one, and includes full documentation and team training. Our 30-day post-launch support ensures nothing falls through the cracks after handoff.",
        },
        {
          id: "nr-4",
          question: "I do not have a technical team. Can you still help?",
          answer:
            "Yes. About half our clients do not have in-house engineering. We build systems that non-technical teams can operate. Dashboards, not terminals. Alerts, not log files. Runbooks with screenshots, not README files. And our training sessions are designed for ops and marketing teams, not developers.",
        },
        {
          id: "nr-5",
          question: "What if I just want advice, not a build?",
          answer:
            "Start with the GTM Audit. It is our advisory product. You get a complete diagnostic, a prioritized roadmap, and an executive presentation you can take to your leadership team. If you decide to build internally, the roadmap gives you everything you need. If you decide to hire us for the build, the audit cost is credited toward your Track B or C engagement.",
        },
      ],
    },
  ],

  bottomCta: {
    heading: "Still Have Questions?",
    description:
      "Book a free 30-minute call. No pitch. We answer your questions, look at your stack, and tell you the 3 highest-impact automations. Whether you hire us or not.",
    ctaPrimary: { label: "Book Your Free Audit Call", href: "/contact" },
    ctaSecondary: { label: "Download GTM Checklist", href: "/resources/gtm-checklist" },
  },
};
