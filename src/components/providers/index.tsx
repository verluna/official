'use client';

import { ReactNode } from 'react';
import { ToastProvider } from './ToastProvider';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <ToastProvider>{children}</ToastProvider>;
}

export { ToastProvider, useToast } from './ToastProvider';
