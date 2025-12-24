"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PostMeta, categoryColors, categoryLabels } from "@/lib/blog/types";
import { getAuthor } from "@/data/authors";
import { Badge } from "@/components/ui";
import { Calendar, Clock, User, Star } from "lucide-react";

interface BlogCardProps {
  post: PostMeta;
  featured?: boolean;
  delay?: number;
}

export function BlogCard({ post, featured, delay = 0 }: BlogCardProps) {
  const author = getAuthor(post.author);
  const categoryColor = categoryColors[post.category] || "green";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      data-cursor="hover"
      data-cursor-color={categoryColor}
      className={`
        group relative overflow-hidden rounded-xl
        bg-surface border border-surface-border
        transition-all duration-300 ease-out
        hover:border-steel-grey/50
        ${featured ? "md:col-span-2" : ""}
      `}
    >
      <Link href={`/insights/${post.slug}`} className="block h-full">
        {/* Terminal-style header */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-surface-border bg-surface-elevated/50">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <span className="ml-2 font-mono text-xs text-steel-grey truncate">
            insights/{post.slug}.mdx
          </span>
          {post.featured && (
            <Star className="ml-auto w-3 h-3 text-warning-amber fill-warning-amber" />
          )}
        </div>

        {/* Content */}
        <div className={`p-5 ${featured ? "md:p-8" : ""}`}>
          {/* Category badge */}
          <div className="flex items-center gap-2 mb-3">
            <Badge variant={categoryColor}>
              {categoryLabels[post.category]}
            </Badge>
          </div>

          {/* Title */}
          <h3
            className={`
              font-semibold tracking-tight text-off-white
              group-hover:text-terminal-green transition-colors
              ${featured ? "text-2xl md:text-3xl" : "text-lg"}
            `}
          >
            {post.title}
          </h3>

          {/* Description */}
          <p
            className={`
              mt-2 text-steel-grey line-clamp-2
              ${featured ? "text-base md:line-clamp-3" : "text-sm"}
            `}
          >
            {post.description}
          </p>

          {/* Meta info - terminal style */}
          <div className="mt-4 pt-4 border-t border-surface-border/50">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-steel-grey">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3 h-3" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                {post.readingTime.text}
              </span>
              {author && (
                <span className="flex items-center gap-1.5">
                  <User className="w-3 h-3" />
                  {author.name}
                </span>
              )}
            </div>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-1.5 py-0.5 font-mono text-[10px] bg-surface-border/50 text-steel-grey rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  );
}
