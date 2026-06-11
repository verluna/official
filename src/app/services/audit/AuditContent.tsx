import { Reveal } from "@/components/home";
import { ServiceIntro } from "@/components/services/ServiceIntro";
import { FitPanel } from "@/components/services/FitPanel";
import { PhaseSection } from "@/components/services/PhaseSection";
import { PricingSection } from "@/components/services/PricingSection";
import { ServiceClosing } from "@/components/services/ServiceClosing";
import { auditCopy } from "@/data/copy/services";

const deliverableSpans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-7",
  "lg:col-span-5",
];

export function AuditContent() {
  return (
    <>
      <ServiceIntro
        heading={auditCopy.heading}
        intro={auditCopy.intro}
        price={auditCopy.price}
        priceNote={auditCopy.priceNote}
        secondary={{ label: "Readiness assessment", href: "/scorecard" }}
      />

      {/* What it is + who it's for */}
      <section className="section-padding border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <Reveal className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text">
                A diagnosis, not a sales exercise.
              </h2>
              <div className="mt-6 space-y-5 text-lg text-text-muted leading-relaxed max-w-xl">
                <p>
                  Most companies know their symptoms: manual handoffs, tools
                  that do not talk to each other, AI pilots that never reached
                  production. The audit finds the causes and puts numbers on
                  them.
                </p>
                <p>
                  The result is a roadmap your leadership can act on, whether
                  you build with us or with someone else. We have yet to run an
                  audit where the client did not find at least one significant
                  blind spot.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-5">
              <FitPanel whoFor={auditCopy.whoFor} notFor={auditCopy.notFor} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text max-w-2xl">
              What you walk away with.
            </h2>
            <p className="mt-5 text-lg text-text-muted leading-relaxed max-w-2xl">
              Working reference documents, not slides. Your team uses these
              after the engagement ends.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-5">
            {auditCopy.deliverables.map((item, i) => (
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
        heading="How the audit runs."
        lede="Two to three weeks, four phases. Your team commits 3-5 hours in total. We handle the rest."
        phases={auditCopy.phases}
        variant="rail"
      />

      <PricingSection
        heading="One price, set before we start."
        body="You know the cost and the deliverables before the engagement begins. No hourly billing, no extensions you did not ask for."
        price={auditCopy.price}
        priceNote={auditCopy.priceNote}
        notes={auditCopy.pricingNotes}
      />

      <ServiceClosing
        heading="See your operations clearly."
        body="A short call is enough to tell whether the audit fits. We ask about your stack and your goals, then give you a straight recommendation."
        secondary={{ label: "Readiness assessment", href: "/scorecard" }}
      />
    </>
  );
}
