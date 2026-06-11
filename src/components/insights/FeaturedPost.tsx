import Link from "next/link";
import { PostMeta, categoryLabels } from "@/lib/blog/types";
import { formatDate } from "./format";

interface FeaturedPostProps {
  post: PostMeta;
}

/** Lead article on the insights index. One large asymmetric card. */
export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group block rounded-lg border border-line p-8 transition-colors duration-300 hover:border-line-strong hover:bg-ink-raised lg:p-10"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h2 className="text-2xl font-semibold tracking-tight text-text sm:text-3xl">
            {post.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            {post.description}
          </p>
          <span className="mt-6 inline-block text-sm font-medium text-text transition-colors duration-200 group-hover:text-accent">
            Read the article
          </span>
        </div>
        <div className="flex flex-row flex-wrap gap-x-8 gap-y-3 lg:col-span-4 lg:flex-col lg:border-l lg:border-line lg:pl-8">
          <span className="font-mono text-xs text-text-muted">
            {formatDate(post.date)}
          </span>
          <span className="font-mono text-xs text-text-muted">
            {post.readingTime.text}
          </span>
          <span className="text-sm text-text">
            {categoryLabels[post.category]}
          </span>
        </div>
      </div>
    </Link>
  );
}
