"use client";

import React, { useState } from "react";
import { ShieldCheck, Users, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { RoleMockupPreview } from "./RoleMockupPreview";

type RoleType = "superadmin" | "admin" | "learner";

interface RoleDetails {
  id: RoleType;
  title: string;
  badgeLabel: string;
  icon: React.ReactNode;
  summary: string;
  permissions: string[];
  ctaText: string;
}

const rolesData: Record<RoleType, RoleDetails> = {
  superadmin: {
    id: "superadmin",
    title: "SuperAdmin (Platform Owner)",
    badgeLabel: "Global Control",
    icon: <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
    summary:
      "Top-tier access to manage the entire LMS platform ecosystem, configure institutional features, and control user access rights across the platform.",
    permissions: [
      "Globally toggle platform features on/off",
      "Manage tenant settings & institutional hierarchy",
      "Set privacy boundaries and role permission matrices",
      "System performance monitoring & global audit tools",
    ],
    ctaText: "Explore SuperAdmin Features",
  },
  admin: {
    id: "admin",
    title: "Institutional Admin (Training Director)",
    badgeLabel: "Institutional Admin",
    icon: <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
    summary:
      "Institutional managerial access to build curriculum flows, manage learner enrollments, monitor competency levels, and oversee assessment histories.",
    permissions: [
      "Manage curriculum flows & institutional training modules",
      "Learner enrollment & group cohort management",
      "Completion oversight & assessment result analytics",
      "Reset assessment attempts & instructor assistance",
    ],
    ctaText: "Explore Institutional Admin Features",
  },
  learner: {
    id: "learner",
    title: "Learner User (Student / Employee)",
    badgeLabel: "Learner Portal",
    icon: <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
    summary:
      "Focused learning interface for students and employees to access modular content, complete evaluation quizzes, and execute interactive simulation labs.",
    permissions: [
      "Access assigned modular learning paths & material content",
      "Complete evaluation quizzes & track personal progress",
      "Run interactive web-based simulation labs",
      "Receive competency feedback & verified certificates",
    ],
    ctaText: "Explore Learner Experience",
  },
};

export function RoleShowcase() {
  const [activeRole, setActiveRole] = useState<RoleType>("superadmin");
  const currentRoleData = rolesData[activeRole];

  return (
    <div className="space-y-8 text-left">
      {/* Role Selection Tabs with Framer Motion Sliding Pill */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-200/80 dark:bg-slate-900/80 border border-slate-300/80 dark:border-slate-800/80 max-w-2xl mx-auto backdrop-blur-md">
        {(["superadmin", "admin", "learner"] as RoleType[]).map((rKey) => {
          const isActive = activeRole === rKey;
          const label = rKey === "superadmin" ? "SuperAdmin" : rKey === "admin" ? "Institutional Admin" : "Learner User";
          const IconComponent = rKey === "superadmin" ? ShieldCheck : rKey === "admin" ? Users : BookOpen;

          return (
            <button
              key={rKey}
              type="button"
              onClick={() => setActiveRole(rKey)}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                isActive
                  ? "text-emerald-700 dark:text-emerald-400"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeRolePill"
                  className="absolute inset-0 bg-white dark:bg-emerald-500/10 border border-slate-300 dark:border-emerald-500/30 rounded-xl shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <IconComponent className="w-4 h-4" />
                <span>{label}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Role Showcase Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
        {/* Left Column: Role Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-3">
              <h3 className="text-h3 text-slate-900 dark:text-slate-100 font-bold">
                {currentRoleData.title}
              </h3>
              <p className="text-body-small text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {currentRoleData.summary}
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Key Authority & Core Capabilities:
              </h4>
              <div className="space-y-2">
                {currentRoleData.permissions.map((perm) => (
                  <div key={perm} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{perm}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a href="#request-demo">
                <Button variant="secondary" size="md">
                  <span>{currentRoleData.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </Button>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right Column: Live Mockup Preview */}
        <div className="lg:col-span-7 w-full">
          <RoleMockupPreview role={activeRole} />
        </div>
      </div>
    </div>
  );
}

