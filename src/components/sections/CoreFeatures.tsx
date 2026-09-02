import React from "react";
import {
  BookOpen,
  Users,
  TrendingUp,
  SlidersHorizontal,
  Check,
  Award,
} from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { FeatureBlock } from "./FeatureBlock";

export function CoreFeatures() {
  return (
    <section
      id="features"
      className="py-12 sm:py-16 bg-[#0B0F17] relative border-t border-slate-800/80"
      aria-label="Core Platform Capabilities"
    >
      {/* Background Subtle Gradient Glow Accent */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[300px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <Container className="relative z-10 space-y-16">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="CORE PLATFORM CAPABILITIES"
          title="Everything your organization needs to build structured learning."
          description="EduFlex menyediakan infrastruktur inti untuk merancang jalur pembelajaran, mengelola akses organisasi, memantau tingkat kompetensi, dan menyajikan pengalaman pelatihan praktis dalam satu platform terkustomisasi."
          align="center"
        />

        {/* Asymmetric Product Feature Layout */}
        <div className="space-y-8">
          {/* Row 1: 01 Curriculum & 02 Organization (2 Medium Columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FeatureBlock
              number="01"
              groupTitle="Curriculum & Learning"
              description="Strukturkan alur pembelajaran sesuai kurikulum, alur kerja, dan persyaratan standar kompetensi internal instansi Anda."
              icon={<BookOpen className="w-5 h-5 text-emerald-400" />}
              capabilities={[
                "Modular Learning Paths",
                "Multi-format Materials",
                "Assessments & Quizzes",
                "Structured Curriculum",
              ]}
            />

            <FeatureBlock
              number="02"
              groupTitle="Organization & Access"
              description="Atur bagaimana peserta, instruktur, dan administrator berinteraksi dengan hak akses dan batas privasi yang terkontrol."
              icon={<Users className="w-5 h-5 text-emerald-400" />}
              capabilities={[
                "User Management",
                "Role-Based Access",
                "Administrative Hierarchy",
                "Enrollment Management",
              ]}
            />
          </div>

          {/* Row 2: 03 Competency & Progress (Wider Analytical Treatment) */}
          <FeatureBlock
            number="03"
            groupTitle="Competency & Progress"
            description="Ukur ketercapaian hasil pembelajaran secara obyektif melalui pemantauan progres terstruktur dan evaluasi kompetensi."
            icon={<TrendingUp className="w-5 h-5 text-emerald-400" />}
            capabilities={[
              "Progress Tracking",
              "Completion Status",
              "Assessment Results",
              "Competency Monitoring",
            ]}
            variant="wide"
          >
            {/* Illustrative Competency & Progress UI Preview (Demo Data Labelled) */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-4 text-left">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-slate-200">
                    Institutional Competency Oversight (Illustrative Demo)
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Track: Engineering Ops
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-medium">
                    Program Completion
                  </div>
                  <div className="text-lg font-bold font-mono text-emerald-400 mt-1">
                    92%
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    12 / 13 Units Mastered
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-medium">
                    Evaluation Average
                  </div>
                  <div className="text-lg font-bold font-mono text-slate-100 mt-1">
                    88.5 Score
                  </div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">
                    Passed Standards
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-medium">
                    Practical Lab State
                  </div>
                  <div className="text-lg font-bold font-mono text-emerald-400 mt-1">
                    Completed
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Verified Competency
                  </div>
                </div>
              </div>
            </div>
          </FeatureBlock>

          {/* Row 3: 04 Interactive Practice (Highlight Core Differentiator) */}
          <FeatureBlock
            number="04"
            groupTitle="Interactive Practice & Simulations"
            description="Bawa pelatihan melampaui teori kaku dengan laboratorium simulasi web interaktif, latihan berbasis tugas, dan evaluasi praktik langsung."
            icon={<SlidersHorizontal className="w-5 h-5 text-emerald-400" />}
            capabilities={[
              "Interactive Simulations",
              "Virtual Labs",
              "Task-Based Exercises",
              "Practical Evaluation",
            ]}
            variant="highlight"
          >
            {/* Illustrative Virtual Lab Engine UI Preview */}
            <div className="p-5 rounded-xl bg-slate-950/90 border border-emerald-500/20 space-y-4 text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-100">
                    Interactive Virtual Simulation Lab (Feature Preview)
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Lab Engine Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-300">
                    <span>Task 1: Signal & Hardware Setup</span>
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Interactive drag-and-drop hardware positioning & verification.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-300">
                    <span>Task 2: Fault Tolerance Testing</span>
                    <span className="text-[10px] text-emerald-400 font-mono">
                      In Progress
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Real-time visual feedback & practical parameter evaluation.
                  </p>
                </div>
              </div>
            </div>
          </FeatureBlock>
        </div>
      </Container>
    </section>
  );
}
