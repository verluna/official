/**
 * Design tokens as reusable class string constants.
 * Prevents copy-pasting utility classes across components.
 *
 * Accessibility audit (WCAG 2.1 AA):
 * ---------------------------------------------------------------
 * Combo                                  | Ratio  | AA Normal (4.5:1) | AA Large (3:1)
 * terminal-green (#00FF94) on charcoal (#0A0A0A) | ~14.8:1 | PASS              | PASS
 * terminal-green (#00FF94) on void (#050505)     | ~15.3:1 | PASS              | PASS
 * steel-grey (#A1A1AA) on charcoal (#0A0A0A)     |  ~7.8:1 | PASS              | PASS
 * steel-grey (#A1A1AA) on void (#050505)         |  ~8.0:1 | PASS              | PASS
 * off-white (#EDEDED) on charcoal (#0A0A0A)      | ~16.9:1 | PASS              | PASS
 * off-white (#EDEDED) on surface (#111111)        | ~16.3:1 | PASS              | PASS
 *
 * All primary text/background combinations pass WCAG 2.1 AA for both
 * normal text (4.5:1) and large text (3:1).
 *
 * Reduced motion: globals.css contains a comprehensive `prefers-reduced-motion: reduce`
 * media query that applies to *, *::before, *::after — covering all animation classes
 * including scroll-transform, shimmer, scan-line, glow, float, and data-flow.
 * A second instance reinforces .scroll-transform specifically. Full coverage confirmed.
 */

// Section layout
export const sectionPadding = "py-16 md:py-24";
export const containerWidth = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

// Section label (the "> Label" pattern used in every section)
export const sectionLabelStyle = "flex items-center gap-3 mb-4";
export const sectionLabelIcon = "text-terminal-green font-mono";
export const sectionLabelText = "text-sm font-mono text-steel-grey uppercase tracking-wider";

// Headings
export const sectionHeading = "text-3xl sm:text-4xl font-semibold tracking-tighter";
export const sectionSubheading = "text-steel-grey max-w-2xl";

// Card patterns
export const cardBase = "rounded-lg border border-surface-border bg-surface/50 backdrop-blur-sm p-6 transition-all duration-300";

// Track color mappings (service tracks)
export const trackColors = {
  audit: {
    text: "text-signal-blue",
    bg: "bg-signal-blue/10",
    border: "border-signal-blue/20",
    badge: "blue" as const,
    glow: "hover:border-signal-blue/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
  },
  ops: {
    text: "text-terminal-green",
    bg: "bg-terminal-green/10",
    border: "border-terminal-green/20",
    badge: "green" as const,
    glow: "hover:border-terminal-green/50 hover:shadow-[0_0_40px_rgba(0,255,148,0.15)]",
  },
  agents: {
    text: "text-electric-purple",
    bg: "bg-electric-purple/10",
    border: "border-electric-purple/20",
    badge: "purple" as const,
    glow: "hover:border-electric-purple/50 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)]",
  },
} as const;

export type TrackKey = keyof typeof trackColors;
