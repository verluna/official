"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface ScoreRingProps {
  score: number;
  color: "green" | "blue" | "purple";
  size?: number;
  strokeWidth?: number;
}

const colorMap = {
  green: { stroke: "#00FF94", glow: "rgba(0,255,148,0.3)" },
  blue: { stroke: "#3B82F6", glow: "rgba(59,130,246,0.3)" },
  purple: { stroke: "#7C3AED", glow: "rgba(124,58,237,0.3)" },
};

export function ScoreRing({
  score,
  color,
  size = 240,
  strokeWidth = 8,
}: ScoreRingProps) {
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  const motionScore = useMotionValue(0);
  const displayScore = useTransform(motionScore, (v) => Math.round(v));

  useEffect(() => {
    const controls = animate(motionScore, score, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [score, motionScore]);

  const progress = score / 100;
  const dashOffset = circumference * (1 - progress);
  const colors = colorMap[color];

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {/* Track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#1A1A1A"
          strokeWidth={strokeWidth}
        />
        {/* Progress */}
        <motion.circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={colors.stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: dashOffset }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            filter: `drop-shadow(0 0 12px ${colors.glow})`,
          }}
        />
      </svg>
      {/* Score number */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="font-mono text-5xl font-bold"
          style={{ color: colors.stroke }}
        >
          {displayScore}
        </motion.span>
        <span className="font-mono text-sm text-steel-grey mt-1">/100</span>
      </div>
    </div>
  );
}
