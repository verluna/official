// About page copy, v2 design language (2026-06).
// Founder-led story. All numbers come from src/data/team.ts or the redesign brief.

export interface ProofStat {
  value: string;
  label: string;
}

export interface PrincipleItem {
  title: string;
  body: string;
}

export interface AboutCopy {
  hero: {
    heading: string;
    lede: string;
  };
  founder: {
    heading: string;
    paragraphs: string[];
    backgroundHeading: string;
  };
  why: {
    heading: string;
    paragraphs: string[];
  };
  proof: {
    heading: string;
    lede: string;
    stats: ProofStat[];
  };
  principles: {
    heading: string;
    items: PrincipleItem[];
  };
  cta: {
    heading: string;
    body: string;
  };
}

export const aboutCopy: AboutCopy = {
  hero: {
    heading: "Built by an operator who runs agents every day.",
    lede: "Verluna is an agent-operations consultancy in Berlin, founded and run by Tolga Oral. The methods we sell are the ones our own company runs on.",
  },

  founder: {
    heading: "Tolga Oral, Berlin.",
    paragraphs: [
      "Tolga spent eight years building revenue and automation systems across e-commerce, fintech, gaming, travel, healthcare, and B2B SaaS. He managed more than EUR 1M per month in ad spend, grew a team from 12 to 45 people, and led a fintech app launch to 120K installs.",
      "Today he is Applied AI Lead at DeepL, where he builds agent systems and automation for go-to-market teams. The same discipline runs Verluna: 60+ agents in production across our own operation, executing 80+ codified skills against 12 integrated systems. When he recommends an architecture, it is because he operates one.",
    ],
    backgroundHeading: "Background",
  },

  why: {
    heading: "Why Verluna exists.",
    paragraphs: [
      "Most AI consulting ends in a slide deck. The recommendations are reasonable, the diagrams are tidy, and six months later nothing runs in production.",
      "Verluna ends engagements with agents deployed, monitored, and documented, operated by your team. The deliverable is a running system.",
      "And every method is tested on our own operation first. Our research, delivery, and content run on an agent fleet we built ourselves. If a pattern does not survive daily production use in our own company, we do not sell it to yours.",
    ],
  },

  proof: {
    heading: "The proof runs daily.",
    lede: "These numbers are not projections. They describe the operation behind this website.",
    stats: [
      { value: "60+", label: "Agents in production across our own operation" },
      { value: "80+", label: "Codified skills agents execute autonomously" },
      { value: "12", label: "Systems integrated, from CRM to data warehouse" },
    ],
  },

  principles: {
    heading: "How we decide to work.",
    items: [
      {
        title: "Running systems over recommendations",
        body: "An engagement ends when the system runs in production, not when the report is delivered.",
      },
      {
        title: "Show the architecture",
        body: "No black boxes. Every build ships with diagrams, documentation, and training, so your team knows exactly what runs and why.",
      },
      {
        title: "Build for handoff",
        body: "Systems are designed so your team can operate them without us. Runbooks and training sessions are standard, not extras.",
      },
      {
        title: "Name the tradeoffs",
        body: "Every architecture decision costs something. We tell you what you gain and what you give up, before you commit.",
      },
    ],
  },

  cta: {
    heading: "Talk to the person who builds it.",
    body: "Thirty minutes with Tolga, no pitch. Bring your stack and your bottlenecks.",
  },
};
