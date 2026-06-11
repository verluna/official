import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/Button";
import { SpotlightCard } from "./SpotlightCard";

export function Engagements() {
  return (
    <section className="section-padding border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text max-w-2xl">
            Three ways to engage.
          </h2>
          <p className="mt-5 text-lg text-text-muted max-w-2xl leading-relaxed">
            Start where you are. Most clients begin with an audit and grow into
            managed operations.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Managed Agent Operations — the lead offer */}
          <Reveal className="lg:col-span-7">
            <SpotlightCard className="h-full">
            <div className="h-full p-8 lg:p-10 flex flex-col">
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <h3 className="text-2xl font-semibold tracking-tight text-text">
                  Managed Agent Operations
                </h3>
                <span className="font-mono text-sm text-accent">
                  EUR 8-15K/month
                </span>
              </div>
              <p className="mt-4 text-text-muted leading-relaxed max-w-lg">
                We run your agent fleet as an ongoing practice: monitoring,
                governance, iteration, and new capabilities every month. Your
                team focuses on the business; we keep the autonomy reliable.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-text">
                <li className="flex gap-3">
                  <span className="text-accent" aria-hidden="true">-</span>
                  Continuous monitoring and evaluation of every deployed agent
                </li>
                <li className="flex gap-3">
                  <span className="text-accent" aria-hidden="true">-</span>
                  Monthly capability releases planned with your leadership
                </li>
                <li className="flex gap-3">
                  <span className="text-accent" aria-hidden="true">-</span>
                  Governance reporting your compliance team can stand behind
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-line text-sm text-text-faint">
                Six-month minimum. Limited to a small number of concurrent
                clients.
              </div>
            </div>
            </SpotlightCard>
          </Reveal>

          {/* Audit + Build stacked */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <Reveal delay={0.08}>
              <div className="rounded-lg border border-line p-8 transition-colors duration-300 hover:border-line-strong">
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <h3 className="text-xl font-semibold tracking-tight text-text">
                    Readiness Audit
                  </h3>
                  <span className="font-mono text-sm text-text-muted">
                    EUR 7-10K
                  </span>
                </div>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  Two to three weeks. We map your systems and workflows and
                  deliver a prioritized agent roadmap with effort and risk per
                  item.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="rounded-lg border border-line p-8 transition-colors duration-300 hover:border-line-strong">
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <h3 className="text-xl font-semibold tracking-tight text-text">
                    System Build
                  </h3>
                  <span className="font-mono text-sm text-text-muted">
                    EUR 20-60K
                  </span>
                </div>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  Fixed scope, production deployment. One agent system built,
                  integrated, observable, and handed over with documentation.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex-1 flex items-end">
                <Button variant="secondary" size="md" href="/services">
                  Compare all services
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
