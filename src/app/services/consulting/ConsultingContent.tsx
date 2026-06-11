import { Reveal } from "@/components/home";
import { ServiceIntro } from "@/components/services/ServiceIntro";
import { PhaseSection } from "@/components/services/PhaseSection";
import { PricingSection } from "@/components/services/PricingSection";
import { ServiceClosing } from "@/components/services/ServiceClosing";
import { consultingCopy } from "@/data/copy/services";

const topicSpans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-7",
  "lg:col-span-5",
];

export function ConsultingContent() {
  return (
    <>
      <ServiceIntro
        heading={consultingCopy.heading}
        intro={consultingCopy.intro}
        price={consultingCopy.price}
        priceNote={consultingCopy.priceNote}
        secondary={{ label: "Read the methodology", href: "/methodology" }}
      />

      {/* Topics */}
      <section className="section-padding border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text max-w-2xl">
              What we advise on.
            </h2>
            <p className="mt-5 text-lg text-text-muted leading-relaxed max-w-2xl">
              Every topic is grounded in systems we have built, broken, and
              rebuilt in production. The guidance comes from experience, not
              theory.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-5">
            {consultingCopy.topics.map((topic, i) => (
              <Reveal key={topic.title} delay={i * 0.05} className={topicSpans[i]}>
                <div className="h-full rounded-lg border border-line p-8 transition-colors duration-300 hover:border-line-strong">
                  <h3 className="text-lg font-semibold tracking-tight text-text">
                    {topic.title}
                  </h3>
                  <p className="mt-3 text-sm text-text-muted leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="section-padding border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text">
                Four ways to work together.
              </h2>
              <p className="mt-5 text-lg text-text-muted leading-relaxed">
                The format follows the problem. A new architecture wants a
                workshop. An existing one wants a review. A team that builds
                continuously wants standing advisory.
              </p>
            </Reveal>
            <div className="lg:col-span-7">
              {consultingCopy.formats.map((format, i) => (
                <Reveal key={format.title} delay={i * 0.06}>
                  <div className="py-6 border-t border-line first:border-t-0 first:pt-0">
                    <div className="flex items-baseline justify-between gap-4 flex-wrap">
                      <h3 className="text-lg font-semibold tracking-tight text-text">
                        {format.title}
                      </h3>
                      <span className="font-mono text-xs text-text-faint">
                        {format.duration}
                      </span>
                    </div>
                    <p className="mt-2 text-text-muted leading-relaxed">
                      {format.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PhaseSection
        heading="How advisory runs."
        lede="Whatever the format, the shape is the same: frame the problem, work it with your team, and leave the decisions in writing."
        phases={consultingCopy.phases}
        variant="grid"
      />

      <PricingSection
        heading="Scoped to the problem."
        body="Advisory engagements vary too much for a single price. We scope the format and effort with you, then fix the price in writing before work begins."
        price={consultingCopy.price}
        priceNote={consultingCopy.priceNote}
        notes={consultingCopy.pricingNotes}
      />

      <ServiceClosing
        heading="Building it yourselves?"
        body="Bring your architecture questions to a call. If advisory is not the right format, we will tell you what is."
      />
    </>
  );
}
