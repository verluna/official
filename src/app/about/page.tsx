import { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About | Verluna - Agent Operations for Europe",
  description:
    "Verluna was founded by Tolga Oral, a marketing operations practitioner who built production AI systems across 300+ sessions. Based in Berlin, serving European enterprises.",
  openGraph: {
    title: "About Verluna | Built by a Practitioner, Not a Consultant",
    description:
      "300+ AI sessions. 83 automation skills built. 12 system integrations. Founded by a marketing ops leader who learned to code with AI.",
    type: "website",
  },
  alternates: {
    canonical: "https://verluna.de/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
