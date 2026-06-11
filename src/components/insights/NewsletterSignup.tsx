"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

/** Newsletter block on the insights index. Anchored for the footer link. */
export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section id="newsletter" className="section-padding border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-semibold tracking-tighter text-text sm:text-4xl">
              The Agent Operations Briefing
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              Every two weeks: one actionable insight on AI agent
              infrastructure, governance patterns, and European compliance.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            {subscribed ? (
              <p className="text-base text-text">
                Subscribed. The next briefing lands in your inbox.
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubscribed(true);
                }}
              >
                <label
                  htmlFor="newsletter-email"
                  className="block text-sm font-medium text-text"
                >
                  Email
                </label>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-md border border-line-strong bg-ink-raised px-4 py-2.5 text-sm text-text placeholder:text-text-faint transition-colors duration-200 focus:border-accent focus:outline-none"
                  />
                  <Button variant="primary" size="md" className="shrink-0">
                    Subscribe
                  </Button>
                </div>
              </form>
            )}
            <p className="mt-3 text-sm text-text-muted">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
