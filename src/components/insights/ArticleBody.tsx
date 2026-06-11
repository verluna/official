import { ReactNode } from "react";

interface ArticleBodyProps {
  children: ReactNode;
}

/**
 * Reading column for compiled MDX. Element-level typography lives in
 * src/lib/blog/mdx-components.tsx; this wrapper sets the measure and
 * handles selectors MDX components cannot reach (heading anchors from
 * rehype-autolink-headings, shiki line highlights).
 */
export function ArticleBody({ children }: ArticleBodyProps) {
  const overrides = [
    // rehype-autolink-headings wraps heading text in anchors; keep them quiet
    "[&_h2_a]:text-inherit [&_h2_a]:no-underline",
    "[&_h3_a]:text-inherit [&_h3_a]:no-underline",
    "[&_h4_a]:text-inherit [&_h4_a]:no-underline",
    // shiki highlighted lines and words, mapped to the ink palette
    "[&_.line--highlighted]:bg-accent-soft",
    "[&_.word--highlighted]:bg-accent-soft [&_.word--highlighted]:rounded-sm [&_.word--highlighted]:px-1",
  ].join(" ");

  return (
    <div className={`mx-auto max-w-prose text-text-muted ${overrides}`}>
      {children}
    </div>
  );
}
