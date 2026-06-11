"use client";

import { useState, useRef, useEffect, ReactNode } from "react";

interface CodeBlockProps {
  children: ReactNode;
  className?: string;
  filename?: string;
  language?: string;
}

/**
 * Code block chrome for MDX articles. Shiki handles token colors;
 * this wrapper supplies the ink surface, border, and copy action.
 */
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
    await navigator.clipboard.writeText(preRef.current.textContent || "");
    setCopied(true);
  };

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const label =
    filename || (language && language !== "plaintext" ? language : null);

  return (
    <div className="my-8 overflow-hidden rounded-lg border border-line bg-ink-raised">
      <div className="flex items-center justify-between border-b border-line px-4 py-2">
        <span className="font-mono text-xs text-text-muted">{label}</span>
        <button
          onClick={handleCopy}
          className="rounded-md px-2 py-1 font-mono text-xs text-text-muted transition-colors duration-200 hover:text-text focus-visible:outline-2 focus-visible:outline-accent"
          aria-label={copied ? "Copied" : "Copy code"}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre
        ref={preRef}
        className={`overflow-x-auto p-4 font-mono text-sm leading-relaxed ${className}`}
      >
        {children}
      </pre>
    </div>
  );
}
