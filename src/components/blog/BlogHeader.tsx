"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Post, categoryLabels, categoryColors } from "@/lib/blog/types";
import { getAuthor } from "@/data/authors";
import { Badge } from "@/components/ui";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";

interface BlogHeaderProps {
  post: Post;
}

export function BlogHeader({ post }: BlogHeaderProps) {
  const author = getAuthor(post.author);
  const categoryColor = categoryColors[post.category];

  return (
    <header className="pt-32 pb-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-steel-grey hover:text-terminal-green transition-colors font-mono"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>cd ../insights</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-terminal-green font-mono">&gt;</span>
            <span className="text-sm font-mono text-steel-grey uppercase tracking-wider">
              cat insights/{post.slug}.mdx
            </span>
            <motion.span
              className="inline-block w-2 h-4 bg-terminal-green/80"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </div>

          {/* Category */}
          <Badge variant={categoryColor} className="mb-4">
            {categoryLabels[post.category]}
          </Badge>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tighter mb-6">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-steel-grey leading-relaxed mb-8">
            {post.description}
          </p>

          {/* Meta bar - terminal style */}
          <div className="flex flex-wrap items-center gap-6 py-4 px-4 rounded-lg border border-surface-border bg-surface/50 font-mono text-sm">
            <div className="flex items-center gap-2 text-steel-grey">
              <Calendar className="w-4 h-4 text-terminal-green" />
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2 text-steel-grey">
              <Clock className="w-4 h-4 text-terminal-green" />
              <span>{post.readingTime.text}</span>
            </div>
            {author && (
              <div className="flex items-center gap-2 text-steel-grey">
                <User className="w-4 h-4 text-terminal-green" />
                <span>{author.name}</span>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 font-mono text-xs bg-surface border border-surface-border text-steel-grey rounded hover:border-terminal-green/50 transition-colors cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
}
