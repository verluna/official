// About page copy — StoryBrand SB7 aligned
// Positive identity framing: who Verluna IS, not who it is not.
// Customer transformation leads. Founder bio as credibility proof.

export interface MissionCopy {
  heading: string;
  paragraphs: string[];
}

export interface FounderCopy {
  name: string;
  role: string;
  credibilityBio: string;
  transformationStatement: string;
  careerHighlights: { metric: string; context: string }[];
}

export interface ValueItem {
  title: string;
  description: string;
  principle: string;
}

export interface AboutCopy {
  mission: MissionCopy;
  founder: FounderCopy;
  values: ValueItem[];
}

export const aboutCopy: AboutCopy = {
  mission: {
    heading: "Revenue Teams Deserve Infrastructure, Not Band-Aids",
    paragraphs: [
      "Verluna is a GTM engineering firm. We build the code, workflows, and AI systems that turn manual go-to-market operations into autonomous revenue infrastructure.",
      "Most companies outgrow their tools before they outgrow their market. The CRM was configured three years ago by someone who left. Lead routing lives in a spreadsheet. Attribution is a best guess. The ops team spends half their week on work that should take zero human hours.",
      "We exist for the teams that are tired of patching and ready to build properly. Every engagement starts with your data, your workflows, and your stack. We map what is broken, quantify what it costs, and build the systems that fix it permanently.",
      "The result is not a report. It is running code. Automated pipelines. AI agents that work while your team sleeps. Revenue operations that scale without adding headcount.",
    ],
  },

  founder: {
    name: "Tolga Oral",
    role: "Founder & GTM Engineer",
    credibilityBio:
      "8 years building revenue systems across e-commerce, fintech, gaming, travel, healthcare, and B2B SaaS. Managed EUR 1M+ per month in ad spend. Grew teams from 12 to 45 people. Led 120K app installs and EUR 500K in funding for a fintech startup. Now building at the intersection of marketing automation and applied AI at DeepL, while running Verluna as a dedicated GTM engineering practice.",
    transformationStatement:
      "I built Verluna because I kept seeing the same pattern: smart teams drowning in manual work because nobody treated their GTM stack like real infrastructure. Every company I worked with had the same leaky pipes. I decided to become the engineer who fixes them.",
    careerHighlights: [
      { metric: "EUR 1M+/mo", context: "Ad spend managed across Meta, Google, and programmatic" },
      { metric: "12 to 45", context: "Team grown at Concentrix/Meta performance division" },
      { metric: "120K installs", context: "Fintech app launch in 6 months at Tradelite" },
      { metric: "50+ systems", context: "Automation builds across 6 industries" },
      { metric: "2,000+ hours", context: "Manual work eliminated for clients" },
      { metric: "6 industries", context: "SaaS, fintech, e-commerce, travel, healthcare, professional services" },
    ],
  },

  values: [
    {
      title: "Code Over Config",
      description:
        "Point-and-click tools hit a ceiling. We write real code, version it, test it, and deploy it. That is how you get systems that last.",
      principle: "If it cannot be committed to a repo, it is not infrastructure.",
    },
    {
      title: "Show the Architecture",
      description:
        "We never hand you a black box. Every build comes with data flow diagrams, documentation, and training so your team understands exactly what runs and why.",
      principle: "Transparency is a deliverable, not a courtesy.",
    },
    {
      title: "Measure Everything",
      description:
        "No vanity metrics. Every system we deploy ships with monitoring, alerting, and dashboards that show real impact: hours saved, leads routed, revenue attributed.",
      principle: "If you cannot measure it, you cannot improve it.",
    },
    {
      title: "Build for Handoff",
      description:
        "We design every system so your team can operate it without us. Documentation, runbooks, and training sessions are standard on every engagement.",
      principle: "The best consultant makes themselves unnecessary.",
    },
    {
      title: "Ship, Then Iterate",
      description:
        "We deploy in weeks, not quarters. Get a working system first, then optimize with real data. Perfect is the enemy of automated.",
      principle: "A working pipeline today beats a perfect one next quarter.",
    },
    {
      title: "Acknowledge the Tradeoffs",
      description:
        "Every architecture decision has costs. We tell you what you gain and what you give up. No silver bullets, no false promises.",
      principle: "Honest engineering beats optimistic consulting.",
    },
  ],
};
