"use client";

import { motion } from "framer-motion";

const values = [
  {
    name: "CODE_OVER_CONFIG",
    type: "const",
    value: `{
  principle: "We write infrastructure, not workflows",
  approach: "Version-controlled, documented, scalable",
  outcome: "Systems that evolve with your business"
}`,
    color: "terminal-green",
    description:
      "Every solution we build is version-controlled, documented, and designed to scale. No duct-tape automation. No unmaintainable workflows.",
  },
  {
    name: "FORWARD_DEPLOYED",
    type: "const",
    value: `{
  principle: "We embed with your team",
  approach: "No handoffs, no support tickets",
  outcome: "Systems that run themselves"
}`,
    color: "electric-purple",
    description:
      "We work alongside you via Slack. No handoff documents, no support tickets. We stay until the system runs itself.",
  },
  {
    name: "MEASURE_EVERYTHING",
    type: "const",
    value: `{
  principle: "Every pipeline has metrics",
  approach: "Every workflow has logs",
  outcome: "Complete visibility into operations"
}`,
    color: "signal-blue",
    description:
      "You know exactly what's running, when, and why. Complete visibility into your revenue operations at all times.",
  },
];

export function ValuesGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-terminal-green font-mono">&gt;</span>
            <span className="text-sm font-mono text-steel-grey uppercase tracking-wider">
              Core Values
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter">
            How We Operate
          </h2>
          <p className="mt-4 text-steel-grey max-w-2xl">
            Our principles aren't just words. They're constants we never
            override.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl border border-surface-border bg-surface/50 overflow-hidden h-full"
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-2 border-b border-surface-border bg-surface-elevated/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="ml-2 text-xs font-mono text-steel-grey truncate">
                  values/{value.name.toLowerCase()}.ts
                </span>
              </div>

              {/* Code block */}
              <div className="p-4">
                <pre className="font-mono text-xs overflow-x-auto mb-4">
                  <code>
                    <span className="text-electric-purple">{value.type}</span>{" "}
                    <span
                      className={
                        value.color === "terminal-green"
                          ? "text-terminal-green"
                          : value.color === "electric-purple"
                            ? "text-electric-purple"
                            : "text-signal-blue"
                      }
                    >
                      {value.name}
                    </span>
                    <span className="text-steel-grey"> = </span>
                    <span className="text-steel-grey whitespace-pre">
                      {value.value}
                    </span>
                    <span className="text-steel-grey">;</span>
                  </code>
                </pre>

                {/* Description */}
                <p className="text-sm text-steel-grey leading-relaxed border-t border-surface-border pt-4">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
