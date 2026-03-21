import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Subscription Confirmed - Verluna",
};

export default function NewsletterConfirmedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="text-center max-w-md">
        <div className="font-mono text-xs text-steel-grey mb-6">
          <span className="text-terminal-green">$</span> newsletter --status
          confirmed
        </div>

        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-terminal-green/10 border border-terminal-green/20 mb-6">
          <span className="text-terminal-green text-3xl">&#10003;</span>
        </div>

        <h1 className="text-2xl font-bold text-off-white mb-3">
          You&apos;re in.
        </h1>
        <p className="text-steel-grey leading-relaxed mb-8">
          Your subscription to The Agent Operations Briefing is confirmed.
          Expect biweekly insights on agent architecture, AI governance, and
          operational automation for European enterprises.
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
