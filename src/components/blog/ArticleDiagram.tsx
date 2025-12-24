"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Zap } from "lucide-react";

// Types
export interface DiagramNode {
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

export interface DiagramEdge {
  from: string;
  to: string;
  delay: number;
}

export interface ArticleDiagramConfig {
  id: string;
  title: string;
  description?: string;
  nodes: DiagramNode[];
  edges: DiagramEdge[];
}

interface ArticleDiagramProps {
  config: ArticleDiagramConfig;
  className?: string;
}

const colorMap = {
  blue: { main: "#3B82F6", glow: "rgba(59, 130, 246, 0.3)" },
  purple: { main: "#7C3AED", glow: "rgba(124, 58, 237, 0.3)" },
  green: { main: "#00FF94", glow: "rgba(0, 255, 148, 0.3)" },
};

function getNodePosition(
  nodes: DiagramNode[],
  nodeId: string
): { x: number; y: number } {
  const node = nodes.find((n) => n.id === nodeId);
  return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
}

function NodeTooltip({
  node,
  isHovered,
  configId,
}: {
  node: DiagramNode;
  isHovered: boolean;
  configId: string;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
      transition={{ duration: 0.2 }}
    >
      <rect
        x={node.x - 80}
        y={node.y - 90}
        width="160"
        height="60"
        rx="8"
        fill="#1A1A1A"
        stroke={colorMap[node.color].main}
        strokeWidth="1"
      />
      {/* Arrow */}
      <polygon
        points={`${node.x - 8},${node.y - 30} ${node.x + 8},${node.y - 30} ${node.x},${node.y - 20}`}
        fill="#1A1A1A"
        stroke={colorMap[node.color].main}
        strokeWidth="1"
      />
      {/* Tooltip content */}
      <text
        x={node.x}
        y={node.y - 65}
        textAnchor="middle"
        fill={colorMap[node.color].main}
        fontSize="12"
        fontFamily="var(--font-geist-mono), monospace"
        fontWeight="500"
      >
        {node.specs.type}
      </text>
      <text
        x={node.x - 40}
        y={node.y - 45}
        fill="#A1A1AA"
        fontSize="11"
        fontFamily="var(--font-geist-mono), monospace"
      >
        exec:
      </text>
      <text
        x={node.x + 40}
        y={node.y - 45}
        textAnchor="end"
        fill="#EDEDED"
        fontSize="11"
        fontFamily="var(--font-geist-mono), monospace"
      >
        {node.specs.execution}
      </text>
    </motion.g>
  );
}

function DiagramContent({
  config,
  isInView,
}: {
  config: ArticleDiagramConfig;
  isInView: boolean;
}) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [litNodes, setLitNodes] = useState<Set<string>>(
    new Set([config.nodes[0]?.id])
  );

