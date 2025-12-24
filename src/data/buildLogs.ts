export interface BuildLog {
  id: string;
  commitHash: string;
  date: string;
  title: string;
  description: string;
  tags: { label: string; variant: "green" | "purple" | "blue" }[];
  metrics: {
    label: string;
    value: string;
  }[];
  clientQuote?: {
    text: string;
    author: string;
    role: string;
  };
  duration?: string;
  industry?: string;
}

export const buildLogs: BuildLog[] = [
  {
    id: "001",
    commitHash: "a3f7c2d",
    date: "2024-12-15",
    title: "Refactored Lead Scoring Logic for SaaS Client",
    description:
      "Rebuilt the entire lead scoring system using n8n workflows and custom Python scripts. Integrated with HubSpot for real-time score updates.",
    tags: [
      { label: "n8n", variant: "green" },
      { label: "Python", variant: "purple" },
      { label: "HubSpot", variant: "blue" },
    ],
    metrics: [
      { label: "Time Saved", value: "15 hrs/week" },
      { label: "Lead Response", value: "-80%" },
    ],
    clientQuote: {
      text: "Our sales team went from drowning in leads to closing deals faster than ever.",
      author: "Sarah K.",
      role: "VP of Sales",
    },
    duration: "4 weeks",
    industry: "B2B SaaS",
  },
  {
    id: "002",
    commitHash: "b8e1d4f",
    date: "2024-11-28",
    title: "Built Custom RFP Analysis Agent",
    description:
      "Developed an AI agent using RAG architecture to analyze RFP documents and extract key requirements automatically.",
    tags: [
      { label: "RAG", variant: "purple" },
      { label: "OpenAI", variant: "purple" },
      { label: "Python", variant: "green" },
    ],
    metrics: [
      { label: "Processing Time", value: "-90%" },
      { label: "Accuracy", value: "95%" },
    ],
    clientQuote: {
      text: "What used to take 3 days now takes 15 minutes. Game changer for our proposals.",
      author: "Michael R.",
      role: "Solutions Architect",
    },
    duration: "6 weeks",
    industry: "Enterprise Tech",
  },
  {
    id: "003",
    commitHash: "c5a9e3b",
    date: "2024-11-10",
    title: "Automated Multi-Channel Attribution",
    description:
      "Created end-to-end attribution pipeline connecting Google Ads, LinkedIn, and HubSpot data into a unified dashboard.",
    tags: [
      { label: "n8n", variant: "green" },
      { label: "Salesforce", variant: "blue" },
      { label: "Analytics", variant: "blue" },
    ],
    metrics: [
      { label: "Data Accuracy", value: "+40%" },
      { label: "Reporting Time", value: "-95%" },
    ],
    duration: "3 weeks",
    industry: "Marketing Agency",
  },
  {
    id: "004",
    commitHash: "d2f6b8a",
    date: "2024-10-22",
    title: "AI-Powered Customer Success Automation",
    description:
      "Built an intelligent workflow that predicts churn risk and automatically triggers personalized outreach campaigns.",
    tags: [
      { label: "OpenAI", variant: "purple" },
      { label: "n8n", variant: "green" },
      { label: "Intercom", variant: "blue" },
    ],
    metrics: [
      { label: "Churn Reduction", value: "-25%" },
      { label: "NPS Score", value: "+18pts" },
    ],
    clientQuote: {
      text: "We now catch at-risk customers before they even think about leaving.",
      author: "Lisa T.",
      role: "Head of CS",
    },
    duration: "5 weeks",
    industry: "FinTech",
  },
  {
    id: "005",
    commitHash: "e9c4a7d",
    date: "2024-10-05",
    title: "Unified Data Pipeline for RevOps",
    description:
      "Consolidated 12 different data sources into a single source of truth with real-time syncing and automated reconciliation.",
    tags: [
      { label: "Python", variant: "purple" },
      { label: "PostgreSQL", variant: "green" },
      { label: "Airbyte", variant: "blue" },
    ],
    metrics: [
      { label: "Data Sources", value: "12 unified" },
      { label: "Manual Work", value: "-95%" },
    ],
    duration: "8 weeks",
    industry: "E-commerce",
  },
  {
    id: "006",
    commitHash: "f1b2c3e",
    date: "2024-09-18",
    title: "Intelligent Meeting Scheduler Bot",
    description:
      "Created an AI assistant that handles complex scheduling across multiple stakeholders, time zones, and calendar systems.",
    tags: [
      { label: "Claude", variant: "purple" },
      { label: "Cal.com", variant: "green" },
      { label: "Slack", variant: "blue" },
    ],
    metrics: [
      { label: "Scheduling Time", value: "-85%" },
      { label: "No-shows", value: "-60%" },
    ],
    clientQuote: {
      text: "It's like having a tireless executive assistant that never makes mistakes.",
      author: "James P.",
      role: "CEO",
    },
    duration: "3 weeks",
    industry: "Consulting",
  },
];
