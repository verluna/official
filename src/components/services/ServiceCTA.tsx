"use client";

import { motion } from "framer-motion";
import { Button, BentoCard } from "@/components/ui";
import { ArrowRight } from "lucide-react";

interface ServiceCTAProps {
  title: string;
  description: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
}

export function ServiceCTA({
  title,
  description,
  ctaPrimary,
  ctaSecondary,
}: ServiceCTAProps) {
  return (
    <section className="py-16 md:py-24 border-t border-surface-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BentoCard hover={false} className="max-w-3xl mx-auto">
          <div className="text-center py-8 px-4 sm:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-4"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-steel-grey max-w-xl mx-auto mb-8 leading-relaxed"
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button href={ctaPrimary.href} size="lg">
                {ctaPrimary.label}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              {ctaSecondary && (
                <Button
                  variant="secondary"
                  href={ctaSecondary.href}
                  size="lg"
                >
                  {ctaSecondary.label}
                </Button>
              )}
            </motion.div>
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
