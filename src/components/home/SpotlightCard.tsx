"use client";

import { ReactNode, useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";

/*
 * Card with a copper spotlight that follows the pointer. Border brightens
 * near the cursor. Decorative layer is pointer-events-none; under reduced
 * motion (or touch) it is simply a bordered card.
 */
export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, rgba(217,99,59,0.1), transparent 70%)`;

  const onPointerMove = (e: React.PointerEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const onPointerLeave = () => {
    x.set(-300);
    y.set(-300);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`relative rounded-lg border border-accent/40 bg-ink-raised overflow-hidden ${className}`}
    >
      {!reduce && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: spotlight }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
