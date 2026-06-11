import Link from "next/link";
import { PostMeta } from "@/lib/blog/types";
import { formatDate } from "./format";

interface PostRowProps {
  post: PostMeta;
}

/** Editorial list row on the insights index. */
export function PostRow({ post }: PostRowProps) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group grid grid-cols-1 gap-2 border-t border-line py-8 md:grid-cols-12 md:gap-6"
    >
      <div className="flex gap-4 md:col-span-3 md:flex-col md:gap-1 md:pt-1">
        <span className="font-mono text-xs text-text-muted">
          {formatDate(post.date)}
        </span>
        <span className="font-mono text-xs text-text-muted">
          {post.readingTime.text}
        </span>
      </div>
      <div className="md:col-span-9">
        <h3 className="text-lg font-semibold tracking-tight text-text transition-colors duration-200 group-hover:text-accent">
          {post.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">
          {post.description}
        </p>
      </div>
    </Link>
  );
}
