"use client";

import { motion } from "framer-motion";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

export function CodeBlock({
  code,
  language = "python",
  filename,
  className = "",
}: CodeBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-lg border border-surface-border bg-charcoal overflow-hidden ${className}`}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-surface-border bg-surface/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          {filename && (
            <span className="ml-3 text-sm font-mono text-steel-grey">
              {filename}
            </span>
          )}
        </div>
        <span className="text-xs font-mono text-steel-grey uppercase">
          {language}
        </span>
      </div>

      {/* Code content */}
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono text-terminal-green leading-relaxed">
          {code}
        </code>
      </pre>
    </motion.div>
  );
}
