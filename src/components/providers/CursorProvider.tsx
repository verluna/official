'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

export type CursorType = 'default' | 'hover' | 'click' | 'text' | 'loading' | 'drag' | 'hidden';
export type CursorColor = 'green' | 'purple' | 'blue';

interface CursorState {
  type: CursorType;
  color: CursorColor;
  text?: string;
  scale?: number;
}

interface CursorContextValue {
  cursor: CursorState;
  setCursor: (state: Partial<CursorState>) => void;
  resetCursor: () => void;
  isEnabled: boolean;
  setEnabled: (enabled: boolean) => void;
  isTouchDevice: boolean;
}

const defaultState: CursorState = {
  type: 'default',
  color: 'green',
  scale: 1,
};

const CursorContext = createContext<CursorContextValue | null>(null);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursor, setCursorState] = useState<CursorState>(defaultState);
  const [isEnabled, setEnabled] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const isTouch =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;

    setIsTouchDevice(isTouch);

    // Disable custom cursor on touch devices
    if (isTouch) {
      setEnabled(false);
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setEnabled(false);
    }
  }, []);

  const setCursor = useCallback((state: Partial<CursorState>) => {
    setCursorState((prev) => ({ ...prev, ...state }));
  }, []);

  const resetCursor = useCallback(() => {
    setCursorState(defaultState);
  }, []);

  return (
    <CursorContext.Provider
      value={{
        cursor,
        setCursor,
        resetCursor,
        isEnabled,
        setEnabled,
        isTouchDevice,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
}

// Hook for adding cursor interactions to elements
export function useCursorHandlers(
  type: CursorType = 'hover',
  color?: CursorColor,
  options?: { text?: string; scale?: number }
) {
  const { setCursor, resetCursor, isEnabled } = useCursor();

  const handlers = {
    onMouseEnter: () => {
      if (!isEnabled) return;
      setCursor({ type, ...(color && { color }), ...options });
    },
    onMouseLeave: () => {
      if (!isEnabled) return;
      resetCursor();
    },
    onMouseDown: () => {
      if (!isEnabled) return;
      setCursor({ type: 'click', scale: 0.9 });
    },
    onMouseUp: () => {
      if (!isEnabled) return;
      setCursor({ type, scale: 1 });
    },
  };

  return handlers;
}
