'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useCursor, CursorType, CursorColor } from '@/components/providers/CursorProvider';

const colorMap: Record<CursorColor, string> = {
  green: '#00FF94',
  purple: '#7C3AED',
  blue: '#3B82F6',
};

const glowMap: Record<CursorColor, string> = {
  green: '0 0 15px rgba(0, 255, 148, 0.4)',
  purple: '0 0 15px rgba(124, 58, 237, 0.4)',
  blue: '0 0 15px rgba(59, 130, 246, 0.4)',
};

interface CursorStyle {
  ringSize: number;
  dotSize: number;
  opacity: number;
  borderWidth: number;
  borderStyle: string;
}

const cursorStyles: Record<CursorType, CursorStyle> = {
  default: { ringSize: 32, dotSize: 6, opacity: 1, borderWidth: 1, borderStyle: 'solid' },
  hover: { ringSize: 48, dotSize: 8, opacity: 1, borderWidth: 2, borderStyle: 'solid' },
  click: { ringSize: 24, dotSize: 10, opacity: 1, borderWidth: 2, borderStyle: 'solid' },
  text: { ringSize: 4, dotSize: 20, opacity: 0.8, borderWidth: 1, borderStyle: 'solid' },
  loading: { ringSize: 40, dotSize: 4, opacity: 1, borderWidth: 2, borderStyle: 'dashed' },
  drag: { ringSize: 56, dotSize: 8, opacity: 0.8, borderWidth: 2, borderStyle: 'solid' },
  hidden: { ringSize: 0, dotSize: 0, opacity: 0, borderWidth: 0, borderStyle: 'solid' },
};

export function CustomCursor() {
  const { cursor, isEnabled, setCursor, resetCursor } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Motion values for smooth cursor following
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth following
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Faster spring for the dot (less lag)
  const dotSpringConfig = { damping: 35, stiffness: 600, mass: 0.3 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  // Handle mouse movement
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) {
        setIsVisible(true);
      }
    },
    [mouseX, mouseY, isVisible]
  );

  // Handle mouse enter/leave window
  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  // Handle data-cursor attributes
  const handleElementHover = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorElement = target.closest('[data-cursor]');

      if (cursorElement) {
        const cursorType = cursorElement.getAttribute('data-cursor') as CursorType;
        const cursorColor = cursorElement.getAttribute('data-cursor-color') as CursorColor;

        setCursor({
          type: cursorType || 'hover',
          ...(cursorColor && { color: cursorColor }),
        });
      } else {
        resetCursor();
      }
    },
    [setCursor, resetCursor]
  );

  // Set up event listeners
  useEffect(() => {
    if (!isEnabled) return;

    // Add cursor: none to body
    document.body.style.cursor = 'none';

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleElementHover, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isEnabled, handleMouseMove, handleElementHover, handleMouseEnter, handleMouseLeave]);

  // Don't render if disabled or not visible
  if (!isEnabled || !isVisible) return null;

  const style = cursorStyles[cursor.type];
  const color = colorMap[cursor.color];
  const glow = glowMap[cursor.color];
  const scale = cursor.scale || 1;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none z-[99999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: style.ringSize * scale,
            height: style.ringSize * scale,
            opacity: style.opacity,
            borderWidth: style.borderWidth,
            rotate: cursor.type === 'loading' ? 360 : 0,
          }}
          transition={{
            width: { type: 'spring', stiffness: 300, damping: 20 },
            height: { type: 'spring', stiffness: 300, damping: 20 },
            opacity: { duration: 0.15 },
            rotate: cursor.type === 'loading' ? { duration: 1, repeat: Infinity, ease: 'linear' } : { duration: 0 },
          }}
          style={{
            borderColor: color,
            borderStyle: style.borderStyle,
            borderRadius: '50%',
            boxShadow: cursor.type !== 'hidden' ? glow : 'none',
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed pointer-events-none z-[99999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: style.dotSize * scale,
            height: style.dotSize * scale,
            opacity: style.opacity,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 25,
          }}
          style={{
            backgroundColor: color,
            borderRadius: cursor.type === 'text' ? '2px' : '50%',
            boxShadow: glow,
          }}
        />
      </motion.div>

      {/* Cursor text label */}
      {cursor.text && (
        <motion.div
          className="fixed pointer-events-none z-[99999] font-mono text-xs"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          style={{
            x: cursorX,
            y: cursorY,
            translateX: '-50%',
            translateY: 'calc(-50% + 40px)',
            color: color,
          }}
        >
          {cursor.text}
        </motion.div>
      )}
    </>
  );
}

export default CustomCursor;
