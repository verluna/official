"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Folder, FolderOpen, File, ChevronRight, Filter, X } from "lucide-react";

interface FilterTag {
  label: string;
  count: number;
  variant?: "green" | "purple" | "blue";
}

interface FilterBarProps {
  tags: FilterTag[];
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
  totalCount: number;
  filteredCount: number;
  className?: string;
}

const variantColors = {
  green: "text-terminal-green",
  purple: "text-electric-purple",
  blue: "text-signal-blue",
};

export function FilterBar({
  tags,
  selectedTag,
  onSelectTag,
  totalCount,
  filteredCount,
  className,
}: FilterBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "rounded-lg border border-surface-border bg-surface/50 overflow-hidden",
        className
      )}
    >
      {/* Terminal-style header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-surface-border bg-surface-elevated/50">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <span className="ml-2 font-mono text-xs text-steel-grey">
          repository/filters
        </span>
        <div className="ml-auto flex items-center gap-2">
          <Filter className="w-3 h-3 text-steel-grey" />
          <span className="font-mono text-xs text-steel-grey">
            {filteredCount}/{totalCount}
          </span>
        </div>
      </div>

      {/* File tree style filters */}
      <div className="p-3">
        {/* All items folder */}
        <FilterItem
          icon={selectedTag === null ? <FolderOpen className="w-4 h-4" /> : <Folder className="w-4 h-4" />}
          label="all_projects"
          count={totalCount}
          isActive={selectedTag === null}
          onClick={() => onSelectTag(null)}
        />

        {/* Divider */}
        <div className="ml-4 pl-4 border-l border-surface-border mt-2">
          <div className="font-mono text-[10px] text-steel-grey/60 uppercase tracking-wider mb-2">
            tags/
          </div>

          {/* Tag filters */}
          <div className="space-y-0.5">
            {tags.map((tag) => (
              <FilterItem
                key={tag.label}
                icon={<File className="w-3.5 h-3.5" />}
                label={tag.label.toLowerCase().replace(/\s+/g, "_")}
                count={tag.count}
                isActive={selectedTag === tag.label}
                onClick={() => onSelectTag(selectedTag === tag.label ? null : tag.label)}
                variant={tag.variant}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Active filter indicator */}
      <AnimatePresence>
        {selectedTag && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-surface-border"
          >
            <div className="px-4 py-2 flex items-center gap-2">
              <span className="font-mono text-xs text-steel-grey">
                <span className="text-terminal-green">$</span> filter --active:
              </span>
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-terminal-green/10 border border-terminal-green/30">
                <span className="font-mono text-xs text-terminal-green">
                  {selectedTag}
                </span>
                <button
                  onClick={() => onSelectTag(null)}
                  className="hover:text-white transition-colors"
                >
                  <X className="w-3 h-3 text-terminal-green" />
                </button>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FilterItem({
  icon,
  label,
  count,
  isActive,
  onClick,
  variant = "green",
}: {
  icon: React.ReactNode;
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
  variant?: "green" | "purple" | "blue";
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ x: 2 }}
      className={cn(
        "w-full flex items-center gap-2 px-2 py-1.5 rounded transition-colors text-left",
        isActive
          ? "bg-terminal-green/10 text-terminal-green"
          : "text-steel-grey hover:bg-surface-elevated hover:text-off-white"
      )}
    >
      <ChevronRight
        className={cn(
          "w-3 h-3 transition-transform",
          isActive && "rotate-90"
        )}
      />
      <span className={cn(isActive ? variantColors[variant] : "text-steel-grey")}>
        {icon}
      </span>
      <span className="font-mono text-xs flex-grow">{label}</span>
      <span
        className={cn(
          "font-mono text-[10px] px-1.5 py-0.5 rounded",
          isActive
            ? "bg-terminal-green/20 text-terminal-green"
            : "bg-surface-border text-steel-grey"
        )}
      >
        {count}
      </span>
    </motion.button>
  );
}

// Simple inline filter variant
export function InlineFilterBar({
  tags,
  selectedTag,
  onSelectTag,
  className,
}: {
  tags: string[];
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn(
        "flex flex-wrap items-center gap-4 p-4 rounded-lg border border-surface-border bg-surface/30 font-mono text-sm",
        className
      )}
    >
      <span className="text-steel-grey">
        <span className="text-terminal-green">$</span> filter --tag
      </span>
      <div className="flex flex-wrap gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelectTag(null)}
          className={cn(
            "px-3 py-1 rounded border transition-all duration-200",
            selectedTag === null
              ? "border-terminal-green bg-terminal-green/10 text-terminal-green shadow-[0_0_10px_rgba(0,255,148,0.2)]"
              : "border-surface-border text-steel-grey hover:border-steel-grey"
          )}
        >
          all
        </motion.button>
        {tags.map((tag) => (
          <motion.button
            key={tag}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectTag(selectedTag === tag ? null : tag)}
            className={cn(
              "px-3 py-1 rounded border transition-all duration-200",
              selectedTag === tag
                ? "border-terminal-green bg-terminal-green/10 text-terminal-green shadow-[0_0_10px_rgba(0,255,148,0.2)]"
                : "border-surface-border text-steel-grey hover:border-steel-grey"
            )}
          >
            [{tag}]
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
