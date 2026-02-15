"use client";

import { motion } from "framer-motion";
import { Accordion, Button } from "@/components/ui";
import { faqCopy } from "@/data/copy/faq";

const categoryIcons: Record<string, React.ReactNode> = {
  "Getting Started": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  "Your Stack": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  "Working Together": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
    </svg>
  ),
  "Not Ready Yet?": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
};

export function FAQContent() {
  const { categories, bottomCta } = faqCopy;

  return (
    <div className="pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-terminal-green/10 flex items-center justify-center text-terminal-green">
                {categoryIcons[category.title]}
              </div>
              <h2 className="text-xl font-semibold tracking-tight">
                {category.title}
              </h2>
            </div>

            <Accordion items={category.items} />
          </motion.div>
        ))}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-lg border border-surface-border bg-surface/30 text-center"
        >
          <h3 className="text-xl font-semibold tracking-tight mb-2">
            {bottomCta.heading}
          </h3>
          <p className="text-steel-grey mb-6 max-w-2xl mx-auto">
            {bottomCta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={bottomCta.ctaPrimary.href}>
              {bottomCta.ctaPrimary.label}
            </Button>
            <Button variant="secondary" href={bottomCta.ctaSecondary.href}>
              {bottomCta.ctaSecondary.label}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
