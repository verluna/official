import { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { FAQContent } from "./FAQContent";

export const metadata: Metadata = {
  title: "FAQ | Verluna - GTM Engineering Questions Answered",
  description:
    "Frequently asked questions about GTM engineering, our process, pricing, and how we work with clients.",
};

export default function FAQPage() {
  return (
    <>
      <PageHeader
        label="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about working with us. Can't find what you're looking for? Reach out and we'll get back to you within 24 hours."
      />
      <FAQContent />
    </>
  );
}
