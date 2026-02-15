"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button, ScrambleText, TerminalLabel } from "@/components/ui";
import { HeroDiagram } from "./HeroDiagram";
import { ArrowRight, Download } from "lucide-react";
import { homeCopy } from "@/data/copy/home";

export function HeroSB7() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [headlineComplete, setHeadlineComplete] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const { hero } = homeCopy;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-16 pb-20 overflow-hidden"
    >
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] rounded-full bg-terminal-green/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] rounded-full bg-electric-purple/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* System status badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-surface-border bg-surface/50 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-terminal-green" />
              </span>
              <span className="font-mono text-xs text-steel-grey uppercase tracking-wider">
                {hero.badge}
              </span>
            </motion.div>

            {/* Headline — first line scramble, rest static */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter leading-[1.1]">
                <ScrambleText
                  text={hero.headline[0]}
                  className="block text-off-white"
                  scrambleSpeed={25}
                  revealDelay={40}
                  as="span"
                  onComplete={() => setHeadlineComplete(true)}
                />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: headlineComplete ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="block text-off-white"
                >
                  {hero.headline[1]}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: headlineComplete ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="block text-gradient"
                >
                  {hero.headline[2]}
                </motion.span>
              </h1>
            </motion.div>

            {/* Sub-headline — names the pain */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-steel-grey max-w-xl leading-relaxed"
            >
              {hero.subheadline}
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button href={hero.ctaPrimary.href} size="lg">
                {hero.ctaPrimary.label}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                variant="secondary"
                href={hero.ctaSecondary.href}
                size="lg"
              >
                <Download className="w-4 h-4 mr-2" />
                {hero.ctaSecondary.label}
              </Button>
            </motion.div>

            {/* Tech stack */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <TerminalLabel prefix="$">stack</TerminalLabel>
              <div className="flex flex-wrap items-center gap-4">
                {hero.techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-1.5 text-sm font-mono text-steel-grey hover:text-off-white transition-colors cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-terminal-green/60" />
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Animated Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            <div className="relative p-6 rounded-xl border border-surface-border bg-surface/30 backdrop-blur-sm">
              <HeroDiagram />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono text-steel-grey uppercase tracking-wider">
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border border-surface-border flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-terminal-green"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
