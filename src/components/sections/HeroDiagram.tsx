"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface DiagramNode {
  id: string;
  label: string;
  subLabel: string;
  x: number;
  y: number;
  color: "blue" | "purple" | "green";
  delay: number;
  specs: {
    type: string;
    execution: string;
    status: string;
  };
}

interface DiagramEdge {
  from: string;
  to: string;
  delay: number;
}

const colorMap = {
  blue: { main: "#3B82F6", glow: "rgba(59, 130, 246, 0.3)" },
  purple: { main: "#7C3AED", glow: "rgba(124, 58, 237, 0.3)" },
  green: { main: "#00FF94", glow: "rgba(0, 255, 148, 0.3)" },
};

const nodes: DiagramNode[] = [
  {
    id: "source",
    label: "Lead Source",
    subLabel: "Webhook",
    x: 60,
    y: 100,
    color: "blue",
    delay: 0,
    specs: { type: "HTTP Trigger", execution: "12ms", status: "Active" },
  },
  {
    id: "enrich",
    label: "Enrichment",
    subLabel: "Apollo API",
    x: 220,
    y: 50,
    color: "purple",
    delay: 0.4,
    specs: { type: "Python Script", execution: "45ms", status: "Active" },
  },
  {
    id: "score",
    label: "Lead Score",
    subLabel: "ML Model",
    x: 220,
    y: 150,
    color: "purple",
    delay: 0.5,
    specs: { type: "TensorFlow", execution: "89ms", status: "Active" },
  },
  {
    id: "route",
    label: "Router",
    subLabel: "Logic",
    x: 380,
    y: 100,
    color: "purple",
    delay: 0.8,
    specs: { type: "n8n Node", execution: "8ms", status: "Active" },
  },
  {
    id: "crm",
    label: "HubSpot",
    subLabel: "CRM Sync",
    x: 540,
    y: 50,
    color: "green",
    delay: 1.1,
    specs: { type: "API Call", execution: "156ms", status: "Active" },
  },
  {
    id: "slack",
    label: "Slack",
    subLabel: "Alert",
    x: 540,
    y: 150,
    color: "green",
    delay: 1.2,
    specs: { type: "Webhook", execution: "34ms", status: "Active" },
  },
];

const edges: DiagramEdge[] = [
  { from: "source", to: "enrich", delay: 0.2 },
  { from: "source", to: "score", delay: 0.25 },
  { from: "enrich", to: "route", delay: 0.6 },
  { from: "score", to: "route", delay: 0.65 },
  { from: "route", to: "crm", delay: 0.95 },
  { from: "route", to: "slack", delay: 1.0 },
];

function getNodePosition(nodeId: string): { x: number; y: number } {
  const node = nodes.find((n) => n.id === nodeId);
  return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
}

function NodeTooltip({
  node,
  isHovered,
}: {
  node: DiagramNode;
  isHovered: boolean;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
      transition={{ duration: 0.2 }}
    >
      <rect
        x={node.x - 70}
        y={node.y - 75}
        width="140"
        height="50"
        rx="6"
        fill="#1A1A1A"
        stroke={colorMap[node.color].main}
        strokeWidth="1"
      />
      {/* Arrow */}
      <polygon
        points={`${node.x - 6},${node.y - 25} ${node.x + 6},${node.y - 25} ${node.x},${node.y - 18}`}
        fill="#1A1A1A"
        stroke={colorMap[node.color].main}
        strokeWidth="1"
      />
      {/* Tooltip content */}
      <text
        x={node.x}
        y={node.y - 55}
        textAnchor="middle"
        fill={colorMap[node.color].main}
        fontSize="9"
        fontFamily="var(--font-geist-mono), monospace"
      >
        {node.specs.type}
      </text>
      <text
        x={node.x - 30}
        y={node.y - 40}
        fill="#A1A1AA"
        fontSize="8"
        fontFamily="var(--font-geist-mono), monospace"
      >
        exec:
      </text>
      <text
        x={node.x + 30}
        y={node.y - 40}
        textAnchor="end"
        fill="#EDEDED"
        fontSize="8"
        fontFamily="var(--font-geist-mono), monospace"
      >
        {node.specs.execution}
      </text>
    </motion.g>
  );
}

