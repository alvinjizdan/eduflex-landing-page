import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      children,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variantStyles = {
      primary:
        "bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 border border-emerald-400/30",
      secondary:
        "bg-slate-800 text-slate-100 hover:bg-slate-700/80 border border-slate-700/60 shadow-subtle",
      outline:
        "bg-transparent text-slate-200 border border-slate-700/80 hover:bg-slate-800/60 hover:text-white hover:border-slate-600",
      ghost:
        "bg-transparent text-slate-300 hover:bg-slate-800/50 hover:text-white",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-2 rounded-lg gap-1.5",
      md: "text-sm px-5 py-2.5 rounded-xl gap-2",
      lg: "text-base px-6 py-3.5 rounded-xl gap-2.5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
