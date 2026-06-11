import Link from "next/link";
import { Post, categoryLabels } from "@/lib/blog/types";
import { getAuthor } from "@/data/authors";
import { formatDate } from "./format";

interface ArticleHeaderProps {
  post: Post;
}

/** Article page header: back link, title, summary, meta line. */
export function ArticleHeader({ post }: ArticleHeaderProps) {
  const author = getAuthor(post.author);

  return (
    <header className="pt-32 pb-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/insights"
          className="text-sm text-text-muted transition-colors duration-200 hover:text-text"
        >
          Back to insights
        </Link>

        <h1 className="mt-8 text-4xl font-semibold tracking-tighter text-text sm:text-5xl">
          {post.title}
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-text-muted">
          {post.description}
        </p>

        <div className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-line pt-6">
          {author && <span className="text-sm text-text">{author.name}</span>}
          <span className="font-mono text-xs text-text-muted">
            {formatDate(post.date)}
          </span>
          <span className="font-mono text-xs text-text-muted">
            {post.readingTime.text}
          </span>
          <span className="text-sm text-text-muted">
            {categoryLabels[post.category]}
          </span>
        </div>
      </div>
    </header>
  );
}
