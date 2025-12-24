"use client";

import { motion } from "framer-motion";
import { BentoCard, BentoGrid } from "@/components/ui";

const principles = [
  {
    title: "Code Over Config",
    description:
      "We write infrastructure, not just workflows. Every solution is version-controlled, documented, and built to scale.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Forward Deployed",
    description:
      "We embed with your team. No handoff documents, no support tickets. We work until the system runs itself.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Measure Everything",
    description:
      "Every pipeline has metrics. Every workflow has logs. You'll know exactly what's running and why.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];

const techStack = [
  { name: "n8n", category: "Automation" },
  { name: "Python", category: "Backend" },
  { name: "HubSpot", category: "CRM" },
  { name: "Salesforce", category: "CRM" },
  { name: "OpenAI", category: "AI" },
  { name: "Anthropic", category: "AI" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Supabase", category: "Backend" },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-terminal-green font-mono">&gt;</span>
              <span className="text-sm font-mono text-steel-grey uppercase tracking-wider">
                About
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter">
              We&apos;re not a marketing agency.
            </h2>
            <div className="mt-6 space-y-4 text-steel-grey leading-relaxed">
              <p>
                We&apos;re engineers who happen to understand go-to-market. While
                others build slide decks, we build systems. While they create
                campaigns, we create infrastructure.
              </p>
              <p>
                Our team comes from DevOps, data engineering, and AI backgrounds.
                We apply software engineering principles to revenue operations
                because that&apos;s what modern GTM requires.
              </p>
              <p className="text-off-white">
                The result? Pipelines that run 24/7. Agents that scale infinitely.
                Revenue engines that require zero manual intervention.
              </p>
            </div>

            {/* Terminal signature */}
            <div className="mt-8 p-4 rounded-lg border border-surface-border bg-surface/30 font-mono text-sm">
              <div className="text-steel-grey">
                <span className="text-terminal-green">$</span> whoami
              </div>
              <div className="mt-2 text-off-white">
                verluna: GTM Engineering Team
              </div>
              <div className="mt-1 text-steel-grey">
                <span className="text-terminal-green">$</span> location
              </div>
              <div className="mt-2 text-off-white">Berlin, DE</div>
              <div className="mt-1 text-steel-grey">
                <span className="text-terminal-green">$</span> uptime
              </div>
              <div className="mt-2 text-terminal-green">
                99.9% | All systems operational
              </div>
            </div>
          </motion.div>

          {/* Right: Principles & Stack */}
          <div className="space-y-8">
            {/* Principles */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold tracking-tight mb-6">
                Our Principles
              </h3>
              <div className="space-y-4">
                {principles.map((principle, index) => (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <BentoCard className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-terminal-green/10 flex items-center justify-center text-terminal-green flex-shrink-0">
                        {principle.icon}
                      </div>
                      <div>
                        <h4 className="font-medium tracking-tight">
                          {principle.title}
                        </h4>
                        <p className="mt-1 text-sm text-steel-grey">
                          {principle.description}
                        </p>
                      </div>
                    </BentoCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold tracking-tight mb-6">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-3 py-1.5 rounded border border-surface-border bg-surface/50 text-sm font-mono text-steel-grey hover:text-off-white hover:border-terminal-green/50 transition-colors cursor-default"
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
