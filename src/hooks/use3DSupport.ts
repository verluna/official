'use client';

import { useState, useEffect } from 'react';

export type QualityLevel = 'high' | 'medium' | 'low' | 'none';

export interface ThreeDSupport {
  webgl2: boolean;
  webgl1: boolean;
  highPerformance: boolean;
  quality: QualityLevel;
  particleCount: number;
  supportsPostProcessing: boolean;
  isTouchDevice: boolean;
  prefersReducedMotion: boolean;
  isLoading: boolean;
}

const DEFAULT_SUPPORT: ThreeDSupport = {
  webgl2: false,
  webgl1: false,
  highPerformance: false,
  quality: 'none',
  particleCount: 0,
  supportsPostProcessing: false,
  isTouchDevice: false,
  prefersReducedMotion: false,
  isLoading: true,
};

// Particle counts for different quality levels
const PARTICLE_COUNTS: Record<QualityLevel, number> = {
  high: 10000,
  medium: 5000,
  low: 2000,
  none: 0,
};

function detectWebGLSupport(): { webgl1: boolean; webgl2: boolean; renderer: string } {
  if (typeof window === 'undefined') {
    return { webgl1: false, webgl2: false, renderer: '' };
  }

  const canvas = document.createElement('canvas');
  let webgl1 = false;
  let webgl2 = false;
  let renderer = '';

  // Check WebGL2
  try {
    const gl2 = canvas.getContext('webgl2');
    if (gl2) {
      webgl2 = true;
      const debugInfo = gl2.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        renderer = gl2.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || '';
      }
    }
  } catch {
    webgl2 = false;
  }

  // Check WebGL1 as fallback
  if (!webgl2) {
    try {
      const gl1 = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (gl1) {
        webgl1 = true;
        const debugInfo = (gl1 as WebGLRenderingContext).getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
          renderer = (gl1 as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || '';
        }
      }
    } catch {
      webgl1 = false;
    }
  }

  return { webgl1, webgl2, renderer };
}

function detectPerformanceCapabilities(): {
  deviceMemory: number;
  hardwareConcurrency: number;
  isDiscreteGPU: boolean;
} {
  if (typeof window === 'undefined') {
    return { deviceMemory: 4, hardwareConcurrency: 4, isDiscreteGPU: false };
  }

  // Device memory (in GB) - not all browsers support this
  const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 4;

  // CPU cores
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;

  // Check for discrete GPU indicators in renderer string
  const { renderer } = detectWebGLSupport();
  const rendererLower = renderer.toLowerCase();
  const isDiscreteGPU =
    rendererLower.includes('nvidia') ||
    rendererLower.includes('amd') ||
    rendererLower.includes('radeon') ||
    rendererLower.includes('geforce') ||
    rendererLower.includes('rtx') ||
    rendererLower.includes('gtx') ||
    (rendererLower.includes('apple') && rendererLower.includes('m1')) ||
    (rendererLower.includes('apple') && rendererLower.includes('m2')) ||
    (rendererLower.includes('apple') && rendererLower.includes('m3')) ||
    (rendererLower.includes('apple') && rendererLower.includes('m4'));

  return { deviceMemory, hardwareConcurrency, isDiscreteGPU };
}

function determineQualityLevel(
  webgl2: boolean,
  webgl1: boolean,
  deviceMemory: number,
  hardwareConcurrency: number,
  isDiscreteGPU: boolean,
  prefersReducedMotion: boolean,
  isTouchDevice: boolean
): QualityLevel {
  // No WebGL support
  if (!webgl2 && !webgl1) return 'none';

  // User prefers reduced motion
  if (prefersReducedMotion) return 'none';

  // High-end: WebGL2 + discrete GPU + 8GB+ RAM + 8+ cores
  if (webgl2 && isDiscreteGPU && deviceMemory >= 8 && hardwareConcurrency >= 8) {
    return 'high';
  }

  // Medium: WebGL2 + decent specs OR discrete GPU
  if (webgl2 && (deviceMemory >= 4 || isDiscreteGPU) && hardwareConcurrency >= 4) {
    // Reduce quality on mobile even with good specs
    if (isTouchDevice) return 'low';
    return 'medium';
  }

  // Low: Basic WebGL support, or touch device
  if (webgl2 || webgl1) {
    if (isTouchDevice) return 'none'; // Disable 3D on mobile for battery
    return 'low';
  }

  return 'none';
}

export function use3DSupport(): ThreeDSupport {
  const [support, setSupport] = useState<ThreeDSupport>(DEFAULT_SUPPORT);

  useEffect(() => {
    // Check if already cached in localStorage
    const cached = localStorage.getItem('verluna-3d-support');
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        // Cache is valid for 24 hours
        if (parsed.timestamp && Date.now() - parsed.timestamp < 24 * 60 * 60 * 1000) {
          setSupport({ ...parsed.support, isLoading: false });
          return;
        }
      } catch {
        // Invalid cache, continue with detection
      }
    }

    // Detect capabilities
    const { webgl1, webgl2 } = detectWebGLSupport();
    const { deviceMemory, hardwareConcurrency, isDiscreteGPU } = detectPerformanceCapabilities();

    // Check for touch device
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Determine quality level
    const quality = determineQualityLevel(
      webgl2,
      webgl1,
      deviceMemory,
      hardwareConcurrency,
      isDiscreteGPU,
      prefersReducedMotion,
      isTouchDevice
    );

    const detectedSupport: ThreeDSupport = {
      webgl2,
      webgl1,
      highPerformance: isDiscreteGPU && deviceMemory >= 8,
      quality,
      particleCount: PARTICLE_COUNTS[quality],
      supportsPostProcessing: webgl2 && (quality === 'high' || quality === 'medium'),
      isTouchDevice,
      prefersReducedMotion,
      isLoading: false,
    };

    // Cache the result
    localStorage.setItem(
      'verluna-3d-support',
      JSON.stringify({
        support: detectedSupport,
        timestamp: Date.now(),
      })
    );

    setSupport(detectedSupport);
  }, []);

  return support;
}

// Hook for scroll-timeline support detection
export function useScrollTimelineSupport(): boolean {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && CSS.supports) {
      setSupported(CSS.supports('animation-timeline', 'scroll()'));
    }
  }, []);

  return supported;
}

// Hook for View Transitions API support
export function useViewTransitionsSupport(): boolean {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      setSupported('startViewTransition' in document);
    }
  }, []);

  return supported;
}
