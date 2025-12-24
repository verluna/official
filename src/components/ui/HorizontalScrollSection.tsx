'use client';

import { useRef, useEffect, useState, ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HorizontalScrollSectionProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  itemClassName?: string;
  showIndicators?: boolean;
  showProgress?: boolean;
  snapAlign?: 'start' | 'center' | 'end';
}

export function HorizontalScrollSection<T>({
  items,
  renderItem,
  className,
  itemClassName,
  showIndicators = true,
  showProgress = true,
  snapAlign = 'center',
}: HorizontalScrollSectionProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Track scroll position
  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  const progressWidth = useSpring(useTransform(scrollXProgress, [0, 1], [0, 100]), {
    stiffness: 100,
    damping: 30,
  });

  // Update active index based on scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.scrollWidth / items.length;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(newIndex, items.length - 1));

      // Update scroll ability
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < container.scrollWidth - container.clientWidth - 10);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => container.removeEventListener('scroll', handleScroll);
  }, [items.length]);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const itemWidth = container.scrollWidth / items.length;
    container.scrollTo({
      left: itemWidth * index,
      behavior: 'smooth',
    });
  };

  const scrollBy = (direction: 'left' | 'right') => {
    const newIndex = direction === 'left'
      ? Math.max(0, activeIndex - 1)
      : Math.min(items.length - 1, activeIndex + 1);
    scrollToIndex(newIndex);
  };

  return (
    <div className={cn('relative', className)}>
      {/* Navigation arrows */}
      <button
        onClick={() => scrollBy('left')}
        disabled={!canScrollLeft}
        className={cn(
          'absolute left-4 top-1/2 -translate-y-1/2 z-10',
          'w-10 h-10 rounded-full',
          'bg-surface/80 backdrop-blur-sm border border-surface-border',
          'flex items-center justify-center',
          'transition-all duration-200',
          'hover:border-terminal-green/50 hover:text-terminal-green',
          'disabled:opacity-30 disabled:cursor-not-allowed'
        )}
        data-cursor="hover"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={() => scrollBy('right')}
        disabled={!canScrollRight}
        className={cn(
          'absolute right-4 top-1/2 -translate-y-1/2 z-10',
          'w-10 h-10 rounded-full',
          'bg-surface/80 backdrop-blur-sm border border-surface-border',
          'flex items-center justify-center',
          'transition-all duration-200',
          'hover:border-terminal-green/50 hover:text-terminal-green',
          'disabled:opacity-30 disabled:cursor-not-allowed'
        )}
        data-cursor="hover"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Scrollable container */}
      <div
        ref={containerRef}
        className={cn(
          'flex overflow-x-auto overflow-y-hidden',
          'scrollbar-hide',
          'snap-x snap-mandatory',
          '-mx-4 px-4 py-4'
        )}
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={cn(
              'flex-shrink-0',
              'w-[85vw] max-w-[500px]',
              'mx-3 first:ml-0 last:mr-0',
              snapAlign === 'start' && 'snap-start',
              snapAlign === 'center' && 'snap-center',
              snapAlign === 'end' && 'snap-end',
              itemClassName
            )}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {renderItem(item, index)}
          </motion.div>
        ))}
      </div>

      {/* Progress bar */}
      {showProgress && (
        <div className="mt-6 mx-auto max-w-xs">
          <div className="h-0.5 bg-surface-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-terminal-green rounded-full"
              style={{ width: `${progressWidth.get()}%` }}
            />
          </div>
        </div>
      )}

      {/* Dot indicators */}
      {showIndicators && (
        <div className="flex justify-center gap-2 mt-4">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-200',
                index === activeIndex
                  ? 'bg-terminal-green w-6'
                  : 'bg-surface-border hover:bg-steel-grey'
              )}
              data-cursor="hover"
              aria-label={`Go to item ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default HorizontalScrollSection;
