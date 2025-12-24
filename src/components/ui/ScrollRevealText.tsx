'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  start?: number;
  end?: number;
  color?: string;
  highlightColor?: string;
  stagger?: number;
}

// Individual character component
function Character({
  char,
  progress,
  threshold,
  highlightColor,
}: {
  char: string;
  progress: MotionValue<number>;
  threshold: number;
  highlightColor: string;
}) {
  const opacity = useTransform(
    progress,
    [threshold, threshold + 0.05],
    [0.2, 1]
  );

  const color = useTransform(
    progress,
    [threshold, threshold + 0.05, threshold + 0.15],
    ['inherit', highlightColor, 'inherit']
  );

  const y = useTransform(
    progress,
    [threshold, threshold + 0.05],
    [5, 0]
  );

  // Handle whitespace
  if (char === ' ') {
    return <span>&nbsp;</span>;
  }

  return (
    <motion.span
      style={{ opacity, color, y, display: 'inline-block' }}
      className="transition-transform"
    >
      {char}
    </motion.span>
  );
}

export function ScrollRevealText({
  text,
  className,
  as: Component = 'p',
  start = 0.2,
  end = 0.8,
  highlightColor = '#00FF94',
  stagger = 0.02,
}: ScrollRevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${1 - start}`, `start ${1 - end}`],
  });

  // Split text into characters and calculate thresholds
  const characters = useMemo(() => {
    return text.split('').map((char, index) => ({
      char,
      threshold: (index / text.length) * (1 - stagger * text.length),
    }));
  }, [text, stagger]);

  // Fallback for reduced motion
  if (prefersReducedMotion) {
    return (
      <Component ref={ref as React.RefObject<HTMLParagraphElement>} className={className}>
        {text}
      </Component>
    );
  }

  return (
    <Component
      ref={ref as React.RefObject<HTMLParagraphElement>}
      className={cn('inline', className)}
    >
      {characters.map((item, index) => (
        <Character
          key={index}
          char={item.char}
          progress={scrollYProgress}
          threshold={item.threshold}
          highlightColor={highlightColor}
        />
      ))}
    </Component>
  );
}

// Word-by-word reveal variant (better for longer text)
interface ScrollRevealWordsProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  start?: number;
  end?: number;
}

export function ScrollRevealWords({
  text,
  className,
  as: Component = 'p',
  start = 0.2,
  end = 0.8,
}: ScrollRevealWordsProps) {
  const ref = useRef<HTMLElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${1 - start}`, `start ${1 - end}`],
  });

  const words = useMemo(() => text.split(' '), [text]);

  if (prefersReducedMotion) {
    return (
      <Component ref={ref as React.RefObject<HTMLParagraphElement>} className={className}>
        {text}
      </Component>
    );
  }

  return (
    <Component
      ref={ref as React.RefObject<HTMLParagraphElement>}
      className={cn('inline', className)}
    >
      {words.map((word, index) => {
        const threshold = index / words.length;

        return (
          <Word key={index} word={word} progress={scrollYProgress} threshold={threshold} />
        );
      })}
    </Component>
  );
}

function Word({
  word,
  progress,
  threshold,
}: {
  word: string;
  progress: MotionValue<number>;
  threshold: number;
}) {
  const opacity = useTransform(progress, [threshold, threshold + 0.1], [0.2, 1]);
  const y = useTransform(progress, [threshold, threshold + 0.1], [10, 0]);
  const blur = useTransform(progress, [threshold, threshold + 0.1], [4, 0]);

  return (
    <motion.span
      style={{
        opacity,
        y,
        filter: useTransform(blur, (b) => `blur(${b}px)`),
        display: 'inline-block',
      }}
      className="mr-[0.25em]"
    >
      {word}
    </motion.span>
  );
}

export default ScrollRevealText;
