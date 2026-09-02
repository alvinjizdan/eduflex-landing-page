import React from "react";
import {
  Building2,
  BookOpen,
  Users,
  SlidersHorizontal,
  Server,
  ArrowDown,
} from "lucide-react";

export function CustomizationFlow() {
  return (
    <div className="w-full rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 sm:p-8 space-y-6 text-left shadow-card">
      {/* Top Level: Organization Node */}
      <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950/80 border border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-200">
              YOUR INSTITUTION / ENTERPRISE
            </h4>
            <p className="text-[11px] text-slate-400">
              Operational Hierarchy, Training Goals, & Competency Standards
            </p>
          </div>
        </div>

        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 hidden sm:inline-block">
          Input Scope
        </span>
      </div>

      {/* Visual Connector Lines */}
      <div className="flex items-center justify-center text-emerald-400/60">
        <ArrowDown className="w-5 h-5 animate-pulse" />
      </div>

      {/* Middle Level: 4 Configurability Pillars */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
        <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1.5">
          <BookOpen className="w-4 h-4 text-emerald-400 mx-auto" />
          <div className="text-[11px] font-semibold text-slate-200">Curriculum</div>
          <div className="text-[10px] text-slate-400">Modular Paths</div>
        </div>

        <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1.5">
          <Users className="w-4 h-4 text-emerald-400 mx-auto" />
          <div className="text-[11px] font-semibold text-slate-200">Access</div>
          <div className="text-[10px] text-slate-400">3-Tier Roles</div>
        </div>

        <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1.5">
          <SlidersHorizontal className="w-4 h-4 text-emerald-400 mx-auto" />
          <div className="text-[11px] font-semibold text-slate-200">Experience</div>
          <div className="text-[10px] text-slate-400">Virtual Practice</div>
        </div>

        <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1.5">
          <Server className="w-4 h-4 text-emerald-400 mx-auto" />
          <div className="text-[11px] font-semibold text-slate-200">Deployment</div>
          <div className="text-[10px] text-slate-400">Environment</div>
        </div>
      </div>

      {/* Visual Connector Lines */}
      <div className="flex items-center justify-center text-emerald-400/60">
        <ArrowDown className="w-5 h-5 animate-pulse" />
      </div>

      {/* Bottom Level: EduFlex Platform Container */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-emerald-500/30 flex items-center justify-between">
        <div>
          <h4 className="text-xs font-semibold text-slate-100">
            EduFlex LMS Infrastructure
          </h4>
          <p className="text-[11px] text-slate-400">
            Configured Platform Output Tailored for Operational Use
          </p>
        </div>

        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-glow" />
      </div>
    </div>
  );
}
