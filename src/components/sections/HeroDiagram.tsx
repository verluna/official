"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

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

interface DiagramConfig {
  id: string;
  name: string;
  filename: string;
  nodes: DiagramNode[];
  edges: DiagramEdge[];
}

const colorMap = {
  blue: { main: "#3B82F6", glow: "rgba(59, 130, 246, 0.3)" },
  purple: { main: "#7C3AED", glow: "rgba(124, 58, 237, 0.3)" },
  green: { main: "#00FF94", glow: "rgba(0, 255, 148, 0.3)" },
};

// Diagram 1: Lead Routing (original)
const leadRoutingConfig: DiagramConfig = {
  id: "lead-routing",
  name: "Lead Routing",
  filename: "lead-routing.flow",
  nodes: [
    {
      id: "source",
      label: "Lead Source",
      subLabel: "Webhook",
      x: 80,
      y: 140,
      color: "blue",
      delay: 0,
      specs: { type: "HTTP Trigger", execution: "12ms", status: "Active" },
    },
    {
      id: "enrich",
      label: "Enrichment",
      subLabel: "Apollo API",
      x: 280,
      y: 70,
      color: "purple",
      delay: 0.4,
      specs: { type: "Python Script", execution: "45ms", status: "Active" },
    },
    {
      id: "score",
      label: "Lead Score",
      subLabel: "ML Model",
      x: 280,
      y: 210,
      color: "purple",
      delay: 0.5,
      specs: { type: "TensorFlow", execution: "89ms", status: "Active" },
    },
    {
      id: "route",
      label: "Router",
      subLabel: "Logic",
      x: 480,
      y: 140,
      color: "purple",
      delay: 0.8,
      specs: { type: "n8n Node", execution: "8ms", status: "Active" },
    },
    {
      id: "crm",
      label: "HubSpot",
      subLabel: "CRM Sync",
      x: 680,
      y: 70,
      color: "green",
      delay: 1.1,
      specs: { type: "API Call", execution: "156ms", status: "Active" },
    },
    {
      id: "slack",
      label: "Slack",
      subLabel: "Alert",
      x: 680,
      y: 210,
      color: "green",
      delay: 1.2,
      specs: { type: "Webhook", execution: "34ms", status: "Active" },
    },
  ],
  edges: [
    { from: "source", to: "enrich", delay: 0.2 },
    { from: "source", to: "score", delay: 0.25 },
    { from: "enrich", to: "route", delay: 0.6 },
    { from: "score", to: "route", delay: 0.65 },
    { from: "route", to: "crm", delay: 0.95 },
    { from: "route", to: "slack", delay: 1.0 },
  ],
};

// Diagram 2: AI Sales Agent
const aiAgentConfig: DiagramConfig = {
  id: "ai-agent",
  name: "AI Sales Agent",
  filename: "ai-agent.flow",
  nodes: [
    {
      id: "inbound",
      label: "Inbound",
      subLabel: "Chat/Email",
      x: 80,
      y: 140,
      color: "blue",
      delay: 0,
      specs: { type: "Multi-Channel", execution: "8ms", status: "Active" },
    },
    {
      id: "classify",
      label: "Intent",
      subLabel: "Classifier",
      x: 280,
      y: 140,
      color: "purple",
      delay: 0.4,
      specs: { type: "Claude API", execution: "120ms", status: "Active" },
    },
    {
      id: "respond",
      label: "AI Response",
      subLabel: "Generation",
      x: 480,
      y: 70,
      color: "purple",
      delay: 0.7,
      specs: { type: "RAG Pipeline", execution: "350ms", status: "Active" },
    },
    {
      id: "escalate",
      label: "Escalation",
      subLabel: "Rules",
      x: 480,
      y: 210,
      color: "purple",
      delay: 0.8,
      specs: { type: "Logic Engine", execution: "15ms", status: "Active" },
    },
    {
      id: "output",
      label: "Reply",
      subLabel: "Auto-Send",
      x: 680,
      y: 70,
      color: "green",
      delay: 1.0,
      specs: { type: "Email/Chat", execution: "45ms", status: "Active" },
    },
    {
      id: "handoff",
      label: "Human",
      subLabel: "Handoff",
      x: 680,
      y: 210,
      color: "green",
      delay: 1.1,
      specs: { type: "Slack Alert", execution: "28ms", status: "Active" },
    },
  ],
  edges: [
    { from: "inbound", to: "classify", delay: 0.2 },
    { from: "classify", to: "respond", delay: 0.5 },
    { from: "classify", to: "escalate", delay: 0.55 },
    { from: "respond", to: "output", delay: 0.85 },
    { from: "escalate", to: "handoff", delay: 0.95 },
  ],
};

