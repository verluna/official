import { Metadata } from "next";
import { Reveal } from "@/components/home";
import { Button } from "@/components/ui/Button";
import { MethodDisciplines } from "@/components/methodology/MethodDisciplines";
import { AutonomyGradient } from "@/components/methodology/AutonomyGradient";
import { FiveQuestions } from "@/components/methodology/FiveQuestions";
import { Boundaries } from "@/components/methodology/Boundaries";

export const metadata: Metadata = {
  title: "The Verluna Method | Audit, Architect, Build, Codify",
  description:
    "How Verluna works: four disciplines applied in a loop. Audit the operation, architect the operating layer, build production agent systems, codify the knowledge your team owns. Tested on our own operation first.",
  keywords: [
    "agent operations methodology",
    "AI operating layer design",
    "agent architecture methodology",
    "AI governance framework",
    "autonomous operations methodology",
    "multi-agent architecture patterns",
  ],
  openGraph: {
    title: "The Verluna Method | Audit, Architect, Build, Codify",
    description:
      "Take a human-operated process, decompose it into domains, design the operating layer, and build it to run autonomously, with people only at the judgment points.",
    url: "https://verluna.de/methodology",
  },
};

export default function MethodologyPage() {
  return (
    <div className="pb-0">
      {/* Hero: left-aligned editorial */}
      <section className="pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter leading-[1.05] text-text max-w-3xl">
              How we work.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-muted max-w-2xl leading-relaxed">
              Four disciplines, applied in a loop: Audit, Architect, Build,
              Codify. The method did not come from theory. It comes from
              running our own company on agents and shipping production
              systems for enterprise teams.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Core principle: full-width statement band */}
      <section className="section-padding border-t border-line bg-ink-raised">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-text leading-snug max-w-4xl">
              Take a human-operated process. Decompose it into domains. Design
              the operating layer. Build it to run autonomously, with people
              only at the judgment points.
            </p>
            <p className="mt-6 text-text-muted max-w-2xl leading-relaxed">
              That sentence is the whole method. The four disciplines below
              are how we apply it inside a real organization.
            </p>
          </Reveal>
        </div>
      </section>

      <MethodDisciplines />
      <AutonomyGradient />
      <FiveQuestions />
      <Boundaries />

      {/* Closing CTA */}
      <section className="section-padding border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-text max-w-3xl leading-[1.08]">
              See it applied to your operation.
            </h2>
            <p className="mt-6 text-lg text-text-muted max-w-xl leading-relaxed">
              Thirty minutes, no pitch. We walk through where to apply the
              method first in your stack.
            </p>
            <div className="mt-10">
              <Button variant="primary" size="lg" href="/contact">
                Book an intro call
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
