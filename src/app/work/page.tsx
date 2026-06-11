import { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Work | Verluna",
  description:
    "Verluna project write-ups now live under case studies. Real systems, measured results, named tradeoffs.",
  alternates: {
    canonical: "https://verluna.de/case-studies",
  },
};

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-text">
          Our work moved.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-text-muted leading-relaxed">
          Project write-ups now live under case studies: the operation before,
          the system built, and the measured results after.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/case-studies" size="lg">
            View case studies
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Book an intro call
          </Button>
        </div>
      </div>
    </div>
  );
}
