import React from "react";
import {
  Sparkles,
  Layers,
  ShieldCheck,
  Activity,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function HeroProductMockup() {
  return (
    <div className="w-full relative group">
      {/* Subtle Accent Ambient Glow behind Mockup */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/10 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />

      {/* Main Mockup Window Container */}
      <div className="relative rounded-2xl bg-[#0f172a] border border-slate-800/90 shadow-card overflow-hidden backdrop-blur-xl">
        {/* Mockup Header Window Controls */}
        <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
            <div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
            <div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
            <span className="ml-2 text-xs font-medium text-slate-400 font-mono">
              eduflex.lms / console
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="emerald" size="sm">
              <ShieldCheck className="w-3 h-3" />
              <span>SuperAdmin Access</span>
            </Badge>
          </div>
        </div>

        {/* Mockup Dashboard Content Grid */}
        <div className="p-5 sm:p-6 space-y-5 text-left">
          {/* Institution Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-200">
                  Enterprise Learning Portal
                </h4>
                <p className="text-[11px] text-slate-400">
                  Organizational Training Track 2026
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 font-medium self-start sm:self-auto">
              <Activity className="w-3.5 h-3.5" />
              <span>System Status: Active</span>
            </div>
          </div>

          {/* Active Module & Simulation Status Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1: Curriculum Module */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>Modular Curriculum</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                  88% Complete
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Technical Operations Track</span>
                  <span>14 / 16 Units</span>
                </div>
                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500"
                    style={{ width: "88%" }}
                  />
                </div>
              </div>
            </div>

            {/* Card 2: Interactive Simulation Lab */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <SlidersHorizontal className="w-4 h-4 text-emerald-400" />
                  <span>Interactive Lab Engine</span>
                </div>
                <Badge variant="emerald" size="sm">
                  <span>Custom Lab</span>
                </Badge>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-slate-300 bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="truncate">
                  Practical Hardware & Signal Calculation Simulation
                </span>
              </div>
            </div>
          </div>

          {/* Role Customization Feature Matrix Indicator */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h5 className="text-xs font-semibold text-slate-200">
                  Role-Based Customization Matrix
                </h5>
                <p className="text-[11px] text-slate-400">
                  SuperAdmin, Admin Instansi, & User Learner permissions enabled.
                </p>
              </div>
            </div>

            <div className="hidden sm:flex items-center text-xs font-medium text-emerald-400 gap-1">
              <span>Pratinjau kontrol</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
