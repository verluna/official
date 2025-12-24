import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Verluna | GTM Engineering & AI Solutions",
  description:
    "We turn manual GTM operations into automated code. Specialized engineering for HubSpot, Salesforce, and AI Agents.",
  keywords: [
    "GTM Engineering",
    "Revenue Operations",
    "AI Agents",
    "HubSpot",
    "Salesforce",
    "Automation",
    "n8n",
  ],
  authors: [{ name: "Verluna" }],
  metadataBase: new URL("https://verluna.com"),
  openGraph: {
    title: "Verluna | GTM Engineering & AI Solutions",
    description:
      "Architecting Autonomous Revenue Engines. We turn manual GTM operations into automated code.",
    url: "https://verluna.com",
    siteName: "Verluna",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Verluna - GTM Engineering & AI Solutions",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verluna | GTM Engineering & AI Solutions",
    description:
      "Architecting Autonomous Revenue Engines. We turn manual GTM operations into automated code.",
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
    canonical: "https://verluna.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Verluna",
  description: "GTM Engineering & AI Solutions",
  url: "https://verluna.com",
  email: "info@verluna.de",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Berlin",
    addressCountry: "DE",
  },
  serviceType: ["GTM Automation", "AI Agents", "RevOps Engineering"],
  areaServed: "Worldwide",
  priceRange: "$$$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-charcoal text-off-white min-h-screen`}
      >
        <Providers>
          <div className="relative bg-circuit-grid">
            {/* Dot grid background with parallax - now handled by CSS bg-circuit-grid */}
            {/* 3D particle field is rendered by Providers component */}

            {/* Gradient orbs for ambient lighting */}
            <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-electric-purple/5 rounded-full blur-[120px] pointer-events-none z-[1]" />
            <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-terminal-green/5 rounded-full blur-[100px] pointer-events-none z-[1]" />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-signal-blue/3 rounded-full blur-[150px] pointer-events-none z-[1]" />

            {/* Noise texture overlay */}
            <div className="noise-overlay" />

            {/* Content */}
            <div className="relative z-10">
              {/* Skip to content link for accessibility */}
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
