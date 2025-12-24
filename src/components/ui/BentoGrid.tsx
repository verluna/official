"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
  glowColor?: "green" | "purple" | "blue";
  delay?: number;
  icon?: ReactNode;
  title?: string;
  description?: string;
}

const glowStyles = {
  green: {
    border: "hover:border-terminal-green/50",
    shadow: "hover:shadow-[0_0_40px_rgba(0,255,148,0.15)]",
    iconBg: "bg-terminal-green/10",
    iconText: "text-terminal-green",
    glow: "from-terminal-green/20 via-terminal-green/5 to-transparent",
  },
  purple: {
    border: "hover:border-electric-purple/50",
    shadow: "hover:shadow-[0_0_40px_rgba(124,58,237,0.15)]",
    iconBg: "bg-electric-purple/10",
    iconText: "text-electric-purple",
    glow: "from-electric-purple/20 via-electric-purple/5 to-transparent",
  },
  blue: {
    border: "hover:border-signal-blue/50",
    shadow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
    iconBg: "bg-signal-blue/10",
    iconText: "text-signal-blue",
    glow: "from-signal-blue/20 via-signal-blue/5 to-transparent",
  },
};

export function BentoGrid({
  children,
  className,
  columns = 3,
}: BentoGridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={cn("grid gap-4 md:gap-6", gridCols[columns], className)}>
      {children}
    </div>
  );
}

export function BentoCard({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
  glowColor = "green",
  delay = 0,
  icon,
  title,
  description,
}: BentoCardProps) {
  const styles = glowStyles[glowColor];

  const colSpanClass = {
    1: "",
    2: "md:col-span-2",
  };

  const rowSpanClass = {
    1: "",
    2: "md:row-span-2",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "group relative overflow-hidden rounded-xl",
        "bg-surface border border-surface-border",
        "transition-all duration-500 ease-out",
        styles.border,
        styles.shadow,
        colSpanClass[colSpan],
        rowSpanClass[rowSpan],
        className
      )}
    >
      {/* Gradient glow on hover */}
      <div
        className={cn(
          "absolute -inset-1 rounded-xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
          "bg-gradient-radial",
          styles.glow
        )}
      />

      {/* Border glow animation */}
      <div
        className={cn(
          "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          glowColor === "green" && "shadow-[inset_0_0_30px_rgba(0,255,148,0.08)]",
          glowColor === "purple" && "shadow-[inset_0_0_30px_rgba(124,58,237,0.08)]",
          glowColor === "blue" && "shadow-[inset_0_0_30px_rgba(59,130,246,0.08)]"
        )}
      />

      {/* Content wrapper */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Icon */}
        {icon && (
          <motion.div
            className={cn(
              "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
              styles.iconBg
            )}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className={cn("w-6 h-6", styles.iconText)}>{icon}</div>
          </motion.div>
        )}

        {/* Title */}
        {title && (
          <h3 className="text-lg font-semibold text-off-white mb-2 group-hover:text-white transition-colors">
            {title}
          </h3>
        )}

        {/* Description */}
        {description && (
          <p className="text-sm text-steel-grey group-hover:text-steel-grey/90 transition-colors">
            {description}
          </p>
        )}

        {/* Custom children */}
        {children}
      </div>

      {/* Tactical noise overlay */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </motion.div>
  );
}

// Feature card variant with more prominent styling
export function FeatureCard({
  icon,
  title,
  description,
  features,
  glowColor = "green",
  delay = 0,
  className,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  features?: string[];
  glowColor?: "green" | "purple" | "blue";
  delay?: number;
  className?: string;
}) {
  const styles = glowStyles[glowColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={cn(
        "group relative overflow-hidden rounded-xl",
        "bg-surface border border-surface-border",
        "transition-all duration-500 ease-out cursor-pointer",
        styles.border,
        styles.shadow,
        className
      )}
    >
      {/* Gradient glow */}
      <div
        className={cn(
          "absolute -inset-1 rounded-xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
          "bg-gradient-radial",
          styles.glow
        )}
      />

      <div className="relative z-10 p-8">
        {/* Icon with scaling */}
        <motion.div
          className={cn(
            "w-14 h-14 rounded-xl flex items-center justify-center mb-6",
            styles.iconBg
          )}
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <div className={cn("w-7 h-7", styles.iconText)}>{icon}</div>
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-off-white mb-3 group-hover:text-white transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-steel-grey mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features list */}
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.1 * index }}
                className="flex items-center gap-2 text-sm text-steel-grey"
              >
                <span className={cn("w-1.5 h-1.5 rounded-full", styles.iconBg.replace("/10", ""))} />
                {feature}
              </motion.li>
            ))}
          </ul>
        )}
      </div>

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </motion.div>
  );
}
