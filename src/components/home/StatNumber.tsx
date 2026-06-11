"use client";

import { useEffect, useRef } from "react";
import { useInView, useReducedMotion, animate } from "framer-motion";

interface StatNumberProps {
  value: number;
  suffix?: string;
  className?: string;
}

/** Counts up once when scrolled into view. Writes to the DOM directly,
 *  no React re-renders per frame. */
export function StatNumber({ value, suffix = "", className }: StatNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;
    if (reduce || !inView) {
      if (reduce) ref.current.textContent = `${value}${suffix}`;
      return;
    }
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) {
          ref.current.textContent = `${Math.round(v)}${suffix}`;
        }
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
