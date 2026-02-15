// Home page copy — StoryBrand SB7 aligned
// Customer = hero. Verluna = guide. Every section maps to the SB7 framework.

export interface HeroCopy {
  badge: string;
  headline: string[];
  subheadline: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  techStack: string[];
}

export interface TrustBarCopy {
  label: string;
  metricsLine: string;
}

export interface GuideIntroCopy {
  sectionLabel: string;
  heading: string;
  empathy: string;
  authority: string;
  metrics: { value: string; label: string }[];
}

export interface PlanStep {
  number: number;
  title: string;
  description: string;
  color: "blue" | "green" | "purple";
  href: string;
}

export interface PlanStepsCopy {
  sectionLabel: string;
  heading: string;
  subheading: string;
  steps: PlanStep[];
}

export interface SuccessStory {
  industry: string;
  metric: string;
  result: string;
  caseStudyId: string;
}

export interface SuccessStoriesCopy {
  sectionLabel: string;
  heading: string;
  stories: SuccessStory[];
}

export interface CtaCopy {
  heading: string;
  riskReversal: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export interface HomeCopy {
  hero: HeroCopy;
  trustBar: TrustBarCopy;
  guideIntro: GuideIntroCopy;
  planSteps: PlanStepsCopy;
  successStories: SuccessStoriesCopy;
  cta: CtaCopy;
}

export const homeCopy: HomeCopy = {
  hero: {
    badge: "GTM Engineering Platform",
    headline: [
      "Your GTM Runs on",
      "Spreadsheets and Slack Pings.",
      "It Should Run on Code.",
    ],
    subheadline:
      "You built the team. You bought the tools. But leads still leak, attribution is guesswork, and your ops team spends 20 hours a week on tasks a script could handle in seconds.",
    ctaPrimary: { label: "Book Your Free Audit Call", href: "/contact" },
    ctaSecondary: { label: "Download GTM Checklist", href: "/resources/gtm-checklist" },
    techStack: ["n8n", "Python", "HubSpot", "Claude", "Salesforce", "FastAPI"],
  },

  trustBar: {
    label: "Trusted by Revenue Teams",
    metricsLine: "50+ systems built. 2,000+ hours automated. $600K+ in recovered pipeline.",
  },

  guideIntro: {
    sectionLabel: "Why Verluna",
    heading: "We Have Seen This Before. We Know How to Fix It.",
    empathy:
      "Every growing company hits the same wall. The CRM is a mess, lead routing is a spreadsheet, and nobody trusts the attribution numbers. Your team is smart enough to see the problem but buried too deep in manual work to solve it. We get it because we have lived it across 14 builds, 6 industries, and teams from 5 to 200 people.",
    authority:
      "Verluna is a GTM engineering firm. We do not consult on strategy and hand you a slide deck. We write the code, build the workflows, and deploy the systems that make your revenue operations autonomous. 8 years of building growth infrastructure. EUR 1M+ per month in managed ad spend. Teams scaled from 12 to 45.",
    metrics: [
      { value: "50+", label: "Systems Deployed" },
      { value: "2,000+", label: "Hours Automated" },
      { value: "95%", label: "Lead Response Improvement" },
      { value: "$50K+", label: "Avg. Recovered Pipeline per Client" },
    ],
  },

  planSteps: {
    sectionLabel: "The Plan",
    heading: "Three Tracks. One System.",
    subheading:
      "Every engagement starts where you are and ends where your revenue operations run themselves. Pick the track that matches your stage.",
    steps: [
      {
        number: 1,
        title: "GTM Audit",
        description:
          "We map your entire data flow in 2 weeks. You get a prioritized list of leaks, bottlenecks, and quick wins with dollar values attached. Most clients discover $50K+ per year in recoverable pipeline leakage.",
        color: "blue",
        href: "/services#audit",
      },
      {
        number: 2,
        title: "Autonomous Ops",
        description:
          "We build the automation infrastructure that eliminates manual work. Lead routing, attribution pipelines, CRM hygiene, lifecycle workflows. Your ops team gets 20+ hours per week back.",
        color: "green",
        href: "/services#ops",
      },
      {
        number: 3,
        title: "Custom AI Agents",
        description:
          "We deploy AI agents that handle judgment-based tasks: RFP analysis, QA review, lead qualification, content triage. They work 24/7, improve over time, and cost a fraction of a headcount.",
        color: "purple",
        href: "/services#agents",
      },
    ],
  },

  successStories: {
    sectionLabel: "Results",
    heading: "What Happens After the Fix",
    stories: [
      {
        industry: "B2B SaaS",
        metric: "15 hrs/week saved",
        result: "Lead response dropped from 2 days to under 5 minutes. Pipeline grew 25%.",
        caseStudyId: "001",
      },
      {
        industry: "E-commerce Tech",
        metric: "$50K/mo in ad spend reallocated",
        result: "Full attribution visibility achieved. Weekly reporting went from 8 hours to 10 minutes.",
        caseStudyId: "003",
      },
      {
        industry: "Enterprise Software",
        metric: "90% faster RFP processing",
        result: "AI agent reduced analysis from 3 days to 2 hours. RFP win rate increased 15%.",
        caseStudyId: "002",
      },
    ],
  },

  cta: {
    heading: "Stop Duct-Taping Your GTM. Start Engineering It.",
    riskReversal:
      "30 minutes. No pitch. We tell you the 3 highest-impact automations for your stack, whether you hire us or not.",
    ctaPrimary: { label: "Book Your Free Audit Call", href: "/contact" },
    ctaSecondary: { label: "Download GTM Checklist", href: "/resources/gtm-checklist" },
  },
};
