import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  BookOpen,
  ToggleLeft,
  ToggleRight,
  RotateCcw,
  Play,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export interface RoleMockupPreviewProps {
  role: "superadmin" | "admin" | "learner";
}

export function RoleMockupPreview({ role }: RoleMockupPreviewProps) {
  if (role === "superadmin") {
    return (
      <div className="rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 space-y-5 text-left shadow-card">
        {/* Header Controls */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-xs font-semibold text-slate-900 dark:text-slate-200">
              SuperAdmin Feature Customization Console
            </span>
          </div>
          <Badge variant="emerald" size="sm">
            <span>Global Control</span>
          </Badge>
        </div>

        {/* Feature Toggling Grid */}
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-xs font-semibold text-slate-900 dark:text-slate-200">
                Interactive Simulation Engine
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                Enable virtual lab practice for Admin & Learner roles.
              </div>
            </div>
            <ToggleRight className="w-7 h-7 text-emerald-600 dark:text-emerald-400 cursor-pointer" />
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-xs font-semibold text-slate-900 dark:text-slate-200">
                Competency Assessment Timer
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                Enforce timed evaluation for unit progress.
              </div>
            </div>
            <ToggleRight className="w-7 h-7 text-emerald-600 dark:text-emerald-400 cursor-pointer" />
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-xs font-semibold text-slate-900 dark:text-slate-200">
                Automated Certificate Issuance
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                Issue institutional completion certificates upon 100% score.
              </div>
            </div>
            <ToggleLeft className="w-7 h-7 text-slate-400 dark:text-slate-600 cursor-pointer" />
          </div>
        </div>
      </div>
    );
  }

  if (role === "admin") {
    return (
      <div className="rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 space-y-5 text-left shadow-card">
        {/* Header Controls */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-xs font-semibold text-slate-900 dark:text-slate-200">
              Institutional Admin Workspace
            </span>
          </div>
          <Badge variant="slate" size="sm">
            <span>Admin View</span>
          </Badge>
        </div>

        {/* Learner Roster & Action Grid */}
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                BS
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-900 dark:text-slate-200">
                  Budi Santoso (Learner)
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Track: Engineering Ops • 4/5 Modules Passed
                </div>
              </div>
            </div>

            <button className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 px-2.5 py-1 rounded border border-slate-300 dark:border-slate-700 transition-colors">
              <RotateCcw className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
              <span>Reset Attempt</span>
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                AR
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-900 dark:text-slate-200">
                  Ahmad Rizky (Learner)
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Track: Engineering Ops • 5/5 Modules Passed
                </div>
              </div>
            </div>

            <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Completed
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Learner View
  return (
    <div className="rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 space-y-5 text-left shadow-card">
      {/* Header Controls */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span className="text-xs font-semibold text-slate-900 dark:text-slate-200">
            Learner Study Portal
          </span>
        </div>
        <Badge variant="emerald" size="sm">
          <span>Active Learner</span>
        </Badge>
      </div>

      {/* Course Track Progress Card */}
      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-900 dark:text-slate-200">
            Technical Operations Track
          </span>
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">80% Progress</span>
        </div>

        <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
          <div className="h-full bg-emerald-500 rounded-full" style={{ width: "80%" }} />
        </div>

        <div className="pt-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Unit 4: Interactive Simulation</span>
          </div>
          <button className="inline-flex items-center gap-1 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 px-3 py-1.5 rounded-lg transition-colors">
            <Play className="w-3 h-3 fill-current" />
            <span>Start Practice</span>
          </button>
        </div>
      </div>
    </div>
  );
}

