"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useReducedMotion,
} from "framer-motion";

/*
 * Constellation field for the hero. A network of nodes with connections that
 * draw themselves on mount; nodes drift slowly; copper signals fire across
 * edges. The whole field tilts subtly toward the pointer and drifts on
 * scroll. Reads as "a system coming online", not a fake product UI.
 * Static under reduced motion.
 */

const W = 480;
const H = 560;

// Fixed pseudo-random layout (hand-balanced, no Math.random at runtime)
const NODES: Array<{ x: number; y: number; r: number }> = [
  { x: 70, y: 70, r: 3 },
  { x: 215, y: 40, r: 4 },
  { x: 388, y: 86, r: 3 },
  { x: 130, y: 178, r: 5 },
  { x: 300, y: 150, r: 3 },
  { x: 432, y: 210, r: 4 },
  { x: 58, y: 300, r: 4 },
  { x: 208, y: 268, r: 6 },
  { x: 345, y: 312, r: 3 },
  { x: 120, y: 408, r: 3 },
  { x: 262, y: 396, r: 4 },
  { x: 408, y: 432, r: 5 },
  { x: 64, y: 502, r: 3 },
  { x: 210, y: 512, r: 4 },
  { x: 340, y: 500, r: 3 },
];

// Edges as node-index pairs (sparse, no triangles spam)
const EDGES: Array<[number, number]> = [
  [0, 3],
  [1, 3],
  [1, 4],
  [2, 4],
  [2, 5],
  [3, 7],
  [4, 7],
  [5, 8],
  [6, 7],
  [7, 8],
  [7, 10],
  [8, 11],
  [9, 10],
  [10, 13],
  [10, 11],
  [11, 14],
  [12, 13],
  [13, 14],
  [6, 9],
];

// Edges that carry a traveling copper signal
const SIGNAL_EDGES = [3, 6, 10, 15, 18];

export function HeroSystem() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Pointer tilt (motion values only, no React state per frame)
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const tiltX = useTransform(sy, [0, 1], [4, -4]);
  const tiltY = useTransform(sx, [0, 1], [-5, 5]);

  // Scroll parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  const onPointerMove = (e: React.PointerEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      style={
        reduce
          ? undefined
          : { y: parallaxY, rotateX: tiltX, rotateY: tiltY, perspective: 800 }
      }
      className="will-change-transform"
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Network of connected systems coming online"
      >
        {/* Connections draw themselves in */}
        {EDGES.map(([a, b], i) => {
          const n1 = NODES[a];
          const n2 = NODES[b];
          const isSignal = SIGNAL_EDGES.includes(i);
          return (
            <motion.line
              key={`e-${i}`}
              x1={n1.x}
              y1={n1.y}
              x2={n2.x}
              y2={n2.y}
              stroke={isSignal ? "rgba(217,99,59,0.5)" : "rgba(255,255,255,0.14)"}
              strokeWidth={1}
              initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 1.1,
                delay: 0.3 + i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          );
        })}

        {/* Traveling signals on the copper edges */}
        {!reduce &&
          SIGNAL_EDGES.map((edgeIdx, i) => {
            const [a, b] = EDGES[edgeIdx];
            const n1 = NODES[a];
            const n2 = NODES[b];
            return (
              <motion.circle
                key={`s-${edgeIdx}`}
                r={3}
                fill="#d9633b"
                initial={{ cx: n1.x, cy: n1.y, opacity: 0 }}
                animate={{
                  cx: [n1.x, n2.x, n2.x, n1.x],
                  cy: [n1.y, n2.y, n2.y, n1.y],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 5 + i * 1.3,
                  delay: 1.6 + i * 0.9,
                  repeat: Infinity,
                  repeatDelay: 1.2,
                  ease: "easeInOut",
                  times: [0, 0.45, 0.55, 1],
                }}
              />
            );
          })}

        {/* Nodes drift slowly */}
        {NODES.map((n, i) => (
          <motion.g
            key={`n-${i}`}
            initial={reduce ? undefined : { opacity: 0, scale: 0 }}
            animate={
              reduce
                ? { opacity: 1 }
                : {
                    opacity: 1,
                    scale: 1,
                    x: [0, i % 2 === 0 ? 7 : -6, 0],
                    y: [0, i % 3 === 0 ? -8 : 6, 0],
                  }
            }
            transition={{
              opacity: { duration: 0.5, delay: 0.2 + i * 0.05 },
              scale: { duration: 0.5, delay: 0.2 + i * 0.05 },
              x: {
                duration: 9 + (i % 4) * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.4,
              },
              y: {
                duration: 11 + (i % 3) * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.4,
              },
            }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          >
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r + 7}
              fill="none"
              stroke={n.r >= 5 ? "rgba(217,99,59,0.35)" : "rgba(255,255,255,0.1)"}
              strokeWidth={1}
            />
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={n.r >= 5 ? "#d9633b" : "#f2f1ee"}
              fillOpacity={n.r >= 5 ? 1 : 0.75}
            />
          </motion.g>
        ))}
      </svg>
    </motion.div>
  );
}
