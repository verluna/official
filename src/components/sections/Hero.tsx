"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button, ScrambleText, TerminalLabel } from "@/components/ui";
import { HeroDiagram } from "./HeroDiagram";
import { ArrowRight, Terminal, Zap, Code2 } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [headlineComplete, setHeadlineComplete] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] rounded-full bg-terminal-green/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] rounded-full bg-electric-purple/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* System status badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-surface-border bg-surface/50 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-terminal-green" />
              </span>
              <span className="font-mono text-xs text-steel-grey uppercase tracking-wider">
                GTM Engineering Platform
              </span>
              <span className="px-2 py-0.5 rounded bg-terminal-green/10 text-terminal-green text-[10px] font-mono">
                v2.0
              </span>
            </motion.div>

            {/* Headline with scramble effect */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter leading-[1.1]">
                <ScrambleText
                  text="Architecting"
                  className="block text-off-white"
                  scrambleSpeed={25}
                  revealDelay={40}
                  as="span"
                />
                <span className="block mt-1">
                  <ScrambleText
                    text="Autonomous"
                    className="text-gradient"
                    scrambleSpeed={25}
                    revealDelay={40}
                    characterSet="01"
                    as="span"
                    onComplete={() => setHeadlineComplete(true)}
                  />
                </span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: headlineComplete ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="block"
                >
                  Revenue Engines.
                </motion.span>
              </h1>
            </motion.div>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-steel-grey max-w-xl leading-relaxed"
            >
              We turn manual GTM operations into automated code. Specialized
              engineering for HubSpot, Salesforce, and AI Agents.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button href="#capabilities" size="lg">
                View the Blueprints
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button variant="secondary" href="#repository" size="lg">
                <Terminal className="w-4 h-4 mr-2" />
                View Build Logs
              </Button>
            </motion.div>

            {/* Tech stack */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <TerminalLabel prefix="$">stack</TerminalLabel>
              <div className="flex flex-wrap items-center gap-4">
                {["n8n", "Python", "HubSpot", "Claude"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-1.5 text-sm font-mono text-steel-grey hover:text-off-white transition-colors cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-terminal-green/60" />
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Animated Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative p-6 rounded-xl border border-surface-border bg-surface/30 backdrop-blur-sm">
              {/* Terminal header */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-surface-border">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <span className="ml-2 text-xs font-mono text-steel-grey">
                    workflow.diagram
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-3 h-3 text-terminal-green" />
                  <span className="text-[10px] font-mono text-terminal-green uppercase">
                    Live
                  </span>
                </div>
              </div>

              {/* Diagram */}
              <HeroDiagram />

              {/* Code snippet below */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="mt-4 pt-4 border-t border-surface-border"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="w-3 h-3 text-steel-grey" />
                  <span className="text-[10px] font-mono text-steel-grey uppercase">
                    Implementation
                  </span>
                </div>
                <code className="text-xs font-mono block">
                  <span className="text-electric-purple">async</span>{" "}
                  <span className="text-terminal-green">function</span>{" "}
                  <span className="text-signal-blue">processLead</span>
                  <span className="text-steel-grey">(</span>
                  <span className="text-warning-amber">lead</span>
                  <span className="text-steel-grey">) {"{"}</span>
                  <br />
                  <span className="text-steel-grey ml-4">
                    {"  "}const enriched ={" "}
                  </span>
                  <span className="text-electric-purple">await</span>
                  <span className="text-signal-blue"> enrich</span>
                  <span className="text-steel-grey">(lead);</span>
                  <br />
                  <span className="text-steel-grey ml-4">
                    {"  "}const score ={" "}
                  </span>
                  <span className="text-electric-purple">await</span>
                  <span className="text-signal-blue"> analyze</span>
                  <span className="text-steel-grey">(enriched);</span>
                  <br />
                  <span className="text-steel-grey ml-4">
                    {"  "}
                  </span>
                  <span className="text-electric-purple">return</span>
                  <span className="text-signal-blue"> route</span>
                  <span className="text-steel-grey">(score);</span>
                  <br />
                  <span className="text-steel-grey">{"}"}</span>
                </code>
              </motion.div>
            </div>

            {/* Floating metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-lg border border-surface-border bg-surface backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="text-center">
                  <div className="text-lg font-mono text-terminal-green">14</div>
                  <div className="text-[10px] text-steel-grey">Systems</div>
                </div>
                <div className="w-px h-8 bg-surface-border" />
                <div className="text-center">
                  <div className="text-lg font-mono text-electric-purple">1.4M</div>
                  <div className="text-[10px] text-steel-grey">Processed</div>
                </div>
              </div>
            </motion.div>

            {/* Connection indicator */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                boxShadow: [
                  "0 0 0 0 rgba(0, 255, 148, 0.4)",
                  "0 0 20px 5px rgba(0, 255, 148, 0.2)",
                  "0 0 0 0 rgba(0, 255, 148, 0.4)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-3 -right-3 px-3 py-1.5 rounded-lg border border-terminal-green/30 bg-charcoal text-terminal-green text-xs font-mono"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-terminal-green animate-pulse" />
                Connected
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono text-steel-grey uppercase tracking-wider">
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border border-surface-border flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-terminal-green"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
