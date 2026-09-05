import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "emerald" | "slate" | "outline";
  size?: "sm" | "md";
  children: React.ReactNode;
  className?: string;
}

export function Badge({
  variant = "emerald",
  size = "md",
  children,
  className = "",
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 font-semibold rounded-full tracking-wider uppercase transition-colors";

  const variantStyles = {
    emerald:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 dark:border-emerald-500/20",
    slate:
      "bg-slate-200/80 dark:bg-slate-800/80 text-slate-800 dark:text-slate-300 border border-slate-300/80 dark:border-slate-700/60",
    outline:
      "bg-transparent text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700",
  };

  const sizeStyles = {
    sm: "text-[10px] px-2.5 py-1",
    md: "text-xs px-3.5 py-1.5",
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

