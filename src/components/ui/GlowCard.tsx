"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type GlowColor = "green" | "purple" | "blue";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: GlowColor;
  hover?: boolean;
  noise?: boolean;
  delay?: number;
  onClick?: () => void;
}

const glowStyles: Record<GlowColor, string> = {
  green: "hover:border-terminal-green/50 hover:shadow-[0_0_40px_rgba(0,255,148,0.15)]",
  purple: "hover:border-electric-purple/50 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)]",
  blue: "hover:border-signal-blue/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
};

const glowGradients: Record<GlowColor, string> = {
  green: "from-terminal-green/20 via-terminal-green/5 to-transparent",
  purple: "from-electric-purple/20 via-electric-purple/5 to-transparent",
  blue: "from-signal-blue/20 via-signal-blue/5 to-transparent",
};

export function GlowCard({
  children,
  className,
  glowColor = "green",
  hover = true,
  noise = true,
  delay = 0,
  onClick,
}: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
      onClick={onClick}
      data-cursor={hover ? "hover" : undefined}
      data-cursor-color={glowColor}
      className={cn(
        "relative overflow-hidden rounded-xl",
        "bg-surface border border-surface-border",
        "transition-all duration-300 ease-out",
        hover && glowStyles[glowColor],
        hover && "cursor-pointer",
        className
      )}
    >
      {/* Radioactive glow effect behind card */}
      <motion.div
        className={cn(
          "absolute -inset-px rounded-xl opacity-0 blur-xl transition-opacity duration-500",
          "bg-gradient-radial",
          glowGradients[glowColor]
        )}
        whileHover={{ opacity: 1 }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Tactical noise overlay */}
      {noise && (
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      )}
    </motion.div>
  );
}

// Interactive version with icon scaling
export function InteractiveGlowCard({
  children,
  icon,
  className,
  glowColor = "green",
  delay = 0,
}: {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  glowColor?: GlowColor;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      data-cursor="hover"
      data-cursor-color={glowColor}
      className={cn(
        "group relative overflow-hidden rounded-xl",
        "bg-surface border border-surface-border",
        "transition-all duration-300 ease-out",
        glowStyles[glowColor],
        "cursor-pointer",
        className
      )}
    >
      {/* Gradient glow on hover */}
      <div
        className={cn(
          "absolute -inset-1 rounded-xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
          "bg-gradient-radial",
          glowGradients[glowColor]
        )}
      />

      {/* Border glow animation */}
      <motion.div
        className={cn(
          "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          glowColor === "green" && "shadow-[inset_0_0_20px_rgba(0,255,148,0.1)]",
          glowColor === "purple" && "shadow-[inset_0_0_20px_rgba(124,58,237,0.1)]",
          glowColor === "blue" && "shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]"
        )}
      />

      {/* Content wrapper */}
      <div className="relative z-10 p-6">
        {/* Scaling icon */}
        {icon && (
          <motion.div
            className="mb-4"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {icon}
          </motion.div>
        )}
        {children}
      </div>

      {/* Tactical noise overlay */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </motion.div>
  );
}
