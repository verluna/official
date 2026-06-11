import { Reveal } from "@/components/home";
import { Button } from "@/components/ui/Button";

interface PricingSectionProps {
  heading: string;
  body: string;
  price: string;
  priceNote: string;
  notes: string[];
  /** Lead pricing card gets the single allowed accent border. */
  lead?: boolean;
}

/** Pricing section: prose on the left, price card on the right (5/7 weighted). */
export function PricingSection({
  heading,
  body,
  price,
  priceNote,
  notes,
  lead = false,
}: PricingSectionProps) {
  return (
    <section className="section-padding border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text">
              {heading}
            </h2>
            <p className="mt-5 text-lg text-text-muted leading-relaxed">
              {body}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <div
              className={`rounded-lg border bg-ink-raised p-8 lg:p-10 ${
                lead ? "border-accent/40" : "border-line"
              }`}
            >
              <div className="flex items-baseline gap-3 flex-wrap">
                <span
                  className={`font-mono text-2xl ${lead ? "text-accent" : "text-text"}`}
                >
                  {price}
                </span>
                <span className="text-sm text-text-muted">{priceNote}</span>
              </div>
              <ul className="mt-7 space-y-3 text-sm text-text-muted leading-relaxed">
                {notes.map((note) => (
                  <li key={note} className="flex gap-3">
                    <span className="text-text-faint" aria-hidden="true">-</span>
                    {note}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-line">
                <Button variant="primary" size="md" href="/contact">
                  Book an intro call
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
