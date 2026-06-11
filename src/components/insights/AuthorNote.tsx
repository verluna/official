import { getAuthor } from "@/data/authors";

interface AuthorNoteProps {
  authorId: string;
}

/** Plain author block under an article. Name, role, bio, one link. */
export function AuthorNote({ authorId }: AuthorNoteProps) {
  const author = getAuthor(authorId);
  if (!author) return null;

  return (
    <div className="rounded-lg border border-line bg-ink-raised p-6 sm:p-8">
      <p className="text-base font-semibold tracking-tight text-text">
        {author.name}
      </p>
      <p className="mt-1 text-sm text-text-muted">{author.role}</p>
      {author.bio && (
        <p className="mt-3 text-sm leading-relaxed text-text-muted">
          {author.bio}
        </p>
      )}
      {author.social?.linkedin && (
        <a
          href={author.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium text-text transition-colors duration-200 hover:text-accent"
        >
          LinkedIn
        </a>
      )}
    </div>
  );
}
