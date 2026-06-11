import { ComponentPropsWithoutRef } from "react";
import { CodeBlock } from "@/components/insights/CodeBlock";

/*
 * Article typography for compiled MDX (v2 design language).
 * The @tailwindcss/typography plugin is not installed, so every element
 * is styled here explicitly. The reading column itself (max-w-prose) is
 * set by ArticleBody in src/components/insights.
 */

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
function Code({ children, ...props }: ComponentPropsWithoutRef<"code">) {
  // Code blocks inside pre carry data-language; CodeBlock owns their wrapper.
  const hasLanguage = "data-language" in props;

  if (hasLanguage) {
    return <code {...props}>{children}</code>;
  }

  return (
    <code
      className="rounded-sm border border-line bg-ink-raised px-1.5 py-0.5 font-mono text-sm text-text"
      {...props}
    >
      {children}
    </code>
  );
}

function Table(props: ComponentPropsWithoutRef<"table">) {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="w-full text-sm" {...props} />
    </div>
  );
}

export const mdxComponents = {
  pre: Pre,
  code: Code,
  table: Table,

  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mt-16 mb-6 text-2xl font-semibold tracking-tight text-text first:mt-0 sm:text-3xl"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="mt-12 mb-4 text-xl font-semibold tracking-tight text-text"
      {...props}
    />
  ),
  h4: (props: ComponentPropsWithoutRef<"h4">) => (
    <h4 className="mt-10 mb-3 text-lg font-semibold text-text" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="my-5 text-base leading-[1.75] text-text-muted" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="text-text underline decoration-line-strong underline-offset-4 transition-colors duration-200 hover:decoration-accent"
      {...props}
    />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-text" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="my-6 list-disc space-y-2 pl-6 marker:text-text-faint"
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="my-6 list-decimal space-y-2 pl-6 marker:text-text-muted"
      {...props}
    />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-[1.75] text-text-muted" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="my-6 border-l-2 border-line-strong pl-5 text-text"
      {...props}
    />
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th
      className="border-b border-line-strong py-2 pr-4 text-left font-semibold text-text"
      {...props}
    />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td className="border-b border-line py-2.5 pr-4 text-text-muted" {...props} />
  ),
  hr: (props: ComponentPropsWithoutRef<"hr">) => (
    <hr className="my-12 border-line" {...props} />
  ),
  img: (props: ComponentPropsWithoutRef<"img">) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="my-8 rounded-lg border border-line" alt="" {...props} />
  ),
};
