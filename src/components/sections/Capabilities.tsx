"use client";

import { motion } from "framer-motion";
import { BentoCard } from "@/components/ui";

interface CapabilityCard {
  title: string;
  tagline: string;
  icon: React.ReactNode;
  features: string[];
  color: "green" | "blue" | "purple";
  track: string;
}

const capabilities: CapabilityCard[] = [
  {
    track: "Track A",
    title: "GTM Audit",
    tagline: "Find the leaks.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
        />
      </svg>
    ),
    features: [
      "Complete data mapping",
      "Tech stack analysis",
      "Bottleneck identification",
      "Integration audit",
      "Process documentation",
    ],
    color: "blue",
  },
  {
    track: "Track B",
    title: "Autonomous Ops",
    tagline: "Fix the flow.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    features: [
      "n8n workflow design",
      "Lead routing automation",
      "Attribution modeling",
      "CRM synchronization",
      "Real-time notifications",
    ],
    color: "green",
  },
  {
    track: "Track C",
    title: "Custom AI Agents",
    tagline: "Scale the workforce.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    features: [
      "RAG applications",
      "RFP analyzers",
      "QA automation bots",
      "Data extraction agents",
      "Custom LLM pipelines",
    ],
    color: "purple",
  },
];

const colorStyles = {
  green: {
    text: "text-terminal-green",
    bg: "bg-terminal-green/10",
    border: "border-terminal-green/20",
    hover: "group-hover:border-terminal-green",
  },
  blue: {
    text: "text-signal-blue",
    bg: "bg-signal-blue/10",
    border: "border-signal-blue/20",
    hover: "group-hover:border-signal-blue",
  },
  purple: {
    text: "text-electric-purple",
    bg: "bg-electric-purple/10",
    border: "border-electric-purple/20",
    hover: "group-hover:border-electric-purple",
  },
};

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-steel-grey uppercase tracking-wider">
            Capabilities
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tighter">
            Three Tracks to{" "}
            <span className="text-gradient">Autonomous Revenue</span>
          </h2>
          <p className="mt-4 text-steel-grey max-w-2xl mx-auto">
            Whether you need to audit, automate, or augment your GTM operations,
            we have the engineering expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <BentoCard
                className={`h-full transition-all duration-300 ${colorStyles[capability.color].hover}`}
                glowColor={capability.color}
              >
                {/* Track label */}
                <span
                  className={`text-xs font-mono ${colorStyles[capability.color].text} uppercase tracking-wider`}
                >
                  {capability.track}
                </span>

                {/* Icon */}
                <div
                  className={`mt-4 w-14 h-14 rounded-lg flex items-center justify-center ${colorStyles[capability.color].bg} ${colorStyles[capability.color].text}`}
                >
                  {capability.icon}
                </div>

                {/* Title & Tagline */}
                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {capability.title}
                </h3>
                <p
                  className={`mt-1 text-sm font-mono ${colorStyles[capability.color].text}`}
                >
                  {capability.tagline}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {capability.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-steel-grey"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${colorStyles[capability.color].bg} ${colorStyles[capability.color].text}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-surface-border">
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 text-sm font-medium ${colorStyles[capability.color].text} hover:underline`}
                  >
                    Learn more
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </BentoCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
