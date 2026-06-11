"use client";

import { useReducedMotion } from "framer-motion";

/*
 * The systems Verluna agents actually run against. One marquee on the page,
 * slow and quiet. Static row under reduced motion.
 */

const SYSTEMS = [
  "HubSpot",
  "Salesforce",
  "Claude",
  "n8n",
  "Slack",
  "Jira",
  "BigQuery",
  "Notion",
  "Google Workspace",
  "Temporal",
  "PostgreSQL",
  "Kubernetes",
];

export function SystemsMarquee() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <section className="border-t border-line py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap gap-x-10 gap-y-3">
          {SYSTEMS.map((s) => (
            <span key={s} className="text-sm text-text-faint whitespace-nowrap">
              {s}
            </span>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      className="border-t border-line py-8 overflow-hidden"
      aria-label="Systems we integrate agents with"
    >
      <div className="flex w-max animate-marquee gap-14">
        {[...SYSTEMS, ...SYSTEMS].map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="text-base text-text-faint whitespace-nowrap"
            aria-hidden={i >= SYSTEMS.length}
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
