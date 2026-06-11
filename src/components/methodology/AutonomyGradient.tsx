import { Reveal } from "@/components/home";

interface GradientStage {
  name: string;
  meaning: string;
  target?: boolean;
}

const stages: GradientStage[] = [
  { name: "Manual", meaning: "A person does the work." },
  { name: "Assisted", meaning: "AI helps the person work faster." },
  { name: "Supervised", meaning: "AI does the work, a person approves." },
  {
    name: "Autonomous",
    meaning: "AI does the work, a person is notified.",
    target: true,
  },
  {
    name: "Invisible",
    meaning: "AI does the work, nobody thinks about it.",
    target: true,
  },
];

/** The autonomy gradient as a full-width data band. */
export function AutonomyGradient() {
  return (
    <section className="section-padding border-t border-line bg-ink-raised">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text max-w-2xl">
            Every process moves up the autonomy gradient.
          </h2>
          <p className="mt-5 text-lg text-text-muted max-w-2xl leading-relaxed">
            Most tools stop at assisted. We design for the last two stages and
            reserve people for the decisions that need them.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-line rounded-lg overflow-hidden border border-line">
          {stages.map((stage, i) => (
            <Reveal key={stage.name} delay={i * 0.06}>
              <div className="bg-ink h-full px-6 py-7">
                <div
                  className={`text-lg font-semibold tracking-tight ${
                    stage.target ? "text-accent" : "text-text"
                  }`}
                >
                  {stage.name}
                </div>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {stage.meaning}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-6 text-sm text-text-faint">
            The two highlighted stages are the target for operations work.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
