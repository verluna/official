import { Reveal } from "@/components/home";
import { ServiceIntro } from "@/components/services/ServiceIntro";
import { FitPanel } from "@/components/services/FitPanel";
import { PhaseSection } from "@/components/services/PhaseSection";
import { PricingSection } from "@/components/services/PricingSection";
import { ServiceClosing } from "@/components/services/ServiceClosing";
import { buildCopy } from "@/data/copy/services";

export function BuildContent() {
  return (
    <>
      <ServiceIntro
        heading={buildCopy.heading}
        intro={buildCopy.intro}
        price={buildCopy.price}
        priceNote={buildCopy.priceNote}
        secondary={{ label: "Start with the audit", href: "/services/audit" }}
      />

      {/* Who it's for + what it is */}
      <section className="section-padding border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <Reveal className="lg:col-span-5 lg:order-1 order-2">
              <FitPanel whoFor={buildCopy.whoFor} notFor={buildCopy.notFor} />
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-7 lg:order-2 order-1">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text">
                Production is the standard, not the stretch goal.
              </h2>
              <div className="mt-6 space-y-5 text-lg text-text-muted leading-relaxed max-w-xl">
                <p>
                  We build on your existing stack. HubSpot stays HubSpot,
                  Salesforce stays Salesforce. The build adds the operating
                  layer on top: the agents, integrations, governance, and
                  monitoring that make your tools work as one system.
                </p>
                <p>
                  Every process we automate is classified by autonomy level.
                  Agents handle the volume. Humans keep the judgment calls. The
                  boundary is explicit, documented, and yours to adjust.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Deliverables as a two-column row list */}
      <section className="section-padding border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text max-w-2xl">
              What every build ships with.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-16">
            {buildCopy.deliverables.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04}>
                <div className="py-6 border-t border-line">
                  <h3 className="text-lg font-semibold tracking-tight text-text">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PhaseSection
        heading="How a build runs."
        lede="Most builds take four to eight weeks depending on scope. The phases are the same every time, and nothing reaches production without passing them."
        phases={buildCopy.phases}
        variant="grid"
      />

      <PricingSection
        heading="Fixed scope, fixed price."
        body="The scope is agreed in writing before any code exists. If something changes mid-build, we document the delta and price it openly. You approve before we proceed."
        price={buildCopy.price}
        priceNote={buildCopy.priceNote}
        notes={buildCopy.pricingNotes}
      />

      <ServiceClosing
        heading="Have a system in mind?"
        body="Bring the problem to a call. If it can be scoped, we scope it together. If it needs the audit first, we say so."
        secondary={{ label: "Start with the audit", href: "/services/audit" }}
      />
    </>
  );
}
