'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useScrollTimelineSupport } from '@/hooks/use3DSupport';

interface ScrollProgressProps {
  color?: 'green' | 'purple' | 'blue';
  position?: 'top' | 'bottom';
  offset?: number;
  showPercentage?: boolean;
}

const colorMap = {
  green: 'var(--color-terminal-green, #00FF94)',
  purple: 'var(--color-electric-purple, #7C3AED)',
  blue: 'var(--color-signal-blue, #3B82F6)',
};

const glowMap = {
  green: '0 0 10px rgba(0, 255, 148, 0.5), 0 0 20px rgba(0, 255, 148, 0.3)',
  purple: '0 0 10px rgba(124, 58, 237, 0.5), 0 0 20px rgba(124, 58, 237, 0.3)',
  blue: '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)',
};

export function ScrollProgress({
  color = 'green',
  position = 'top',
  offset = 64,
  showPercentage = false,
}: ScrollProgressProps) {
  const supportsScrollTimeline = useScrollTimelineSupport();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  // Use native CSS scroll-timeline if supported
  if (supportsScrollTimeline) {
    return (
      <NativeScrollProgress
        color={color}
        position={position}
        offset={offset}
        showPercentage={showPercentage}
      />
    );
  }

  // Fallback to Framer Motion
  return (
    <FramerScrollProgress
      color={color}
      position={position}
      offset={offset}
      showPercentage={showPercentage}
    />
  );
}

// Native CSS scroll-timeline implementation (GPU accelerated)
function NativeScrollProgress({
  color,
  position,
  offset,
  showPercentage,
}: ScrollProgressProps) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (!showPercentage) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setPercentage(Math.round(progress));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showPercentage]);

  return (
    <>
      <style jsx>{`
        @keyframes scroll-progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .scroll-progress-native {
          position: fixed;
          ${position}: ${offset ?? 64}px;
          left: 0;
          right: 0;
          height: 2px;
          z-index: 9999;
          pointer-events: none;
        }

        .scroll-progress-track {
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
        }

        .scroll-progress-bar {
          width: 100%;
          height: 100%;
          background: ${colorMap[color!]};
          transform-origin: left;
          animation: scroll-progress linear;
          animation-timeline: scroll(root);
          box-shadow: ${glowMap[color!]};
        }

        .scroll-percentage {
          position: fixed;
          ${position}: ${(offset ?? 64) + 8}px;
          right: 16px;
          font-family: var(--font-mono);
          font-size: 10px;
          color: ${colorMap[color!]};
          z-index: 9999;
          pointer-events: none;
          opacity: 0.8;
        }
      `}</style>
      <div className="scroll-progress-native">
        <div className="scroll-progress-track">
          <div className="scroll-progress-bar" />
        </div>
      </div>
      {showPercentage && (
        <div className="scroll-percentage">{percentage}%</div>
      )}
    </>
  );
}

// Framer Motion fallback implementation
function FramerScrollProgress({
  color,
  position,
  offset,
  showPercentage,
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (!showPercentage) return;

    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setPercentage(Math.round(latest * 100));
    });

    return () => unsubscribe();
  }, [scrollYProgress, showPercentage]);

  const positionStyle = position === 'top' ? { top: offset } : { bottom: offset };

  return (
    <>
      <div
        className="fixed left-0 right-0 h-0.5 z-[9999] pointer-events-none"
        style={positionStyle}
      >
        <div className="w-full h-full bg-white/10">
          <motion.div
            className="h-full origin-left"
            style={{
              scaleX,
              backgroundColor: colorMap[color!],
              boxShadow: glowMap[color!],
            }}
          />
        </div>
      </div>
      {showPercentage && (
        <div
          className="fixed right-4 font-mono text-[10px] z-[9999] pointer-events-none opacity-80"
          style={{
            ...positionStyle,
            [position!]: (offset ?? 0) + 8,
            color: colorMap[color!],
          }}
        >
          {percentage}%
        </div>
      )}
    </>
  );
}

export default ScrollProgress;
