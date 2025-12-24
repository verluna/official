interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "purple" | "blue" | "default";
  className?: string;
}

const variants = {
  green: "bg-terminal-green/10 text-terminal-green border-terminal-green/20",
  purple: "bg-electric-purple/10 text-electric-purple border-electric-purple/20",
  blue: "bg-signal-blue/10 text-signal-blue border-signal-blue/20",
  default: "bg-surface text-steel-grey border-surface-border",
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5
        text-xs font-mono border rounded
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
