"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-charcoal/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Terminal Status */}
          <div className="font-mono text-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-steel-grey">&gt; Status:</span>
              <span className="flex items-center gap-1.5">
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-terminal-green"
                />
                <span className="text-terminal-green">Operational</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-steel-grey">&gt; Location:</span>
              <span className="text-off-white">Berlin, DE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-steel-grey">&gt; Copyright:</span>
              <span className="text-off-white">2025 Verluna</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono text-steel-grey uppercase tracking-wider">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/services"
                className="text-sm text-off-white hover:text-terminal-green transition-colors"
              >
                Services
              </Link>
              <Link
                href="/work"
                className="text-sm text-off-white hover:text-terminal-green transition-colors"
              >
                Work
              </Link>
              <Link
                href="/#about"
                className="text-sm text-off-white hover:text-terminal-green transition-colors"
              >
                About
              </Link>
              <Link
                href="/faq"
                className="text-sm text-off-white hover:text-terminal-green transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/#contact"
                className="text-sm text-off-white hover:text-terminal-green transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono text-steel-grey uppercase tracking-wider">
              Legal
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/privacy"
                className="text-sm text-off-white hover:text-terminal-green transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/privacy#cookies"
                className="text-sm text-off-white hover:text-terminal-green transition-colors"
              >
                Cookie Policy
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono text-steel-grey uppercase tracking-wider">
              Connect
            </h4>
            <nav className="flex flex-col gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-off-white hover:text-terminal-green transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-off-white hover:text-terminal-green transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="mailto:info@verluna.de"
                className="text-sm text-off-white hover:text-terminal-green transition-colors flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info@verluna.de
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-surface-border">
          <p className="text-center text-xs font-mono text-steel-grey">
            <span className="text-terminal-green">&gt;</span> Built with precision.
            Deployed with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
