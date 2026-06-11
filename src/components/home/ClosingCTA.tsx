import Link from "next/link";
import { Reveal } from "./Reveal";

/*
 * The one full-color moment on the page: a copper block with inverted
 * buttons. Deliberate single theme-accent composition, used once.
 */
export function ClosingCTA() {
  return (
    <section className="bg-accent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <Reveal>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter text-ink-on-accent max-w-4xl leading-[1.04]">
            Start with a conversation.
          </h2>
          <p className="mt-7 text-lg text-ink-on-accent/80 max-w-xl leading-relaxed">
            Thirty minutes, no pitch. We tell you the three highest-leverage
            moves for your stack, whether you work with us or not.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-ink text-text hover:bg-ink-overlay transition-colors duration-200 active:translate-y-px"
            >
              Book an intro call
            </Link>
            <Link
              href="/scorecard"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border border-ink-on-accent/30 text-ink-on-accent hover:border-ink-on-accent/60 hover:bg-ink-on-accent/5 transition-colors duration-200 active:translate-y-px"
            >
              Readiness assessment
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
