"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Shared form primitives for the conversion pages (contact, scorecard,
 * resources). Labels sit above inputs, errors sit below them, and all
 * states render in the v2 language.
 */

export const inputClasses =
  "w-full rounded-md border border-line-strong bg-ink-raised px-3.5 py-2.5 text-sm text-text placeholder:text-text-muted transition-colors focus:outline-none focus:border-accent";

export const inputErrorClasses = "border-error focus:border-error";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}

export function FormField({
  label,
  htmlFor,
  optional,
  error,
  children,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium text-text"
      >
        {label}
        {optional && (
          <span className="ml-1.5 font-normal text-text-muted">(optional)</span>
        )}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-sm text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

interface SubmitButtonProps {
  children: ReactNode;
  loading?: boolean;
  loadingLabel?: string;
  className?: string;
}

/** Native submit button styled to match the primary Button variant. */
export function SubmitButton({
  children,
  loading = false,
  loadingLabel = "Sending...",
  className = "",
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap",
        "rounded-md border border-transparent bg-text px-6 py-3 text-base font-medium tracking-tight text-ink",
        "transition-[background-color,border-color,color,transform] duration-200",
        "hover:bg-white active:translate-y-px active:scale-[0.99]",
        "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-60",
        className
      )}
    >
      {loading ? loadingLabel : children}
    </button>
  );
}

interface FormAlertProps {
  children: ReactNode;
}

/** Form-level error alert, e.g. for API failures. */
export function FormAlert({ children }: FormAlertProps) {
  return (
    <div
      role="alert"
      className="rounded-md border border-line-strong bg-ink-raised px-4 py-3 text-sm text-error"
    >
      {children}
    </div>
  );
}
