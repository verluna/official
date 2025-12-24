"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  children: ReactNode;
  className?: string;
  filename?: string;
  language?: string;
}

export function CodeBlock({
  children,
  className = "",
  filename,
  language,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleCopy = async () => {
    if (!preRef.current) return;

    const code = preRef.current.textContent || "";
    await navigator.clipboard.writeText(code);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  // Display filename if provided, otherwise show language
  const headerText = filename || (language && language !== "plaintext" ? language : null);

  return (
    <div className="group relative my-6 rounded-xl border border-surface-border bg-charcoal overflow-hidden">
      {/* Terminal header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-surface-border bg-surface-elevated/50">
        <div className="flex items-center gap-3">
          {/* Traffic light dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          {/* Filename or language */}
          {headerText && (
            <span className="font-mono text-xs text-steel-grey">
              {headerText}
            </span>
          )}
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded text-xs font-mono text-steel-grey
                     opacity-0 group-hover:opacity-100 transition-opacity
                     hover:text-terminal-green hover:bg-surface/50"
          aria-label={copied ? "Copied!" : "Copy code"}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <pre
        ref={preRef}
        className={`p-4 overflow-x-auto text-sm font-mono ${className}`}
      >
        {children}
      </pre>
    </div>
  );
}
