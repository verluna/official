import Link from "next/link";
import { Reveal } from "@/components/home";
import { ServiceClosing } from "@/components/services/ServiceClosing";
import {
  overviewCopy,
  engagements,
  engagementPath,
  plainAnswers,
  consultingCopy,
} from "@/data/copy/services";

export function ServicesOverviewContent() {
  const managed = engagements.find((e) => e.id === "managed")!;
  const audit = engagements.find((e) => e.id === "audit")!;
  const build = engagements.find((e) => e.id === "build")!;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter text-text max-w-3xl">
              {overviewCopy.heading}
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-2xl">
              {overviewCopy.subheading}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Engagements: lead card full width, audit + build beneath */}
      <section className="section-padding border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Link href={managed.href} className="block group">
              <div className="rounded-lg border border-accent/40 bg-ink-raised p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                  <div className="lg:col-span-7">
                    <h2 className="text-2xl font-semibold tracking-tight text-text">
                      {managed.name}
                    </h2>
                    <p className="mt-4 text-text-muted leading-relaxed">
                      {managed.summary}
                    </p>
                  </div>
                  <div className="lg:col-span-5 lg:border-l lg:border-line lg:pl-12">
                    <span className="font-mono text-2xl text-accent">
                      {managed.price}
                    </span>
                    <p className="mt-2 text-sm text-text-muted">
                      {managed.priceNote}. Our lead engagement, limited to a
                      small number of concurrent clients.
                    </p>
                    <span className="mt-6 inline-block text-sm font-medium text-text group-hover:text-accent transition-colors duration-200">
                      View engagement
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[audit, build].map((engagement, i) => (
              <Reveal key={engagement.id} delay={0.08 + i * 0.08}>
                <Link href={engagement.href} className="block h-full group">
                  <div className="h-full rounded-lg border border-line p-8 transition-colors duration-300 hover:border-line-strong">
                    <div className="flex items-baseline justify-between gap-4 flex-wrap">
                      <h2 className="text-xl font-semibold tracking-tight text-text">
                        {engagement.name}
                      </h2>
                      <span className="font-mono text-sm text-text-muted">
                        {engagement.price}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-text-faint">
                      {engagement.priceNote}
                    </p>
                    <p className="mt-4 text-sm text-text-muted leading-relaxed">
                      {engagement.summary}
                    </p>
                    <span className="mt-6 inline-block text-sm font-medium text-text group-hover:text-accent transition-colors duration-200">
                      View engagement
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The path */}
      <section className="section-padding border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text">
                The path most clients take.
              </h2>
              <p className="mt-5 text-lg text-text-muted leading-relaxed">
                Each engagement stands on its own, but they are designed to
                connect. The audit fee is credited toward a build started
                within 60 days.
              </p>
            </Reveal>

            <div className="lg:col-span-7">
              {engagementPath.map((stage, i) => (
                <Reveal key={stage.name} delay={i * 0.08}>
                  <div className="py-6 border-t border-line first:border-t-0 first:pt-0">
                    <h3 className="text-lg font-semibold tracking-tight text-text">
                      {stage.name}
                    </h3>
                    <p className="mt-2 text-text-muted leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advisory: the secondary path */}
      <section className="section-padding border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <Reveal className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text">
                Building with your own engineers?
              </h2>
              <p className="mt-5 text-lg text-text-muted leading-relaxed max-w-xl">
                Some companies want guidance, not execution. Architecture
                Advisory brings the patterns from production deployments to
                your engineering team: workshops, reviews, training, and
                standing advisory.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-5">
              <Link href="/services/consulting" className="block group">
                <div className="rounded-lg border border-line bg-ink-raised p-8 transition-colors duration-300 hover:border-line-strong">
                  <h3 className="text-xl font-semibold tracking-tight text-text">
                    {consultingCopy.name}
                  </h3>
                  <p className="mt-3 text-sm text-text-muted leading-relaxed">
                    We design the blueprint. Your team builds it. Scoped and
                    priced per engagement.
                  </p>
                  <span className="mt-6 inline-block text-sm font-medium text-text group-hover:text-accent transition-colors duration-200">
                    View advisory
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Plain answers */}
      <section className="section-padding border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text max-w-2xl">
              Straight answers.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {plainAnswers.map((item, i) => (
              <Reveal key={item.question} delay={i * 0.05}>
                <h3 className="text-lg font-semibold tracking-tight text-text">
                  {item.question}
                </h3>
                <p className="mt-3 text-text-muted leading-relaxed">
                  {item.answer}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ServiceClosing
        heading="Not sure where to start?"
        body="Most clients begin with a short call. We listen, look at your stack, and tell you which engagement fits. If none does, we say so."
        secondary={{ label: "Readiness assessment", href: "/scorecard" }}
      />
    </>
  );
}
