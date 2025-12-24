"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
  className?: string;
}

const positionStyles = {
  top: {
    container: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    arrow: "top-full left-1/2 -translate-x-1/2 border-t-surface-elevated border-x-transparent border-b-transparent",
    initial: { opacity: 0, y: 8, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
  },
  bottom: {
    container: "top-full left-1/2 -translate-x-1/2 mt-2",
    arrow: "bottom-full left-1/2 -translate-x-1/2 border-b-surface-elevated border-x-transparent border-t-transparent",
    initial: { opacity: 0, y: -8, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
  },
  left: {
    container: "right-full top-1/2 -translate-y-1/2 mr-2",
    arrow: "left-full top-1/2 -translate-y-1/2 border-l-surface-elevated border-y-transparent border-r-transparent",
    initial: { opacity: 0, x: 8, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1 },
  },
  right: {
    container: "left-full top-1/2 -translate-y-1/2 ml-2",
    arrow: "right-full top-1/2 -translate-y-1/2 border-r-surface-elevated border-y-transparent border-l-transparent",
    initial: { opacity: 0, x: -8, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1 },
  },
};

export function Tooltip({
  children,
  content,
  position = "top",
  delay = 200,
  className,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const styles = positionStyles[position];

  const handleMouseEnter = () => {
    const id = setTimeout(() => setIsVisible(true), delay);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsVisible(false);
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={styles.initial}
            animate={styles.animate}
            exit={styles.initial}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={cn(
              "absolute z-50 pointer-events-none",
              styles.container
            )}
          >
            <div
              className={cn(
                "px-3 py-2 rounded-lg",
                "bg-surface-elevated border border-surface-border",
                "text-sm text-off-white whitespace-nowrap",
                "shadow-lg",
                className
              )}
            >
              {content}
            </div>
            {/* Arrow */}
            <div
              className={cn(
                "absolute w-0 h-0 border-[6px]",
                styles.arrow
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Code specs tooltip for diagram nodes
export function CodeSpecTooltip({
  children,
  title,
  specs,
  position = "top",
}: {
  children: ReactNode;
  title: string;
  specs: { label: string; value: string }[];
  position?: "top" | "bottom" | "left" | "right";
}) {
  return (
    <Tooltip
      position={position}
      content={
        <div className="min-w-[180px]">
          <div className="font-mono text-terminal-green text-xs mb-2 pb-1 border-b border-surface-border">
            {title}
          </div>
          <div className="space-y-1">
            {specs.map((spec, i) => (
              <div key={i} className="flex justify-between gap-4 font-mono text-xs">
                <span className="text-steel-grey">{spec.label}:</span>
                <span className="text-off-white">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      }
    >
      {children}
    </Tooltip>
  );
}
