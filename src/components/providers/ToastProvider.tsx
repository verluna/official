'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Info, AlertTriangle, Loader2, X, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type ToastType = 'success' | 'info' | 'warning' | 'processing';

interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

interface ToastContextValue {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => string;
  removeToast: (id: string) => void;
  clearAll: () => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

const MAX_TOASTS = 3;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback(
    (toast: Omit<Toast, 'id'>) => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const newToast: Toast = { ...toast, id };

      setToasts((prev) => {
        // Remove oldest if at max
        const updated = prev.length >= MAX_TOASTS ? prev.slice(1) : prev;
        return [...updated, newToast];
      });

      // Auto-dismiss after duration (default 5s, processing doesn't auto-dismiss)
      if (toast.type !== 'processing') {
        const duration = toast.duration || 5000;
        setTimeout(() => {
          removeToast(id);
        }, duration);
      }

      return id;
    },
    [removeToast]
  );

  const clearAll = useCallback(() => {
    setToasts([]);
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, clearAll }}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

// Toast container component
function ToastContainer({
  toasts,
  onRemove,
}: {
  toasts: Toast[];
  onRemove: (id: string) => void;
}) {
  return (
    <div className="fixed top-20 right-4 z-[9999] flex flex-col gap-3 pointer-events-none">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
        ))}
      </AnimatePresence>
    </div>
  );
}

// Individual toast component
function ToastItem({
  toast,
  onRemove,
}: {
  toast: Toast;
  onRemove: (id: string) => void;
}) {
  const typeConfig: Record<
    ToastType,
    {
      icon: LucideIcon;
      color: string;
      bgColor: string;
      borderColor: string;
      label: string;
    }
  > = {
    success: {
      icon: CheckCircle,
      color: 'text-terminal-green',
      bgColor: 'bg-terminal-green/10',
      borderColor: 'border-terminal-green/30',
      label: 'SUCCESS',
    },
    info: {
      icon: Info,
      color: 'text-signal-blue',
      bgColor: 'bg-signal-blue/10',
      borderColor: 'border-signal-blue/30',
      label: 'INFO',
    },
    warning: {
      icon: AlertTriangle,
      color: 'text-warning-amber',
      bgColor: 'bg-warning-amber/10',
      borderColor: 'border-warning-amber/30',
      label: 'WARN',
    },
    processing: {
      icon: Loader2,
      color: 'text-electric-purple',
      bgColor: 'bg-electric-purple/10',
      borderColor: 'border-electric-purple/30',
      label: 'PROCESSING',
    },
  };

  const config = typeConfig[toast.type];
  const Icon = config.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 50, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 50, scale: 0.95 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'pointer-events-auto',
        'w-[340px] p-4 rounded-lg',
        'bg-surface/95 backdrop-blur-sm',
        'border',
        config.borderColor,
        'shadow-lg'
      )}
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className={cn('p-1.5 rounded-md', config.bgColor)}>
          <Icon
            className={`w-4 h-4 ${config.color}${toast.type === 'processing' ? ' animate-spin' : ''}`}
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className={cn('font-mono text-xs', config.color)}>
              [{config.label}]
            </span>
          </div>
          <p className="font-mono text-sm text-off-white mt-0.5">{toast.title}</p>
          {toast.message && (
            <p className="font-mono text-xs text-steel-grey mt-1">{toast.message}</p>
          )}
        </div>

        {/* Close button */}
        <button
          onClick={() => onRemove(toast.id)}
          className="p-1 hover:bg-surface-border/50 rounded transition-colors"
        >
          <X className="w-3.5 h-3.5 text-steel-grey hover:text-off-white" />
        </button>
      </div>
    </motion.div>
  );
}

export default ToastProvider;
