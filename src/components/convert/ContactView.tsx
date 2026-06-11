"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/home";
import { Button } from "@/components/ui/Button";
import {
  FormField,
  FormAlert,
  SubmitButton,
  inputClasses,
  inputErrorClasses,
} from "./forms";
import { cn } from "@/lib/utils";

const nextSteps = [
  {
    title: "We reply within 24 hours.",
    body: "A direct answer from Tolga, not an autoresponder. If we are not the right fit, we say so and point you somewhere useful.",
  },
  {
    title: "We talk for 30 minutes.",
    body: "No discovery script, no demo. You describe your operations and constraints, we ask about your stack and your team.",
  },
  {
    title: "You leave with the three highest-leverage moves.",
    body: "Concrete recommendations for your stack, whether you work with us or not.",
  },
];

type FieldErrors = Partial<
  Record<"name" | "email" | "message" | "consent", string>
>;

export function ContactView() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [consent, setConsent] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validate = (): FieldErrors => {
    const errors: FieldErrors = {};
    if (!formState.name.trim()) errors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formState.message.trim()) {
      errors.message = "Please tell us what you want to change.";
    }
    if (!consent) {
      errors.consent = "Please accept the privacy policy so we can reply.";
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

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
    setConsent(false);
    setFieldErrors({});
    setIsSubmitted(false);
    setError(null);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-text">
            Start with a conversation.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
            Tell us what is working, what is not, and where you think agents
            could change your operations. We read every message.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <div className="rounded-lg border border-line bg-ink-raised p-6 sm:p-8">
              {isSubmitted ? (
                <div className="py-10" role="status" aria-live="polite">
                  <h2 className="text-2xl font-semibold tracking-tight text-text">
                    Message received.
                  </h2>
                  <p className="mt-3 leading-relaxed text-text-muted">
                    We will reply within 24 hours. If it is urgent, write to{" "}
                    <a
                      href="mailto:hello@verluna.de"
                      className="text-text underline underline-offset-4 hover:text-accent transition-colors"
                    >
                      hello@verluna.de
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-8 text-sm text-text-muted transition-colors hover:text-text"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <FormField label="Name" htmlFor="name" error={fieldErrors.name}>
                    <input
                      type="text"
                      id="name"
                      required
                      aria-required="true"
                      aria-invalid={Boolean(fieldErrors.name)}
                      autoComplete="name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className={cn(
                        inputClasses,
                        fieldErrors.name && inputErrorClasses
                      )}
                    />
                  </FormField>

                  <FormField
                    label="Work email"
                    htmlFor="email"
                    error={fieldErrors.email}
                  >
                    <input
                      type="email"
                      id="email"
                      required
                      aria-required="true"
                      aria-invalid={Boolean(fieldErrors.email)}
                      autoComplete="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className={cn(
                        inputClasses,
                        fieldErrors.email && inputErrorClasses
                      )}
                    />
                  </FormField>

                  <FormField label="Company" htmlFor="company" optional>
                    <input
                      type="text"
                      id="company"
                      autoComplete="organization"
                      value={formState.company}
                      onChange={(e) =>
                        setFormState({ ...formState, company: e.target.value })
                      }
                      className={inputClasses}
                    />
                  </FormField>

                  <FormField
                    label="What do you want to change?"
                    htmlFor="message"
                    error={fieldErrors.message}
                  >
                    <textarea
                      id="message"
                      required
                      aria-required="true"
                      aria-invalid={Boolean(fieldErrors.message)}
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className={cn(
                        inputClasses,
                        "resize-none",
                        fieldErrors.message && inputErrorClasses
                      )}
                    />
                  </FormField>

                  <div>
                    <label
                      htmlFor="consent"
                      className="flex cursor-pointer items-start gap-3"
                    >
                      <input
                        type="checkbox"
                        id="consent"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        aria-invalid={Boolean(fieldErrors.consent)}
                        className="mt-0.5 size-4 rounded accent-accent"
                      />
                      <span className="text-sm leading-relaxed text-text-muted">
                        I agree to the{" "}
                        <Link
                          href="/privacy"
                          className="text-text underline underline-offset-4 hover:text-accent transition-colors"
                        >
                          privacy policy
                        </Link>
                        . Verluna will use this information to respond to my
                        inquiry.
                      </span>
                    </label>
                    {fieldErrors.consent && (
                      <p className="mt-1.5 text-sm text-error" role="alert">
                        {fieldErrors.consent}
                      </p>
                    )}
                  </div>

                  {error && <FormAlert>{error}</FormAlert>}

                  <SubmitButton
                    loading={isSubmitting}
                    loadingLabel="Sending..."
                    className="w-full sm:w-auto"
                  >
                    Send message
                  </SubmitButton>
                </form>
              )}
            </div>
          </Reveal>

          {/* What happens next */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight text-text">
              What happens next
            </h2>
            <ul className="mt-6 divide-y divide-line border-t border-line">
              {nextSteps.map((step) => (
                <li key={step.title} className="py-5">
                  <p className="font-medium text-text">{step.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                    {step.body}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-line pt-8">
              <p className="text-sm text-text-muted">
                Want to skip the form and pick a time directly?
              </p>
              <div className="mt-4">
                <Button
                  variant="secondary"
                  size="md"
                  href="https://calendly.com/verluna-intro-call"
                >
                  Book an intro call
                </Button>
              </div>
            </div>

            <div className="mt-8 border-t border-line pt-8 space-y-3 text-sm">
              <p className="text-text-muted">
                Prefer email?{" "}
                <a
                  href="mailto:hello@verluna.de"
                  className="text-text underline underline-offset-4 hover:text-accent transition-colors"
                >
                  hello@verluna.de
                </a>
              </p>
              <p className="text-text-muted">
                Or connect on{" "}
                <a
                  href="https://linkedin.com/in/tolgaoral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text underline underline-offset-4 hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </p>
              <p className="text-text-faint">
                Based in Berlin, working across Europe.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
