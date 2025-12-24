"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({
  label,
  title,
  description,
  className = "",
}: PageHeaderProps) {
  return (
    <section className={`pt-32 pb-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          {label && (
            <div className="flex items-center gap-3 mb-4">
              <span className="text-terminal-green font-mono">&gt;</span>
              <span className="text-sm font-mono text-steel-grey uppercase tracking-wider">
                {label}
              </span>
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tighter">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-steel-grey leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
