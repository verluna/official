import Image from "next/image";
import { Reveal } from "@/components/home";
import { aboutCopy } from "@/data/copy/about";
import { getFounder } from "@/data/team";

/** Founder portrait and story. Asymmetric 4/8 split, portrait left. */
export function FounderStory() {
  const founder = getFounder();
  const { heading, paragraphs, backgroundHeading } = aboutCopy.founder;

  return (
    <section className="section-padding border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <Image
              src={founder.avatar ?? "/images/team/tolga-oral.png"}
              alt={`${founder.name}, founder of Verluna`}
              width={640}
              height={640}
              className="rounded-lg border border-line w-full max-w-sm"
            />
            <p className="mt-5 text-sm text-text-muted">
              {founder.name}, {founder.role}. Berlin.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text">
              {heading}
            </h2>
            <div className="mt-6 space-y-5">
              {paragraphs.map((p) => (
                <p
                  key={p.slice(0, 32)}
                  className="text-text-muted leading-relaxed max-w-2xl"
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-line">
              <h3 className="text-sm font-medium text-text">
                {backgroundHeading}
              </h3>
              <ul className="mt-4 divide-y divide-line max-w-2xl">
                {founder.background.map((item) => (
                  <li
                    key={item.company}
                    className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3"
                  >
                    <span className="text-sm text-text">{item.company}</span>
                    <span className="text-sm text-text-muted">{item.role}</span>
                    {item.years && (
                      <span className="font-mono text-xs text-text-faint">
                        {item.years}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
