import Link from "next/link";

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
  { href: "/scorecard", label: "Readiness Assessment" },
  { href: "/insights#newsletter", label: "Newsletter" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <div className="text-text">
              <VerlunaLogo />
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              Agent operations for European enterprises. Berlin, Germany.
            </p>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-text">Company</h4>
            <nav className="flex flex-col gap-2.5" aria-label="Company links">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-muted hover:text-text transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-text">Resources</h4>
            <nav className="flex flex-col gap-2.5" aria-label="Resource links">
              {resourceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-muted hover:text-text transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-text">Connect</h4>
            <nav className="flex flex-col gap-2.5" aria-label="Connect links">
              <a
                href="https://linkedin.com/in/tolgaoral"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted hover:text-text transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/tolgaoral"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted hover:text-text transition-colors duration-200"
              >
                GitHub
              </a>
              <a
                href="mailto:hello@verluna.de"
                className="text-sm text-text-muted hover:text-text transition-colors duration-200"
              >
                hello@verluna.de
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-text-faint">
            &copy; 2026 Verluna. Berlin, Germany.
          </span>
          <div className="flex items-center gap-5 text-xs text-text-faint">
            <Link href="/privacy" className="hover:text-text transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/impressum" className="hover:text-text transition-colors duration-200">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
