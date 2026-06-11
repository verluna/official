"use client";

import { motion, useReducedMotion } from "framer-motion";

interface PageHeaderProps {
  /** Kept for backwards compatibility with older call sites. No longer rendered. */
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({
  title,
  description,
  className = "",
}: PageHeaderProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className={`pt-32 pb-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-text">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
