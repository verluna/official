'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { use3DSupport, ThreeDSupport } from '@/hooks/use3DSupport';

interface ThreeContextValue {
  support: ThreeDSupport;
  isReady: boolean;
  mousePosition: { x: number; y: number };
  normalizedMouse: { x: number; y: number };
  isTabVisible: boolean;
  forceDisable: boolean;
  setForceDisable: (disabled: boolean) => void;
}

const ThreeContext = createContext<ThreeContextValue | null>(null);

export function ThreeProvider({ children }: { children: ReactNode }) {
  const support = use3DSupport();
  const [isReady, setIsReady] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const [forceDisable, setForceDisable] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [normalizedMouse, setNormalizedMouse] = useState({ x: 0, y: 0 });

  // Track mouse position for 3D interactions
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });

    // Normalize to -1 to 1 range for Three.js
    const normalized = {
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: -(e.clientY / window.innerHeight) * 2 + 1,
    };
    setNormalizedMouse(normalized);
  }, []);

  // Track tab visibility for performance
  const handleVisibilityChange = useCallback(() => {
    setIsTabVisible(!document.hidden);
  }, []);

  useEffect(() => {
    // Set ready when support detection is complete
    if (!support.isLoading) {
      setIsReady(true);
    }
  }, [support.isLoading]);

  useEffect(() => {
    // Only set up listeners if 3D is supported
    if (support.quality === 'none') return;

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [support.quality, handleMouseMove, handleVisibilityChange]);

  return (
    <ThreeContext.Provider
      value={{
        support,
        isReady,
        mousePosition,
        normalizedMouse,
        isTabVisible,
        forceDisable,
        setForceDisable,
      }}
    >
      {children}
    </ThreeContext.Provider>
  );
}

export function useThree() {
  const context = useContext(ThreeContext);
  if (!context) {
    throw new Error('useThree must be used within a ThreeProvider');
  }
  return context;
}

// Hook to check if 3D should render
export function useShouldRender3D() {
  const { support, isReady, isTabVisible, forceDisable } = useThree();

  return (
    isReady &&
    isTabVisible &&
    !forceDisable &&
    support.quality !== 'none' &&
    !support.prefersReducedMotion
  );
}
