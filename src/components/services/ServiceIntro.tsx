import { Reveal } from "@/components/home";
import { Button } from "@/components/ui/Button";

interface ServiceIntroProps {
  heading: string;
  intro: string;
  price: string;
  priceNote: string;
  secondary?: { label: string; href: string };
}

/** Detail-page opening section: headline, intro, price, one contact CTA. */
export function ServiceIntro({
  heading,
  intro,
  price,
  priceNote,
  secondary,
}: ServiceIntroProps) {
  return (
    <section className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter text-text max-w-3xl">
            {heading}
          </h1>
          <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-2xl">
            {intro}
          </p>
          <div className="mt-6 flex items-baseline gap-3 flex-wrap">
            <span className="font-mono text-lg text-text">{price}</span>
            <span className="text-sm text-text-muted">{priceNote}</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="primary" size="lg" href="/contact">
              Book an intro call
            </Button>
            {secondary && (
              <Button variant="secondary" size="lg" href={secondary.href}>
                {secondary.label}
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
