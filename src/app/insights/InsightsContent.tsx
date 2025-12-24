"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PostMeta, BlogCategory } from "@/lib/blog/types";
import { BlogCard, CategoryFilter } from "@/components/blog";

interface InsightsContentProps {
  initialPosts: PostMeta[];
  categories: { category: BlogCategory; count: number }[];
  tags: { tag: string; count: number }[];
}

export function InsightsContent({
  initialPosts,
  categories,
  tags,
}: InsightsContentProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<BlogCategory | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = initialPosts.filter((post) => {
    if (selectedCategory && post.category !== selectedCategory) return false;
    if (selectedTag && !post.tags.includes(selectedTag)) return false;
    return true;
  });

  const featuredPosts = filteredPosts.filter((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <CategoryFilter
                categories={categories}
                tags={tags}
                selectedCategory={selectedCategory}
                selectedTag={selectedTag}
                onSelectCategory={setSelectedCategory}
                onSelectTag={setSelectedTag}
                totalCount={initialPosts.length}
              />
            </div>
          </aside>

          {/* Posts grid */}
          <div className="flex-grow">
            {/* Results count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 font-mono text-sm text-steel-grey"
            >
              <span className="text-terminal-green">$</span> ls -la insights/ |{" "}
              <span className="text-off-white">{filteredPosts.length}</span>{" "}
              results
            </motion.div>

            {/* Featured posts */}
            {featuredPosts.length > 0 &&
              !selectedCategory &&
              !selectedTag && (
                <div className="mb-12">
                  <h2 className="font-mono text-sm text-steel-grey mb-4">
                    <span className="text-terminal-green">#</span> featured
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {featuredPosts.map((post, i) => (
                      <BlogCard
                        key={post.slug}
                        post={post}
                        featured={i === 0}
                        delay={i * 0.1}
                      />
                    ))}
                  </div>
                </div>
              )}

            {/* All posts grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* When filtered, show all posts; otherwise show only non-featured */}
              {(selectedCategory || selectedTag
                ? filteredPosts
                : regularPosts
              ).map((post, i) => (
                <BlogCard key={post.slug} post={post} delay={i * 0.05} />
              ))}
            </div>

            {/* Empty state */}
            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="font-mono text-steel-grey">
                  <span className="text-terminal-green">$</span> ls insights/
                  <br />
                  <span className="text-yellow-500">
                    No posts found. Check back soon!
                  </span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
