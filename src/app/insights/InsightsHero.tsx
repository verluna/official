"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui";

const placeholderArticles = [
  {
    title: "Why Every European Enterprise Needs an Agent Operations Strategy",
    excerpt: "51% of enterprises are piloting agents. Most have no plan for operating them. Here is why the operating layer matters more than the technology.",
    date: "March 2026",
    readingTime: "8 min read",
    category: "Strategy",
  },
  {
    title: "The Six-Phase Framework for Agent-Native Operations",
    excerpt: "From observation to codification: the methodology that emerged from 300+ production AI sessions and enterprise deployments.",
    date: "March 2026",
    readingTime: "12 min read",
    category: "Framework",
  },
  {
    title: "Agent Readiness: What the 2026 Landscape Means for Your GTM Stack",
    excerpt: "An analysis of where European B2B SaaS companies stand on agent adoption, and the three infrastructure gaps that will determine who scales.",
    date: "March 2026",
    readingTime: "10 min read",
    category: "Strategy",
  },
  {
    title: "From XLOOKUP to AI: How Semantic Matching Replaced Manual Account Matching",
    excerpt: "The technical story behind replacing 4 hours of manual matching with 90 seconds of semantic AI. Architecture decisions, tradeoffs, and what we learned.",
    date: "February 2026",
    readingTime: "7 min read",
    category: "Case Study",
  },
  {
    title: "Building a Marketing Intelligence System with Multi-Agent Research",
    excerpt: "How 7 research sessions with 5-8 agents each produced a complete attribution architecture at zero software cost.",
    date: "February 2026",
    readingTime: "14 min read",
    category: "Technical",
  },
  {
    title: "The Agent Operations Playbook: SOPs for Your AI Workforce",
    excerpt: "Standard operating procedures for agent governance, routing, escalation, and observability. The documentation your agent infrastructure needs.",
    date: "January 2026",
    readingTime: "11 min read",
    category: "Framework",
  },
];

const categoryFilters = ["All", "Strategy", "Technical", "Case Study", "Framework"];

export function InsightsHero() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered = selectedCategory === "All"
    ? placeholderArticles
    : placeholderArticles.filter((a) => a.category === selectedCategory);

  const categoryColorMap: Record<string, string> = {
    Strategy: "text-signal-blue border-signal-blue/20 bg-signal-blue/10",
    Technical: "text-terminal-green border-terminal-green/20 bg-terminal-green/10",
    "Case Study": "text-electric-purple border-electric-purple/20 bg-electric-purple/10",
    Framework: "text-warning-amber border-warning-amber/20 bg-warning-amber/10",
  };

  return (
    <div className="pt-32 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-terminal-green font-mono">&gt;</span>
            <span className="text-sm font-mono text-steel-grey uppercase tracking-wider">
              Insights
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tighter">
            Insights on Agent Operations
          </h1>
          <p className="mt-6 text-lg text-steel-grey leading-relaxed">
            Patterns from real engagements, architectural decisions and why we
            made them, tools we built, and frameworks we use. If you can
            implement it yourself after reading, good. That means we explained
            it well enough.
          </p>
        </motion.div>

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          id="newsletter"
          className="mb-16 p-6 sm:p-8 rounded-xl border border-surface-border bg-surface/50"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-grow">
              <h2 className="text-lg font-semibold tracking-tight mb-1">
                The Agent Operations Briefing
              </h2>
              <p className="text-sm text-steel-grey">
                Every two weeks: one actionable insight on AI agent
                infrastructure, governance patterns, and European compliance.
              </p>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-2 text-terminal-green font-mono text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Subscribed
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubscribed(true);
                }}
                className="flex gap-3 flex-shrink-0"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@company.com"
                  className="px-4 py-2.5 rounded border border-surface-border bg-charcoal text-off-white font-mono text-sm focus:outline-none focus:border-terminal-green/50 focus:ring-2 focus:ring-terminal-green/20 transition-colors w-64"
                />
                <Button variant="primary" size="sm">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
          <p className="text-xs text-steel-grey mt-3">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {categoryFilters.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-sm font-mono rounded border transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? "border-terminal-green text-terminal-green bg-terminal-green/10"
                  : "border-surface-border text-steel-grey hover:text-off-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filtered.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group p-6 rounded-xl border border-surface-border bg-surface/30 hover:border-terminal-green/30 hover:shadow-[0_0_30px_rgba(0,255,148,0.08)] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`text-xs font-mono px-2 py-0.5 rounded border ${
                    categoryColorMap[article.category] || "text-steel-grey border-surface-border bg-surface"
                  }`}
                >
                  {article.category}
                </span>
                <span className="text-xs text-steel-grey">{article.readingTime}</span>
              </div>
              <h3 className="text-base font-semibold tracking-tight text-off-white mb-2 group-hover:text-terminal-green transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-steel-grey leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
              <div className="mt-4 text-xs text-steel-grey font-mono">
                {article.date}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
