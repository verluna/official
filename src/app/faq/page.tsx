import { Metadata } from "next";
import { FAQList } from "@/components/convert/FAQList";
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
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-text">
            {faqCopy.pageHeading}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
            {faqCopy.pageSubheading}
          </p>
        </div>
      </section>
      <FAQList />
    </>
  );
}
