// Agent Readiness Scorecard — question definitions, scoring logic, recommendations

export interface ScorecardOption {
  label: string;
  points: number;
}

export interface ScorecardQuestion {
  id: string;
  category: ScorecardCategory;
  text: string;
  options: ScorecardOption[];
}

export type ScorecardCategory =
  | "operations-foundation"
  | "ai-readiness"
  | "scale-indicators"
  | "strategic-alignment";

export interface CategoryMeta {
  id: ScorecardCategory;
  label: string;
  description: string;
  maxPoints: number;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    id: "operations-foundation",
    label: "Operations Foundation",
    description: "How mature is your operational infrastructure?",
    maxPoints: 12,
  },
  {
    id: "ai-readiness",
    label: "AI Readiness",
    description: "How prepared is your team for AI-powered automation?",
    maxPoints: 12,
  },
  {
    id: "scale-indicators",
    label: "Scale Indicators",
    description: "How much complexity does your operation handle?",
    maxPoints: 12,
  },
  {
    id: "strategic-alignment",
    label: "Strategic Alignment",
    description: "Is the organization aligned on automation investment?",
    maxPoints: 12,
  },
];

export const QUESTIONS: ScorecardQuestion[] = [
  // Category 1: Operations Foundation
  {
    id: "ops-1",
    category: "operations-foundation",
    text: "How many manual, repetitive tasks does your marketing/ops team perform weekly?",
    options: [
      { label: "Under 5", points: 1 },
      { label: "5-15", points: 2 },
      { label: "15-30", points: 3 },
      { label: "30+", points: 4 },
    ],
  },
  {
    id: "ops-2",
    category: "operations-foundation",
    text: "How connected are your core systems (CRM, marketing automation, analytics)?",
    options: [
      { label: "Fully integrated", points: 1 },
      { label: "Mostly connected with gaps", points: 2 },
      { label: "Siloed with manual syncing", points: 3 },
      { label: "Completely disconnected", points: 4 },
    ],
  },
  {
    id: "ops-3",
    category: "operations-foundation",
    text: "How do you currently handle data quality and enrichment?",
    options: [
      { label: "Automated pipeline", points: 1 },
      { label: "Semi-automated", points: 2 },
      { label: "Manual spot-checks", points: 3 },
      { label: "We don't", points: 4 },
    ],
  },
  // Category 2: AI Readiness
  {
    id: "ai-1",
    category: "ai-readiness",
    text: "Has your team experimented with AI agents or LLM-based automation?",
    options: [
      { label: "Yes, in production", points: 1 },
      { label: "Piloting", points: 2 },
      { label: "Exploring", points: 3 },
      { label: "Not yet", points: 4 },
    ],
  },
  {
    id: "ai-2",
    category: "ai-readiness",
    text: "Do you have documented processes (SOPs) for your core operations?",
    options: [
      { label: "Comprehensive SOPs", points: 1 },
      { label: "Partial documentation", points: 2 },
      { label: "Tribal knowledge", points: 3 },
      { label: "No documentation", points: 4 },
    ],
  },
  {
    id: "ai-3",
    category: "ai-readiness",
    text: "What's your team's comfort level with automation tools?",
    options: [
      { label: "Power users", points: 1 },
      { label: "Comfortable", points: 2 },
      { label: "Basic", points: 3 },
      { label: "Resistant", points: 4 },
    ],
  },
  // Category 3: Scale Indicators
  {
    id: "scale-1",
    category: "scale-indicators",
    text: "How many leads/contacts does your team process monthly?",
    options: [
      { label: "Under 100", points: 1 },
      { label: "100-500", points: 2 },
      { label: "500-2,000", points: 3 },
      { label: "2,000+", points: 4 },
    ],
  },
  {
    id: "scale-2",
    category: "scale-indicators",
    text: "How many marketing/sales tools are in your stack?",
    options: [
      { label: "1-3", points: 1 },
      { label: "4-7", points: 2 },
      { label: "8-12", points: 3 },
      { label: "13+", points: 4 },
    ],
  },
  {
    id: "scale-3",
    category: "scale-indicators",
    text: "How fast is your team growing?",
    options: [
      { label: "Stable", points: 1 },
      { label: "10-25% YoY", points: 2 },
      { label: "25-50% YoY", points: 3 },
      { label: "50%+ YoY", points: 4 },
    ],
  },
  // Category 4: Strategic Alignment (note: reversed scoring on some)
  {
    id: "strat-1",
    category: "strategic-alignment",
    text: "Is there executive buy-in for automation/AI initiatives?",
    options: [
      { label: "Strong mandate", points: 4 },
      { label: "Interested", points: 3 },
      { label: "Cautious", points: 2 },
      { label: "No discussion yet", points: 1 },
    ],
  },
  {
    id: "strat-2",
    category: "strategic-alignment",
    text: "What's your timeline for improving operations?",
    options: [
      { label: "This quarter", points: 4 },
      { label: "Next 6 months", points: 3 },
      { label: "This year", points: 2 },
      { label: "No timeline", points: 1 },
    ],
  },
  {
    id: "strat-3",
    category: "strategic-alignment",
    text: "What budget is available for operations improvement?",
    options: [
      { label: "EUR 50K+", points: 4 },
      { label: "EUR 20-50K", points: 3 },
      { label: "EUR 5-20K", points: 2 },
      { label: "Under EUR 5K", points: 1 },
    ],
  },
];

