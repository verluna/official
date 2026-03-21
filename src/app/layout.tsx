import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Verluna — Agent Operations for European Enterprises",
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
    title: "Verluna — Agent Operations for European Enterprises",
    description:
      "We design, build, and run the operating layer between AI agents and your business. Working systems, not strategy decks.",
    url: "https://verluna.de",
    siteName: "Verluna",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Verluna — Agent Operations for European Enterprises",
      },
    ],
    type: "website",
    locale: "en_EU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verluna — Agent Operations for European Enterprises",
    description:
      "We design, build, and run the operating layer between AI agents and your business. Working systems, not strategy decks.",
    images: ["/og-image.png"],
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
    "GTM Audit",
    "GTM Build",
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
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-charcoal text-off-white min-h-screen`}
      >
        <Providers>
          <div className="relative bg-circuit-grid">
            {/* Ambient gradient orbs */}
            <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-electric-purple/5 rounded-full blur-[120px] pointer-events-none z-[1]" />
            <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-terminal-green/5 rounded-full blur-[100px] pointer-events-none z-[1]" />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-signal-blue/3 rounded-full blur-[150px] pointer-events-none z-[1]" />

            {/* Noise texture overlay */}
            <div className="noise-overlay" />

            {/* Content */}
            <div className="relative z-10">
              {/* Skip to content */}
              <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-terminal-green focus:text-void focus:rounded focus:font-medium focus:outline-none"
              >
                Skip to content
              </a>
              <Header />
              <main id="main">{children}</main>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
