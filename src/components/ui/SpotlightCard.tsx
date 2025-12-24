'use client';

import { useRef, useState, useCallback, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type SpotlightColor = 'green' | 'purple' | 'blue';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: SpotlightColor;
  spotlightSize?: number;
  spotlightIntensity?: number;
  hover?: boolean;
  delay?: number;
  onClick?: () => void;
}

const colorMap: Record<SpotlightColor, string> = {
  green: 'rgba(0, 255, 148, 0.15)',
  purple: 'rgba(124, 58, 237, 0.15)',
  blue: 'rgba(59, 130, 246, 0.15)',
};

const borderColorMap: Record<SpotlightColor, string> = {
  green: 'hover:border-terminal-green/30',
  purple: 'hover:border-electric-purple/30',
  blue: 'hover:border-signal-blue/30',
};

const glowStyles: Record<SpotlightColor, string> = {
  green: 'hover:shadow-[0_0_40px_rgba(0,255,148,0.1)]',
  purple: 'hover:shadow-[0_0_40px_rgba(124,58,237,0.1)]',
  blue: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]',
};

export function SpotlightCard({
  children,
  className,
  glowColor = 'green',
  spotlightSize = 400,
  spotlightIntensity = 0.15,
  hover = true,
  delay = 0,
  onClick,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!cardRef.current || !hover) return;

      const rect = cardRef.current.getBoundingClientRect();

      // Convert to percentage position within card
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      setSpotlightPosition({ x, y });
    },
    [hover]
  );

  const handleMouseEnter = () => {
    if (hover) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset to center
    setSpotlightPosition({ x: 50, y: 50 });
  };

  const spotlightColor = colorMap[glowColor].replace('0.15', String(spotlightIntensity));

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hover ? { scale: 1.01, y: -2 } : undefined}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-cursor={hover ? 'hover' : undefined}
      data-cursor-color={glowColor}
      className={cn(
        'relative overflow-hidden rounded-xl',
        'bg-surface border border-surface-border',
        'transition-all duration-300 ease-out',
        hover && borderColorMap[glowColor],
        hover && glowStyles[glowColor],
        hover && 'cursor-pointer',
        className
      )}
    >
      {/* Spotlight gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle ${spotlightSize}px at ${spotlightPosition.x}% ${spotlightPosition.y}%, ${spotlightColor} 0%, transparent 100%)`,
        }}
      />

      {/* Secondary ambient glow */}
      <motion.div
        className="absolute -inset-px rounded-xl pointer-events-none"
        style={{
          opacity: isHovered ? 0.5 : 0,
          background: `radial-gradient(circle at ${spotlightPosition.x}% ${spotlightPosition.y}%, ${spotlightColor} 0%, transparent 70%)`,
          filter: 'blur(20px)',
        }}
        animate={{
          opacity: isHovered ? 0.5 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Inner glow border effect */}
      <motion.div
        className={cn(
          'absolute inset-0 rounded-xl pointer-events-none opacity-0',
          glowColor === 'green' && 'shadow-[inset_0_0_20px_rgba(0,255,148,0.1)]',
          glowColor === 'purple' && 'shadow-[inset_0_0_20px_rgba(124,58,237,0.1)]',
          glowColor === 'blue' && 'shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]'
        )}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Tactical noise overlay on hover */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.03 : 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </motion.div>
  );
}

export default SpotlightCard;
