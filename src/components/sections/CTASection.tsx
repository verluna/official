"use client";

import { motion } from "framer-motion";
import { Button, BentoCard } from "@/components/ui";
import { ArrowRight, Download } from "lucide-react";
import { homeCopy } from "@/data/copy/home";
import { sectionPadding, containerWidth } from "@/lib/design-tokens";

export function CTASection() {
  const { cta } = homeCopy;

  return (
    <section
      className={`${sectionPadding} border-t border-surface-border`}
    >
      <div className={containerWidth}>
        <BentoCard hover={false} className="max-w-3xl mx-auto">
          <div className="text-center py-8 px-4 sm:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-4"
            >
              {cta.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-steel-grey max-w-xl mx-auto mb-8 leading-relaxed"
            >
              {cta.riskReversal}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button href={cta.ctaPrimary.href} size="lg">
                {cta.ctaPrimary.label}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                variant="secondary"
                href={cta.ctaSecondary.href}
                size="lg"
              >
                <Download className="w-4 h-4 mr-2" />
                {cta.ctaSecondary.label}
              </Button>
            </motion.div>
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
