import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/providers";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Verluna: Agent Operations for European Enterprises",
  description:
    "Verluna designs, builds, and runs the operating layer between AI agents and European enterprises. Working systems, not strategy decks. Based in Berlin.",
  keywords: [
    "Agent Operations",
    "AI Agent Consulting",
    "GTM Automation",
    "Marketing Operations",
    "Agent Architecture",
    "AI Consulting Europe",
    "DACH Automation",
    "Berlin",
    "Autonomous Systems",
  ],
  authors: [{ name: "Verluna" }],
  metadataBase: new URL("https://verluna.de"),
  openGraph: {
    title: "Verluna: Agent Operations for European Enterprises",
    description:
      "We design, build, and run the operating layer between AI agents and your business. Working systems, not strategy decks.",
    url: "https://verluna.de",
    siteName: "Verluna",
    type: "website",
    locale: "en_EU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verluna: Agent Operations for European Enterprises",
    description:
      "We design, build, and run the operating layer between AI agents and your business. Working systems, not strategy decks.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://verluna.de",
  },
};

// Safe: hardcoded static JSON-LD — no user input involved
const organizationSchemaJson = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Verluna",
  url: "https://verluna.de",
  logo: "https://verluna.de/verluna-logo.svg",
  description:
    "Verluna designs, builds, and runs agent operations for B2B enterprises across DACH and the EU. Six-phase methodology. Production deployments. Working systems, not strategy decks.",
  email: "hello@verluna.de",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Berlin",
    addressCountry: "DE",
  },
  areaServed: [
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Switzerland" },
    { "@type": "Continent", name: "Europe" },
  ],
  serviceType: [
    "Agent Readiness Audit",
    "Agent System Build",
    "Managed Agent Operations",
    "Agent Architecture Consulting",
  ],
  founder: {
    "@type": "Person",
    name: "Tolga Oral",
    jobTitle: "Founder & Agent Architect",
  },
  sameAs: [
    "https://linkedin.com/in/tolgaoral",
    "https://github.com/tolgaoral",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Safe: static hardcoded JSON-LD for structured data — no user input */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: organizationSchemaJson }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased bg-ink text-text min-h-screen`}
      >
        <Providers>
          {/* Skip to content */}
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-text focus:text-ink focus:rounded-md focus:font-medium focus:outline-none"
          >
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
