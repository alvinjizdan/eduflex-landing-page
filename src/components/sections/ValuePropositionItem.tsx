"use client";

import React from "react";
import { motion } from "framer-motion";

export interface ValuePropositionItemProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  conceptTags?: string[];
}

export function ValuePropositionItem({
  number,
  title,
  description,
  icon,
  conceptTags = [],
}: ValuePropositionItemProps) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="flex flex-col justify-between space-y-6 p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/40 dark:hover:border-emerald-500/30 hover:shadow-card transition-all duration-200 text-left"
    >
      <div className="space-y-4">
        {/* Number Badge & Icon Row */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
            {number}
          </span>
          <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            {icon}
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-2 text-left">
          <h3 className="text-h3 text-slate-900 dark:text-slate-100 font-semibold">{title}</h3>
          <p className="text-body-small text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            {description}
          </p>
        </div>
      </div>

      {/* Concept Tags Footer */}
      {conceptTags.length > 0 && (
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/40 flex flex-wrap gap-1.5">
          {conceptTags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-950/40 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800/60"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

