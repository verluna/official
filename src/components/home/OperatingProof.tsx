import { Reveal } from "./Reveal";
import { StatNumber } from "./StatNumber";

const stats = [
  { value: 60, suffix: "+", label: "Agents in production across our own operation" },
  { value: 80, suffix: "+", label: "Codified skills agents execute autonomously" },
  { value: 12, suffix: "", label: "Systems integrated, from CRM to data warehouse" },
];

export function OperatingProof() {
  return (
    <section className="border-t border-line bg-ink-raised">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <Reveal className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text">
              We run our own company this way.
            </h2>
            <p className="mt-5 text-lg text-text-muted leading-relaxed">
              Verluna&rsquo;s research, delivery, and content run on an agent
              fleet we built ourselves. Every method we sell is tested on our
              own operation first.
            </p>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7 flex flex-col">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <div
                  className={`flex items-baseline justify-between gap-8 py-7 ${
                    i > 0 ? "border-t border-line" : ""
                  }`}
                >
                  <StatNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    className="font-mono text-6xl sm:text-7xl text-accent leading-none tracking-tight"
                  />
                  <p className="text-sm text-text-muted leading-relaxed max-w-[16rem] text-right">
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
