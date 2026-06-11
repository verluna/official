import { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Link Expired - Verluna",
};

export default function NewsletterExpiredPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-24">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-semibold tracking-tighter text-text">
          This link has expired.
        </h1>
        <p className="mt-4 leading-relaxed text-text-muted">
          This confirmation link is no longer valid. Links expire after 72
          hours. Subscribe again and we will send you a fresh one.
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
