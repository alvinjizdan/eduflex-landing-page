import React from "react";
import {
  Layers,
  ShieldCheck,
  BarChart3,
  SlidersHorizontal,
} from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import {
  ValuePropositionItem,
  ValuePropositionItemProps,
} from "./ValuePropositionItem";

const valuePropsData: ValuePropositionItemProps[] = [
  {
    number: "01",
    title: "Modular Learning Paths",
    description:
      "Rancang program pelatihan sesuai alur kerja nyata instansi Anda tanpa dipaksa masuk ke struktur kursus konvensional yang kaku.",
    icon: <Layers className="w-4 h-4 text-emerald-400" />,
    conceptTags: ["Modular Curriculum", "Custom Paths"],
  },
  {
    number: "02",
    title: "Configurable Role Control",
    description:
      "Atur hak akses, wewenang administratif, dan batasan privasi yang dapat disesuaikan dengan hirarki struktur instansi Anda.",
    icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
    conceptTags: ["3-Tier Hierarchy", "Access Control"],
  },
  {
    number: "03",
    title: "Competency Tracking",
    description:
      "Pantau pencapaian kompetensi riil, evaluasi unit, dan progres kelulusan peserta — bukan sekadar durasi menonton video.",
    icon: <BarChart3 className="w-4 h-4 text-emerald-400" />,
    conceptTags: ["Learning Outcomes", "Oversight"],
  },
  {
    number: "04",
    title: "Interactive Practice",
    description:
      "Bawa edukasi melampaui teori dengan laboratorium simulasi web interaktif, latihan berbasis tugas, dan evaluasi praktik.",
    icon: <SlidersHorizontal className="w-4 h-4 text-emerald-400" />,
    conceptTags: ["Virtual Labs", "Practical Practice"],
  },
];

export function ValueProposition() {
  return (
    <section
      id="value-prop"
      className="py-12 sm:py-16 bg-[#0B0F17] relative border-t border-slate-800/80"
      aria-label="Why EduFlex Value Proposition"
    >
      {/* Background Subtle Gradient Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <Container className="relative z-10 space-y-16">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="WHY EDUFLEX"
          title="An LMS should adapt to your organization — not the other way around."
          description="Platform LMS konvensional sering kali memaksa instansi mengikuti struktur kursus kaku. EduFlex dirancang sebagai fondasi fleksibel yang mengikuti struktur program, peran, model kompetensi, dan kebutuhan praktik organisasi Anda."
          align="center"
        />

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuePropsData.map((item) => (
            <ValuePropositionItem key={item.number} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
