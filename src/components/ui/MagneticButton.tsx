'use client';

import { useRef, useState, ReactNode } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

type MagneticColor = 'green' | 'purple' | 'blue';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  color?: MagneticColor;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

const colorStyles: Record<MagneticColor, string> = {
  green: 'hover:border-terminal-green hover:text-terminal-green hover:shadow-[0_0_30px_rgba(0,255,148,0.2)]',
  purple: 'hover:border-electric-purple hover:text-electric-purple hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]',
  blue: 'hover:border-signal-blue hover:text-signal-blue hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]',
};

const variantStyles = {
  primary: 'bg-off-white text-void hover:bg-transparent',
  secondary: 'bg-transparent border-surface-border',
  ghost: 'bg-transparent border-transparent',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function MagneticButton({
  children,
  className,
  strength = 0.3,
  color = 'green',
  variant = 'secondary',
  size = 'md',
  onClick,
  href,
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for magnetic effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for smooth rubber-band effect
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Check if touch device
  const isTouchDevice = typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || isTouchDevice || disabled) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate offset from center
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // Apply strength multiplier with max displacement of 20px
    const maxDisplacement = 20;
    const offsetX = Math.max(-maxDisplacement, Math.min(maxDisplacement, deltaX * strength));
    const offsetY = Math.max(-maxDisplacement, Math.min(maxDisplacement, deltaY * strength));

    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice && !disabled) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        disabled={disabled}
        data-cursor="hover"
        data-cursor-color={color}
        className={cn(
          'inline-flex items-center justify-center gap-2',
          'font-medium tracking-tight border',
          'transition-all duration-300',
          'focus:outline-none focus:ring-2 focus:ring-terminal-green/50',
          variantStyles[variant],
          sizeStyles[size],
          colorStyles[color],
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
      >
        {/* Content wrapper for inner animation */}
        <motion.span
          animate={{
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="flex items-center gap-2"
        >
          {children}
        </motion.span>
      </Component>
    </motion.div>
  );
}

export default MagneticButton;
