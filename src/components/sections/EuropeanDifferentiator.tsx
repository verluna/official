"use client";

import { TerminalHeader, Badge, GlowCard } from "@/components/ui";
import { SectionTransition, StaggeredList, StaggeredItem } from "@/components/ui";
import { containerWidth, sectionPadding, sectionHeading } from "@/lib/design-tokens";

const differentiators = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "EU AI Act Compliance by Design",
    desc: "Agent governance frameworks built from Article 9 risk assessment requirements. Autonomy classification, human oversight mechanisms, and audit trails are architectural decisions, not afterthoughts. We design for the regulation that takes effect in 2026.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "GDPR-Native Data Architecture",
    desc: "Data residency, consent management, and processing agreements are part of the infrastructure blueprint. Agent memory systems designed with data minimization and purpose limitation built into the architecture. No cross-border data flows without explicit design.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Berlin-Based, DACH-Fluent",
    desc: "We operate in your timezone, understand your market dynamics, and work in German when needed. DACH B2B SaaS is not Silicon Valley. Company name matching with GmbH, AG, and SE variants. HubSpot configurations for European field marketing workflows.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Data Sovereignty First",
    desc: "European enterprises cannot afford agent systems that route data through US infrastructure without controls. We architect for EU data residency, design with European cloud providers as first-class options, and ensure your agent infrastructure respects the boundaries your compliance team requires.",
  },
];

export function EuropeanDifferentiator() {
  return (
    <section id="europe" className={`${sectionPadding} bg-charcoal`}>
      <div className={containerWidth}>
        <TerminalHeader>European Advantage</TerminalHeader>

        <SectionTransition>
          <div className="flex flex-wrap items-center gap-3 mt-4 mb-4">
            <h2 className={sectionHeading}>
              Built for European Enterprises.
            </h2>
            <Badge variant="blue">EU AI Act Ready</Badge>
          </div>
          <p className="text-steel-grey text-lg max-w-2xl mb-4 leading-relaxed">
            US-based AI consultancies optimize for speed. European enterprises
            need architecture that is governed, compliant, and auditable from day
            one. That requires a partner who builds governance into the
            foundation, not as a compliance layer bolted on after launch.
          </p>
          <p className="text-steel-grey max-w-2xl mb-12 leading-relaxed">
            Verluna is that partner. Berlin-based, DACH-fluent, and
            purpose-built for the regulatory and operational reality of European
            B2B.
          </p>
        </SectionTransition>

        <StaggeredList className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {differentiators.map((d, i) => (
            <StaggeredItem key={i}>
              <GlowCard glowColor="blue" hover={true} delay={i * 0.1} className="h-full">
                <div className="p-6 flex gap-4">
                  <div className="text-signal-blue flex-shrink-0 mt-1">
                    {d.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-off-white mb-2">
                      {d.title}
                    </h3>
                    <p className="text-sm text-steel-grey leading-relaxed">
                      {d.desc}
                    </p>
                  </div>
                </div>
              </GlowCard>
            </StaggeredItem>
          ))}
        </StaggeredList>
      </div>
    </section>
  );
}
