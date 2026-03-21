"use client";

import { Accordion } from "@/components/ui";
import { SectionLabel } from "./SectionLabel";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  items: FAQItem[];
  label?: string;
  title?: string;
  className?: string;
}

export function ServiceFAQ({
  items,
  label = "FAQ",
  title = "Common Questions",
  className = "",
}: ServiceFAQProps) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel>{label}</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-8">
          {title}
        </h2>
        <div className="max-w-3xl">
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
}
