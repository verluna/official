"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BentoCard, Badge, Button } from "@/components/ui";

interface CaseStudy {
  id: string;
  date: string;
  commitHash: string;
  title: string;
  client: {
    industry: string;
    size: string;
  };
  challenge: string;
  solution: string;
  results: string;
  tags: { label: string; variant: "green" | "purple" | "blue" }[];
  metrics: { label: string; value: string }[];
  duration: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: "001",
    date: "2024-12-15",
    commitHash: "a7f3c2d",
    title: "Refactored Lead Scoring Logic for SaaS Client",
    client: {
      industry: "B2B SaaS",
      size: "Series B, 50-100 employees",
    },
    challenge:
      "Manual lead scoring taking 15+ hours per week. Sales team receiving unqualified leads while high-intent prospects waited days for response.",
    solution:
      "Built an automated lead scoring system using n8n workflows integrated with HubSpot. Implemented real-time enrichment via Clearbit and custom Python scoring algorithms based on ICP fit signals.",
    results:
      "Lead response time dropped from 2 days to under 5 minutes. Sales accepted lead rate increased 40%. Marketing-attributed pipeline grew 25%.",
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
    challenge:
      "Responding to RFPs took 3-5 days of senior engineer time. Requirement extraction was manual, error-prone, and inconsistent across team members.",
    solution:
      "Developed an AI agent using RAG architecture to analyze RFP documents. The agent extracts requirements, maps to product capabilities, identifies gaps, and generates initial response drafts.",
    results:
      "RFP analysis time reduced from days to hours. Response quality improved with consistent formatting. Win rate on RFPs increased 15%.",
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
    challenge:
      "No visibility into which channels drove conversions. Attribution data scattered across Google Ads, LinkedIn, HubSpot, and Salesforce. Weekly reporting took an entire day.",
    solution:
      "Created end-to-end attribution pipeline connecting all ad platforms and CRM data into a unified Supabase warehouse. Built real-time dashboards showing touch-point influence and ROI by channel.",
    results:
      "Full attribution visibility achieved. Weekly reporting now takes 10 minutes. Reallocated $50K/month in ad spend based on insights.",
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
    challenge:
      "Support ticket quality inconsistent. New agents needed extensive training. QA review of tickets was manual and covered only 10% of conversations.",
    solution:
      "Built an AI-powered QA agent that reviews every support conversation in real-time. Flags issues, scores interactions, and provides coaching feedback to agents automatically.",
    results:
      "100% of tickets now reviewed vs 10% before. CSAT improved 20%. New agent ramp time cut in half.",
    tags: [
      { label: "LangChain", variant: "purple" },
      { label: "Anthropic", variant: "purple" },
      { label: "n8n", variant: "green" },
    ],
    metrics: [
      { label: "QA Coverage", value: "10% → 100%" },
      { label: "CSAT", value: "+20%" },
      { label: "Ramp Time", value: "-50%" },
    ],
    duration: "5 weeks",
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
    challenge:
      "Leads assigned to wrong reps. Territory rules were in a spreadsheet. Round-robin was manual. High-value leads often sat unassigned for hours.",
    solution:
      "Engineered a real-time lead routing system with territory management, capacity balancing, and priority queuing. Integrated with HubSpot and Slack for instant notifications.",
    results:
      "Lead assignment now instant vs hours. Rep-to-territory accuracy at 99%. Meeting booking rate increased 30%.",
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
    challenge:
      "Stuck on legacy CRM with poor integrations. Data quality degraded over years. Team adopted workarounds that created shadow databases in spreadsheets.",
    solution:
      "Designed and executed full CRM migration to HubSpot. Cleaned and normalized 5 years of data. Rebuilt workflows and trained the entire sales team.",
    results:
      "Migration completed with zero data loss. Data quality score improved from 45% to 92%. Team adoption at 100% within 30 days.",
    tags: [
      { label: "HubSpot", variant: "blue" },
      { label: "Python", variant: "green" },
      { label: "Data Migration", variant: "purple" },
    ],
    metrics: [
      { label: "Data Quality", value: "45% → 92%" },
      { label: "Data Loss", value: "0%" },
      { label: "Adoption", value: "100%" },
    ],
    duration: "8 weeks",
    testimonial: {
      quote:
        "We were dreading this migration for years. Verluna made it painless and the result exceeded expectations.",
      author: "COO",
      role: "Professional Services Firm",
    },
  },
];

const allTags = Array.from(
  new Set(caseStudies.flatMap((cs) => cs.tags.map((t) => t.label)))
);

