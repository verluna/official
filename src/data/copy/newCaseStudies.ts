// Case studies — Agent Operations era
// Anonymized real projects. Practitioner voice, specific numbers, tradeoffs acknowledged.

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudyPhase {
  name: string;
  description: string;
}

export interface NewCaseStudy {
  slug: string;
  title: string;
  headline: string;
  industry: string;
  companyDescription: string;
  challenge: string;
  solution: string;
  results: string;
  techStack: string[];
  metrics: CaseStudyMetric[];
  phases: CaseStudyPhase[];
  duration: string;
  cta: string;
  category: "automation" | "intelligence" | "localization";
}

export const newCaseStudies: NewCaseStudy[] = [
  {
    slug: "semantic-account-matching",
    title: "From XLOOKUP to Semantic Matching",
    headline:
      "How a field marketing team reclaimed 20+ hours per month by replacing manual account matching with AI.",
    industry: "Enterprise Software",
    companyDescription:
      "A global language technology company with 10,000+ target accounts across DACH, Benelux, and Nordics.",
    challenge:
      "The field marketing team ran 8-12 events per quarter across Europe. After each event, an analyst spent 4+ hours matching attendee lists against a Salesforce target account list of 10,000+ companies. The process used XLOOKUP in Excel, which failed on spelling variations (\"Deutsche Telekom\" vs \"Dt. Telekom AG\"), legal form differences (\"GmbH\" vs \"Inc\" vs \"Ltd\"), and regional naming conventions. Match accuracy hovered around 70%, which meant 30% of high-value attendees were either missed or incorrectly matched. The team had accepted this as the cost of doing business.",
    solution:
      "Built a semantic matching engine powered by Claude AI (Sonnet). The system accepts two CSV files, lets the user map columns through a visual interface, then runs parallel batch matching. Instead of exact string comparison, the AI understands that \"SAP SE\" and \"SAP Deutschland\" are the same company, that \"Dt. Bahn\" is \"Deutsche Bahn AG,\" and that \"McKinsey\" matches \"McKinsey & Company, Inc.\" The matching runs in batches of 40 across 3 parallel streams for throughput. Results export as matched-only CSV with BOM encoding for German umlauts. Deployed to Kubernetes for the field marketing team to use independently.",
    results:
      "Processing time dropped from 4+ hours to under 90 seconds per event. Match accuracy increased from approximately 70% to 99.2%. The field marketing team reclaimed 20+ hours per month. The system handles edge cases that no amount of XLOOKUP formulas could cover: abbreviations, legal entity suffixes, language variations, and regional naming. The analyst who previously owned this process now focuses on campaign strategy instead of spreadsheet wrestling.",
    techStack: [
      "Next.js",
      "React",
      "Claude AI (Sonnet)",
      "Tailwind CSS",
      "Kubernetes",
    ],
    metrics: [
      { label: "Processing Time", value: "4 hrs to 90 sec" },
      { label: "Match Accuracy", value: "70% to 99.2%" },
      { label: "Monthly Hours Saved", value: "20+" },
      { label: "Languages Handled", value: "DE, EN, FR, NL" },
    ],
    phases: [
      {
        name: "Observe",
        description:
          "Watched the analyst perform manual matching. Documented the exact failure modes: abbreviations, legal forms, transliterations.",
      },
      {
        name: "Design",
        description:
          "Architected a batch-parallel pipeline with semantic comparison instead of string matching. Chose Claude Sonnet for its reasoning about entity equivalence.",
      },
      {
        name: "Build",
        description:
          "Production system in 2 weeks. 4-step wizard UI: upload, map columns, match, export. Deployed to Kubernetes.",
      },
      {
        name: "Autonomize",
        description:
          "Field marketing team runs the tool independently. No analyst involvement required for standard matching.",
      },
    ],
    duration: "2 weeks",
    cta: "Get Similar Results",
    category: "automation",
  },
  {
    slug: "multilingual-video-localization",
    title: "Multilingual Video Localization Pipeline",
    headline:
      "How an automated subtitle pipeline reduced video localization from 3 days to 15 minutes across 12 languages.",
    industry: "Enterprise Software",
    companyDescription:
      "A global technology company localizing product videos, webinars, and marketing content into 12 languages for European and Asian markets.",
    challenge:
      "The localization team was manually translating subtitles for product videos. Each video took 2-3 days per language. With 12 target languages, a single video could take weeks to fully localize. Quality was inconsistent: translators working independently produced different terminology for the same product features. Glossary compliance was impossible to enforce at scale. The team had a growing backlog of untranslated content, and every product launch created a bottleneck.",
    solution:
      "Built a four-stage automated pipeline. Stage 1: Claude AI pre-merges fragmented subtitle blocks into complete sentences, fixing the broken fragments that SRT format creates. Stage 2: DeepL translates with glossary enforcement and per-language formality rules (formal for German, French, Japanese; informal for Spanish, Italian). Stage 3: Claude condenses any translations that exceed the 2-line subtitle limit for screen readability. Stage 4: Timestamp splitting as a final fallback for edge cases. The pipeline processes all 12 languages simultaneously. A companion Google Apps Script version automates batch processing directly from Google Drive.",
    results:
      "Localization time dropped from 2-3 days per language to 15 minutes for all 12 languages simultaneously. Glossary compliance reached 100% through API-enforced terminology. Per-language formality rules are applied automatically. The backlog cleared within two weeks of deployment. Japanese subtitles follow specific formatting rules (half-width spaces instead of commas, full-width spaces instead of periods) that were previously handled inconsistently by human translators.",
    techStack: [
      "Next.js",
      "Claude AI (Haiku)",
      "DeepL API",
      "Google Apps Script",
      "Kubernetes",
    ],
    metrics: [
      { label: "Time per Video", value: "3 days to 15 min" },
      { label: "Languages", value: "12 simultaneous" },
      { label: "Glossary Compliance", value: "100%" },
      { label: "Formality Rules", value: "Per-language" },
    ],
    phases: [
      {
        name: "Observe",
        description:
          "Mapped the manual translation workflow. Identified the root cause of quality issues: fragmented SRT blocks breaking sentence context.",
      },
      {
        name: "Decompose",
        description:
          "Separated the pipeline into four independent stages, each handling one specific failure mode.",
      },
      {
        name: "Build",
        description:
          "Web app for on-demand translation plus Google Apps Script for batch automation. Both deployed and used by the localization team.",
      },
      {
        name: "Codify",
        description:
          "Documented per-language rules (formality, glossary, formatting) so the system encodes institutional knowledge that previously lived in translators' heads.",
      },
    ],
    duration: "3 weeks",
    cta: "Discuss Your Use Case",
    category: "localization",
  },
  {
    slug: "marketing-intelligence-system",
    title: "Marketing Intelligence System",
    headline:
      "How multi-agent research designed a three-score attribution model that quantified previously invisible marketing touches.",
    industry: "Enterprise Software",
    companyDescription:
      "A global technology company whose marketing team's revenue contribution was systematically undervalued due to last-touch attribution.",
    challenge:
      "The marketing team had no lead scoring model. No segmentation beyond basic lists. Attribution was last-touch only, which meant the channels that closed deals got all the credit while the channels that generated awareness and consideration got none. The result: budget decisions based on incomplete data, marketing's contribution to revenue underreported, and no way to distinguish a high-fit, high-engagement prospect from someone who downloaded one whitepaper six months ago. The team needed scoring, segmentation, and attribution built from the ground up.",
    solution:
      "Designed a three-score model separating Fit (firmographic match to ICP), Engagement (behavioral signals across touchpoints), and Product (usage signals indicating commercial intent). Used W-shaped attribution to distribute credit across four key moments: first touch, lead creation, opportunity creation, and close. The entire architecture was designed through a multi-agent research methodology: 7 research sessions across two phases, producing 50,000+ words of analysis before writing a single line of implementation code. Each session used 5-8 specialized research agents working in parallel. The scoring model was implemented in HubSpot using existing infrastructure at zero additional software cost.",
    results:
      "First lead scoring model live in HubSpot. MQL workflow automated with score-based routing. PQL experiment designed with product data integration (pending data engineering access). W-shaped attribution model quantifying previously invisible marketing touches across the full buyer journey. The research methodology itself became a reusable pattern: structured multi-agent analysis as a prerequisite to implementation, producing better architecture decisions than traditional consulting approaches.",
    techStack: [
      "HubSpot",
      "Multi-agent research (Claude AI)",
      "W-shaped attribution",
      "Custom scoring algorithms",
    ],
    metrics: [
      { label: "Research Sessions", value: "7 sessions" },
      { label: "Analysis Produced", value: "50,000+ words" },
      { label: "Software Cost", value: "EUR 0" },
      { label: "Scoring Dimensions", value: "3 independent" },
    ],
    phases: [
      {
        name: "Observe",
        description:
          "Audited existing attribution, scoring, and segmentation. Found: no scoring, no segmentation, last-touch only attribution.",
      },
      {
        name: "Decompose",
        description:
          "Separated the problem into three independent scoring domains (Fit, Engagement, Product) to avoid the monolithic scoring trap.",
      },
      {
        name: "Design",
        description:
          "7 multi-agent research sessions over 2 phases. Each session produced structured analysis. Architecture decisions documented with tradeoffs.",
      },
      {
        name: "Build",
        description:
          "Implemented scoring in HubSpot. MQL workflow automated. Attribution model designed for the existing CRM infrastructure.",
      },
    ],
    duration: "8 weeks (research + implementation)",
    cta: "Transform Your Marketing Intelligence",
    category: "intelligence",
  },
];

export const categoryLabels: Record<string, string> = {
  automation: "Automation",
  intelligence: "Intelligence",
  localization: "Localization",
};

export const categoryColors: Record<string, "green" | "purple" | "blue"> = {
  automation: "green",
  intelligence: "purple",
  localization: "blue",
};
