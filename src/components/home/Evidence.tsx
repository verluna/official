import Link from "next/link";
import { Reveal } from "./Reveal";

const cases = [
  {
    slug: "semantic-account-matching",
    metric: "4 hours to 90 seconds",
    title: "Semantic account matching for field marketing",
    summary:
      "Replaced manual XLOOKUP matching against 10,000+ accounts with an AI matching engine. Accuracy rose from roughly 70% to 99.2%.",
  },
  {
    slug: "multilingual-video-localization",
    metric: "3 days to 15 minutes",
    title: "Video localization across 12 languages",
    summary:
      "A four-stage pipeline that pre-merges subtitles, translates with glossary enforcement, and clears a launch backlog in two weeks.",
  },
];

export function Evidence() {
  return (
    <section className="section-padding border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text max-w-2xl">
            Shipped and measured.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {cases.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.1}>
              <Link
                href={`/case-studies/${c.slug}`}
                className="group block h-full rounded-lg border border-line p-8 lg:p-10 transition-[border-color,background-color,transform] duration-300 hover:border-accent/40 hover:bg-ink-raised hover:-translate-y-1"
              >
                <div className="font-mono text-3xl text-accent leading-tight">
                  {c.metric}
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-text">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  {c.summary}
                </p>
                <span className="mt-6 inline-block text-sm font-medium text-text group-hover:text-accent transition-colors duration-200">
                  Read the case study
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
