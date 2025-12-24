"use client";

import { motion } from "framer-motion";
import { TeamMember } from "@/components/sections/TeamMember";
import { CompanyTimeline } from "@/components/sections/CompanyTimeline";
import { ValuesGrid } from "@/components/sections/ValuesGrid";
import { TrustBar } from "@/components/sections/TrustBar";
import { Contact } from "@/components/sections/Contact";
import { Badge } from "@/components/ui";
import { getFounder, certifications } from "@/data/team";

export function AboutContent() {
  const founder = getFounder();

  return (
    <>
      {/* Mission Statement Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-xl border border-surface-border bg-surface/50 overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-2 border-b border-surface-border bg-surface-elevated/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="ml-2 text-xs font-mono text-steel-grey">
                  verluna/mission.md
                </span>
              </div>

              <div className="p-6 md:p-8">
                <div className="font-mono text-sm text-steel-grey mb-4">
                  <span className="text-terminal-green">$</span> cat mission.md
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                  Building Revenue Infrastructure That Runs Itself
                </h2>

                <div className="space-y-4 text-steel-grey leading-relaxed">
                  <p>
                    The biggest risk to any business is having marketing, sales,
                    and operations work in silos. When these functions don't
                    connect, leads fall through cracks, data gets messy, and
                    growth slows down.
                  </p>
                  <p>
                    At Verluna, we're the architects who connect them. We build
                    single, cohesive systems that drive sustainable revenue.
                    We're both high-level strategists who can align with the
                    C-suite and hands-on operators who build the automation and
                    CRM workflows from scratch.
                  </p>
                  <p className="text-off-white font-medium">
                    While others build slide decks, we build systems. While they
                    create campaigns, we create infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-charcoal/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-terminal-green font-mono">&gt;</span>
              <span className="text-sm font-mono text-steel-grey uppercase tracking-wider">
                Team
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter">
              Meet the Founder
            </h2>
          </motion.div>

          <TeamMember member={founder} />
        </div>
      </section>

      {/* Values Section */}
      <ValuesGrid />

      {/* Timeline Section */}
      <CompanyTimeline />

      {/* Certifications Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-terminal-green font-mono">&gt;</span>
              <span className="text-sm font-mono text-steel-grey uppercase tracking-wider">
                Credentials
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter">
              Certified & Trusted
            </h2>
          </motion.div>

          {/* Certifications grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-lg border border-surface-border bg-surface/50 p-4 text-center"
              >
                <Badge variant={cert.variant} className="mb-2">
                  {cert.issuer}
                </Badge>
                <p className="font-medium text-xs text-steel-grey">
                  {cert.name}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Client logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-sm font-mono text-steel-grey uppercase tracking-wider">
              Trusted by companies including
            </p>
          </motion.div>
          <TrustBar />
        </div>
      </section>

      {/* Contact CTA */}
      <Contact />
    </>
  );
}