export type ScorecardTier = "foundation" | "acceleration" | "transformation";

export interface TierInfo {
  id: ScorecardTier;
  label: string;
  color: "green" | "blue" | "purple";
  range: string;
  description: string;
  recommendations: string[];
  cta: { label: string; href: string };
}

export const TIERS: Record<ScorecardTier, TierInfo> = {
  foundation: {
    id: "foundation",
    label: "Foundation Phase",
    color: "green",
    range: "0-33",
    description:
      "Your operations have strong automation fundamentals. Focus on documenting processes, connecting core systems, and building the data foundation that agents need to operate reliably.",
    recommendations: [
      "Document your top 10 recurring operational workflows as step-by-step SOPs. Agents need explicit instructions, not tribal knowledge.",
      "Audit your system integrations. Map every data flow between CRM, marketing tools, and analytics. Identify the manual syncs that break every month.",
      "Start a data quality initiative. Clean your CRM contacts, standardize field formats, and set up duplicate detection. Agent accuracy depends on data accuracy.",
    ],
    cta: {
      label: "Download Our Agent Operations Guide",
      href: "/resources/agent-operations-guide",
    },
  },
  acceleration: {
    id: "acceleration",
    label: "Acceleration Phase",
    color: "blue",
    range: "34-66",
    description:
      "You have the infrastructure for targeted automation wins. The opportunity is identifying the 3-5 highest-impact processes and deploying agents that deliver measurable ROI within weeks.",
    recommendations: [
      "Identify your three most time-consuming manual processes. Calculate the hours spent weekly and the error rate. These are your first automation targets.",
      "Run a pilot: deploy one AI agent on a well-documented, high-frequency task (lead routing, data enrichment, or report generation). Measure before and after.",
      "Build the business case for a dedicated automation budget. Use your pilot results to quantify ROI and present to leadership.",
    ],
    cta: {
      label: "Book a Free Strategy Call",
      href: "https://calendly.com/verluna-intro-call",
    },
  },
  transformation: {
    id: "transformation",
    label: "Transformation Phase",
    color: "purple",
    range: "67-100",
    description:
      "Your organization is ready for a full agent architecture. The complexity of your operations, combined with executive alignment and budget, means you can deploy multi-agent systems that fundamentally change how your team works.",
    recommendations: [
      "Commission an Agent Operations Audit. Map your entire operational landscape, identify agent deployment opportunities, and build a prioritized 90-day roadmap.",
      "Design your agent governance framework. Define which decisions agents make autonomously, which require human approval, and how you monitor agent performance.",
      "Plan for scale: establish agent monitoring, cost tracking, and performance metrics from day one. The companies that succeed with agents treat them like team members with KPIs.",
    ],
    cta: {
      label: "Book a Free Strategy Call",
      href: "https://calendly.com/verluna-intro-call",
    },
  },
};

// ---- Scoring logic ----

export interface ScorecardAnswers {
  [questionId: string]: number; // points selected
}

export interface CategoryScore {
  category: ScorecardCategory;
  label: string;
  raw: number;
  max: number;
  normalized: number; // 0-100
}

export interface ScorecardResult {
  rawScore: number;
  normalizedScore: number; // 0-100
  tier: ScorecardTier;
  tierInfo: TierInfo;
  categoryScores: CategoryScore[];
}

export function calculateScores(answers: ScorecardAnswers): ScorecardResult {
  const RAW_MIN = 12;
  const RAW_MAX = 48;

  // Aggregate per category
  const categoryScores: CategoryScore[] = CATEGORIES.map((cat) => {
    const catQuestions = QUESTIONS.filter((q) => q.category === cat.id);
    const raw = catQuestions.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);
    const max = cat.maxPoints;
    const normalized = max > 0 ? Math.round((raw / max) * 100) : 0;
    return { category: cat.id, label: cat.label, raw, max, normalized };
  });

  const rawScore = categoryScores.reduce((sum, c) => sum + c.raw, 0);

  // Normalize 12-48 to 0-100
  const normalizedScore = Math.round(
    ((rawScore - RAW_MIN) / (RAW_MAX - RAW_MIN)) * 100
  );
  const clamped = Math.max(0, Math.min(100, normalizedScore));

  let tier: ScorecardTier;
  if (clamped <= 33) {
    tier = "foundation";
  } else if (clamped <= 66) {
    tier = "acceleration";
  } else {
    tier = "transformation";
  }

  return {
    rawScore,
    normalizedScore: clamped,
    tier,
    tierInfo: TIERS[tier],
    categoryScores,
  };
}
