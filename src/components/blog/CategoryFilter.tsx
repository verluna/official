"use client";

import { motion } from "framer-motion";
import { BlogCategory, categoryLabels } from "@/lib/blog/types";
import { Folder, FileText, Tag } from "lucide-react";

interface CategoryFilterProps {
  categories: { category: BlogCategory; count: number }[];
  tags: { tag: string; count: number }[];
  selectedCategory: BlogCategory | null;
  selectedTag: string | null;
  onSelectCategory: (category: BlogCategory | null) => void;
  onSelectTag: (tag: string | null) => void;
  totalCount: number;
  className?: string;
}

export function CategoryFilter({
  categories,
  tags,
  selectedCategory,
  selectedTag,
  onSelectCategory,
  onSelectTag,
  totalCount,
  className = "",
}: CategoryFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`
        rounded-xl border border-surface-border bg-surface/50 overflow-hidden
        ${className}
      `}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-surface-border bg-surface-elevated/50">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <span className="ml-2 font-mono text-xs text-steel-grey">
          insights/filters
        </span>
      </div>

      <div className="p-3 space-y-4">
        {/* All posts */}
        <button
          onClick={() => {
            onSelectCategory(null);
            onSelectTag(null);
          }}
          className={`
            w-full flex items-center gap-2 px-2 py-1.5 rounded transition-colors text-left
            ${
              !selectedCategory && !selectedTag
                ? "bg-terminal-green/10 text-terminal-green"
                : "text-steel-grey hover:bg-surface-elevated hover:text-off-white"
            }
          `}
        >
          <Folder className="w-4 h-4" />
          <span className="font-mono text-xs">all_insights</span>
          <span className="ml-auto font-mono text-[10px] px-1.5 py-0.5 rounded bg-surface-border">
            {totalCount}
          </span>
        </button>

        {/* Categories */}
        {categories.length > 0 && (
          <div>
            <div className="font-mono text-[10px] text-steel-grey/60 uppercase tracking-wider mb-2 px-2">
              categories/
            </div>
            <div className="space-y-0.5">
              {categories.map(({ category, count }) => (
                <button
                  key={category}
                  onClick={() => {
                    onSelectCategory(
                      selectedCategory === category ? null : category
                    );
                    onSelectTag(null);
                  }}
                  className={`
                    w-full flex items-center gap-2 px-2 py-1.5 rounded transition-colors text-left
                    ${
                      selectedCategory === category
                        ? "bg-terminal-green/10 text-terminal-green"
                        : "text-steel-grey hover:bg-surface-elevated hover:text-off-white"
                    }
                  `}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span className="font-mono text-xs">
                    {categoryLabels[category]}
                  </span>
                  <span className="ml-auto font-mono text-[10px] px-1.5 py-0.5 rounded bg-surface-border">
                    {count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div>
            <div className="font-mono text-[10px] text-steel-grey/60 uppercase tracking-wider mb-2 px-2">
              tags/
            </div>
            <div className="flex flex-wrap gap-1.5 px-2">
              {tags.slice(0, 10).map(({ tag, count }) => (
                <button
                  key={tag}
                  onClick={() => {
                    onSelectTag(selectedTag === tag ? null : tag);
                    onSelectCategory(null);
                  }}
                  className={`
                    inline-flex items-center gap-1 px-2 py-1 rounded font-mono text-[10px] transition-colors
                    ${
                      selectedTag === tag
                        ? "bg-terminal-green/10 text-terminal-green border border-terminal-green/30"
                        : "bg-surface-border/50 text-steel-grey hover:text-off-white"
                    }
                  `}
                >
                  <Tag className="w-2.5 h-2.5" />
                  {tag}
                  <span className="opacity-60">({count})</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