export function HeroDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [activePackets, setActivePackets] = useState<Set<string>>(new Set());

  // Track which nodes have received a packet
  const [litNodes, setLitNodes] = useState<Set<string>>(new Set(["source"]));

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[280px] md:h-[320px]"
    >
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="blueprintGrid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprintGrid)" />
        </svg>
      </div>

      <svg
        viewBox="0 0 600 200"
        className="w-full h-full relative z-10"
        style={{ overflow: "visible" }}
      >
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#00FF94" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glowStrong" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Edges - Draw connection lines */}
        {edges.map((edge, index) => {
          const from = getNodePosition(edge.from);
          const to = getNodePosition(edge.to);
          const pathD = `M ${from.x + 50} ${from.y} Q ${(from.x + to.x) / 2 + 20} ${(from.y + to.y) / 2} ${to.x - 50} ${to.y}`;

          return (
            <g key={`edge-${index}`}>
              {/* Base path (faint) */}
              <motion.path
                d={pathD}
                fill="none"
                stroke="#262626"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 0.8, delay: edge.delay + 0.3 }}
              />

              {/* Animated glowing path */}
              <motion.path
                d={pathD}
                fill="none"
                stroke="url(#edgeGradient)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.8 } : {}}
                transition={{ duration: 0.8, delay: edge.delay + 0.3 }}
                filter="url(#glow)"
              />

              {/* Data packet traveling along path */}
              <motion.circle
                r="4"
                fill="#00FF94"
                filter="url(#glowStrong)"
                initial={{ opacity: 0 }}
                animate={
                  isInView
                    ? {
                        opacity: [0, 1, 1, 0],
                        offsetDistance: ["0%", "100%"],
                      }
                    : {}
                }
                transition={{
                  duration: 1.2,
                  delay: edge.delay + 1.2,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                }}
                onAnimationComplete={() => {
                  setLitNodes((prev) => new Set([...prev, edge.to]));
                }}
                style={{
                  offsetPath: `path("${pathD}")`,
                }}
              />
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const isLit = litNodes.has(node.id);
          const isHovered = hoveredNode === node.id;
          const colors = colorMap[node.color];

          return (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: node.delay + 0.2,
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer"
            >
              {/* Node background glow */}
              <motion.ellipse
                cx={node.x}
                cy={node.y}
                rx="55"
                ry="28"
                fill={colors.main}
                initial={{ opacity: 0.05 }}
                animate={{
                  opacity: isLit ? [0.1, 0.25, 0.1] : 0.05,
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{
                  opacity: { duration: 2, repeat: Infinity },
                  scale: { duration: 0.2 },
                }}
                filter="url(#glow)"
              />

              {/* Node border */}
              <motion.rect
                x={node.x - 50}
                y={node.y - 22}
                width="100"
                height="44"
                rx="6"
                fill="#111111"
                stroke={colors.main}
                strokeWidth={isHovered ? "2" : "1.5"}
                animate={{
                  boxShadow: isLit
                    ? `0 0 20px ${colors.glow}`
                    : "none",
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Status indicator */}
              <motion.circle
                cx={node.x - 40}
                cy={node.y - 12}
                r="3"
                fill={isLit ? colors.main : "#262626"}
                animate={
                  isLit
                    ? {
                        opacity: [1, 0.5, 1],
                        scale: [1, 1.2, 1],
                      }
                    : {}
                }
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />

              {/* Node label */}
              <text
                x={node.x}
                y={node.y - 3}
                textAnchor="middle"
                fill="#EDEDED"
                fontSize="11"
                fontFamily="var(--font-geist-mono), monospace"
                fontWeight="500"
              >
                {node.label}
              </text>

              {/* Sub-label */}
              <text
                x={node.x}
                y={node.y + 12}
                textAnchor="middle"
                fill="#A1A1AA"
                fontSize="9"
                fontFamily="var(--font-geist-mono), monospace"
              >
                {node.subLabel}
              </text>

              {/* Tooltip on hover */}
              <NodeTooltip node={node} isHovered={isHovered} />
            </motion.g>
          );
        })}
      </svg>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-0 left-0 right-0 flex justify-center gap-6 text-xs font-mono text-steel-grey"
      >
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-signal-blue shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
          Input
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-electric-purple shadow-[0_0_8px_rgba(124,58,237,0.5)]" />
          Processing
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-terminal-green shadow-[0_0_8px_rgba(0,255,148,0.5)]" />
          Output
        </span>
      </motion.div>

      {/* System status indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute top-0 right-0 flex items-center gap-2 font-mono text-[10px] text-steel-grey"
      >
        <motion.span
          className="w-1.5 h-1.5 rounded-full bg-terminal-green"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        SYSTEM_ACTIVE
      </motion.div>
    </div>
  );
}
