"use client";

import React, { useState } from "react";
import { ShieldCheck, Users, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
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
    icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
    summary:
      "Akses tingkat tertinggi untuk mengelola seluruh ekosistem platform LMS, mengonfigurasi fitur instansi, serta mengontrol hak akses seluruh pengguna.",
    permissions: [
      "Mengaktifkan/mematikan fitur platform secara global",
      "Mengelola pengaturan tenant & hierarki instansi",
      "Mengatur batas privasi dan matriks perizinan role",
      "Monitoring performa & sistem pengawasan global",
    ],
    ctaText: "Pelajari Fitur SuperAdmin",
  },
  admin: {
    id: "admin",
    title: "Admin Instansi (Training Director)",
    badgeLabel: "Institutional Admin",
    icon: <Users className="w-4 h-4 text-emerald-400" />,
    summary:
      "Akses manajerial instansi untuk mengatur kurikulum, mengelola pendaftaran peserta, memantau tingkat kompetensi, dan mengontrol riwayat ujian.",
    permissions: [
      "Mengelola alur kurikulum & modul pelatihan instansi",
      "Pendaftaran & pengelompokan peserta pelatihan",
      "Oversight kelulusan & pengawasan hasil evaluasi",
      "Reset kesempatan ujian & bantuan instruktur",
    ],
    ctaText: "Pelajari Fitur Admin Instansi",
  },
  learner: {
    id: "learner",
    title: "User Learner (Peserta / Karyawan)",
    badgeLabel: "Learner Portal",
    icon: <BookOpen className="w-4 h-4 text-emerald-400" />,
    summary:
      "Antarmuka fokus pembelajaran bagi peserta untuk mengakses materi modular, menyelesaikan kuis evaluasi, dan menjalankan simulasi praktik interaktif.",
    permissions: [
      "Akses alur materi & modul yang ditugaskan",
      "Pengerjaan kuis evaluasi & pelacakan progres mandiri",
      "Menjalankan laboratorium simulasi web interaktif",
      "Menerima umpan balik kompetensi & sertifikasi",
    ],
    ctaText: "Pelajari Pengalaman Learner",
  },
};

export function RoleShowcase() {
  const [activeRole, setActiveRole] = useState<RoleType>("superadmin");
  const currentRoleData = rolesData[activeRole];

  return (
    <div className="space-y-8 text-left">
      {/* Role Selection Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 max-w-2xl mx-auto">
        <button
          type="button"
          onClick={() => setActiveRole("superadmin")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
            activeRole === "superadmin"
              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-sm shadow-emerald-500/10"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent"
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>SuperAdmin</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveRole("admin")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
            activeRole === "admin"
              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-sm shadow-emerald-500/10"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent"
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Admin Instansi</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveRole("learner")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
            activeRole === "learner"
              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-sm shadow-emerald-500/10"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>User Learner</span>
        </button>
      </div>

      {/* Role Showcase Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
        {/* Left Column: Role Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <h3 className="text-h3 text-slate-100 font-bold">
              {currentRoleData.title}
            </h3>
            <p className="text-body-small text-slate-300 leading-relaxed font-normal">
              {currentRoleData.summary}
            </p>
          </div>

          <div className="space-y-2.5 pt-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Hak Wewenang & Kapabilitas Utama:
            </h4>
            <div className="space-y-2">
              {currentRoleData.permissions.map((perm) => (
                <div key={perm} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{perm}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <a href="#request-demo">
              <Button variant="secondary" size="md">
                <span>{currentRoleData.ctaText}</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </Button>
            </a>
          </div>
        </div>

        {/* Right Column: Live Mockup Preview */}
        <div className="lg:col-span-7 w-full">
          <RoleMockupPreview role={activeRole} />
        </div>
      </div>
    </div>
  );
}
