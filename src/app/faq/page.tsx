import { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { FAQContent } from "./FAQContent";
import { faqCopy } from "@/data/copy/faq";

export const metadata: Metadata = {
  title: "FAQ | Verluna - GTM Engineering Questions Answered",
  description:
    "Questions before you build. Answers about GTM engineering, pricing, timelines, and how Verluna works with your team.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCopy.categories.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        label="FAQ"
        title={faqCopy.pageHeading}
        description={faqCopy.pageSubheading}
      />
      <FAQContent />
    </>
  );
}
