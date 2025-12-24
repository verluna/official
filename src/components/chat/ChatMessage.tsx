'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'group',
        isUser ? 'pl-4' : 'pl-0'
      )}
    >
      {/* Message container */}
      <div
        className={cn(
          'relative',
          !isUser && 'bg-surface/50 rounded-lg border-l-2 border-electric-purple pl-4 pr-3 py-3'
        )}
      >
        {/* Prompt indicator */}
        <div className="flex items-start gap-2">
          <span
            className={cn(
              'font-mono text-sm flex-shrink-0 select-none',
              isUser ? 'text-terminal-green' : 'text-electric-purple'
            )}
          >
            {isUser ? '$' : '>'}
          </span>

          {/* Message content */}
          <div
            className={cn(
              'flex-1 min-w-0',
              isUser ? 'font-mono text-sm text-off-white' : 'text-steel-grey'
            )}
          >
            {isUser ? (
              // User messages: plain text with mono font
              <span className="break-words">{content}</span>
            ) : (
              // Assistant messages: rendered markdown
              <div className="prose-chat">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    // Paragraphs
                    p: ({ children }) => (
                      <p className="mb-3 last:mb-0 leading-relaxed">{children}</p>
                    ),
                    // Headings
                    h1: ({ children }) => (
                      <h3 className="text-off-white font-semibold text-base mb-2 mt-4 first:mt-0">
                        {children}
                      </h3>
                    ),
                    h2: ({ children }) => (
                      <h4 className="text-off-white font-semibold text-sm mb-2 mt-3 first:mt-0">
                        {children}
                      </h4>
                    ),
                    h3: ({ children }) => (
                      <h5 className="text-off-white font-medium text-sm mb-2 mt-3 first:mt-0">
                        {children}
                      </h5>
                    ),
                    // Lists
                    ul: ({ children }) => (
                      <ul className="list-none space-y-1.5 mb-3 last:mb-0">{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-none space-y-1.5 mb-3 last:mb-0 counter-reset-item">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => {
                      return (
                        <li className="flex items-start gap-2">
                          <span className="flex-shrink-0 mt-0.5 text-terminal-green">
                            •
                          </span>
                          <span className="flex-1">{children}</span>
                        </li>
                      );
                    },
                    // Strong/Bold
                    strong: ({ children }) => (
                      <strong className="font-semibold text-off-white">{children}</strong>
                    ),
                    // Emphasis/Italic
                    em: ({ children }) => (
                      <em className="italic text-steel-grey">{children}</em>
                    ),
                    // Inline code
                    code: ({ className, children, ...props }) => {
                      const isInline = !className;
                      if (isInline) {
                        return (
                          <code className="px-1.5 py-0.5 bg-surface-elevated rounded text-terminal-green font-mono text-xs">
                            {children}
                          </code>
                        );
                      }
                      // Code blocks
                      return (
                        <code className={cn('block', className)} {...props}>
                          {children}
                        </code>
                      );
                    },
                    // Code blocks (pre)
                    pre: ({ children }) => (
                      <pre className="bg-surface-elevated rounded-md p-3 my-3 overflow-x-auto font-mono text-xs text-off-white border border-surface-border">
                        {children}
                      </pre>
                    ),
                    // Links
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-signal-blue hover:text-signal-blue/80 underline underline-offset-2 transition-colors"
                      >
                        {children}
                      </a>
                    ),
                    // Blockquotes
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-2 border-steel-grey/30 pl-3 my-3 italic text-steel-grey/80">
                        {children}
                      </blockquote>
                    ),
                    // Horizontal rule
                    hr: () => (
                      <hr className="border-surface-border my-4" />
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ChatMessage;
