import Link from "next/link";
import { Reveal } from "@/components/home/Reveal";
import { Button } from "@/components/ui/Button";
import { NewCaseStudy } from "@/data/copy/newCaseStudies";

function formatTechStack(stack: string[]): string {
  if (stack.length === 0) return "";
  if (stack.length === 1) return stack[0];
  if (stack.length === 2) return `${stack[0]} and ${stack[1]}`;
  return `${stack.slice(0, -1).join(", ")}, and ${stack[stack.length - 1]}`;
}

interface CaseStudyDetailProps {
  study: NewCaseStudy;
  nextStudy: NewCaseStudy | null;
}

export function CaseStudyDetail({ study, nextStudy }: CaseStudyDetailProps) {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Link
            href="/case-studies"
            className="text-sm text-text-muted hover:text-text transition-colors duration-200"
          >
            All case studies
          </Link>

          <h1 className="mt-8 text-3xl sm:text-4xl font-semibold tracking-tighter text-text">
            {study.title}
          </h1>
          <p className="mt-4 max-w-prose text-lg text-text-muted leading-relaxed">
            {study.headline}
          </p>
          <p className="mt-4 text-sm text-text-faint">
            {study.industry}, {study.duration}
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {study.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-line bg-ink-raised p-6"
              >
                <div className="font-mono text-2xl text-accent leading-tight">
                  {metric.value}
                </div>
                <div className="mt-2 text-sm text-text-muted">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-text">
            The client
          </h2>
          <p className="mt-4 max-w-prose text-text-muted leading-relaxed">
            {study.companyDescription}
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-text">
            The challenge
          </h2>
          <p className="mt-4 max-w-prose text-text-muted leading-relaxed">
            {study.challenge}
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-text">
            The approach
          </h2>
          <p className="mt-4 max-w-prose text-text-muted leading-relaxed">
            {study.solution}
          </p>
          <p className="mt-4 max-w-prose text-sm text-text-faint">
            Built with {formatTechStack(study.techStack)}.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-text">
            How the engagement ran
          </h2>
          <div className="mt-6 max-w-prose space-y-8">
            {study.phases.map((phase) => (
              <div key={phase.name}>
                <h3 className="text-base font-semibold text-text">
                  {phase.name}
                </h3>
                <p className="mt-2 text-text-muted leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-text">
            The results
          </h2>
          <p className="mt-4 max-w-prose text-text-muted leading-relaxed">
            {study.results}
          </p>
        </Reveal>

        <Reveal className="mt-16">
          <div className="rounded-lg border border-line bg-ink-raised p-8">
            <h3 className="text-xl font-semibold tracking-tight text-text">
              {study.cta}
            </h3>
            <p className="mt-3 max-w-prose text-text-muted leading-relaxed">
              Tell us about your operation. We will tell you what a system like
              this would take to build.
            </p>
            <div className="mt-6">
              <Button href="/contact">Book an intro call</Button>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-10">
            <Button href="/case-studies" variant="secondary">
              All case studies
            </Button>
            {nextStudy && (
              <Button
                href={`/case-studies/${nextStudy.slug}`}
                variant="secondary"
              >
                Next: {nextStudy.title}
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
