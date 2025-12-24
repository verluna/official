'use client';

import { useRef, useEffect, useCallback, useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Trash2 } from 'lucide-react';
import { useChat } from '@ai-sdk/react';
import { TextStreamChatTransport } from 'ai';
import { cn } from '@/lib/utils';
import { TypingIndicator } from '@/components/ui/TypingIndicator';
import { ChatMessage } from './ChatMessage';

const quickActions = [
  { label: 'Learn about services', prompt: 'What services does Verluna offer?' },
  { label: 'Book a call', prompt: 'How can I schedule a consultation call?' },
  { label: 'Pricing info', prompt: 'What does a typical engagement cost?' },
];

// Create transport instance outside component to avoid recreation
const transport = new TextStreamChatTransport({
  api: '/api/chat',
});

export function TerminalChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    messages,
    sendMessage,
    status,
    setMessages,
    error,
  } = useChat({
    transport,
  });

  const isLoading = status === 'streaming' || status === 'submitted';

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Load messages from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('verluna-chat-history');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
          setHasInteracted(true);
        }
      } catch {
        // Invalid saved data
      }
    }
  }, [setMessages]);

  // Save messages to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('verluna-chat-history', JSON.stringify(messages));
      setHasInteracted(true);
    }
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const message = inputValue.trim();
    setInputValue('');
    await sendMessage({ parts: [{ type: 'text', text: message }] });
  };

  const handleQuickAction = async (prompt: string) => {
    if (isLoading) return;
    await sendMessage({ parts: [{ type: 'text', text: prompt }] });
  };

  const clearHistory = () => {
    setMessages([]);
    localStorage.removeItem('verluna-chat-history');
    setHasInteracted(false);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Extract text content from message
  const getMessageContent = (message: typeof messages[0]): string => {
    if ('content' in message && typeof message.content === 'string') {
      return message.content;
    }
    if ('parts' in message && Array.isArray(message.parts)) {
      return message.parts
        .filter((part): part is { type: 'text'; text: string } =>
          part.type === 'text' && 'text' in part
        )
        .map((part) => part.text)
        .join('');
    }
    return '';
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={toggleChat}
        className={cn(
          'fixed bottom-6 right-6 z-50',
          'w-14 h-14 rounded-full',
          'bg-surface border border-surface-border',
          'flex items-center justify-center',
          'shadow-lg hover:shadow-[0_0_30px_rgba(0,255,148,0.2)]',
          'transition-all duration-300',
          'hover:border-terminal-green/50',
          isOpen && 'bg-terminal-green border-terminal-green'
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-cursor="hover"
        data-cursor-color="green"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-void" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="w-6 h-6 text-terminal-green" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification dot */}
        {!hasInteracted && !isOpen && (
          <span className="absolute top-0 right-0 w-3 h-3 bg-terminal-green rounded-full animate-pulse" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              'fixed bottom-24 right-6 z-50',
              'w-[380px] max-h-[600px]',
              'bg-charcoal border border-surface-border rounded-xl',
              'shadow-2xl overflow-hidden',
              'flex flex-col'
            )}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-surface border-b border-surface-border">
              <div className="flex items-center gap-2">
                {/* Traffic lights */}
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-xs text-steel-grey ml-2">
                  verluna_assistant.sh
                </span>
              </div>
              <button
                type="button"
                onClick={clearHistory}
                className="p-1 hover:bg-surface-border/50 rounded transition-colors"
                title="Clear history"
                data-cursor="hover"
              >
                <Trash2 className="w-4 h-4 text-steel-grey hover:text-off-white" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-5 min-h-[300px] max-h-[400px] chat-scrollbar">
              {/* Welcome message */}
              {messages.length === 0 && (
                <div className="space-y-4">
                  <div className="font-mono text-sm">
                    <span className="text-electric-purple">&gt;</span>
                    <span className="text-steel-grey ml-2">
                      Welcome to Verluna. How can I assist with your GTM engineering needs?
                    </span>
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-2">
                    <p className="font-mono text-xs text-steel-grey">Quick actions:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickActions.map((action) => (
                        <button
                          type="button"
                          key={action.label}
                          onClick={() => handleQuickAction(action.prompt)}
                          className={cn(
                            'px-3 py-1.5 rounded-md font-mono text-xs',
                            'bg-surface border border-surface-border',
                            'hover:border-terminal-green/50 hover:text-terminal-green',
                            'transition-all duration-200'
                          )}
                          data-cursor="hover"
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Chat Messages */}
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  id={message.id}
                  role={message.role as 'user' | 'assistant'}
                  content={getMessageContent(message)}
                />
              ))}

              {/* Error message */}
              {error && (
                <div className="font-mono text-sm text-error-red">
                  <span>&gt;</span>
                  <span className="ml-2">Error: {error.message}</span>
                </div>
              )}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-electric-purple">&gt;</span>
                  <TypingIndicator variant="text" text="processing" color="purple" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-surface-border bg-surface/50"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-terminal-green text-sm">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className={cn(
                    'flex-1 bg-transparent font-mono text-sm',
                    'text-off-white placeholder:text-steel-grey/50',
                    'focus:outline-none',
                    'disabled:opacity-50'
                  )}
                  data-cursor="text"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className={cn(
                    'p-2 rounded-md transition-all duration-200',
                    'hover:bg-terminal-green/10',
                    'disabled:opacity-50 disabled:cursor-not-allowed'
                  )}
                  data-cursor="hover"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4 text-terminal-green" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default TerminalChat;
