'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { ToastProvider } from './ToastProvider';

const ScrollProgress = dynamic(
  () => import('@/components/ui/ScrollProgress').then((mod) => mod.ScrollProgress),
  { ssr: false }
);

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ToastProvider>
      {/* Scroll progress indicator */}
      <ScrollProgress color="green" position="top" offset={64} />

      {/* Main content */}
      {children}
    </ToastProvider>
  );
}

export { ToastProvider, useToast } from './ToastProvider';
