// Services page copy — StoryBrand SB7 aligned
// Three service tracks with enhanced outcome metrics and week-one deliverables.
// Customer is the hero. Each track shows the transformation, not just the process.

export interface ServiceProcess {
  step: string;
  description: string;
}

export interface ServiceTrackCopy {
  id: string;
  track: string;
  title: string;
  tagline: string;
  color: "blue" | "green" | "purple";
  villainStatement: string;
  description: string;
  outcomeMetric: string;
  weekOneDeliverable: string;
  ctaText: string;
  idealFor: string[];
  process: ServiceProcess[];
  deliverables: string[];
  timeline: string;
  pricing: string;
  failureStakes: string;
  successOutcome: string;
}

export interface ServicesCopy {
  pageHeading: string;
  pageSubheading: string;
  tracks: ServiceTrackCopy[];
  bottomCta: {
    heading: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
  };
}

export const servicesCopy: ServicesCopy = {
  pageHeading: "Three Tracks. One Goal: Revenue That Runs Itself.",
  pageSubheading:
    "Every company is at a different stage. Some need to find the leaks. Some need to fix the plumbing. Some need to scale beyond what humans can handle. Pick the track that matches where you are.",

  tracks: [
    {
      id: "audit",
      track: "Track A",
      title: "GTM Audit",
      tagline: "Find the leaks.",
      color: "blue",
      villainStatement:
        "You suspect your GTM stack is leaking leads, wasting budget, or hiding attribution blind spots. But you cannot fix what you cannot see.",
      description:
        "A comprehensive diagnostic of your entire go-to-market infrastructure. We map your data flows, identify bottlenecks, score every integration, and deliver a prioritized roadmap with dollar values attached to every fix.",
      outcomeMetric:
        "Track A clients typically discover $50K+ per year in recoverable pipeline leakage.",
      weekOneDeliverable:
        "Complete data flow diagram of your GTM stack with integration health scores for every connection point.",
      ctaText: "Book Your GTM Audit",
      idealFor: [
        "Companies scaling past $1M ARR with duct-taped ops",
        "Teams with 3+ tools in their GTM stack and no integration map",
        "Organizations where nobody trusts the attribution numbers",
        "Leaders who suspect they are leaving pipeline on the table",
      ],
      process: [
        {
          step: "Discovery",
          description:
            "We interview your stakeholders, audit your tech stack access, and map every data flow from first touch to closed-won.",
        },
        {
          step: "Analysis",
          description:
            "Deep dive into integration health, data quality scores, and process bottlenecks. We instrument what you cannot see today.",
        },
        {
          step: "Diagnosis",
          description:
            "Root cause identification for every leak. We quantify the revenue impact and rank opportunities by effort-to-value ratio.",
        },
        {
          step: "Roadmap",
          description:
            "You get a prioritized fix list with cost estimates, timeline projections, and quick wins you can implement this week.",
        },
      ],
      deliverables: [
        "Complete data flow diagram with health scores",
        "Integration audit report (all connection points scored)",
        "Revenue leakage analysis with dollar estimates",
        "Prioritized optimization roadmap (effort vs. impact matrix)",
        "Quick wins implementation guide (top 5 same-week fixes)",
        "Executive summary presentation for leadership",
      ],
      timeline: "2-3 weeks",
      pricing: "Starting at $10,000",
      failureStakes:
        "Without visibility, you keep spending on channels that do not convert, losing leads in broken handoffs, and making budget decisions on incomplete data. The average cost of a leaky GTM stack for a Series B company is $200K+ per year in wasted spend and lost pipeline.",
      successOutcome:
        "Full visibility into your revenue infrastructure. Every data flow mapped, every leak identified, every fix prioritized. Your team stops guessing and starts engineering.",
    },
    {
      id: "ops",
      track: "Track B",
      title: "Autonomous Ops",
      tagline: "Fix the flow.",
      color: "green",
      villainStatement:
        "Your team spends 20+ hours per week on manual data tasks. Lead routing is slow. CRM hygiene is nonexistent. Your best people are doing work a machine should handle.",
      description:
        "We build the automation infrastructure that makes your GTM operations run on autopilot. From lead routing to lifecycle workflows to attribution pipelines. Real code, real monitoring, real handoff documentation.",
      outcomeMetric:
        "Track B clients reclaim an average of 20+ hours per week and cut lead response time by 95%.",
      weekOneDeliverable:
        "First automation deployed and running: your highest-impact workflow (usually lead routing or CRM sync) live with monitoring.",
      ctaText: "Start Autonomous Ops",
      idealFor: [
        "Teams spending 10+ hours per week on manual CRM and data tasks",
        "Companies with lead response times over 5 minutes",
        "Organizations that need attribution visibility but cannot build it internally",
        "Growing teams that cannot hire fast enough to keep up with ops debt",
      ],
      process: [
        {
          step: "Blueprint",
          description:
            "We design the automation architecture based on your specific workflows, tools, and team structure. You approve before we write a line of code.",
        },
        {
          step: "Build",
          description:
            "Develop workflows in n8n and Python with proper error handling, retry logic, and monitoring from day one.",
        },
        {
          step: "Integrate",
          description:
            "Connect to your CRM, enrichment tools, ad platforms, and communication channels. Every integration tested end-to-end with your real data.",
        },
        {
          step: "Deploy",
          description:
            "Launch with monitoring dashboards, alerting, documentation, and a team training session. You own the system from day one.",
        },
      ],
      deliverables: [
        "Custom n8n workflow suite (version-controlled)",
        "CRM integration layer with error handling",
        "Real-time monitoring dashboard",
        "Alerting and escalation configuration",
        "Process documentation and runbooks",
        "Team training session (recorded)",
      ],
      timeline: "4-8 weeks",
      pricing: "$15,000-$50,000",
      failureStakes:
        "Every week you wait, your ops team burns another 20 hours on tasks that should be automated. Leads go cold. Data drifts. Your best people burn out on work that does not require human judgment. The compounding cost is not just hours. It is pipeline velocity, team morale, and opportunity cost.",
      successOutcome:
        "Your ops team reclaims their week. Leads get routed in seconds. Attribution is automatic. CRM data stays clean without anyone touching it. The system runs while your team focuses on work that actually requires human intelligence.",
    },
    {
      id: "agents",
      track: "Track C",
      title: "Custom AI Agents",
      tagline: "Scale the workforce.",
      color: "purple",
      villainStatement:
        "You have tasks that require judgment, not just rules. RFP analysis, QA review, content triage, lead qualification. Too complex to automate with workflows, too repetitive to justify headcount.",
      description:
        "We build AI agents that handle complex, judgment-based tasks your team does today. These agents work with your real data, integrate with your tools, and improve over time. They are not chatbots. They are specialized digital workers.",
      outcomeMetric:
        "Track C clients typically see 90% reduction in processing time and 100% coverage on tasks that were previously sampled at 10%.",
      weekOneDeliverable:
        "Agent scope document with defined inputs, outputs, evaluation criteria, and a working prototype against your real-world data.",
      ctaText: "Build Your First Agent",
      idealFor: [
        "Companies processing high volumes of documents or unstructured data",
        "Teams with repetitive research, analysis, or classification tasks",
        "Organizations that want to scale output without scaling headcount",
        "Leaders who need 100% coverage on quality, compliance, or review tasks",
      ],
      process: [
        {
          step: "Scope",
          description:
            "Define the agent's role, inputs, outputs, success criteria, and failure modes. We build the evaluation framework before we build the agent.",
        },
        {
          step: "Design",
          description:
            "Architect the RAG pipeline, prompt chain, tool integrations, and human-in-the-loop checkpoints.",
        },
        {
          step: "Develop",
          description:
            "Build and test the agent with your real-world data. Evaluate against the criteria we defined in scoping. Iterate until accuracy meets the bar.",
        },
        {
          step: "Iterate",
          description:
            "Deploy with monitoring, human-in-the-loop safeguards, and feedback loops. The agent gets better with every batch of data it processes.",
        },
      ],
      deliverables: [
        "Custom AI agent deployment (hosted or on-prem)",
        "RAG knowledge base built from your data",
        "Evaluation and monitoring suite",
        "API integration layer for your existing tools",
        "Human-in-the-loop workflow and escalation paths",
        "Performance analytics dashboard with accuracy tracking",
      ],
      timeline: "6-12 weeks",
      pricing: "Starting at $25,000",
      failureStakes:
        "Without AI coverage, you are sampling 10% when you need 100%. Your team manually processes documents that take hours each. You hire to keep up instead of building to scale. Every month you delay, the gap between what your team can handle and what the market demands gets wider.",
      successOutcome:
        "Your agent handles the volume your team cannot. 100% coverage on QA, review, or analysis tasks. Processing time drops from days to minutes. Your team focuses on exceptions and strategy while the agent handles the throughput.",
    },
  ],

  bottomCta: {
    heading: "Not Sure Which Track Fits?",
    description:
      "Most clients start with a 30-minute call. We listen to your challenges, look at your stack, and tell you exactly which track will have the highest impact. No pitch. No obligation.",
    ctaLabel: "Book Your Free Audit Call",
    ctaHref: "/contact",
  },
};
