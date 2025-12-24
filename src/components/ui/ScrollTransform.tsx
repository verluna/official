'use client';

import { ReactNode, useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useScrollTimelineSupport } from '@/hooks/use3DSupport';

type AnimationPreset = 'scale-up' | 'fade-up' | 'slide-left' | 'slide-right' | 'rotate-in' | 'parallax';

interface ScrollTransformProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationPreset;
  start?: string;
  end?: string;
  once?: boolean;
}

// CSS keyframes for scroll-timeline (added via globals.css)
const cssAnimationMap: Record<AnimationPreset, string> = {
  'scale-up': 'scroll-scale-up',
  'fade-up': 'scroll-fade-up',
  'slide-left': 'scroll-slide-left',
  'slide-right': 'scroll-slide-right',
  'rotate-in': 'scroll-rotate-in',
  'parallax': 'scroll-parallax',
};

export function ScrollTransform({
  children,
  className,
  animation = 'fade-up',
  start = 'entry 0%',
  end = 'entry 100%',
  once = true,
}: ScrollTransformProps) {
  const supportsScrollTimeline = useScrollTimelineSupport();
  const [hasAnimated, setHasAnimated] = useState(false);

  // Use native CSS if supported, otherwise fallback to Framer Motion
  if (supportsScrollTimeline) {
    return (
      <NativeScrollTransform
        className={className}
        animation={animation}
        start={start}
        end={end}
      >
        {children}
      </NativeScrollTransform>
    );
  }

  return (
    <FramerScrollTransform
      className={className}
      animation={animation}
      once={once}
      hasAnimated={hasAnimated}
      setHasAnimated={setHasAnimated}
    >
      {children}
    </FramerScrollTransform>
  );
}

// Native CSS scroll-timeline implementation
function NativeScrollTransform({
  children,
  className,
  animation,
  start,
  end,
}: {
  children: ReactNode;
  className?: string;
  animation: AnimationPreset;
  start: string;
  end: string;
}) {
  const animationName = cssAnimationMap[animation];

  return (
    <div
      className={cn('scroll-transform', className)}
      style={{
        animation: `${animationName} linear`,
        animationTimeline: 'view()',
        animationRange: `${start} ${end}`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

// Framer Motion fallback implementation
function FramerScrollTransform({
  children,
  className,
  animation,
  once,
  hasAnimated,
  setHasAnimated,
}: {
  children: ReactNode;
  className?: string;
  animation: AnimationPreset;
  once: boolean;
  hasAnimated: boolean;
  setHasAnimated: (value: boolean) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Get animation properties based on preset
  const getAnimationProps = (progress: MotionValue<number>) => {
    switch (animation) {
      case 'scale-up':
        return {
          scale: useTransform(progress, [0, 0.3], [0.8, 1]),
          opacity: useTransform(progress, [0, 0.3], [0, 1]),
        };
      case 'fade-up':
        return {
          y: useTransform(progress, [0, 0.3], [40, 0]),
          opacity: useTransform(progress, [0, 0.3], [0, 1]),
        };
      case 'slide-left':
        return {
          x: useTransform(progress, [0, 0.3], [100, 0]),
          opacity: useTransform(progress, [0, 0.3], [0, 1]),
        };
      case 'slide-right':
        return {
          x: useTransform(progress, [0, 0.3], [-100, 0]),
          opacity: useTransform(progress, [0, 0.3], [0, 1]),
        };
      case 'rotate-in':
        return {
          rotate: useTransform(progress, [0, 0.3], [-10, 0]),
          y: useTransform(progress, [0, 0.3], [50, 0]),
          opacity: useTransform(progress, [0, 0.3], [0, 1]),
        };
      case 'parallax':
        return {
          y: useTransform(progress, [0, 1], [100, -100]),
        };
      default:
        return {
          opacity: useTransform(progress, [0, 0.3], [0, 1]),
        };
    }
  };

  // Use whileInView for once animations, scroll-based for continuous
  if (once && animation !== 'parallax') {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={getInitialState(animation)}
        whileInView={getFinalState(animation)}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        onViewportEnter={() => setHasAnimated(true)}
      >
        {children}
      </motion.div>
    );
  }

  // Continuous scroll-based animation
  const animProps = getAnimationProps(scrollYProgress);

  return (
    <motion.div ref={ref} className={className} style={animProps}>
      {children}
    </motion.div>
  );
}

// Helper functions for initial/final states
function getInitialState(animation: AnimationPreset) {
  switch (animation) {
    case 'scale-up':
      return { scale: 0.8, opacity: 0 };
    case 'fade-up':
      return { y: 40, opacity: 0 };
    case 'slide-left':
      return { x: 100, opacity: 0 };
    case 'slide-right':
      return { x: -100, opacity: 0 };
    case 'rotate-in':
      return { rotate: -10, y: 50, opacity: 0 };
    default:
      return { opacity: 0 };
  }
}

function getFinalState(animation: AnimationPreset) {
  switch (animation) {
    case 'scale-up':
      return { scale: 1, opacity: 1 };
    case 'fade-up':
      return { y: 0, opacity: 1 };
    case 'slide-left':
      return { x: 0, opacity: 1 };
    case 'slide-right':
      return { x: 0, opacity: 1 };
    case 'rotate-in':
      return { rotate: 0, y: 0, opacity: 1 };
    default:
      return { opacity: 1 };
  }
}

export default ScrollTransform;
