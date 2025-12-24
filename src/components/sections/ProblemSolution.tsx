"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CodeBlock } from "@/components/ui";

const chaosItems = [
  "VLOOKUPs across 15 spreadsheets",
  "Copy-pasting leads between tools",
  "Manual data entry into CRM",
  "Slack pinging for every update",
  "Weekly reporting nightmares",
];

const automationCode = `# Lead Processing Pipeline
from verluna import Pipeline, Enrichment

pipeline = Pipeline("inbound_leads")

@pipeline.trigger("hubspot.form_submit")
async def process_lead(lead: Lead):
    # Enrich with firmographic data
    enriched = await Enrichment.company(
        lead.email,
        sources=["clearbit", "apollo"]
    )

    # Score based on ICP fit
    score = await Score.calculate(enriched)

    # Route to CRM + notify team
    await hubspot.create_contact(enriched)
    await slack.notify("#sales", f"New {score}+ lead")

    return {"status": "processed", "score": score}`;

export function ProblemSolution() {
  const [sliderValue, setSliderValue] = useState(50);
  const showCode = sliderValue > 50;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-4">
            From Chaos to <span className="text-terminal-green">Code</span>
          </h2>
          <p className="text-steel-grey max-w-2xl mx-auto">
            See how we transform manual operations into automated systems.
          </p>
        </motion.div>

        {/* Slider Control */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-6 mb-4">
            <span
              className={`text-sm font-mono transition-colors ${
                !showCode ? "text-red-400" : "text-steel-grey"
              }`}
            >
              The Chaos
            </span>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="w-48 h-2 bg-surface-border rounded-lg appearance-none cursor-pointer accent-terminal-green"
            />
            <span
              className={`text-sm font-mono transition-colors ${
                showCode ? "text-terminal-green" : "text-steel-grey"
              }`}
            >
              The Architecture
            </span>
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="relative min-h-[400px]">
          {/* Chaos View */}
          <motion.div
            animate={{ opacity: showCode ? 0 : 1, x: showCode ? -50 : 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 ${showCode ? "pointer-events-none" : ""}`}
          >
            <div className="max-w-xl mx-auto p-8 rounded-lg border border-red-500/30 bg-red-500/5">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <span className="text-sm font-mono text-red-400">
                  manual_process.xlsx
                </span>
              </div>
              <ul className="space-y-4">
                {chaosItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-steel-grey"
                  >
                    <span className="text-red-400 line-through decoration-2">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-red-500/20">
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-steel-grey">Time wasted:</span>
                  <span className="font-mono text-red-400">~20 hrs/week</span>
                </div>
                <div className="flex items-center gap-4 text-sm mt-2">
                  <span className="text-steel-grey">Error rate:</span>
                  <span className="font-mono text-red-400">High</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Architecture View */}
          <motion.div
            animate={{ opacity: showCode ? 1 : 0, x: showCode ? 0 : 50 }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 ${!showCode ? "pointer-events-none" : ""}`}
          >
            <div className="max-w-2xl mx-auto">
              <CodeBlock
                code={automationCode}
                language="python"
                filename="pipeline.py"
              />
              <div className="mt-6 flex items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-steel-grey">Time saved:</span>
                  <span className="font-mono text-terminal-green">20 hrs/week</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-steel-grey">Error rate:</span>
                  <span className="font-mono text-terminal-green">~0%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-steel-grey">Status:</span>
                  <span className="flex items-center gap-1 font-mono text-terminal-green">
                    <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
                    Automated
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
