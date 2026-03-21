"use client";

import { motion } from "framer-motion";
import { TerminalHeader, Badge, GlowCard, Button } from "@/components/ui";
import { SectionTransition, StaggeredList, StaggeredItem } from "@/components/ui";
import { containerWidth, sectionPadding, sectionHeading } from "@/lib/design-tokens";

interface ServiceTier {
  name: string;
  tagline: string;
  price: string;
  timeline: string;
  features: string[];
  color: "blue" | "green" | "purple";
  accentClass: string;
  cta: string;
  ctaHref: string;
  badge?: string;
}

const services: ServiceTier[] = [
  {
    name: "Agent Readiness Audit",
    tagline: "Find the gaps.",
    price: "EUR 5,000 -- 10,000",
    timeline: "2 weeks",
    features: [
      "Architecture diagram of your entire GTM stack with data flows and integration gaps",
      "Automation maturity score benchmarked against 50+ B2B SaaS operations",
      "Prioritized roadmap with estimated ROI for each opportunity",
      "30 days of post-launch support included",
    ],
    color: "blue",
    accentClass: "border-t-2 border-t-signal-blue",
    cta: "Book Your Audit",
    ctaHref: "/services/audit",
  },
  {
    name: "Agent Architecture Build",
    tagline: "Fix the systems.",
    price: "EUR 15,000 -- 50,000",
    timeline: "4 -- 8 weeks",
    features: [
      "Autonomous workflows that handle repetitive operations your team does by hand",
      "Agent-powered processes designed with the autonomy gradient",
      "Documentation and training so your team owns the system after we leave",
      "Production deployment, not a prototype engagement",
    ],
    color: "green",
    accentClass: "border-t-2 border-t-terminal-green",
    cta: "Scope Your Build",
    ctaHref: "/services/build",
  },
  {
    name: "Managed Agent Operations",
    tagline: "Run the operations.",
    price: "From EUR 5,000/month",
    timeline: "Ongoing",
    features: [
      "Two-week experiment sprints that test, tune, and ship improvements",
      "Monthly performance reports with metrics that matter",
      "One architect with an agent workforce: throughput of a 3-to-5-person team",
      "Scale operations without scaling payroll",
    ],
    color: "purple",
    accentClass: "border-t-2 border-t-electric-purple",
    cta: "Join Waitlist",
    ctaHref: "/contact",
    badge: "Coming Q4 2026",
  },
  {
    name: "Agent Architecture Consulting",
    tagline: "Design the layer.",
    price: "Custom scope",
    timeline: "Custom",
    features: [
      "Domain decomposition of your operations into bounded areas with clear ownership",
      "Governance framework defining autonomous vs. human-approved actions",
      "Agent infrastructure blueprint: orchestration, memory, security, observability",
      "Vendor-neutral, based on production patterns",
    ],
    color: "green",
    accentClass: "border-t-2 border-t-steel-grey",
    cta: "Schedule a Session",
    ctaHref: "/contact",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className={sectionPadding}>
      <div className={containerWidth}>
        <TerminalHeader>Services</TerminalHeader>

        <SectionTransition>
          <h2 className={`${sectionHeading} max-w-xl mt-4 mb-4`}>
            Four Ways to Work With Us.{" "}
            <span className="text-steel-grey">Start Where You Are.</span>
          </h2>
          <p className="text-steel-grey max-w-2xl mb-12">
            Every engagement follows the same six-phase methodology. The scope
            depends on where you are.
          </p>
        </SectionTransition>

        <StaggeredList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <StaggeredItem key={i}>
              <div
                className={`
                  relative bg-surface border border-surface-border rounded-xl p-6 h-full flex flex-col
                  transition-all duration-300 hover:border-surface-border/80 hover:-translate-y-1
                  ${s.accentClass}
                `}
              >
                {s.badge && (
                  <Badge variant="purple" className="absolute top-4 right-4 text-[10px]">
                    {s.badge}
                  </Badge>
                )}

                <span
                  className={`font-mono text-[11px] uppercase tracking-wider font-semibold mb-3 ${
                    s.color === "blue"
                      ? "text-signal-blue"
                      : s.color === "purple"
                      ? "text-electric-purple"
                      : "text-terminal-green"
                  }`}
                >
                  {s.tagline}
                </span>

                <h3 className="text-lg font-semibold text-off-white mb-2">
                  {s.name}
                </h3>

                <div className="mb-4">
                  <span className="font-mono text-lg font-semibold text-off-white">
                    {s.price}
                  </span>
                  <span className="text-sm text-steel-grey block mt-0.5">
                    {s.timeline}
                  </span>
                </div>

                <ul className="space-y-3 mb-6 flex-1">
                  {s.features.map((f, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-steel-grey leading-relaxed"
                    >
                      <span className="text-terminal-green text-xs mt-1 flex-shrink-0">
                        +
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="secondary"
                  size="sm"
                  href={s.ctaHref}
                  className="w-full justify-center"
                >
                  {s.cta}
                </Button>
              </div>
            </StaggeredItem>
          ))}
        </StaggeredList>

        <SectionTransition delay={0.3}>
          <p className="text-center text-steel-grey mt-8 italic">
            Not sure where to start? 80% of clients begin with the audit.
          </p>
        </SectionTransition>
      </div>
    </section>
  );
}
