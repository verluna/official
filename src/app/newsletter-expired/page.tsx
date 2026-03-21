import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Link Expired - Verluna",
};

export default function NewsletterExpiredPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="text-center max-w-md">
        <div className="font-mono text-xs text-steel-grey mb-6">
          <span className="text-error-red">!</span> newsletter --status expired
        </div>

        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-warning-amber/10 border border-warning-amber/20 mb-6">
          <span className="text-warning-amber text-3xl">&#9888;</span>
        </div>

        <h1 className="text-2xl font-bold text-off-white mb-3">
          Link expired
        </h1>
        <p className="text-steel-grey leading-relaxed mb-8">
          This confirmation link has expired or is invalid. Newsletter
          confirmation links are valid for 72 hours. Please subscribe again to
          receive a new confirmation email.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-surface border border-surface-border rounded-lg text-off-white font-medium text-sm hover:border-terminal-green/50 hover:text-terminal-green transition-all"
        >
          Back to Verluna
        </Link>
      </div>
    </div>
  );
}
