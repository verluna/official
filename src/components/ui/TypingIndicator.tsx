'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

type IndicatorVariant = 'dots' | 'text' | 'bar';
type IndicatorColor = 'green' | 'purple' | 'blue';

interface TypingIndicatorProps {
  variant?: IndicatorVariant;
  text?: string;
  color?: IndicatorColor;
  className?: string;
}

const colorMap: Record<IndicatorColor, string> = {
  green: '#00FF94',
  purple: '#7C3AED',
  blue: '#3B82F6',
};

const textColorClasses: Record<IndicatorColor, string> = {
  green: 'text-terminal-green',
  purple: 'text-electric-purple',
  blue: 'text-signal-blue',
};

const bgColorClasses: Record<IndicatorColor, string> = {
  green: 'bg-terminal-green',
  purple: 'bg-electric-purple',
  blue: 'bg-signal-blue',
};

export function TypingIndicator({
  variant = 'dots',
  text = 'processing',
  color = 'green',
  className,
}: TypingIndicatorProps) {
  switch (variant) {
    case 'dots':
      return <DotsIndicator color={color} className={className} />;
    case 'text':
      return <TextIndicator text={text} color={color} className={className} />;
    case 'bar':
      return <BarIndicator color={color} className={className} />;
    default:
      return <DotsIndicator color={color} className={className} />;
  }
}

// Three pulsing dots
function DotsIndicator({
  color,
  className,
}: {
  color: IndicatorColor;
  className?: string;
}) {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className={cn('w-2 h-2 rounded-full', bgColorClasses[color])}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// Scrambling text indicator
function TextIndicator({
  text,
  color,
  className,
}: {
  text: string;
  color: IndicatorColor;
  className?: string;
}) {
  const [displayText, setDisplayText] = useState(text);
  const characters = '01#_';

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prev) => {
        const chars = prev.split('');
        // Randomly scramble 1-2 characters
        const indicesToScramble = Math.random() < 0.5 ? 1 : 2;
        for (let i = 0; i < indicesToScramble; i++) {
          const idx = Math.floor(Math.random() * text.length);
          if (Math.random() < 0.7) {
            // Show random char
            chars[idx] = characters[Math.floor(Math.random() * characters.length)];
          } else {
            // Show original char
            chars[idx] = text[idx];
          }
        }
        return chars.join('');
      });
    }, 80);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={cn('font-mono text-sm', textColorClasses[color], className)}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        _
      </motion.span>
    </span>
  );
}

// Terminal-style progress bar
function BarIndicator({
  color,
  className,
}: {
  color: IndicatorColor;
  className?: string;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Random progress that doesn't complete
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 95) {
          // Reset to random lower value
          return Math.random() * 30;
        }
        return newProgress;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const totalBlocks = 16;
  const filledBlocks = Math.floor((progress / 100) * totalBlocks);
  const emptyBlocks = totalBlocks - filledBlocks;

  return (
    <div className={cn('font-mono text-xs', textColorClasses[color], className)}>
      <span className="text-steel-grey">[</span>
      <span style={{ color: colorMap[color] }}>{'█'.repeat(filledBlocks)}</span>
      <span className="text-steel-grey/30">{'░'.repeat(emptyBlocks)}</span>
      <span className="text-steel-grey">]</span>
      <span className="ml-2 text-steel-grey">{Math.round(progress)}%</span>
    </div>
  );
}

export default TypingIndicator;
