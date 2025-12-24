"use client";

import { motion } from "framer-motion";
import { PostMeta } from "@/lib/blog/types";
import { BlogCard } from "./BlogCard";

interface RelatedPostsProps {
  posts: PostMeta[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-terminal-green font-mono">&gt;</span>
          <span className="text-sm font-mono text-steel-grey uppercase tracking-wider">
            Related Posts
          </span>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <BlogCard key={post.slug} post={post} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
