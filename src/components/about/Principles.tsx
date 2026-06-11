import { Reveal } from "@/components/home";
import { aboutCopy } from "@/data/copy/about";

/** Working principles. Two-column card grid. */
export function Principles() {
  const { heading, items } = aboutCopy.principles;

  return (
    <section className="section-padding border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text max-w-2xl">
            {heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="h-full rounded-lg border border-line p-8 transition-colors duration-300 hover:border-line-strong">
                <h3 className="text-xl font-semibold tracking-tight text-text">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-text-muted leading-relaxed max-w-md">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
