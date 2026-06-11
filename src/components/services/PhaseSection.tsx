import { Reveal } from "@/components/home";
import type { Phase } from "@/data/copy/services";

interface PhaseSectionProps {
  heading: string;
  lede?: string;
  phases: Phase[];
  /** "rail" renders a vertical bordered list, "grid" a two-column card grid. */
  variant?: "rail" | "grid";
}

/** "How it runs" section. Phases are named by what happens, never numbered. */
export function PhaseSection({
  heading,
  lede,
  phases,
  variant = "rail",
}: PhaseSectionProps) {
  return (
    <section className="section-padding border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text max-w-2xl">
            {heading}
          </h2>
          {lede && (
            <p className="mt-5 text-lg text-text-muted leading-relaxed max-w-2xl">
              {lede}
            </p>
          )}
        </Reveal>

        {variant === "rail" ? (
          <div className="mt-14 max-w-3xl">
            {phases.map((phase, i) => (
              <Reveal key={phase.name} delay={i * 0.06}>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 py-7 border-t border-line first:border-t-0">
                  <div className="sm:col-span-4">
                    <h3 className="text-lg font-semibold tracking-tight text-text">
                      {phase.name}
                    </h3>
                    <span className="mt-1 block font-mono text-xs text-text-faint">
                      {phase.timing}
                    </span>
                  </div>
                  <p className="sm:col-span-8 text-text-muted leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
            {phases.map((phase, i) => (
              <Reveal key={phase.name} delay={i * 0.06}>
                <div className="h-full rounded-lg border border-line p-8 transition-colors duration-300 hover:border-line-strong">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-semibold tracking-tight text-text">
                      {phase.name}
                    </h3>
                    <span className="font-mono text-xs text-text-faint">
                      {phase.timing}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-text-muted leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
