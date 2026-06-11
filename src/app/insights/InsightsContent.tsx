"use client";

import { useState, ReactNode } from "react";
import { PostMeta, BlogCategory, categoryLabels } from "@/lib/blog/types";
import { Reveal } from "@/components/home";
import { FeaturedPost, PostRow } from "@/components/insights";

interface InsightsContentProps {
  posts: PostMeta[];
  categories: { category: BlogCategory; count: number }[];
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
        active
          ? "border-line-strong bg-ink-raised text-text"
          : "border-line text-text-muted hover:border-line-strong hover:text-text"
      }`}
    >
      {children}
    </button>
  );
}

export function InsightsContent({ posts, categories }: InsightsContentProps) {
  const [selected, setSelected] = useState<BlogCategory | null>(null);

  const filtered = selected
    ? posts.filter((post) => post.category === selected)
    : posts;

  // Unfiltered view leads with one featured article; filtered views are a flat list.
  const [featured, ...rest] = filtered;
  const showFeatured = selected === null && Boolean(featured);
  const listPosts = showFeatured ? rest : filtered;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2">
          <FilterButton active={selected === null} onClick={() => setSelected(null)}>
            All
          </FilterButton>
          {categories.map(({ category, count }) => (
            <FilterButton
              key={category}
              active={selected === category}
              onClick={() => setSelected(category)}
            >
              {categoryLabels[category]}{" "}
              <span className="font-mono text-xs">{count}</span>
            </FilterButton>
          ))}
        </div>

        {showFeatured && (
          <Reveal className="mt-10">
            <FeaturedPost post={featured} />
          </Reveal>
        )}

        {listPosts.length > 0 && (
          <div className={`border-b border-line ${showFeatured ? "mt-12" : "mt-10"}`}>
            {listPosts.map((post, i) => (
              <Reveal key={post.slug} delay={Math.min(i * 0.05, 0.3)}>
                <PostRow post={post} />
              </Reveal>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <p className="mt-12 text-sm text-text-muted">
            No articles in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
