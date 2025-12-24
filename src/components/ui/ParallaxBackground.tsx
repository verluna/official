"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Parallax effect - grid moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.3, 0.1]);

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dot grid layer */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="dotGrid"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="16" cy="16" r="1" fill="#222" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotGrid)" />
        </svg>
      </motion.div>

      {/* Circuit lines layer - moves even slower */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.1, 0.05])
        }}
        className="absolute inset-0"
      >
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="circuitLines"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              {/* Horizontal line */}
              <line x1="0" y1="100" x2="200" y2="100" stroke="#222" strokeWidth="1" />
              {/* Vertical line */}
              <line x1="100" y1="0" x2="100" y2="200" stroke="#222" strokeWidth="1" />
              {/* Corner pieces */}
              <path d="M 100 100 L 100 80 L 120 80" fill="none" stroke="#222" strokeWidth="1" />
              <path d="M 100 100 L 80 100 L 80 120" fill="none" stroke="#222" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuitLines)" />
        </svg>
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal opacity-50" />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A0A0A_70%)] opacity-60" />
    </div>
  );
}

// Simpler version for specific sections
export function SectionBackground({
  variant = "dots"
}: {
  variant?: "dots" | "circuit" | "gradient"
}) {
  if (variant === "gradient") {
    return (
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-terminal-green/5 via-transparent to-electric-purple/5" />
      </div>
    );
  }

  if (variant === "circuit") {
    return (
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="sectionCircuit"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 0 50 L 40 50 L 50 40 L 50 0"
                fill="none"
                stroke="#222"
                strokeWidth="1"
              />
              <circle cx="50" cy="50" r="3" fill="none" stroke="#222" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sectionCircuit)" />
        </svg>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none opacity-30">
      <svg width="100%" height="100%">
        <defs>
          <pattern
            id="sectionDots"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="12" cy="12" r="1" fill="#333" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sectionDots)" />
      </svg>
    </div>
  );
}
