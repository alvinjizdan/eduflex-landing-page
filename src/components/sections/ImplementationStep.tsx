import React from "react";
import { Card } from "@/components/ui/Card";

export interface ImplementationStepProps {
  number: string;
  stageName: string;
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  isLast?: boolean;
}

export function ImplementationStep({
  number,
  stageName,
  title,
  description,
  tags,
  icon,
  isLast = false,
}: ImplementationStepProps) {
  return (
    <li className="relative group list-none">
      {/* Desktop Visual Connector Arrow/Line */}
      {!isLast && (
        <div
          className="hidden lg:block absolute top-12 -right-3 z-20 w-6 h-[2px] bg-gradient-to-r from-emerald-500/60 to-slate-800 pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Mobile/Tablet Vertical Visual Timeline Connector Line */}
      {!isLast && (
        <div
          className="lg:hidden absolute left-6 top-16 bottom-0 w-[2px] bg-slate-800/80 pointer-events-none -mb-8 z-0"
          aria-hidden="true"
        />
      )}

      <Card
        variant="default"
        hover
        className="relative z-10 flex flex-col justify-between space-y-5 border border-slate-800/80 bg-slate-900/60 p-6 sm:p-7 text-left h-full"
      >
        <div className="space-y-4">
          {/* Header Row: Stage Number Badge & Icon */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                {number}
              </span>
              <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase font-mono">
                {stageName}
              </span>
            </div>

            <div className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-emerald-400 shadow-subtle">
              {icon}
            </div>
          </div>

          {/* Title (H3) & Description */}
          <div className="space-y-2">
            <h3 className="text-h3 text-slate-100 font-semibold">{title}</h3>
            <p className="text-body-small text-slate-400 leading-relaxed font-normal">
              {description}
            </p>
          </div>
        </div>

        {/* Concept Tags Footer */}
        <div className="pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium text-slate-400 bg-slate-950/60 px-2 py-0.5 rounded border border-slate-800/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </Card>
    </li>
  );
}
