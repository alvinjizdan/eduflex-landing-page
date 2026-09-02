import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "glass" | "light";
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
}

export function Card({
  children,
  variant = "default",
  hover = false,
  padding = "md",
  className = "",
  ...props
}: CardProps) {
  const variantStyles = {
    default:
      "bg-slate-900/60 border border-slate-800/80 text-slate-100 shadow-subtle",
    glass:
      "bg-slate-900/40 backdrop-blur-md border border-slate-800/60 text-slate-100 shadow-card",
    light:
      "bg-white border border-slate-200 text-slate-900 shadow-sm",
  };

  const paddingStyles = {
    none: "p-0",
    sm: "p-4 sm:p-5",
    md: "p-6 sm:p-8",
    lg: "p-8 sm:p-10",
  };

  const hoverStyles = hover
    ? "transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-lg hover:shadow-emerald-500/5"
    : "";

  return (
    <div
      className={`rounded-2xl ${variantStyles[variant]} ${paddingStyles[padding]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
