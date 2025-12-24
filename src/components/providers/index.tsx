'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { CursorProvider } from './CursorProvider';
import { ThreeProvider } from './ThreeProvider';

// Dynamically import 3D components to avoid SSR issues
const ParticleField3D = dynamic(
  () => import('@/components/3d/ParticleField3D').then((mod) => mod.ParticleField3D),
  { ssr: false }
);

const CustomCursor = dynamic(
  () => import('@/components/ui/CustomCursor').then((mod) => mod.CustomCursor),
  { ssr: false }
);

const ScrollProgress = dynamic(
  () => import('@/components/ui/ScrollProgress').then((mod) => mod.ScrollProgress),
  { ssr: false }
);

const TerminalChat = dynamic(
  () => import('@/components/chat/TerminalChat').then((mod) => mod.TerminalChat),
  { ssr: false }
);

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThreeProvider>
      <CursorProvider>
        {/* 3D Particle Background - layered behind content */}
        <ParticleField3D />

        {/* Custom cursor */}
        <CustomCursor />

        {/* Scroll progress indicator */}
        <ScrollProgress color="green" position="top" offset={64} />

        {/* Main content */}
        {children}

        {/* AI Chat Widget */}
        <TerminalChat />
      </CursorProvider>
    </ThreeProvider>
  );
}

export { CursorProvider, useCursor, useCursorHandlers } from './CursorProvider';
export { ThreeProvider, useThree, useShouldRender3D } from './ThreeProvider';
