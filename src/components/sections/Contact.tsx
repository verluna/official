"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Button, BentoCard } from "@/components/ui";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormState({ name: "", email: "", company: "", message: "" });
    setIsSubmitted(false);
    setError(null);
  };

  return (
    <section id="contact" className="py-24 bg-charcoal/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-terminal-green font-mono">&gt;</span>
              <span className="text-sm font-mono text-steel-grey uppercase tracking-wider">
                Initialize Project
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter">
              Ready to architect your{" "}
              <span className="text-gradient">revenue engine</span>?
            </h2>
            <p className="mt-6 text-steel-grey leading-relaxed">
              Every project starts with a conversation. Tell us about your
              current GTM stack, your pain points, and where you want to be.
              We&apos;ll tell you exactly how we can help.
            </p>

            {/* Quick contact options */}
            <div className="mt-8 space-y-4">
              <BentoCard className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-terminal-green/10 flex items-center justify-center text-terminal-green">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-steel-grey">Email us directly</p>
                  <a
                    href="mailto:info@verluna.de"
                    className="text-off-white hover:text-terminal-green transition-colors"
                  >
                    info@verluna.de
                  </a>
                </div>
              </BentoCard>

              <BentoCard className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-signal-blue/10 flex items-center justify-center text-signal-blue">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-steel-grey">Book a call</p>
                  <a
                    href="http://calendly.com/verluna-intro-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-off-white hover:text-signal-blue transition-colors"
                  >
                    Schedule via Calendly
                  </a>
                </div>
              </BentoCard>
            </div>

            {/* Response time */}
            <div className="mt-8 flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
              <span className="text-steel-grey">
                Typical response time:{" "}
                <span className="text-terminal-green font-mono">&lt; 24h</span>
              </span>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <BentoCard className="relative overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-surface-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="ml-2 text-xs font-mono text-steel-grey">
                  initialize_project.sh
                </span>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-terminal-green/10 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-terminal-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    Message received
                  </h3>
                  <p className="mt-2 text-steel-grey">
                    We&apos;ll be in touch within 24 hours.
                  </p>
                  <div className="mt-4 font-mono text-sm text-terminal-green">
                    <span className="text-steel-grey">$</span> echo
                    &quot;Project initialized&quot;
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-6 text-sm text-steel-grey hover:text-terminal-green transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-mono text-steel-grey mb-2"
                    >
                      <span className="text-terminal-green">$</span> name{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      aria-required="true"
                      aria-describedby={error ? "form-error" : undefined}
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded border border-surface-border bg-charcoal text-off-white font-mono text-sm focus:outline-none focus:border-terminal-green/50 focus:ring-2 focus:ring-terminal-green/20 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-mono text-steel-grey mb-2"
                    >
                      <span className="text-terminal-green">$</span> email{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      aria-required="true"
                      aria-describedby={error ? "form-error" : undefined}
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded border border-surface-border bg-charcoal text-off-white font-mono text-sm focus:outline-none focus:border-terminal-green/50 focus:ring-2 focus:ring-terminal-green/20 transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-mono text-steel-grey mb-2"
                    >
                      <span className="text-terminal-green">$</span> company{" "}
                      <span className="text-steel-grey/60">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      aria-required="false"
                      value={formState.company}
                      onChange={(e) =>
                        setFormState({ ...formState, company: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded border border-surface-border bg-charcoal text-off-white font-mono text-sm focus:outline-none focus:border-terminal-green/50 focus:ring-2 focus:ring-terminal-green/20 transition-colors"
                      placeholder="Company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-mono text-steel-grey mb-2"
                    >
                      <span className="text-terminal-green">$</span> message{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      aria-required="true"
                      aria-describedby={error ? "form-error" : undefined}
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded border border-surface-border bg-charcoal text-off-white font-mono text-sm focus:outline-none focus:border-terminal-green/50 focus:ring-2 focus:ring-terminal-green/20 transition-colors resize-none"
                      placeholder="Tell us about your GTM challenges..."
                    />
                  </div>

                  {/* Error display */}
                  {error && (
                    <div
                      id="form-error"
                      role="alert"
                      aria-live="assertive"
                      className="p-3 rounded border border-red-500/30 bg-red-500/10 text-red-400 text-sm"
                    >
                      {error}
                    </div>
                  )}

                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Initializing...
                      </span>
                    ) : (
                      <>
                        Initialize Project
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </>
                    )}
                  </Button>

                  {/* Privacy notice */}
                  <p className="text-xs text-steel-grey text-center">
                    By submitting, you agree to our{" "}
                    <Link
                      href="/privacy"
                      className="text-terminal-green hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              )}
            </BentoCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
