import Link from "next/link";
import { Reveal } from "@/components/home/Reveal";
import { Button } from "@/components/ui/Button";
import { newCaseStudies, NewCaseStudy } from "@/data/copy/newCaseStudies";

/** Headline metric per study. Values come from the study's own metrics data. */
const leadMetrics: Record<string, string> = {
  "semantic-account-matching": "4 hours to 90 seconds",
  "multilingual-video-localization": "3 days to 15 minutes",
  "marketing-intelligence-system": "EUR 0 in new software",
};

function leadMetric(study: NewCaseStudy): string {
  return leadMetrics[study.slug] ?? study.metrics[0]?.value ?? "";
}

function FeaturedCard({ study }: { study: NewCaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group block rounded-lg border border-line p-8 lg:p-10 transition-colors duration-300 hover:border-line-strong hover:bg-ink-raised"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="font-mono text-3xl sm:text-4xl text-accent leading-tight">
            {leadMetric(study)}
          </div>
          <p className="mt-4 text-sm text-text-faint">
            {study.industry}, {study.duration}
          </p>
        </div>
        <div className="lg:col-span-7">
          <h2 className="text-2xl font-semibold tracking-tight text-text">
            {study.title}
          </h2>
          <p className="mt-3 text-text-muted leading-relaxed">
            {study.headline}
          </p>
          <span className="mt-6 inline-block text-sm font-medium text-text group-hover:text-accent transition-colors duration-200">
            Read the case study
          </span>
        </div>
      </div>
    </Link>
  );
}

function StudyCard({ study }: { study: NewCaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group block h-full rounded-lg border border-line p-8 transition-colors duration-300 hover:border-line-strong hover:bg-ink-raised"
    >
      <div className="font-mono text-3xl text-accent leading-tight">
        {leadMetric(study)}
      </div>
      <h2 className="mt-5 text-xl font-semibold tracking-tight text-text">
        {study.title}
      </h2>
      <p className="mt-3 text-sm text-text-muted leading-relaxed">
        {study.headline}
      </p>
      <span className="mt-6 inline-block text-sm font-medium text-text group-hover:text-accent transition-colors duration-200">
        Read the case study
      </span>
    </Link>
  );
}

export function CaseStudyList() {
  const [first, ...rest] = newCaseStudies;

  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-text">
            Results, not promises.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-text-muted leading-relaxed">
            Each study covers the operation before, the decisions made, and the
            measured results after. We show the architecture and name the
            tradeoffs, not just the wins.
          </p>
        </Reveal>

        {first && (
          <Reveal className="mt-14">
            <FeaturedCard study={first} />
          </Reveal>
        )}

        <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-5">
          {rest.map((study, i) => (
            <Reveal
              key={study.slug}
              delay={i * 0.1}
              className={i % 2 === 0 ? "lg:col-span-7" : "lg:col-span-5"}
            >
              <StudyCard study={study} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 border-t border-line pt-14">
          <p className="max-w-prose text-text-muted leading-relaxed">
            Tell us where your team loses hours each week. We will tell you
            whether an agent system fits.
          </p>
          <div className="mt-6">
            <Button href="/contact" size="lg">
              Book an intro call
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