export function WorkContent() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredStudies = selectedTag
    ? caseStudies.filter((cs) => cs.tags.some((t) => t.label === selectedTag))
    : caseStudies;

  return (
    <div className="pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 p-4 rounded-lg border border-surface-border bg-surface/30 font-mono text-sm"
        >
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-steel-grey">
              <span className="text-terminal-green">$</span> filter --tag
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1 rounded border transition-colors ${
                  selectedTag === null
                    ? "border-terminal-green bg-terminal-green/10 text-terminal-green"
                    : "border-surface-border text-steel-grey hover:border-steel-grey"
                }`}
              >
                all
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded border transition-colors ${
                    selectedTag === tag
                      ? "border-terminal-green bg-terminal-green/10 text-terminal-green"
                      : "border-surface-border text-steel-grey hover:border-steel-grey"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            <span className="text-steel-grey ml-auto">
              {filteredStudies.length} results
            </span>
          </div>
        </motion.div>

        {/* Case Studies List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
              >
                <CaseStudyCard
                  study={study}
                  isExpanded={expandedId === study.id}
                  onToggle={() =>
                    setExpandedId(expandedId === study.id ? null : study.id)
                  }
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-steel-grey mb-4">
            Want to see your project in this repository?
          </p>
          <Button href="/#contact">Start Your Build</Button>
        </motion.div>
      </div>
    </div>
  );
}

function CaseStudyCard({
  study,
  isExpanded,
  onToggle,
}: {
  study: CaseStudy;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <BentoCard className="cursor-pointer" hover>
      <div onClick={onToggle}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6">
          {/* Left: Date & ID */}
          <div className="lg:w-32 flex-shrink-0 flex lg:flex-col gap-2 lg:gap-1">
            <span className="font-mono text-sm text-steel-grey">
              {study.date}
            </span>
            <span className="font-mono text-xs text-terminal-green/60">
              #{study.commitHash}
            </span>
          </div>

          {/* Middle: Content */}
          <div className="flex-grow">
            <h3 className="text-lg font-medium tracking-tight text-off-white">
              {study.title}
            </h3>
            <p className="mt-1 text-sm text-steel-grey">
              {study.client.industry} · {study.client.size}
            </p>

            {/* Tags */}
            <div className="mt-3 flex flex-wrap gap-2">
              {study.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant={tag.variant}>
                  {tag.label}
                </Badge>
              ))}
              <Badge>{study.duration}</Badge>
            </div>
          </div>

          {/* Right: Metrics & Expand */}
          <div className="lg:w-48 flex-shrink-0 flex items-center gap-4">
            <div className="flex-grow flex lg:flex-col gap-2 lg:gap-1">
              {study.metrics.slice(0, 2).map((metric, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 lg:justify-end text-sm"
                >
                  <span className="text-steel-grey">{metric.label}:</span>
                  <span className="font-mono text-terminal-green">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="text-terminal-green"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-6 pt-6 border-t border-surface-border grid md:grid-cols-3 gap-6">
              {/* Challenge */}
              <div>
                <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-2">
                  The Challenge
                </h4>
                <p className="text-sm text-steel-grey leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h4 className="text-sm font-mono text-signal-blue uppercase tracking-wider mb-2">
                  The Solution
                </h4>
                <p className="text-sm text-steel-grey leading-relaxed">
                  {study.solution}
                </p>
              </div>

              {/* Results */}
              <div>
                <h4 className="text-sm font-mono text-terminal-green uppercase tracking-wider mb-2">
                  The Results
                </h4>
                <p className="text-sm text-steel-grey leading-relaxed">
                  {study.results}
                </p>
              </div>
            </div>

            {/* All Metrics */}
            <div className="mt-6 pt-6 border-t border-surface-border">
              <div className="flex flex-wrap gap-6">
                {study.metrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-mono text-terminal-green">
                      {metric.value}
                    </div>
                    <div className="text-xs text-steel-grey mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            {study.testimonial && (
              <div className="mt-6 pt-6 border-t border-surface-border">
                <blockquote className="relative">
                  <span className="absolute -top-2 -left-2 text-4xl text-terminal-green/20">
                    &ldquo;
                  </span>
                  <p className="text-off-white italic pl-6">
                    {study.testimonial.quote}
                  </p>
                  <footer className="mt-3 pl-6 text-sm text-steel-grey">
                    — {study.testimonial.author}, {study.testimonial.role}
                  </footer>
                </blockquote>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </BentoCard>
  );
}
