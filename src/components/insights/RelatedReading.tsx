import Link from "next/link";
import { PostMeta } from "@/lib/blog/types";

interface RelatedReadingProps {
  posts: PostMeta[];
}

/** Stacked list of related articles under an article. */
export function RelatedReading({ posts }: RelatedReadingProps) {
  if (posts.length === 0) return null;

  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tighter text-text">
        Related reading
      </h2>
      <div className="mt-6 border-b border-line">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/insights/${post.slug}`}
            className="group flex flex-col gap-1 border-t border-line py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <span className="text-base font-medium tracking-tight text-text transition-colors duration-200 group-hover:text-accent">
              {post.title}
            </span>
            <span className="shrink-0 font-mono text-xs text-text-muted">
              {post.readingTime.text}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
