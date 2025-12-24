"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BlogContentProps {
  children: ReactNode;
  className?: string;
}

export function BlogContent({ children, className = "" }: BlogContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`
        prose prose-invert max-w-none

        prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-off-white

        prose-h2:text-3xl sm:prose-h2:text-4xl prose-h2:font-bold
        prose-h2:mt-20 prose-h2:mb-8 prose-h2:pt-8
        prose-h2:border-t prose-h2:border-surface-border
        first:prose-h2:mt-0 first:prose-h2:pt-0 first:prose-h2:border-t-0

        prose-h3:text-xl prose-h3:font-semibold
        prose-h3:mt-14 prose-h3:mb-6 prose-h3:text-off-white

        prose-h4:text-lg prose-h4:font-semibold
        prose-h4:mt-10 prose-h4:mb-4 prose-h4:text-off-white

        prose-p:text-lg prose-p:text-steel-grey
        prose-p:leading-[1.8] prose-p:mb-6

        prose-strong:text-off-white prose-strong:font-semibold

        prose-a:text-terminal-green prose-a:no-underline prose-a:font-medium
        prose-a:transition-all prose-a:duration-200
        hover:prose-a:text-off-white hover:prose-a:underline
        hover:prose-a:decoration-terminal-green hover:prose-a:underline-offset-4

        prose-ul:my-8 prose-ul:space-y-4
        prose-ol:my-8 prose-ol:space-y-4
        prose-li:text-lg prose-li:text-steel-grey prose-li:leading-[1.8] prose-li:pl-2
        prose-li:marker:text-terminal-green prose-li:marker:font-bold
        [&_li>strong]:text-off-white [&_li>strong]:font-semibold
        [&_ul]:mt-4 [&_ol]:mt-4

        prose-blockquote:border-l-4 prose-blockquote:border-terminal-green
        prose-blockquote:bg-surface/50 prose-blockquote:py-4 prose-blockquote:px-6
        prose-blockquote:rounded-r-lg prose-blockquote:not-italic
        prose-blockquote:text-off-white prose-blockquote:font-medium prose-blockquote:my-8

        prose-img:rounded-xl prose-img:border prose-img:border-surface-border prose-img:my-10

        prose-table:border prose-table:border-surface-border prose-table:rounded-lg prose-table:overflow-hidden
        prose-th:bg-surface prose-th:text-off-white prose-th:font-semibold prose-th:py-4 prose-th:px-4 prose-th:text-left prose-th:border-surface-border
        prose-td:py-3 prose-td:px-4 prose-td:border-surface-border prose-td:text-steel-grey

        prose-hr:border-surface-border prose-hr:my-16

        [&_.line--highlighted]:bg-terminal-green/10
        [&_.line--highlighted]:border-l-2
        [&_.line--highlighted]:border-terminal-green
        [&_.word--highlighted]:bg-terminal-green/20
        [&_.word--highlighted]:rounded
        [&_.word--highlighted]:px-1

        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
