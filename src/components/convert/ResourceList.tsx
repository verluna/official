"use client";

import { useState, FormEvent } from "react";
import { Reveal } from "@/components/home";
import { Button } from "@/components/ui/Button";
import { resourcesCopy, LeadMagnet } from "@/data/copy/resources";
import {
  FormField,
  SubmitButton,
  inputClasses,
  inputErrorClasses,
} from "./forms";
import { cn } from "@/lib/utils";

function ResourceRow({ resource }: { resource: LeadMagnet }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/resources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, resourceId: resource.id }),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div className="grid gap-8 border-t border-line py-12 lg:grid-cols-12 lg:gap-12">
      {/* Content */}
      <div className="lg:col-span-7">
        <h2 className="text-2xl font-semibold tracking-tight text-text">
          {resource.title}
        </h2>
        <p className="mt-3 max-w-prose leading-relaxed text-text-muted">
          {resource.description}
        </p>
        <p className="mt-4 max-w-prose text-sm leading-relaxed text-text">
          {resource.valueProposition}
        </p>
        <p className="mt-4 text-sm text-text-faint">
          Pairs with: {resource.trackAlignment}
        </p>
      </div>

      {/* Contents + form */}
      <div className="lg:col-span-5">
        <div className="rounded-lg border border-line bg-ink-raised p-6">
          <p className="text-sm font-medium text-text">What is inside</p>
          <ul className="mt-3 space-y-2">
            {resource.contents.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-text-muted"
              >
                <span
                  className="mt-2 size-1 shrink-0 rounded-full bg-text-faint"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-line pt-6">
            {status === "success" ? (
              <p className="text-sm text-text" role="status" aria-live="polite">
                Sent. Check your inbox in the next few minutes.
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <FormField
                  label="Work email"
                  htmlFor={`email-${resource.id}`}
                  error={status === "error" ? errorMsg : undefined}
                >
                  <input
                    type="email"
                    id={`email-${resource.id}`}
                    required
                    aria-required="true"
                    aria-invalid={status === "error"}
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={cn(
                      inputClasses,
                      status === "error" && inputErrorClasses
                    )}
                  />
                </FormField>
                <SubmitButton
                  loading={status === "loading"}
                  loadingLabel="Sending..."
                  className="mt-4 w-full px-5 py-2.5 text-sm"
                >
                  {resource.ctaLabel}
                </SubmitButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ResourceList() {
  const { leadMagnets, bottomCta } = resourcesCopy;

  return (
    <div className="pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          {leadMagnets.map((resource) => (
            <Reveal key={resource.id}>
              <ResourceRow resource={resource} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 border-t border-line pt-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text">
            {bottomCta.heading}
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-text-muted">
            {bottomCta.description}
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href={bottomCta.ctaHref}>
              {bottomCta.ctaLabel}
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
