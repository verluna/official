"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button, BentoCard, Accordion } from "@/components/ui";

const faqItems = [
  {
    id: "first-call",
    question: "What happens on the first call?",
    answer:
      "A 30-minute conversation between practitioners about your specific situation. No discovery call script. No sales demo. You describe your operations, your pain points, and where you think agents could help. I ask questions about your stack, your team, and your constraints. You leave with at least one actionable recommendation, whether or not we work together.",
  },
  {
    id: "cost",
    question: "How much do your services cost?",
    answer:
      "The GTM Audit starts from EUR 5,000 for a two-week diagnostic. GTM Build projects range from EUR 15,000 to EUR 50,000 depending on scope and complexity. Managed Operations starts from EUR 5,000 per month. Agent Architecture Consulting is custom-scoped. All prices are in EUR. We publish pricing because you should know what you are getting into before the first conversation.",
  },
  {
    id: "outside-dach",
    question: "Do you work with companies outside DACH?",
    answer:
      "Yes. We work across the EU, primarily remote with on-site workshops available in Berlin. Our methodology is not geography-dependent, but our deepest expertise is in the DACH B2B SaaS landscape: the tools, the buying cycles, the regulatory requirements, and the cultural context of enterprise sales in Germany, Austria, and Switzerland.",
  },
  {
    id: "team-size",
    question: "How big is your team?",
    answer:
      "One architect with an AI agent workforce. This is intentional. One person who deeply understands your systems and your context, augmented by specialized AI agents that handle the operational throughput. The result is the delivery capacity of a 3-to-5-person team without the coordination overhead, the knowledge silos, or the hiring timeline.",
  },
  {
    id: "ownership",
    question: "Do we own the systems you build?",
    answer:
      "Yes. Everything we build becomes yours. Architecture decisions are documented. Runbooks are written. Your team is trained. We design for transfer, not dependency. The GTM Build engagement includes 30 days of post-launch support, and every engagement includes documentation that your team can maintain independently.",
  },
  {
    id: "timeline",
    question: "How quickly can you start?",
    answer:
      "Most engagements begin within 1-2 weeks of the strategy call. The GTM Audit takes 2 weeks. GTM Build takes 4-8 weeks. We do not maintain a 6-month backlog. If we cannot start within a reasonable timeframe, we will tell you on the first call.",
  },
];

export function ContactContent() {
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
        headers: { "Content-Type": "application/json" },
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
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-terminal-green font-mono">&gt;</span>
            <span className="text-sm font-mono text-steel-grey uppercase tracking-wider">
              Contact
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tighter">
            Let&apos;s Talk
          </h1>
          <p className="mt-6 text-lg text-steel-grey leading-relaxed">
            Tell us about your operations. What is working, what is not, and
            what you think agents could change. No discovery call script. No
            30-minute sales demo. A conversation between practitioners about
            your specific situation.
          </p>
        </motion.div>

        {/* Two paths */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Path 1: Book a call */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold tracking-tight mb-6">
              Book a Discovery Call
            </h2>
            <p className="text-steel-grey leading-relaxed mb-6">
              30 minutes. No pitch. We map your agent readiness and identify the
              3 highest-impact opportunities in your operations.
            </p>

            <BentoCard className="p-8 text-center">
              <div className="py-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-signal-blue/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-signal-blue"
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
                <h3 className="text-lg font-semibold tracking-tight mb-2">
                  Strategy Call
                </h3>
                <p className="text-sm text-steel-grey mb-6">
                  30 minutes with Tolga Oral, Founder
                </p>
                <Button
                  href="https://calendly.com/verluna-intro-call"
                  variant="primary"
                  size="lg"
                >
                  Schedule via Calendly
                </Button>
              </div>
            </BentoCard>

            <div className="mt-6 space-y-4">
              <BentoCard className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-terminal-green/10 flex items-center justify-center text-terminal-green flex-shrink-0">
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
                  <p className="text-sm text-steel-grey">Email directly</p>
                  <a
                    href="mailto:hello@verluna.com"
                    className="text-off-white hover:text-terminal-green transition-colors"
                  >
                    hello@verluna.com
                  </a>
                </div>
              </BentoCard>

              <BentoCard className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-signal-blue/10 flex items-center justify-center text-signal-blue flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-steel-grey">Connect on LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/tolgaoral"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-off-white hover:text-signal-blue transition-colors"
                  >
                    linkedin.com/in/tolgaoral
                  </a>
                </div>
              </BentoCard>

              <div className="flex items-center gap-2 text-sm mt-4 pl-2">
                <svg
                  className="w-4 h-4 text-steel-grey"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-steel-grey">
                  Based in Berlin, serving European enterprises
                </span>
              </div>
            </div>
          </motion.div>

          {/* Path 2: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold tracking-tight mb-6">
              Send a Message
            </h2>
            <p className="text-steel-grey leading-relaxed mb-6">
              We respond within 24 hours, personally, with a relevant question
              about your operations.
            </p>

            <BentoCard className="relative overflow-hidden">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-surface-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="ml-2 text-xs font-mono text-steel-grey">
                  contact.sh
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
                    We will be in touch within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-6 text-sm text-steel-grey hover:text-terminal-green transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
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
                      <span className="text-terminal-green">$</span> company
                    </label>
                    <input
                      type="text"
                      id="company"
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
                      <span className="text-terminal-green">$</span>{" "}
                      what_is_broken{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      aria-required="true"
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded border border-surface-border bg-charcoal text-off-white font-mono text-sm focus:outline-none focus:border-terminal-green/50 focus:ring-2 focus:ring-terminal-green/20 transition-colors resize-none"
                      placeholder="Describe your biggest operational challenge..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="mt-1 accent-terminal-green"
                    />
                    <label htmlFor="consent" className="text-xs text-steel-grey">
                      I agree to the{" "}
                      <Link
                        href="/privacy"
                        className="text-terminal-green hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      . Verluna will use this information to respond to my
                      inquiry.
                    </label>
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="p-3 rounded border border-red-500/30 bg-red-500/10 text-red-400 text-sm"
                    >
                      {error}
                    </div>
                  )}

                  <Button variant="primary" size="lg" className="w-full">
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
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </BentoCard>

            <div className="mt-4 flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
              <span className="text-steel-grey">
                Typical response time:{" "}
                <span className="text-terminal-green font-mono">&lt; 24h</span>
              </span>
            </div>
          </motion.div>
        </div>

        {/* FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-terminal-green font-mono">&gt;</span>
            <span className="text-sm font-mono text-steel-grey uppercase tracking-wider">
              FAQ
            </span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl">
            <Accordion items={faqItems} />
          </div>
        </motion.section>
      </div>
    </div>
  );
}
