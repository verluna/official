"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/methodology", label: "Methodology" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

function VerlunaLogo({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 841.89 595.28"
      className={className}
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

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMenuOpen || !menuRef.current) return;

    const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);
    firstElement?.focus();

    return () => document.removeEventListener("keydown", handleTabKey);
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-ink/85 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 text-text transition-colors duration-200 hover:text-white"
            aria-label="Verluna home"
          >
            <VerlunaLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 flex-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  isActive(link.href)
                    ? "text-text"
                    : "text-text-muted hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link
              href="/scorecard"
              className="text-sm font-medium text-text-muted hover:text-text border border-line-strong hover:border-text/40 px-4 py-2 rounded-md transition-colors duration-200 whitespace-nowrap"
            >
              Readiness assessment
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium bg-text text-ink px-4 py-2 rounded-md hover:bg-white transition-colors duration-200 whitespace-nowrap"
            >
              Book an intro call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-text-muted hover:text-text transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu — full-screen overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 top-16 z-40 bg-ink/98 backdrop-blur-xl border-t border-line"
          >
            <nav
              ref={menuRef}
              id="mobile-menu"
              aria-label="Mobile navigation"
              className="flex flex-col h-full px-6 py-8 gap-1"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 text-lg font-medium border-b border-line transition-colors duration-200 ${
                      isActive(link.href)
                        ? "text-text"
                        : "text-text-muted hover:text-text"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTAs */}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.2 }}
                className="mt-8 flex flex-col gap-3"
              >
                <Link
                  href="/scorecard"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center text-sm font-medium text-text border border-line-strong hover:border-text/40 px-4 py-3 rounded-md transition-colors duration-200"
                >
                  Readiness assessment
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center text-sm font-medium bg-text text-ink px-4 py-3 rounded-md hover:bg-white transition-colors duration-200"
                >
                  Book an intro call
                </Link>
              </motion.div>

              <div className="mt-auto pt-6 text-sm text-text-faint">
                Berlin, Germany
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
