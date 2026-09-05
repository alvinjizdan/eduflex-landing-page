import React from "react";
import { Badge } from "./Badge";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className = "",
}: SectionHeadingProps) {
  const alignStyles = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl space-y-4 ${alignStyles} ${className}`}>
      {eyebrow && (
        <Badge variant={light ? "slate" : "emerald"} size="md">
          {eyebrow}
        </Badge>
      )}

      <h2
        className={`text-h2 font-bold tracking-tight ${
          light
            ? "text-slate-900"
            : "text-slate-900 dark:text-slate-100"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`text-body text-balance ${
            light
              ? "text-slate-600"
              : "text-slate-600 dark:text-slate-300"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

