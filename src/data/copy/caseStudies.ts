// Case studies copy: StoryBrand SB7 aligned
// Migrated from WorkContent.tsx with enhanced SB7 narratives.
// Customer is the hero. Problem/solution/results told as transformation stories.

export interface CaseStudyTag {
  label: string;
  variant: "green" | "purple" | "blue";
}

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudyTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface CaseStudy {
  id: string;
  date: string;
  commitHash: string;
  title: string;
  client: {
    industry: string;
    size: string;
  };
  problem: string;
  solution: string;
  results: string;
  failureStakes: string;
  successOutcome: string;
  tags: CaseStudyTag[];
  metrics: CaseStudyMetric[];
  duration: string;
  trackAlignment: "audit" | "ops" | "agents";
  testimonial?: CaseStudyTestimonial;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "001",
    date: "2024-12-15",
    commitHash: "a7f3c2d",
    title: "Refactored Lead Scoring Logic for SaaS Client",
    client: {
      industry: "B2B SaaS",
      size: "Series B, 50-100 employees",
    },
    problem:
      "Their sales team was drowning. 15+ hours every week spent manually scoring leads in spreadsheets. High-intent prospects waited 2 days for a response while unqualified leads clogged the pipeline. The VP of Sales knew they were losing deals but could not prove it because attribution data lived in three different tools that did not talk to each other.",
    solution:
      "We built an automated lead scoring system using n8n workflows integrated with HubSpot. Real-time enrichment via Clearbit feeds into custom Python scoring algorithms calibrated to their ICP. Leads now get scored, routed, and assigned within seconds of form submission. The sales team sees a single score with confidence indicators instead of raw data.",
    results:
      "Lead response time dropped from 2 days to under 5 minutes. Sales accepted lead rate increased 40%. Marketing-attributed pipeline grew 25% in the first quarter after deployment. The 15 hours per week the ops team spent on manual scoring went to zero.",
    failureStakes:
      "Without fixing this, they were losing an estimated $180K per year in pipeline that went cold during the 2-day response window. Their best reps were spending 30% of their time qualifying leads instead of closing. At their growth rate, the problem would have doubled within 6 months.",
    successOutcome:
      "Sales now trusts the leads they receive. Reps spend their time on conversations, not spreadsheets. The system scales with their growth without adding headcount. Pipeline velocity increased and the automation paid for itself in the first month.",
    tags: [
      { label: "n8n", variant: "green" },
      { label: "Python", variant: "purple" },
      { label: "HubSpot", variant: "blue" },
    ],
    metrics: [
      { label: "Time Saved", value: "15 hrs/week" },
      { label: "Response Time", value: "-95%" },
      { label: "Pipeline Growth", value: "+25%" },
    ],
    duration: "4 weeks",
    trackAlignment: "ops",
    testimonial: {
      quote:
        "Our sales team finally trusts the leads they receive. The automation paid for itself in the first month.",
      author: "VP of Sales",
      role: "B2B SaaS Company",
    },
  },
  {
    id: "002",
    date: "2024-11-28",
    commitHash: "b4e8f1a",
    title: "Built Custom RFP Analysis Agent",
    client: {
      industry: "Enterprise Software",
      size: "Series C, 200+ employees",
    },
    problem:
      "Every RFP that came in consumed 3-5 days of senior engineer time. Requirement extraction was manual and inconsistent. Different team members interpreted the same RFP differently, leading to gaps in proposals and lost deals. They were responding to fewer RFPs than their pipeline demanded because they simply did not have the bandwidth.",
    solution:
      "We developed an AI agent using RAG architecture to analyze RFP documents. The agent extracts requirements, maps them to product capabilities, identifies gaps, flags risks, and generates initial response drafts. It processes a 60-page RFP in under 2 hours and produces a structured output the team can review and refine instead of building from scratch.",
    results:
      "RFP analysis time reduced from 3-5 days to 2 hours. Response quality improved with consistent formatting and gap coverage. Win rate on RFPs increased 15%. The team now responds to 3x more RFPs per quarter.",
    failureStakes:
      "They were leaving $2M+ in potential annual contract value on the table by not responding to RFPs they had the capacity to win. The inconsistency in manual extraction meant they were occasionally missing critical requirements, which cost them deals they should have closed.",
    successOutcome:
      "The team responds to every qualified RFP that comes in. Quality is consistent across responses. Senior engineers spend their time on technical strategy, not document parsing. The agent improves with every RFP it processes as the knowledge base grows.",
    tags: [
      { label: "RAG", variant: "purple" },
      { label: "OpenAI", variant: "purple" },
      { label: "Python", variant: "green" },
    ],
    metrics: [
      { label: "Processing Time", value: "-90%" },
      { label: "Accuracy", value: "95%" },
      { label: "Win Rate", value: "+15%" },
    ],
    duration: "8 weeks",
    trackAlignment: "agents",
  },
  {
    id: "003",
    date: "2024-11-10",
    commitHash: "c9d2e5f",
    title: "Automated Multi-Channel Attribution",
    client: {
      industry: "E-commerce Tech",
      size: "Series A, 30 employees",
    },
    problem:
      "Their Head of Growth was flying blind. Attribution data was scattered across Google Ads, LinkedIn, HubSpot, and Salesforce with no unified view. Weekly reporting took an entire day of manual spreadsheet work. Budget decisions were based on last-touch attribution, which meant they were overinvesting in bottom-funnel channels and starving the top of funnel.",
    solution:
      "We created an end-to-end attribution pipeline connecting all ad platforms and CRM data into a unified Supabase warehouse. Built real-time dashboards showing multi-touch influence and true ROI by channel. Automated weekly report generation that pulls live data instead of manual exports.",
    results:
      "Full attribution visibility achieved for the first time. Weekly reporting dropped from 8 hours to 10 minutes. They reallocated $50K per month in ad spend based on multi-touch insights, shifting budget from over-indexed bottom-funnel to high-performing mid-funnel channels.",
    failureStakes:
      "They were spending $50K per month on channels that looked good on last-touch but contributed almost nothing to pipeline when measured properly. Without fixing attribution, they would have burned $600K in the next year on misallocated ad spend while their actual best-performing channels were underfunded.",
    successOutcome:
      "The Head of Growth makes budget decisions based on real data, not guesses. Report generation is automated. The team can run experiments knowing they will see accurate results within days, not weeks. Marketing spend efficiency improved measurably for the first time.",
    tags: [
      { label: "n8n", variant: "green" },
      { label: "Salesforce", variant: "blue" },
      { label: "Supabase", variant: "purple" },
    ],
    metrics: [
      { label: "Data Accuracy", value: "+40%" },
      { label: "Reporting Time", value: "-95%" },
      { label: "Ad Spend Saved", value: "$50K/mo" },
    ],
    duration: "6 weeks",
    trackAlignment: "ops",
    testimonial: {
      quote:
        "For the first time, we actually know what's working. The ROI on this project was immediate.",
      author: "Head of Growth",
      role: "E-commerce Tech",
    },
  },
  {
    id: "004",
    date: "2024-10-22",
    commitHash: "d1f4a8c",
    title: "Deployed Automated QA Bot for Support",
    client: {
      industry: "FinTech",
      size: "Series B, 80 employees",
    },
    problem:
      "Support ticket quality was inconsistent and getting worse. New agents needed months of training. The QA team could only review 10% of conversations, which meant 90% of customer interactions had no quality check. Bad tickets led to churn, and they could not identify coaching opportunities fast enough to fix agent behavior.",
    solution:
      "We built an AI-powered QA agent that reviews every support conversation in real-time. It scores interactions against their quality rubric, flags compliance issues, identifies coaching opportunities, and provides automated feedback to agents. The system integrates with their ticketing platform and surfaces results in a QA dashboard the team lead checks daily.",
    results:
      "QA coverage went from 10% to 100%. CSAT improved 20% within 60 days. New agent ramp time cut in half because coaching feedback is now immediate and specific. The QA team shifted from reviewing tickets to analyzing trends and improving the rubric.",
    failureStakes:
      "At 10% coverage, 9 out of 10 bad interactions went undetected. They were losing customers to poor support quality and did not have the data to prove it. Scaling the team without QA coverage meant the quality problem would get worse with every hire.",
    successOutcome:
      "Every conversation is reviewed. Agents get coaching in real-time instead of waiting for a weekly QA session. The team lead has full visibility into quality trends. New agents ramp faster because feedback is immediate and data-driven. Churn from support issues dropped measurably.",
    tags: [
      { label: "LangChain", variant: "purple" },
      { label: "Anthropic", variant: "purple" },
      { label: "n8n", variant: "green" },
    ],
    metrics: [
      { label: "QA Coverage", value: "10% to 100%" },
      { label: "CSAT", value: "+20%" },
      { label: "Ramp Time", value: "-50%" },
    ],
    duration: "5 weeks",
    trackAlignment: "agents",
  },
  {
    id: "005",
    date: "2024-09-15",
    commitHash: "e2g5b9d",
    title: "Built Real-Time Lead Routing Engine",
    client: {
      industry: "MarTech",
      size: "Series A, 40 employees",
    },
    problem:
      "Leads were assigned to the wrong reps constantly. Territory rules lived in a spreadsheet that was three versions out of date. Round-robin was manual. High-value enterprise leads sat unassigned for hours while reps worked smaller accounts. The ops manager spent 5 hours every week fixing routing mistakes.",
    solution:
      "We engineered a real-time lead routing system with territory management, capacity balancing, and priority queuing. Integrated with HubSpot for CRM sync and Slack for instant notifications. The system scores leads on value and routes them to the right rep within seconds based on territory, capacity, and deal size.",
    results:
      "Lead assignment became instant. Rep-to-territory accuracy hit 99%. Meeting booking rate increased 30%. The ops manager's 5 hours per week of manual routing went to zero. Enterprise leads are now prioritized and assigned within 10 seconds.",
    failureStakes:
      "Misrouted leads cost them an estimated 15% of potential pipeline. Enterprise leads that sat for hours had a 60% lower close rate than those contacted within 5 minutes. The manual spreadsheet was one edit away from a catastrophic routing failure.",
    successOutcome:
      "Every lead reaches the right rep instantly. Enterprise prospects get white-glove treatment. The ops manager focuses on strategy instead of fixing routing errors. The system scales automatically as they add reps and territories.",
    tags: [
      { label: "n8n", variant: "green" },
      { label: "HubSpot", variant: "blue" },
      { label: "Slack", variant: "blue" },
    ],
    metrics: [
      { label: "Assignment Time", value: "Instant" },
      { label: "Accuracy", value: "99%" },
      { label: "Meeting Rate", value: "+30%" },
    ],
    duration: "3 weeks",
    trackAlignment: "ops",
  },
  {
    id: "006",
    date: "2024-08-20",
    commitHash: "f3h6c0e",
    title: "Migrated Legacy CRM to HubSpot",
    client: {
      industry: "Professional Services",
      size: "Growth Stage, 100+ employees",
    },
    problem:
      "They were stuck on a legacy CRM with poor integrations and degrading data quality. Five years of accumulated workarounds had created shadow databases in spreadsheets. Nobody trusted the CRM data. The sales team had adopted their own tracking systems, which meant pipeline reports were fiction. They had been dreading the migration for years because every attempt got scoped at 6+ months.",
    solution:
      "We designed and executed a full CRM migration to HubSpot in 8 weeks. Cleaned and normalized 5 years of contact, company, and deal data. Rebuilt all workflows with proper automation logic. Trained the entire 40-person sales team on the new system with role-specific sessions.",
    results:
      "Migration completed with zero data loss. Data quality score improved from 45% to 92%. Team adoption hit 100% within 30 days. The shadow spreadsheets are gone. Pipeline reporting is now accurate and real-time.",
    failureStakes:
      "Every month on the legacy CRM cost them. Data quality degraded further. Workarounds multiplied. The longer they waited, the more expensive and risky the migration would become. They estimated the data quality issues were costing them $100K+ per year in lost deals from bad contact data and missed follow-ups.",
    successOutcome:
      "The entire company operates from a single source of truth. Sales trusts the data. Pipeline reports are accurate for the first time in years. New hires onboard to a clean, well-documented CRM instead of learning someone's spreadsheet workarounds.",
    tags: [
      { label: "HubSpot", variant: "blue" },
      { label: "Python", variant: "green" },
      { label: "Data Migration", variant: "purple" },
    ],
    metrics: [
      { label: "Data Quality", value: "45% to 92%" },
      { label: "Data Loss", value: "0%" },
      { label: "Adoption", value: "100%" },
    ],
    duration: "8 weeks",
    trackAlignment: "ops",
    testimonial: {
      quote:
        "We were dreading this migration for years. Verluna made it painless and the result exceeded expectations.",
      author: "COO",
      role: "Professional Services Firm",
    },
  },
];
