"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "green" | "purple" | "blue";
  hover?: boolean;
}

const glowStyles = {
  green: "card-hover-green",
  purple: "card-hover-purple",
  blue: "card-hover-blue",
};

export function BentoCard({
  children,
  className = "",
  glowColor,
  hover = true,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      data-cursor={hover ? "hover" : undefined}
      data-cursor-color={glowColor || "green"}
      className={`
        relative rounded-lg border border-surface-border bg-surface/50 backdrop-blur-sm
        p-6 transition-all duration-300
        ${hover && glowColor ? glowStyles[glowColor] : ""}
        ${hover ? "hover:border-steel-grey/50" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

interface BentoGridProps {
  children: ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4;
}

export function BentoGrid({ children, className = "", cols = 3 }: BentoGridProps) {
  const colClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid gap-4 ${colClasses[cols]} ${className}`}>
      {children}
    </div>
  );
}
