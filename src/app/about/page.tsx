import { Metadata } from "next";
import { Reveal } from "@/components/home";
import { Button } from "@/components/ui/Button";
import { FounderStory } from "@/components/about/FounderStory";
import { WhyVerluna } from "@/components/about/WhyVerluna";
import { ProofBand } from "@/components/about/ProofBand";
import { Principles } from "@/components/about/Principles";
import { aboutCopy } from "@/data/copy/about";

export const metadata: Metadata = {
  title: "About | Verluna - Agent Operations for Europe",
  description:
    "Verluna is an agent-operations consultancy in Berlin, founded by Tolga Oral. 60+ agents in production, 80+ codified skills, 12 systems integrated. Every method is tested on our own operation first.",
  openGraph: {
    title: "About Verluna | Built by an Operator, Not a Slide Deck",
    description:
      "Founded by Tolga Oral in Berlin. An operator who runs agent fleets daily: 60+ agents in production, 80+ codified skills, 12 systems integrated.",
    type: "website",
  },
  alternates: {
    canonical: "https://verluna.de/about",
  },
};

export default function AboutPage() {
  const { hero, cta } = aboutCopy;

  return (
    <div className="pb-0">
      {/* Hero: left-aligned editorial */}
      <section className="pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter leading-[1.05] text-text max-w-3xl">
              {hero.heading}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-muted max-w-2xl leading-relaxed">
              {hero.lede}
            </p>
          </Reveal>
        </div>
      </section>

      <FounderStory />
      <WhyVerluna />
      <ProofBand />
      <Principles />

      {/* Closing CTA */}
      <section className="section-padding border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-text max-w-3xl leading-[1.08]">
              {cta.heading}
            </h2>
            <p className="mt-6 text-lg text-text-muted max-w-xl leading-relaxed">
              {cta.body}
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