// Diagram 3: Data Sync Pipeline
const dataSyncConfig: DiagramConfig = {
  id: "data-sync",
  name: "Data Sync",
  filename: "data-sync.flow",
  nodes: [
    {
      id: "sources",
      label: "Sources",
      subLabel: "Multi-System",
      x: 80,
      y: 140,
      color: "blue",
      delay: 0,
      specs: { type: "API Connectors", execution: "85ms", status: "Active" },
    },
    {
      id: "extract",
      label: "Extract",
      subLabel: "ETL Layer",
      x: 280,
      y: 140,
      color: "purple",
      delay: 0.4,
      specs: { type: "Python/SQL", execution: "220ms", status: "Active" },
    },
    {
      id: "transform",
      label: "Transform",
      subLabel: "Normalize",
      x: 480,
      y: 70,
      color: "purple",
      delay: 0.7,
      specs: { type: "dbt Models", execution: "180ms", status: "Active" },
    },
    {
      id: "validate",
      label: "Validate",
      subLabel: "Quality Check",
      x: 480,
      y: 210,
      color: "purple",
      delay: 0.8,
      specs: { type: "Great Expect.", execution: "95ms", status: "Active" },
    },
    {
      id: "hubspot",
      label: "HubSpot",
      subLabel: "Sync",
      x: 680,
      y: 70,
      color: "green",
      delay: 1.0,
      specs: { type: "Bulk API", execution: "340ms", status: "Active" },
    },
    {
      id: "salesforce",
      label: "Salesforce",
      subLabel: "Sync",
      x: 680,
      y: 210,
      color: "green",
      delay: 1.1,
      specs: { type: "Bulk API", execution: "410ms", status: "Active" },
    },
  ],
  edges: [
    { from: "sources", to: "extract", delay: 0.2 },
    { from: "extract", to: "transform", delay: 0.5 },
    { from: "extract", to: "validate", delay: 0.55 },
    { from: "transform", to: "hubspot", delay: 0.85 },
    { from: "validate", to: "salesforce", delay: 0.95 },
  ],
};

// Diagram 4: Deal Intelligence
const dealIntelConfig: DiagramConfig = {
  id: "deal-intel",
  name: "Deal Intelligence",
  filename: "deal-intel.flow",
  nodes: [
    {
      id: "deal",
      label: "Deal Update",
      subLabel: "CRM Event",
      x: 80,
      y: 140,
      color: "blue",
      delay: 0,
      specs: { type: "Webhook", execution: "10ms", status: "Active" },
    },
    {
      id: "analyze",
      label: "Analysis",
      subLabel: "Revenue AI",
      x: 280,
      y: 140,
      color: "purple",
      delay: 0.4,
      specs: { type: "ML Pipeline", execution: "280ms", status: "Active" },
    },
    {
      id: "forecast",
      label: "Forecast",
      subLabel: "Prediction",
      x: 480,
      y: 70,
      color: "purple",
      delay: 0.7,
      specs: { type: "Time Series", execution: "150ms", status: "Active" },
    },
    {
      id: "risk",
      label: "Risk Score",
      subLabel: "Assessment",
      x: 480,
      y: 210,
      color: "purple",
      delay: 0.8,
      specs: { type: "Classifier", execution: "95ms", status: "Active" },
    },
    {
      id: "dashboard",
      label: "Dashboard",
      subLabel: "Live Update",
      x: 680,
      y: 70,
      color: "green",
      delay: 1.0,
      specs: { type: "Real-time", execution: "25ms", status: "Active" },
    },
    {
      id: "alert",
      label: "Exec Alert",
      subLabel: "Notification",
      x: 680,
      y: 210,
      color: "green",
      delay: 1.1,
      specs: { type: "Slack/Email", execution: "35ms", status: "Active" },
    },
  ],
  edges: [
    { from: "deal", to: "analyze", delay: 0.2 },
    { from: "analyze", to: "forecast", delay: 0.5 },
    { from: "analyze", to: "risk", delay: 0.55 },
    { from: "forecast", to: "dashboard", delay: 0.85 },
    { from: "risk", to: "alert", delay: 0.95 },
  ],
};

const diagramConfigs: DiagramConfig[] = [
  leadRoutingConfig,
  aiAgentConfig,
  dataSyncConfig,
  dealIntelConfig,
];

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

interface DiagramContentProps {
  config: DiagramConfig;
  isInView: boolean;
}

function DiagramContent({ config, isInView }: DiagramContentProps) {
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
            <NodeTooltip node={node} isHovered={isHovered} />
          </motion.g>
        );
      })}
    </svg>
  );
}

export function HeroDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [activeIndex, setActiveIndex] = useState(0);

  const activeConfig = diagramConfigs[activeIndex];

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Diagram selector tabs */}
      <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
        {diagramConfigs.map((config, index) => (
          <button
            type="button"
            key={config.id}
            onClick={() => setActiveIndex(index)}
            className={`px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap transition-all cursor-default ${
              activeIndex === index
                ? "bg-terminal-green/20 text-terminal-green border border-terminal-green/30"
                : "text-steel-grey hover:text-off-white hover:bg-surface/50 border border-transparent"
            }`}
          >
            {config.name}
          </button>
        ))}
      </div>

      {/* Diagram container */}
      <div className="relative h-[320px] sm:h-[380px] md:h-[420px] lg:h-[450px]">
        {/* Blueprint grid background */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern
                id="heroBlueprintGrid"
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
            <rect width="100%" height="100%" fill="url(#heroBlueprintGrid)" />
          </svg>
        </div>

        {/* Animated diagram content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeConfig.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <DiagramContent config={activeConfig} isInView={isInView} />
          </motion.div>
        </AnimatePresence>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-2 left-0 right-0 flex justify-center gap-4 sm:gap-6 text-xs font-mono text-steel-grey"
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

        {/* System status indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute top-2 right-2 flex items-center gap-2 font-mono text-[11px] text-steel-grey"
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-terminal-green"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          SYSTEM_ACTIVE
        </motion.div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {diagramConfigs.map((config, index) => (
          <button
            type="button"
            key={config.id}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-200 rounded-full cursor-default ${
              activeIndex === index
                ? "w-6 h-2 bg-terminal-green"
                : "w-2 h-2 bg-surface-border hover:bg-steel-grey"
            }`}
            aria-label={`View ${config.name} diagram`}
          />
        ))}
      </div>
    </div>
  );
}

export { diagramConfigs };
export type { DiagramConfig };
