"use client";

import { motion } from "framer-motion";
import { GitCommit, Rocket, Users, Flag } from "lucide-react";
import { milestones } from "@/data/team";

const typeIcons = {
  founded: Flag,
  milestone: GitCommit,
  client: Users,
  launch: Rocket,
};

const typeColors = {
  founded: "terminal-green",
  milestone: "electric-purple",
  client: "signal-blue",
  launch: "terminal-green",
};

export function CompanyTimeline() {
  return (
    <section className="py-24 bg-charcoal/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-terminal-green font-mono">&gt;</span>
            <span className="text-sm font-mono text-steel-grey uppercase tracking-wider">
              Commit History
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter">
            Our Journey
          </h2>
          <p className="mt-4 text-steel-grey max-w-2xl">
            From founding to today. Every milestone tracked, every achievement
            committed.
          </p>
        </motion.div>

        {/* Git branch header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6 p-4 rounded-lg border border-surface-border bg-surface/30 font-mono text-sm"
        >
          <div className="flex flex-wrap items-center gap-4 text-steel-grey">
            <span className="text-terminal-green">main</span>
            <span className="text-surface-border">|</span>
            <span>{milestones.length} commits</span>
            <span className="text-surface-border hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
              actively growing
            </span>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-surface-border" />

          <div className="space-y-6">
            {milestones.map((milestone, index) => {
              const Icon = typeIcons[milestone.type];
              const color = typeColors[milestone.type];

              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-16"
                >
                  {/* Commit dot */}
                  <div
                    className={`absolute left-4 w-5 h-5 rounded-full flex items-center justify-center
                      ${color === "terminal-green" ? "bg-terminal-green/20 border-2 border-terminal-green" : ""}
                      ${color === "electric-purple" ? "bg-electric-purple/20 border-2 border-electric-purple" : ""}
                      ${color === "signal-blue" ? "bg-signal-blue/20 border-2 border-signal-blue" : ""}
                    `}
                  >
                    <Icon
                      className={`w-2.5 h-2.5
                        ${color === "terminal-green" ? "text-terminal-green" : ""}
                        ${color === "electric-purple" ? "text-electric-purple" : ""}
                        ${color === "signal-blue" ? "text-signal-blue" : ""}
                      `}
                    />
                  </div>

                  {/* Content card */}
                  <div className="rounded-lg border border-surface-border bg-surface/50 p-5">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-terminal-green/60">
                        {milestone.commitHash}
                      </span>
                      <span className="font-mono text-xs text-steel-grey">
                        {milestone.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium tracking-tight">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-sm text-steel-grey">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
