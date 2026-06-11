"use client";

import { useState } from "react";
import {
  FormField,
  SubmitButton,
  inputClasses,
  inputErrorClasses,
} from "./forms";
import { cn } from "@/lib/utils";

interface ScorecardGateProps {
  onSubmit: (data: ScorecardGateData) => void;
  isLoading: boolean;
}

export interface ScorecardGateData {
  email: string;
  firstName?: string;
  companyName?: string;
  role?: string;
  newsletterOptIn: boolean;
  gdprConsent: boolean;
}

export function ScorecardGate({ onSubmit, isLoading }: ScorecardGateProps) {
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
      newErrors.email = "Please enter a valid email address.";
    }
    if (!gdprConsent) {
      newErrors.gdpr = "You must accept the data processing terms.";
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

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold tracking-tight text-text">
        Your results are ready.
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-text-muted">
        Enter your email to see your detailed agent readiness report with
        recommendations for your situation.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
        <FormField label="Work email" htmlFor="gate-email" error={errors.email}>
          <input
            type="email"
            id="gate-email"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={cn(inputClasses, errors.email && inputErrorClasses)}
          />
        </FormField>

        <FormField label="First name" htmlFor="gate-first-name" optional>
          <input
            type="text"
            id="gate-first-name"
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={inputClasses}
          />
        </FormField>

        <FormField label="Company" htmlFor="gate-company" optional>
          <input
            type="text"
            id="gate-company"
            autoComplete="organization"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className={inputClasses}
          />
        </FormField>

        <FormField label="Role" htmlFor="gate-role" optional>
          <input
            type="text"
            id="gate-role"
            autoComplete="organization-title"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className={inputClasses}
          />
        </FormField>

        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={newsletterOptIn}
            onChange={(e) => setNewsletterOptIn(e.target.checked)}
            className="mt-0.5 size-4 rounded accent-accent"
          />
          <span className="text-sm leading-relaxed text-text-muted">
            Send me the Agent Operations Briefing: insights on agent
            architecture and AI operations, every two weeks.
          </span>
        </label>

        <div>
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={gdprConsent}
              onChange={(e) => setGdprConsent(e.target.checked)}
              aria-invalid={Boolean(errors.gdpr)}
              className="mt-0.5 size-4 rounded accent-accent"
            />
            <span className="text-xs leading-relaxed text-text-muted">
              I agree that Verluna may process my data to provide the scorecard
              results, send follow-up communications, and improve its services.
              I can withdraw my consent at any time by emailing{" "}
              <a
                href="mailto:info@verluna.de"
                className="text-text underline underline-offset-4 hover:text-accent transition-colors"
              >
                info@verluna.de
              </a>
              . See our{" "}
              <a
                href="/privacy"
                className="text-text underline underline-offset-4 hover:text-accent transition-colors"
                target="_blank"
              >
                privacy policy
              </a>
              .
            </span>
          </label>
          {errors.gdpr && (
            <p className="mt-1.5 text-sm text-error" role="alert">
              {errors.gdpr}
            </p>
          )}
        </div>

        <SubmitButton
          loading={isLoading}
          loadingLabel="Calculating..."
          className="w-full"
        >
          See my results
        </SubmitButton>
      </form>
    </div>
  );
}
