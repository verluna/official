"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { SectionTransition } from "@/components/ui";
import { containerWidth } from "@/lib/design-tokens";

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-surface" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,255,148,0.15), transparent 70%)",
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(38,38,38,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(38,38,38,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className={`${containerWidth} relative z-10 text-center`}>
        <SectionTransition>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter mb-6 max-w-3xl mx-auto">
            Stop Piloting.{" "}
            <span className="text-terminal-green">Start Operating.</span>
          </h2>
          <p className="text-lg text-steel-grey max-w-xl mx-auto mb-4 leading-relaxed">
            The window between &ldquo;experimenting with AI&rdquo; and
            &ldquo;losing ground to companies that operationalized it&rdquo; is
            closing. Verluna helps European B2B companies cross that gap with
            architecture, not experiments.
          </p>
          <p className="text-steel-grey max-w-lg mx-auto mb-10">
            30 minutes. No pitch. We map your agent readiness and tell you the 3
            highest-impact moves.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href="/contact"
              className="bg-terminal-green text-void hover:bg-terminal-green/90 font-semibold"
            >
              Book Your Strategy Call
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
              Read the Methodology
            </Button>
          </div>
        </SectionTransition>
      </div>
    </section>
  );
}
