"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  MotionValue,
} from "framer-motion";
import { Reveal } from "./Reveal";

interface Discipline {
  name: string;
  body: string;
  deliverable: string;
  copper?: boolean;
}

const disciplines: Discipline[] = [
  {
    name: "Audit",
    body: "We map your systems, data, and workflows, then tell you what is ready for autonomy and what is not.",
    deliverable: "A prioritized roadmap with effort, risk, and expected return per item.",
  },
  {
    name: "Architect",
    body: "Orchestration, governance, human-in-the-loop boundaries, evaluation. Structure before code.",
    deliverable: "An operating-layer design your team can build against.",
  },
  {
    name: "Build",
    body: "Production systems, not demos. Agents wired into your CRM, support desk, and data stack with observability from day one.",
    deliverable: "Deployed, monitored, documented, handed over.",
    copper: true,
  },
  {
    name: "Codify",
    body: "Process knowledge that lives in people’s heads becomes versioned playbooks and skills your agents execute.",
    deliverable: "A skill library your organization owns and extends.",
  },
];

function StackCard({
  d,
  index,
  total,
  progress,
}: {
  d: Discipline;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // As the next card arrives, this one settles back and dims slightly.
  const start = index / total;
  const end = (index + 1) / total;
  const scale = useTransform(progress, [start, end], [1, 0.94]);
  const dim = useTransform(
    progress,
    [start, end],
    ["brightness(1)", "brightness(0.45)"]
  );

  const isLast = index === total - 1;

  return (
    <div
      className="sticky"
      style={{ top: `calc(6rem + ${index * 14}px)`, zIndex: index + 1 }}
    >
      <motion.article
        style={isLast ? undefined : { scale, filter: dim }}
        className={`rounded-lg border min-h-[24rem] lg:min-h-[26rem] p-8 lg:p-14 flex flex-col justify-between origin-top ${
          d.copper
            ? "bg-accent border-accent text-ink-on-accent"
            : "bg-ink-raised border-line-strong"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <h3
            className={`lg:col-span-5 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter ${
              d.copper ? "text-ink-on-accent" : "text-text"
            }`}
          >
            {d.name}
          </h3>
          <div className="lg:col-span-6 lg:col-start-7">
            <p
              className={`text-lg leading-relaxed ${
                d.copper ? "text-ink-on-accent/80" : "text-text-muted"
              }`}
            >
              {d.body}
            </p>
          </div>
        </div>
        <div
          className={`mt-10 pt-6 border-t text-base max-w-2xl ${
            d.copper
              ? "border-ink-on-accent/20 text-ink-on-accent"
              : "border-line text-text"
          }`}
        >
          {d.deliverable}
        </div>
      </motion.article>
    </div>
  );
}

export function Disciplines() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end 0.9"],
  });

  return (
    <section className="section-padding border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-text max-w-2xl">
            Four disciplines, one operating layer.
          </h2>
        </Reveal>

        {reduce ? (
          <div className="mt-14 flex flex-col gap-5">
            {disciplines.map((d) => (
              <article
                key={d.name}
                className={`rounded-lg border p-8 lg:p-14 ${
                  d.copper
                    ? "bg-accent border-accent text-ink-on-accent"
                    : "bg-ink-raised border-line-strong"
                }`}
              >
                <h3 className="text-5xl font-semibold tracking-tighter">
                  {d.name}
                </h3>
                <p className={`mt-4 text-lg leading-relaxed ${d.copper ? "text-ink-on-accent/80" : "text-text-muted"}`}>
                  {d.body}
                </p>
                <p className={`mt-8 pt-6 border-t ${d.copper ? "border-ink-on-accent/20" : "border-line text-text"}`}>
                  {d.deliverable}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div ref={containerRef} className="mt-14 flex flex-col gap-10">
            {disciplines.map((d, i) => (
              <StackCard
                key={d.name}
                d={d}
                index={i}
                total={disciplines.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
