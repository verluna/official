"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TerminalHeaderProps {
  children: string;
  className?: string;
  variant?: "default" | "success" | "warning" | "error";
  animate?: boolean;
  delay?: number;
}

const variantStyles = {
  default: {
    prefix: ">",
    prefixColor: "text-terminal-green",
    textColor: "text-steel-grey",
  },
  success: {
    prefix: "[OK]",
    prefixColor: "text-terminal-green",
    textColor: "text-terminal-green",
  },
  warning: {
    prefix: "[WARN]",
    prefixColor: "text-warning-amber",
    textColor: "text-warning-amber",
  },
  error: {
    prefix: "[ERR]",
    prefixColor: "text-error-red",
    textColor: "text-error-red",
  },
};

export function TerminalHeader({
  children,
  className,
  variant = "default",
  animate = true,
  delay = 0,
}: TerminalHeaderProps) {
  const styles = variantStyles[variant];

  // Convert text to terminal-style format (e.g., "Services" -> "SYSTEM_SERVICES_INIT")
  const terminalText = children
    .toUpperCase()
    .replace(/\s+/g, "_")
    .replace(/[^A-Z0-9_]/g, "");

  const content = (
    <span className="flex items-center gap-2">
      <span className={cn("font-mono", styles.prefixColor)}>
        {styles.prefix}
      </span>
      <span className={cn("font-mono tracking-widest", styles.textColor)}>
        {terminalText}_INIT
      </span>
      <motion.span
        className="inline-block w-2 h-4 bg-terminal-green/80"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </span>
  );

  if (!animate) {
    return (
      <div
        className={cn(
          "text-xs uppercase tracking-[0.2em] font-mono",
          className
        )}
      >
        {content}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "text-xs uppercase tracking-[0.2em] font-mono",
        className
      )}
    >
      {content}
    </motion.div>
  );
}

// Simple terminal label without animation
export function TerminalLabel({
  children,
  className,
  prefix = "$",
}: {
  children: React.ReactNode;
  className?: string;
  prefix?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-xs text-steel-grey",
        className
      )}
    >
      <span className="text-terminal-green">{prefix}</span>
      {children}
    </span>
  );
}
