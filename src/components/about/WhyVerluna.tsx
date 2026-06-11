import { Reveal } from "@/components/home";
import { aboutCopy } from "@/data/copy/about";

/** Why Verluna exists. Narrow editorial prose stack. */
export function WhyVerluna() {
  const { heading, paragraphs } = aboutCopy.why;

  return (
    <section className="section-padding border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text">
              {heading}
            </h2>
          </Reveal>
          <div className="mt-8 space-y-6">
            {paragraphs.map((p, i) => (
              <Reveal key={p.slice(0, 32)} delay={0.08 + i * 0.06}>
                <p className="text-lg text-text-muted leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
