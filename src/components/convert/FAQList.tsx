"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/home";
import { Button } from "@/components/ui/Button";
import { faqCopy } from "@/data/copy/faq";
import type { FAQItem } from "@/data/copy/faq";

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="border-b border-line">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-text focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
      >
        <span className="font-medium text-text">{item.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          className="shrink-0 text-text-muted"
          aria-hidden="true"
        >
          <svg
            className="size-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="max-w-prose pb-6 text-sm leading-relaxed text-text-muted">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQList() {
  const { categories, bottomCta } = faqCopy;
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {categories.map((category) => (
            <Reveal key={category.title}>
              <div className="grid gap-6 border-t border-line pt-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-4">
                  <h2 className="text-2xl font-semibold tracking-tight text-text">
                    {category.title}
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  {category.items.map((item) => (
                    <AccordionItem
                      key={item.id}
                      item={item}
                      isOpen={openId === item.id}
                      onToggle={() =>
                        setOpenId(openId === item.id ? null : item.id)
                      }
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24 border-t border-line pt-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text">
            {bottomCta.heading}
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-text-muted">
            {bottomCta.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="primary" size="lg" href={bottomCta.ctaPrimary.href}>
              {bottomCta.ctaPrimary.label}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={bottomCta.ctaSecondary.href}
            >
              {bottomCta.ctaSecondary.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
