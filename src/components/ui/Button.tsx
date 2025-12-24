"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type CursorColor = "green" | "purple" | "blue";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  cursorColor?: CursorColor;
}

const variants = {
  primary:
    "bg-off-white text-void hover:bg-terminal-green hover:text-void border-transparent",
  secondary:
    "bg-transparent text-off-white border-surface-border hover:border-terminal-green hover:text-terminal-green",
  ghost:
    "bg-transparent text-steel-grey hover:text-off-white border-transparent",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  cursorColor = "green",
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-medium tracking-tight
    border transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-terminal-green/50
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={baseClasses}
      onClick={onClick}
      data-cursor="hover"
      data-cursor-color={cursorColor}
      {...(href ? { href } : {})}
    >
      {children}
    </MotionComponent>
  );
}
