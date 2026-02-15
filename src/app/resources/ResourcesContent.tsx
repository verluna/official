"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { resourcesCopy, LeadMagnet } from "@/data/copy/resources";
import { GlowCard, Button } from "@/components/ui";

type GlowColor = "green" | "purple" | "blue";

const colorAccents: Record<GlowColor, { text: string; border: string }> = {
  blue: { text: "text-signal-blue", border: "border-signal-blue/30" },
  green: { text: "text-terminal-green", border: "border-terminal-green/30" },
  purple: { text: "text-electric-purple", border: "border-electric-purple/30" },
};

function ResourceCard({ resource, delay }: { resource: LeadMagnet; delay: number }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const accent = colorAccents[resource.color];

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/resources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, resourceId: resource.id }),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <GlowCard glowColor={resource.color} hover={false} delay={delay} className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className={`font-mono text-xs ${accent.text}`}>
          {resource.trackAlignment}
        </span>
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-off-white mb-2">
        {resource.title}
      </h3>

      <p className="text-sm text-steel-grey leading-relaxed mb-4">
        {resource.description}
      </p>

      {/* Contents list */}
      <div className={`mb-6 p-4 rounded-lg border ${accent.border} bg-surface/50`}>
        <p className="font-mono text-xs text-steel-grey uppercase tracking-wider mb-3">
          What&apos;s inside:
        </p>
        <ul className="space-y-1.5">
          {resource.contents.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-steel-grey">
              <span className={`mt-0.5 ${accent.text}`}>&gt;</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Value proposition */}
      <p className="text-sm text-off-white italic mb-6 leading-relaxed">
        &ldquo;{resource.valueProposition}&rdquo;
      </p>

      {/* Form or success state */}
      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 rounded-lg border border-terminal-green/30 bg-terminal-green/5 text-center"
        >
          <p className="font-mono text-sm text-terminal-green">
            Check your inbox. Resource is on the way.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            className="flex-grow px-4 py-3 rounded bg-void border border-surface-border text-off-white font-mono text-sm placeholder:text-steel-grey/50 focus:outline-none focus:border-terminal-green/50 transition-colors"
          />
          <Button
            variant="primary"
            size="sm"
            onClick={() => {}}
          >
            {status === "loading" ? "..." : resource.ctaLabel}
          </Button>
        </form>
      )}

      {status === "error" && (
        <p className="mt-2 font-mono text-xs text-red-400">{errorMsg}</p>
      )}
    </GlowCard>
  );
}

export function ResourcesContent() {
  const { leadMagnets, bottomCta } = resourcesCopy;

  return (
    <div className="pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Lead magnet grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {leadMagnets.map((resource, i) => (
            <ResourceCard key={resource.id} resource={resource} delay={i * 0.1} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-off-white mb-4">
            {bottomCta.heading}
          </h2>
          <p className="text-steel-grey mb-8 leading-relaxed">
            {bottomCta.description}
          </p>
          <Button href={bottomCta.ctaHref}>{bottomCta.ctaLabel}</Button>
        </motion.div>
      </div>
    </div>
  );
}
