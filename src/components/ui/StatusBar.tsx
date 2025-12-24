"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Activity, Server, Zap, Clock } from "lucide-react";

interface Metric {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ReactNode;
  color: "green" | "purple" | "blue";
  animate?: boolean;
}

const colorStyles = {
  green: "text-terminal-green",
  purple: "text-electric-purple",
  blue: "text-signal-blue",
};

function AnimatedNumber({
  value,
  duration = 2000,
  suffix = "",
}: {
  value: number;
  duration?: number;
  suffix?: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValue + (value - startValue) * easeOut);

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration, isInView]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

function CountUpNumber({
  baseValue,
  increment = 1,
  interval = 3000,
}: {
  baseValue: number;
  increment?: number;
  interval?: number;
}) {
  const [value, setValue] = useState(baseValue);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prev) => prev + increment);
    }, interval);

    return () => clearInterval(timer);
  }, [increment, interval]);

  return <span>{value.toLocaleString()}</span>;
}

export function StatusBar({ className }: { className?: string }) {
  const metrics: Metric[] = [
    {
      label: "Systems Online",
      value: 14,
      icon: <Server className="w-3 h-3" />,
      color: "green",
    },
    {
      label: "Leads Processed",
      value: 1402991,
      icon: <Activity className="w-3 h-3" />,
      color: "purple",
      animate: true,
    },
    {
      label: "Uptime",
      value: 99.9,
      suffix: "%",
      icon: <Clock className="w-3 h-3" />,
      color: "green",
    },
    {
      label: "Avg Response",
      value: 45,
      suffix: "ms",
      icon: <Zap className="w-3 h-3" />,
      color: "blue",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40",
        "bg-charcoal/90 backdrop-blur-md border-t border-surface-border",
        "py-2 px-4",
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Status indicator */}
        <div className="flex items-center gap-2">
          <motion.div
            className="w-2 h-2 rounded-full bg-terminal-green"
            animate={{
              opacity: [1, 0.4, 1],
              boxShadow: [
                "0 0 0 0 rgba(0, 255, 148, 0.4)",
                "0 0 0 4px rgba(0, 255, 148, 0)",
                "0 0 0 0 rgba(0, 255, 148, 0.4)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="font-mono text-xs text-terminal-green">
            OPERATIONAL
          </span>
        </div>

        {/* Metrics */}
        <div className="flex items-center gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="flex items-center gap-2"
            >
              <span className={cn("opacity-70", colorStyles[metric.color])}>
                {metric.icon}
              </span>
              <div className="font-mono text-xs">
                <span className="text-steel-grey mr-1.5 hidden sm:inline">
                  {metric.label}:
                </span>
                <span className={colorStyles[metric.color]}>
                  {metric.animate ? (
                    <CountUpNumber baseValue={metric.value} />
                  ) : (
                    <AnimatedNumber value={metric.value} suffix={metric.suffix} />
                  )}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timestamp */}
        <div className="hidden md:flex items-center gap-2 font-mono text-xs text-steel-grey">
          <LiveClock />
        </div>
      </div>
    </motion.div>
  );
}

function LiveClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="tabular-nums">
      {time} <span className="text-terminal-green">UTC</span>
    </span>
  );
}

// Compact version for header
export function StatusIndicator({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <motion.div
        className="w-1.5 h-1.5 rounded-full bg-terminal-green"
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <span className="font-mono text-[10px] text-steel-grey uppercase tracking-wider">
        All Systems Operational
      </span>
    </div>
  );
}
