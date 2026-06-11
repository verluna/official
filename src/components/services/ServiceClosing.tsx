import { Reveal } from "@/components/home";
import { Button } from "@/components/ui/Button";

interface ServiceClosingProps {
  heading: string;
  body: string;
  secondary?: { label: string; href: string };
}

/** Closing CTA section for service pages. One contact-intent CTA, fixed label. */
export function ServiceClosing({ heading, body, secondary }: ServiceClosingProps) {
  return (
    <section className="section-padding border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text">
              {heading}
            </h2>
            <p className="mt-5 text-lg text-text-muted leading-relaxed">
              {body}
            </p>
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
