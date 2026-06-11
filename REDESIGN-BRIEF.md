# Verluna v2 Redesign Brief (2026-06)

Read this fully before touching any file. This is the binding design contract for the verluna.de redesign. The homepage and foundation are DONE and are your reference implementation.

## Positioning

Verluna is an agent-operations consultancy in Berlin. It speaks to European companies that want to adapt their systems, workflows, and workforce for the agentic era. Four disciplines: **Audit, Architect, Build, Codify**. Three engagements: Readiness Audit (EUR 7-10K, 2-3 weeks), System Build (EUR 20-60K, fixed scope), Managed Agent Operations (EUR 8-15K/month, 6-month minimum, the lead offer). Voice: plain, confident, concrete, European directness. No hype verbs (elevate, unleash, seamless, revolutionize, next-gen).

## Design language (locked, non-negotiable)

- **Theme:** dark, single theme, locked. Background `bg-ink` (#0a0a0b), raised surfaces `bg-ink-raised`, borders `border-line` / `border-line-strong`.
- **Text:** `text-text` (off-white), `text-text-muted`, `text-text-faint`.
- **ONE accent:** copper, `text-accent` / `border-accent` / `bg-accent-soft` (#d9633b). Used sparingly: key numbers, hover states, one highlight per section max. Never as large background fills.
- **Fonts:** Geist (default sans). Geist Mono (`font-mono`) ONLY for numbers, prices, and metrics. Never mono headlines, never mono body copy, never mono uppercase eyebrow labels.
- **Radius rule:** interactive elements `rounded-md` (8px), containers/cards `rounded-lg` (14px). Nothing else.
- **Buttons:** use `@/components/ui/Button` (primary = off-white bg/ink text, secondary = bordered, ghost). Do not invent button styles.
- **Motion:** use `Reveal` from `@/components/home` for scroll-entry reveals. Subtle hover border/bg shifts on cards. No infinite loops, no glow, no scale-pulse. Everything honors `useReducedMotion`.
- **Section rhythm:** `section-padding` class + `border-t border-line` between sections + `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8` container.
- **Headlines:** `text-3xl sm:text-4xl font-semibold tracking-tighter text-text`. Section headline alone, no label above it.

## Hard bans (the slop list — any of these = rejected work)

1. Em-dash (—) or en-dash (–) anywhere in visible text. Use period, comma, colon, or hyphen.
2. Eyebrow labels (small uppercase tracking text above headlines). Maximum 1 per 3 sections per page; default to ZERO. The headline alone is enough.
3. Section numbering (`01 /`, `001 ·`, `Step 1`, `Phase 02`). Steps are named by their verb, not numbered.
4. Terminal motifs: `> ` prefixes, `$ ` prompts, blinking cursors, scan lines, ScrambleText, TypingIndicator, TerminalHeader, StatusBar. Remove every usage.
5. Glow effects, gradient text, gradient orbs, noise overlays, colored card borders (except the single accent-border card pattern on the lead pricing card).
6. Decorative status dots (pulsing green dots, "Operational" indicators).
7. Multiple accent colors. `terminal-green`, `electric-purple`, `signal-blue` classes are legacy; replace with the v2 tokens above when you touch a file.
8. Three equal feature cards in a row. Use asymmetric grids (7/5 or 5/7 col splits), stacked layouts, or 2-col.
9. Centered hero/section headers as default. Left-aligned.
10. Fake metrics or fake-precise numbers. Only numbers already present in the repo's data files or this brief.
11. Middle-dot (·) separator chains.
12. Quotes longer than 3 lines; attribution always name + role.
13. Pills/labels overlaid on images; photo-credit decoration captions.
14. Layout family repetition: no two adjacent sections with the same layout; max 2 consecutive image+text splits.
15. `window.addEventListener("scroll")`. Use Motion `useScroll`/`whileInView` or IntersectionObserver.
16. Hand-rolled decorative SVG illustrations and div-built fake product screenshots.

## Reference implementation (read these before writing)

- `src/app/globals.css` (tokens)
- `src/components/home/*` (Hero, OperatingProof, Disciplines, Engagements, Evidence, FounderNote, ClosingCTA, Reveal)
- `src/components/layout/Header.tsx`, `Footer.tsx`
- `src/components/ui/Button.tsx`

## Shared-file rules

- DO NOT edit: `globals.css`, `layout.tsx`, `Header.tsx`, `Footer.tsx`, `Button.tsx`, anything in `src/components/home/`, `src/app/page.tsx`.
- You own only the routes assigned to you and may create new components under `src/components/<your-area>/`.
- Old slop components (`GlowCard`, `SpotlightCard`, `ScrambleText`, `TerminalHeader`, `StatusBar`, `TypingIndicator`, `BentoCard`, `Badge`) must not be imported by your pages. Replace with plain markup in the v2 language. Do not delete the shared files themselves.
- CTA label discipline: every contact-intent CTA on the site says exactly "Book an intro call" and links to `/contact`. Assessment-intent CTAs say "Readiness assessment" and link to `/scorecard`.

## Verification

- After your changes: `npx tsc --noEmit` must pass. Do NOT run `npm run build` (parallel agents share .next).
- Re-read every visible string you wrote: grammar, referents, no AI-cute phrasing.
- Keep routes, slugs, metadata exports, and analytics-relevant IDs unchanged.
