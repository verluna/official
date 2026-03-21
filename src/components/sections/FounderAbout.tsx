"use client";

import { TerminalHeader, Badge, Button } from "@/components/ui";
import { SectionTransition } from "@/components/ui";
import { containerWidth, sectionPadding, sectionHeading } from "@/lib/design-tokens";

export function FounderAbout() {
  return (
    <section id="about" className={`${sectionPadding} bg-charcoal`}>
      <div className={containerWidth}>
        <TerminalHeader>About</TerminalHeader>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start mt-6">
          {/* Left: Story */}
          <SectionTransition className="lg:col-span-3">
            <div>
              <h2 className={`${sectionHeading} mb-6`}>
                Built by a Practitioner,{" "}
                <span className="text-steel-grey">Not a Consultant.</span>
              </h2>

              <div className="space-y-4 text-steel-grey leading-relaxed">
                <p>
                  Verluna was founded by Tolga Oral, a marketing operations
                  leader who spent a decade building automations for B2B SaaS
                  companies across DACH. Not a developer by training, but someone
                  who shipped production AI systems across 300+ sessions because
                  real operational problems demanded real systems.
                </p>
                <p>
                  The origin story is simple: a marketing ops person who kept
                  hitting the limits of configuration. HubSpot workflows that
                  couldn&apos;t handle the logic. Spreadsheets that broke when the
                  data scaled. Vendors who promised integration but delivered
                  manual steps.
                </p>
                <p>
                  Then AI coding tools changed what one person could build. Not
                  &ldquo;no-code&rdquo; -- actual code. Production systems.
                  Deployed on Kubernetes. Used by real employees. The discovery:
                  the operating layer between AI and business is the most
                  valuable thing to build right now, and European enterprises
                  need someone who understands both sides.
                </p>
                <p className="text-off-white font-medium">
                  That thesis became Verluna.
                </p>
              </div>

              <div className="mt-8">
                <Button variant="secondary" href="/about">
                  Read the Full Story
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
              </div>
            </div>
          </SectionTransition>

          {/* Right: Credentials */}
          <SectionTransition delay={0.2} className="lg:col-span-2">
            <div className="bg-surface border border-surface-border rounded-xl p-6 space-y-6">
              <div>
                <span className="font-mono text-[11px] text-terminal-green uppercase tracking-wider block mb-3">
                  Credentials
                </span>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-steel-grey">
                    <span className="text-terminal-green mt-0.5">+</span>
                    300+ AI production sessions with enterprise systems
                  </li>
                  <li className="flex items-start gap-2 text-sm text-steel-grey">
                    <span className="text-terminal-green mt-0.5">+</span>
                    10 years of marketing operations in DACH B2B SaaS
                  </li>
                  <li className="flex items-start gap-2 text-sm text-steel-grey">
                    <span className="text-terminal-green mt-0.5">+</span>
                    Production systems deployed on Kubernetes for enterprise
                    users
                  </li>
                  <li className="flex items-start gap-2 text-sm text-steel-grey">
                    <span className="text-terminal-green mt-0.5">+</span>
                    HubSpot, Salesforce, and n8n automation architecture
                  </li>
                </ul>
              </div>

              <div className="border-t border-surface-border pt-6">
                <span className="font-mono text-[11px] text-terminal-green uppercase tracking-wider block mb-3">
                  Speaking
                </span>
                <div className="bg-charcoal border border-terminal-green/20 rounded-lg p-4">
                  <Badge variant="green" className="mb-2">
                    Upcoming
                  </Badge>
                  <p className="text-sm text-off-white font-medium">
                    &gt;prompt Developer Conference
                  </p>
                  <p className="text-xs text-steel-grey mt-1">
                    April 2026 -- &ldquo;AI Coding as a Non-Developer: Building
                    Production Systems with Claude Code&rdquo;
                  </p>
                </div>
              </div>

              <div className="border-t border-surface-border pt-6">
                <span className="font-mono text-[11px] text-terminal-green uppercase tracking-wider block mb-3">
                  Location
                </span>
                <p className="text-sm text-steel-grey">
                  Berlin, Germany
                </p>
                <p className="text-sm text-steel-grey">
                  Working with clients across DACH and the EU
                </p>
              </div>
            </div>
          </SectionTransition>
        </div>
      </div>
    </section>
  );
}