  return (
    <svg
      viewBox="0 0 760 280"
      className="w-full h-full relative z-10"
      style={{ overflow: "visible" }}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Gradient definitions */}
      <defs>
        <linearGradient
          id={`edgeGradient-${config.id}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#00FF94" />
        </linearGradient>
        <filter
          id={`glow-${config.id}`}
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          id={`glowStrong-${config.id}`}
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Edges - Draw connection lines */}
      {config.edges.map((edge, index) => {
        const from = getNodePosition(config.nodes, edge.from);
        const to = getNodePosition(config.nodes, edge.to);
        const pathD = `M ${from.x + 60} ${from.y} Q ${(from.x + to.x) / 2 + 25} ${(from.y + to.y) / 2} ${to.x - 60} ${to.y}`;

        return (
          <g key={`edge-${config.id}-${index}`}>
            {/* Base path (faint) */}
            <motion.path
              d={pathD}
              fill="none"
              stroke="#262626"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.8, delay: edge.delay + 0.3 }}
            />

            {/* Animated glowing path */}
            <motion.path
              d={pathD}
              fill="none"
              stroke={`url(#edgeGradient-${config.id})`}
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                isInView
                  ? { pathLength: 1, opacity: 0.8 }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={{ duration: 0.8, delay: edge.delay + 0.3 }}
              filter={`url(#glow-${config.id})`}
            />

            {/* Data packet traveling along path */}
            <motion.circle
              r="5"
              fill="#00FF94"
              filter={`url(#glowStrong-${config.id})`}
              initial={{ opacity: 0 }}
              animate={
                isInView
                  ? {
                      opacity: [0, 1, 1, 0],
                      offsetDistance: ["0%", "100%"],
                    }
                  : { opacity: 0 }
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
      {config.nodes.map((node) => {
        const isLit = litNodes.has(node.id);
        const isHovered = hoveredNode === node.id;
        const colors = colorMap[node.color];

        return (
          <motion.g
            key={`${config.id}-${node.id}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{
              duration: 0.5,
              delay: node.delay + 0.2,
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            className="cursor-default"
          >
            {/* Node background glow */}
            <motion.ellipse
              cx={node.x}
              cy={node.y}
              rx="65"
              ry="32"
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
              filter={`url(#glow-${config.id})`}
            />

            {/* Node border */}
            <motion.rect
              x={node.x - 60}
              y={node.y - 28}
              width="120"
              height="56"
              rx="8"
              fill="#111111"
              stroke={colors.main}
              strokeWidth={isHovered ? "2" : "1.5"}
              animate={{
                boxShadow: isLit ? `0 0 20px ${colors.glow}` : "none",
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Status indicator */}
            <motion.circle
              cx={node.x - 48}
              cy={node.y - 14}
              r="4"
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
              y={node.y - 4}
              textAnchor="middle"
              fill="#EDEDED"
              fontSize="14"
              fontFamily="var(--font-geist-mono), monospace"
              fontWeight="500"
            >
              {node.label}
            </text>

            {/* Sub-label */}
            <text
              x={node.x}
              y={node.y + 14}
              textAnchor="middle"
              fill="#A1A1AA"
              fontSize="11"
              fontFamily="var(--font-geist-mono), monospace"
            >
              {node.subLabel}
            </text>

            {/* Tooltip on hover */}
            <NodeTooltip node={node} isHovered={isHovered} configId={config.id} />
          </motion.g>
        );
      })}
    </svg>
  );
}

export function ArticleDiagram({ config, className = "" }: ArticleDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative w-full rounded-xl border border-surface-border bg-surface/30 backdrop-blur-sm overflow-hidden ${className}`}
    >
      {/* Terminal header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-surface-border bg-surface/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <span className="ml-2 text-xs font-mono text-steel-grey">
            {config.title.toLowerCase().replace(/\s+/g, "-")}.flow
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="w-3 h-3 text-terminal-green" />
          <span className="text-[10px] font-mono text-terminal-green uppercase">
            Live
          </span>
        </div>
      </div>

      {/* Diagram container */}
      <div className="relative h-[280px] sm:h-[320px] lg:h-[360px] p-4">
        {/* Blueprint grid background */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern
                id={`blueprintGrid-${config.id}`}
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 24 0 L 0 0 0 24"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#blueprintGrid-${config.id})`} />
          </svg>
        </div>

        {/* Diagram content */}
        <DiagramContent config={config} isInView={isInView} />

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 sm:gap-6 text-xs font-mono text-steel-grey"
        >
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-signal-blue shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
            Input
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-electric-purple shadow-[0_0_8px_rgba(124,58,237,0.5)]" />
            Processing
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-terminal-green shadow-[0_0_8px_rgba(0,255,148,0.5)]" />
            Output
          </span>
        </motion.div>
      </div>

      {/* Optional description */}
      {config.description && (
        <div className="px-4 py-3 border-t border-surface-border">
          <p className="text-xs font-mono text-steel-grey">{config.description}</p>
        </div>
      )}
    </motion.div>
  );
}
