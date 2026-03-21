"use client";

import { motion } from "framer-motion";
import { Badge, ScrambleText, Button } from "@/components/ui";
import { containerWidth } from "@/lib/design-tokens";

const proofMetrics = [
  { value: "300+", label: "Agent Sessions" },
  { value: "83", label: "Automation Skills" },
  { value: "12", label: "System Integrations" },
];

export function HeroNew() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        {/* Grid that slowly drifts */}
        <div
          className="absolute inset-0 animate-[gridShift_20s_linear_infinite] opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(38,38,38,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(38,38,38,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)",
          }}
        />
        {/* Green orb */}
        <div
          className="absolute -top-[200px] -left-[100px] w-[600px] h-[600px] rounded-full opacity-15 blur-[120px]"
          style={{ background: "#00FF94" }}
        />
        {/* Purple orb */}
        <div
          className="absolute -bottom-[150px] -right-[100px] w-[500px] h-[500px] rounded-full opacity-15 blur-[120px] animate-[orbFloat_15s_ease-in-out_infinite_alternate]"
          style={{ background: "#7C3AED" }}
        />
      </div>

      <div className={`${containerWidth} relative z-10`}>
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="green" className="mb-8 gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-terminal-green animate-pulse" />
              Agent Operations -- Berlin, DE
            </Badge>
          </motion.div>

          {/* H1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.08] mb-6">
              <ScrambleText
                text="Your Agents Are Coming."
                as="span"
                className="block text-off-white"
                scrambleSpeed={25}
                revealDelay={40}
              />
              <span className="block text-off-white mt-2">
                Who Architects the Operations?
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-steel-grey max-w-xl mb-10 leading-relaxed"
          >
            European enterprises need agent infrastructure that is governed,
            reliable, and compliant. We build it.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Button
              variant="primary"
              size="lg"
              href="/scorecard"
              className="bg-terminal-green text-void hover:bg-terminal-green/90 font-semibold"
            >
              Take the Agent Readiness Assessment
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Button>
            <Button variant="secondary" size="lg" href="/methodology">
              See Our Methodology
            </Button>
          </motion.div>

          {/* Proof strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex gap-8 sm:gap-12 flex-wrap"
          >
            {proofMetrics.map((m, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="font-mono text-2xl sm:text-3xl font-semibold text-terminal-green leading-none">
                  {m.value}
                </span>
                <span className="text-sm text-steel-grey">{m.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
