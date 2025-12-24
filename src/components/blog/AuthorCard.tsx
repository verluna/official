"use client";

import { motion } from "framer-motion";
import { getAuthor } from "@/data/authors";
import { User, Linkedin, Github, Twitter } from "lucide-react";

interface AuthorCardProps {
  authorId: string;
}

export function AuthorCard({ authorId }: AuthorCardProps) {
  const author = getAuthor(authorId);
  if (!author) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-surface-border bg-surface/50 overflow-hidden"
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-surface-border bg-surface-elevated/50">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <User className="w-3 h-3 text-terminal-green ml-2" />
        <span className="font-mono text-xs text-steel-grey">author.json</span>
      </div>

      <div className="p-6">
        <div className="flex items-start gap-4">
          {/* Avatar placeholder */}
          <div className="w-16 h-16 rounded-lg bg-surface border border-surface-border flex items-center justify-center flex-shrink-0">
            <User className="w-8 h-8 text-steel-grey" />
          </div>

          <div className="flex-grow min-w-0">
            <h4 className="font-semibold text-off-white">{author.name}</h4>
            <p className="text-sm text-terminal-green font-mono">
              {author.role}
            </p>
            {author.bio && (
              <p className="mt-2 text-sm text-steel-grey">{author.bio}</p>
            )}

            {/* Social links */}
            {author.social && (
              <div className="mt-3 flex items-center gap-3">
                {author.social.linkedin && (
                  <a
                    href={author.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-steel-grey hover:text-terminal-green transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {author.social.github && (
                  <a
                    href={author.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-steel-grey hover:text-terminal-green transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {author.social.twitter && (
                  <a
                    href={author.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-steel-grey hover:text-terminal-green transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
