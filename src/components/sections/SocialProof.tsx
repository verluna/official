"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TerminalHeader, Badge } from "@/components/ui";
import { SectionTransition } from "@/components/ui";
import { containerWidth, sectionPadding } from "@/lib/design-tokens";

interface Metric {
  target: number;
  suffix: string;
  label: string;
}

const metrics: Metric[] = [
  { target: 300, suffix: "+", label: "AI Production Sessions" },
  { target: 7, suffix: "", label: "Operational Domains" },
  { target: 83, suffix: "", label: "Specialized Agent Skills" },
  { target: 12, suffix: "", label: "External Integrations" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-mono text-4xl sm:text-5xl font-bold text-terminal-green leading-none">
      {count}
      {suffix}
    </span>
  );
}

export function SocialProof() {
  return (
    <section
      id="proof"
      className={`${sectionPadding} bg-surface border-t border-b border-surface-border`}
    >
      <div className={containerWidth}>
        <TerminalHeader>Built in Production</TerminalHeader>

        <SectionTransition>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter max-w-xl mt-4 mb-12">
            Built in Production,{" "}
            <span className="text-steel-grey">Not in PowerPoint.</span>
          </h2>
        </SectionTransition>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center py-4"
            >
              <CountUp target={m.target} suffix={m.suffix} />
              <span className="block text-sm text-steel-grey mt-2">
                {m.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-surface-border mb-12" />

        {/* Evidence quotes */}
        <SectionTransition>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-charcoal border border-surface-border rounded-lg p-5">
              <p className="text-sm text-off-white leading-relaxed mb-3">
                &ldquo;4 hours of manual matching reduced to under 2
                minutes.&rdquo;
              </p>
              <span className="font-mono text-xs text-steel-grey">
                Semantic matching system -- B2B SaaS
              </span>
            </div>
            <div className="bg-charcoal border border-surface-border rounded-lg p-5">
              <p className="text-sm text-off-white leading-relaxed mb-3">
                &ldquo;7 research sessions produced a complete attribution
                architecture at zero software cost.&rdquo;
              </p>
              <span className="font-mono text-xs text-steel-grey">
                Marketing intelligence -- Enterprise
              </span>
            </div>
            <div className="bg-charcoal border border-surface-border rounded-lg p-5">
              <p className="text-sm text-off-white leading-relaxed mb-3">
                &ldquo;10 reference documents synthesized from a complex
                enterprise codebase.&rdquo;
              </p>
              <span className="font-mono text-xs text-steel-grey">
                Knowledge codification -- Enterprise
              </span>
            </div>
          </div>
        </SectionTransition>

        {/* Conference badge + quote */}
        <SectionTransition delay={0.2}>
          <div className="flex flex-col items-center text-center">
            <Badge variant="green" className="mb-6">
              Speaking at &gt;prompt Developer Conference -- April 2026
            </Badge>
            <blockquote className="text-xl font-medium text-off-white max-w-lg leading-relaxed">
              &ldquo;We build working systems, not strategy decks.&rdquo;
            </blockquote>
            <cite className="font-mono text-xs text-steel-grey mt-3 not-italic">
              -- Verluna
            </cite>
          </div>
        </SectionTransition>
      </div>
    </section>
  );
}
