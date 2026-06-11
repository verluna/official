import { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Subscription Confirmed - Verluna",
};

export default function NewsletterConfirmedPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-24">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-semibold tracking-tighter text-text">
          You&apos;re in.
        </h1>
        <p className="mt-4 leading-relaxed text-text-muted">
          Your subscription to the Agent Operations Briefing is confirmed.
          Every two weeks: agent architecture, AI governance, and operational
          automation for European companies.
        </p>
        <div className="mt-8">
          <Button variant="primary" size="md" href="/">
            Back to home
          </Button>
        </div>
      </div>
    </div>
  );
}
