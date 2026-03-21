"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function VerlunaLogo() {
  return (
    <svg
      viewBox="0 0 841.89 595.28"
      className="h-5 w-auto"
      aria-label="Verluna"
      role="img"
      fill="currentColor"
    >
      <g>
        <path d="M112.78,313.4l28.17-70.04h25.58l-44.92,106.58H98.46L53.7,243.36h31.82L112.78,313.4z" />
        <path d="M256.05,263.91h-57.1v21.47h41.87v19.79h-41.87v24.21h59.84v20.56h-88.92V243.36h86.18V263.91z" />
        <path d="M267.32,243.36H327c24.21,0,38.22,14.47,38.22,35.02c0,13.7-7.46,24.67-18.73,30.45l22.54,41.11h-33.04l-18.88-36.54H296.4v36.54h-29.08V243.36z M335.38,278.38c0-10.2-6.7-14.92-16.6-14.92H296.4v29.84h22.38C328.68,293.3,335.38,288.58,335.38,278.38z" />
        <path d="M375.57,243.36h29.08v86.03h54.21v20.56h-83.29V243.36z" />
        <path d="M509.56,351.92c-32.58,0-50.55-16.6-50.55-49.49v-59.08h29.08v62.58c0,18.42,8.98,24.97,22.69,24.97c13.7,0,23.3-6.55,23.3-26.49v-61.06h23.91v60.6C558.13,332.73,541.99,351.92,509.56,351.92z" />
        <path d="M571.07,243.36h21.16L644.46,300v-56.64h23.91v106.58h-16.9l-56.49-60.3v60.3h-23.91V243.36z" />
        <polygon points="740.38,243.36 719.22,243.36 671.25,349.94 697.59,349.94 713.3,312.15 713.51,312.15 726.98,280.2 740.46,312.15 740.63,312.15 756.37,349.94 788.19,349.94" />
      </g>
    </svg>
  );
}

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/methodology", label: "Methodology" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

const resourceLinks = [
  { href: "/insights", label: "Insights" },
  { href: "/scorecard", label: "Scorecard" },
  { href: "/insights#newsletter", label: "Newsletter" },
];

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-void">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Brand + tagline + status */}
          <div className="space-y-5">
            <div className="text-off-white">
              <VerlunaLogo />
            </div>
            <p className="text-sm text-steel-grey leading-relaxed">
              Agent Operations for European Enterprises.
            </p>
            <div className="flex items-center gap-2">
              <motion.span
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-terminal-green flex-shrink-0"
              />
              <span className="font-mono text-xs text-terminal-green">Operational</span>
            </div>
          </div>

          {/* Col 2: Company */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs text-steel-grey uppercase tracking-widest">
              Company
            </h4>
            <nav className="flex flex-col gap-2.5" aria-label="Company links">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-off-white/70 hover:text-off-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Resources */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs text-steel-grey uppercase tracking-widest">
              Resources
            </h4>
            <nav className="flex flex-col gap-2.5" aria-label="Resource links">
              {resourceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-off-white/70 hover:text-off-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 4: Connect */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs text-steel-grey uppercase tracking-widest">
              Connect
            </h4>
            <nav className="flex flex-col gap-2.5" aria-label="Connect links">
              <a
                href="https://linkedin.com/in/tolgaoral"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-off-white/70 hover:text-off-white transition-colors duration-200 flex items-center gap-2.5"
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/tolgaoral"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-off-white/70 hover:text-off-white transition-colors duration-200 flex items-center gap-2.5"
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="mailto:hello@verluna.com"
                className="text-sm text-off-white/70 hover:text-off-white transition-colors duration-200 flex items-center gap-2.5"
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@verluna.com
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 font-mono text-xs text-steel-grey">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Berlin, DE
          </div>

          <div className="flex items-center gap-5 font-mono text-xs text-steel-grey">
            <Link href="/privacy" className="hover:text-off-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/impressum" className="hover:text-off-white transition-colors duration-200">
              Impressum
            </Link>
            <span>&copy; 2026 Verluna</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
