import { CodeBlock } from "@/components/blog/CodeBlock";
import { ComponentPropsWithoutRef } from "react";

// Custom pre component that wraps code in our CodeBlock
function Pre({
  children,
  ...props
}: ComponentPropsWithoutRef<"pre"> & {
  "data-language"?: string;
  "data-theme"?: string;
}) {
  const language = props["data-language"] || "";

  // Extract filename from raw attribute if present (set by rehype-pretty-code)
  const rawMeta = (props as Record<string, unknown>)["raw"] as string | undefined;
  const filenameMatch = rawMeta?.match(/filename="([^"]+)"/);
  const filename = filenameMatch?.[1];

  return (
    <CodeBlock language={language} filename={filename}>
      {children}
    </CodeBlock>
  );
}

// Custom code component for inline code (not in a pre block)
function Code({
  children,
  ...props
}: ComponentPropsWithoutRef<"code">) {
  // Check if this is a code block inside pre (has data-language)
  // If so, just render the code element normally (CodeBlock handles the wrapper)
  const hasLanguage = "data-language" in props;

  if (hasLanguage) {
    return <code {...props}>{children}</code>;
  }

  // Inline code styling
  return (
    <code
      className="font-mono text-terminal-green bg-surface px-1.5 py-0.5 rounded text-sm"
      {...props}
    >
      {children}
    </code>
  );
}

export const mdxComponents = {
  pre: Pre,
  code: Code,
};
