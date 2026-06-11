import { Reveal } from "@/components/home";
import { aboutCopy } from "@/data/copy/about";

/** Full-width statement band with the live operating numbers. */
export function ProofBand() {
  const { heading, lede, stats } = aboutCopy.proof;

  return (
    <section className="section-padding border-t border-line bg-ink-raised">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          <Reveal className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text">
              {heading}
            </h2>
            <p className="mt-5 text-text-muted leading-relaxed max-w-md">
              {lede}
            </p>
          </Reveal>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.1 + i * 0.08}>
                <div className="border-t border-line-strong pt-5">
                  <div className="font-mono text-4xl text-text leading-none">
                    {stat.value}
                  </div>
                  <p className="mt-3 text-sm text-text-muted leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
