"use client";

import { motion } from "framer-motion";

interface SectionLabelProps {
  children: string;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`flex items-center gap-3 mb-6 ${className}`}
    >
      <span className="text-terminal-green font-mono">&gt;</span>
      <span className="text-sm font-mono text-steel-grey uppercase tracking-wider">
        {children}
      </span>
    </motion.div>
  );
}
