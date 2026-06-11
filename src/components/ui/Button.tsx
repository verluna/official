"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  /** Kept for backwards compatibility with older call sites. Unused. */
  cursorColor?: string;
}

const variants = {
  primary:
    "bg-text text-ink border-transparent hover:bg-white",
  secondary:
    "bg-transparent text-text border-line-strong hover:border-text/40 hover:bg-ink-raised",
  ghost:
    "bg-transparent text-text-muted border-transparent hover:text-text",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-medium tracking-tight rounded-md border",
    "transition-[background-color,border-color,color,transform] duration-200",
    "active:translate-y-px active:scale-[0.99]",
    "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
    variants[variant],
    sizes[size],
    className,
  ].join(" ");

  if (href) {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
