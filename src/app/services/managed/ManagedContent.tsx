import { Reveal } from "@/components/home";
import { ServiceIntro } from "@/components/services/ServiceIntro";
import { FitPanel } from "@/components/services/FitPanel";
import { PhaseSection } from "@/components/services/PhaseSection";
import { PricingSection } from "@/components/services/PricingSection";
import { ServiceClosing } from "@/components/services/ServiceClosing";
import { managedCopy } from "@/data/copy/services";

const deliverableSpans = [
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
];

export function ManagedContent() {
  return (
    <>
      <ServiceIntro
        heading={managedCopy.heading}
        intro={managedCopy.intro}
        price={managedCopy.price}
        priceNote={managedCopy.priceNote}
        secondary={{ label: "Start with the audit", href: "/services/audit" }}
      />

      {/* Why managed exists */}
      <section className="section-padding border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text">
                Automation does not maintain itself.
              </h2>
              <div className="mt-6 space-y-5 text-lg text-text-muted leading-relaxed">
                <p>
                  Most companies learn this the hard way. Automations break
                  silently, data quality erodes, and the team quietly returns
                  to manual work because nobody has time to debug the
                  pipeline. The investment decays because nobody owns the
                  operation.
                </p>
                <p>
                  We own the health of your agent infrastructure the way a
                  good DevOps team owns the health of your cloud
                  infrastructure: proactive, measured, and improving every
                  month. That is why this is our lead engagement, and why it
                  runs on a six-month minimum.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Fit + working relationship */}
      <section className="section-padding border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <Reveal className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text">
                Capacity without a hiring timeline.
              </h2>
              <div className="mt-6 space-y-5 text-lg text-text-muted leading-relaxed max-w-xl">
                <p>
                  One Verluna architect with an agent workforce covers what
                  would otherwise take a small internal team: operations,
                  maintenance, new builds, and reporting. No recruiting, no
                  ramp time, no management overhead.
                </p>
                <p>
                  And no lock-in. Documentation and knowledge transfer are
                  continuous. When you are ready to bring operations in-house,
                  we help you make the transition.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-5">
              <FitPanel whoFor={managedCopy.whoFor} notFor={managedCopy.notFor} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* What's in the engagement */}
      <section className="section-padding border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text max-w-2xl">
              What the monthly fee covers.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-5">
            {managedCopy.deliverables.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05} className={deliverableSpans[i]}>
                <div className="h-full rounded-lg border border-line p-8 transition-colors duration-300 hover:border-line-strong">
                  <h3 className="text-lg font-semibold tracking-tight text-text">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PhaseSection
        heading="How the engagement runs."
        lede="A steady operating rhythm instead of a project plan. Your team's involvement is a short planning call each month and a review each quarter."
        phases={managedCopy.phases}
        variant="rail"
      />

      <PricingSection
        heading="One flat fee. Everything included."
        body="Monitoring, maintenance, releases, and reporting are all covered. No metering, no change requests for routine work, no surprise invoices."
        price={managedCopy.price}
        priceNote={managedCopy.priceNote}
        notes={managedCopy.pricingNotes}
        lead
      />

      <ServiceClosing
        heading="Let someone own the operation."
        body="If you have agents in production, or a build about to finish, a short call is enough to scope the engagement and check the fit on both sides."
        secondary={{ label: "Start with the audit", href: "/services/audit" }}
      />
    </>
  );
}
