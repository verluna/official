"use client";

import { motion } from "framer-motion";
import { Badge, Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";

type AccentColor = "blue" | "green" | "purple" | "default";

interface ServiceHeroProps {
  badge: string;
  badgeVariant?: AccentColor;
  title: string;
  subtitle: string;
  description: string;
  price?: string;
  timeline?: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  accentColor?: AccentColor;
}

const accentStyles: Record<AccentColor, { text: string; border: string }> = {
  blue: { text: "text-signal-blue", border: "border-signal-blue/30" },
  green: { text: "text-terminal-green", border: "border-terminal-green/30" },
  purple: { text: "text-electric-purple", border: "border-electric-purple/30" },
  default: { text: "text-steel-grey", border: "border-surface-border" },
};

export function ServiceHero({
  badge,
  badgeVariant = "default",
  title,
  subtitle,
  description,
  price,
  timeline,
  ctaPrimary,
  ctaSecondary,
  accentColor = "default",
}: ServiceHeroProps) {
  const accent = accentStyles[accentColor];

  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      {/* Accent glow */}
      <div
        className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none opacity-10 ${
          accentColor === "blue"
            ? "bg-signal-blue"
            : accentColor === "green"
            ? "bg-terminal-green"
            : accentColor === "purple"
            ? "bg-electric-purple"
            : "bg-steel-grey"
        }`}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant={badgeVariant === "default" ? "default" : badgeVariant}>
              {badge}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className={`mt-4 text-xl font-mono ${accent.text}`}
          >
            {subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-steel-grey leading-relaxed max-w-3xl"
          >
            {description}
          </motion.p>

          {/* Price and timeline */}
          {(price || timeline) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={`mt-8 inline-flex items-center gap-6 px-6 py-3 rounded-lg border ${accent.border} bg-surface/50`}
            >
              {price && (
                <div>
                  <span className="text-xs font-mono text-steel-grey uppercase tracking-wider block">
                    Investment
                  </span>
                  <span className={`text-lg font-mono font-medium ${accent.text}`}>
                    {price}
                  </span>
                </div>
              )}
              {price && timeline && (
                <div className="w-px h-8 bg-surface-border" />
              )}
              {timeline && (
                <div>
                  <span className="text-xs font-mono text-steel-grey uppercase tracking-wider block">
                    Timeline
                  </span>
                  <span className={`text-lg font-mono font-medium ${accent.text}`}>
                    {timeline}
                  </span>
                </div>
              )}
            </motion.div>
          )}

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button href={ctaPrimary.href} size="lg">
              {ctaPrimary.label}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            {ctaSecondary && (
              <Button href={ctaSecondary.href} variant="secondary" size="lg">
                {ctaSecondary.label}
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
