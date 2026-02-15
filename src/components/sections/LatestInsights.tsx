"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PostMeta, categoryColors, categoryLabels } from "@/lib/blog/types";
import { Badge } from "@/components/ui";
import { ArrowRight, Calendar, Clock } from "lucide-react";

interface LatestInsightsProps {
  posts: PostMeta[];
}

export function LatestInsights({ posts }: LatestInsightsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-terminal-green font-mono">&gt;</span>
              <span className="text-sm text-steel-grey uppercase tracking-wider">
                Latest Insights
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-off-white">
              From the Engineering Log
            </h2>
          </div>
          <Link
            href="/insights"
            className="hidden sm:flex items-center gap-2 text-sm text-steel-grey hover:text-terminal-green transition-colors"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl bg-surface border border-surface-border hover:border-steel-grey/50 transition-all duration-300"
            >
              <Link href={`/insights/${post.slug}`} className="block p-5">
                <Badge variant={categoryColors[post.category]}>
                  {categoryLabels[post.category]}
                </Badge>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-off-white group-hover:text-terminal-green transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-steel-grey line-clamp-2">
                  {post.description}
                </p>
                <div className="mt-4 pt-3 border-t border-surface-border/50 flex items-center gap-3 text-xs text-steel-grey font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readingTime.text}
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Mobile "View all" link */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-steel-grey hover:text-terminal-green transition-colors"
          >
            View all insights
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
