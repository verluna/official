"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HeroSystem } from "./HeroSystem";

const LINE_1 = ["Companies", "will", "run", "on", "agents."];
const LINE_2 = ["We", "make", "yours", "run"];

function KineticLine({
  words,
  startDelay,
  italicLast,
}: {
  words: string[];
  startDelay: number;
  italicLast?: string;
}) {
  const reduce = useReducedMotion();
  const all = italicLast ? [...words, italicLast] : words;

  return (
    <span className="block">
      {all.map((word, i) => {
        const isItalic = italicLast !== undefined && i === all.length - 1;
        return (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden align-bottom pb-1 -mb-1"
          >
            <motion.span
              className={`inline-block ${isItalic ? "italic text-accent pr-1" : ""}`}
              initial={reduce ? false : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.7,
                delay: startDelay + i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
              {i < all.length - 1 ? " " : ""}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  const enter = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          {/* Copy */}
          <div className="lg:col-span-8">
            <h1 className="text-[2.6rem] leading-[1.06] sm:text-5xl lg:text-[3.4rem] xl:text-[3.6rem] font-semibold tracking-tighter text-text sm:leading-[1.06]">
              <KineticLine words={LINE_1} startDelay={0.1} />
              <KineticLine words={LINE_2} startDelay={0.45} italicLast="well." />
            </h1>

            <motion.p
              {...enter(0.9)}
              className="mt-7 text-lg sm:text-xl text-text-muted max-w-xl leading-relaxed"
            >
              Verluna audits, architects, and builds the operating layer your
              organization needs to put AI agents to work in production.
            </motion.p>

            <motion.div {...enter(1.05)} className="mt-10 flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="/contact">
                Book an intro call
              </Button>
              <Button variant="secondary" size="lg" href="/methodology">
                See how we work
              </Button>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block lg:col-span-4"
          >
            <HeroSystem />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
