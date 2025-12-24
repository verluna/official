"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui";
import { Linkedin, Github, Twitter, User } from "lucide-react";
import type { TeamMember as TeamMemberType } from "@/data/team";

interface TeamMemberProps {
  member: TeamMemberType;
}

export function TeamMember({ member }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-surface-border bg-surface/50 overflow-hidden"
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-surface-border bg-surface-elevated/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <span className="ml-2 text-xs font-mono text-steel-grey">
          team/{member.id}.profile
        </span>
      </div>

      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border border-surface-border">
              {member.avatar ? (
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-terminal-green/10 flex items-center justify-center">
                  <User className="w-16 h-16 text-terminal-green/50" />
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="flex-grow">
            {/* Name & Role */}
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {member.name}
            </h3>
            <p className="text-terminal-green font-mono mt-1">{member.role}</p>

            {/* Social links */}
            {member.social && (
              <div className="mt-3 flex items-center gap-3">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-steel-grey hover:text-terminal-green transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-steel-grey hover:text-terminal-green transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-steel-grey hover:text-terminal-green transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
              </div>
            )}

            {/* Bio */}
            <div className="mt-6 p-4 rounded-lg border border-surface-border bg-charcoal">
              <div className="font-mono text-xs text-steel-grey mb-2">
                <span className="text-terminal-green">$</span> cat bio.txt
              </div>
              <p className="text-steel-grey leading-relaxed">{member.bio}</p>
            </div>
          </div>
        </div>

        {/* Expertise */}
        <div className="mt-8">
          <div className="font-mono text-xs text-steel-grey uppercase tracking-wider mb-3">
            <span className="text-terminal-green">#</span> Expertise
          </div>
          <div className="flex flex-wrap gap-2">
            {member.expertise.map((skill, i) => (
              <Badge
                key={skill}
                variant={
                  i % 3 === 0 ? "green" : i % 3 === 1 ? "purple" : "blue"
                }
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Background as git log */}
        <div className="mt-8">
          <div className="font-mono text-xs text-steel-grey uppercase tracking-wider mb-3">
            <span className="text-terminal-green">#</span> git log --oneline
            career.history
          </div>
          <div className="space-y-2 p-4 rounded-lg border border-surface-border bg-charcoal">
            {member.background.map((exp, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-sm font-mono"
              >
                <span className="text-terminal-green/60 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <span className="text-off-white">{exp.role}</span>
                  <span className="text-steel-grey"> @ {exp.company}</span>
                  {exp.years && (
                    <span className="text-steel-grey/60 ml-2">({exp.years})</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
