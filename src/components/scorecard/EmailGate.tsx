"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface EmailGateProps {
  onSubmit: (data: EmailGateData) => void;
  isLoading: boolean;
}

export interface EmailGateData {
  email: string;
  firstName?: string;
  companyName?: string;
  role?: string;
  newsletterOptIn: boolean;
  gdprConsent: boolean;
}

export function EmailGate({ onSubmit, isLoading }: EmailGateProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [newsletterOptIn, setNewsletterOptIn] = useState(false);
  const [gdprConsent, setGdprConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!gdprConsent) {
      newErrors.gdpr = "You must accept the data processing terms";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onSubmit({
      email,
      firstName: firstName || undefined,
      companyName: companyName || undefined,
      role: role || undefined,
      newsletterOptIn,
      gdprConsent,
    });
  }

  const inputClasses =
    "w-full px-4 py-3 bg-surface border border-surface-border rounded-lg text-off-white placeholder:text-steel-grey/50 focus:outline-none focus:ring-2 focus:ring-terminal-green/50 focus:border-terminal-green/30 font-mono text-sm transition-all";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-md mx-auto"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-terminal-green/10 border border-terminal-green/20 mb-4">
          <span className="text-terminal-green text-xl">&#9889;</span>
        </div>
        <h2 className="text-2xl font-semibold text-off-white mb-2">
          Your results are ready
        </h2>
        <p className="text-steel-grey text-sm leading-relaxed">
          Enter your email to see your detailed Agent Readiness Report with
          personalized recommendations.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email (required) */}
        <div>
          <input
            type="email"
            placeholder="Work email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={cn(inputClasses, errors.email && "border-error-red/50")}
            autoFocus
          />
          {errors.email && (
            <p className="mt-1 text-xs text-error-red font-mono">
              {errors.email}
            </p>
          )}
        </div>

        {/* Name (optional) */}
        <input
          type="text"
          placeholder="First name (optional)"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={inputClasses}
        />

        {/* Company (optional) */}
        <input
          type="text"
          placeholder="Company (optional)"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className={inputClasses}
        />

        {/* Role (optional) */}
        <input
          type="text"
          placeholder="Role (optional)"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className={inputClasses}
        />

        {/* Newsletter opt-in */}
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={newsletterOptIn}
            onChange={(e) => setNewsletterOptIn(e.target.checked)}
            className="mt-1 w-4 h-4 rounded border-surface-border bg-surface accent-terminal-green"
          />
          <span className="text-sm text-steel-grey group-hover:text-off-white transition-colors">
            I'd like to receive The Agent Operations Briefing (biweekly insights
            on agent architecture and AI operations)
          </span>
        </label>

        {/* GDPR consent (required) */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={gdprConsent}
              onChange={(e) => setGdprConsent(e.target.checked)}
              className={cn(
                "mt-1 w-4 h-4 rounded border-surface-border bg-surface accent-terminal-green",
                errors.gdpr && "ring-2 ring-error-red/50"
              )}
            />
            <span className="text-xs text-steel-grey group-hover:text-off-white transition-colors leading-relaxed">
              I agree that Verluna may process my data to provide the scorecard
              results, send follow-up communications, and improve its services.
              I can withdraw my consent at any time by emailing{" "}
              <a
                href="mailto:info@verluna.de"
                className="text-signal-blue hover:underline"
              >
                info@verluna.de
              </a>
              . See our{" "}
              <a
                href="/privacy"
                className="text-signal-blue hover:underline"
                target="_blank"
              >
                Privacy Policy
              </a>
              . *
            </span>
          </label>
          {errors.gdpr && (
            <p className="mt-1 text-xs text-error-red font-mono ml-7">
              {errors.gdpr}
            </p>
          )}
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            "w-full py-3.5 rounded-lg font-semibold text-sm transition-all",
            "focus:outline-none focus:ring-2 focus:ring-terminal-green/50",
            isLoading
              ? "bg-surface-elevated text-steel-grey cursor-not-allowed"
              : "bg-off-white text-void hover:bg-terminal-green"
          )}
        >
          {isLoading ? (
            <span className="inline-flex items-center gap-2">
              <motion.span
                className="inline-block w-4 h-4 border-2 border-steel-grey/30 border-t-steel-grey rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              Calculating...
            </span>
          ) : (
            "See My Results"
          )}
        </motion.button>
      </form>
    </motion.div>
  );
}
