import { Metadata } from "next";
import { ContactView } from "@/components/convert/ContactView";

export const metadata: Metadata = {
  title: "Contact | Verluna - Start a Conversation",
  description:
    "Tell us about your operations. Book a strategy call or send a message. Based in Berlin, serving European enterprises. We respond within 24 hours.",
  openGraph: {
    title: "Contact Verluna | Start a Conversation",
    description:
      "Book a strategy call or send a message. Based in Berlin, serving European enterprises.",
    type: "website",
  },
  alternates: {
    canonical: "https://verluna.de/contact",
  },
};

export default function ContactPage() {
  return <ContactView />;
}
