import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export interface FeatureBlockProps {
  number: string;
  groupTitle: string;
  description: string;
  capabilities: string[];
  icon: React.ReactNode;
  variant?: "standard" | "wide" | "highlight";
  children?: React.ReactNode;
  className?: string;
}

export function FeatureBlock({
  number,
  groupTitle,
  description,
  capabilities,
  icon,
  variant = "standard",
  children,
  className = "",
}: FeatureBlockProps) {
  const isHighlight = variant === "highlight";

  return (
    <Card
      variant={isHighlight ? "glass" : "default"}
      hover
      className={`relative overflow-hidden flex flex-col justify-between space-y-6 ${
        isHighlight
          ? "border-emerald-500/40 dark:border-emerald-500/30 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900/95 dark:via-slate-900/80 dark:to-slate-900/60 shadow-glow"
          : "border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/50"
      } p-6 sm:p-8 ${className}`}
    >
      {/* Accent Line for Highlight Variant */}
      {isHighlight && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600" />
      )}

      <div className="space-y-5">
        {/* Number & Icon Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
              {number}
            </span>
            {isHighlight && (
              <Badge variant="emerald" size="sm">
                <span>Core Differentiator</span>
              </Badge>
            )}
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-subtle">
            {icon}
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-2 text-left">
          <h3 className="text-h3 text-slate-900 dark:text-slate-100 font-semibold">{groupTitle}</h3>
          <p className="text-body-small text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Capabilities Checklist */}
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left">
          {capabilities.map((cap) => (
            <div key={cap} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <span className="font-medium">{cap}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Visual Preview Slot */}
      {children && <div className="pt-4">{children}</div>}
    </Card>
  );
}

