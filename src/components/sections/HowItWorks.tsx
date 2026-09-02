import React from "react";
import { Search, Compass, SlidersHorizontal, Rocket } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { ImplementationStep, ImplementationStepProps } from "./ImplementationStep";

const stepsData: Omit<ImplementationStepProps, "isLast">[] = [
  {
    number: "01",
    stageName: "DISCOVER",
    title: "Understand Your Organization",
    description:
      "Memahami struktur organisasi, target learner, kebutuhan training, competency goals, serta workflow pembelajaran yang ingin dibangun.",
    tags: ["Organization", "Training Goals", "Learner Structure", "Competency"],
    icon: <Search className="w-4 h-4 text-emerald-400" />,
  },
  {
    number: "02",
    stageName: "DESIGN",
    title: "Define the Learning Structure",
    description:
      "Menerjemahkan kebutuhan menjadi learning paths, modules, assessments, competency structures, roles, dan permission boundaries.",
    tags: ["Learning Paths", "Curriculum", "Assessments", "Roles"],
    icon: <Compass className="w-4 h-4 text-emerald-400" />,
  },
  {
    number: "03",
    stageName: "CONFIGURE",
    title: "Configure the Platform",
    description:
      "Mengatur platform berdasarkan struktur yang telah ditentukan, termasuk access control, learner experience, practical activities, dan platform behavior.",
    tags: [
      "Permissions",
      "Learning Experience",
      "Interactive Practice",
      "Platform Configuration",
    ],
    icon: <SlidersHorizontal className="w-4 h-4 text-emerald-400" />,
  },
  {
    number: "04",
    stageName: "DEPLOY",
    title: "Launch Your Learning Environment",
    description:
      "Menyiapkan environment EduFlex yang telah dikonfigurasi agar dapat digunakan oleh administrator, instructor, dan learner organisasi.",
    tags: ["Institutional Setup", "Admin Access", "Learner Access", "Deployment"],
    icon: <Rocket className="w-4 h-4 text-emerald-400" />,
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-16 bg-[#0B0F17] relative border-t border-slate-800/80"
      aria-label="How EduFlex Works"
    >
      {/* Background Subtle Gradient Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <Container className="relative z-10 space-y-16">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="From requirements to a working learning platform."
          description="Setiap alur implementasi EduFlex disusun secara terstruktur dari analisa kebutuhan instansi hingga lingkungan platform siap pakai — memastikan kustomisasi berjalan lancar tanpa keraguan operasional."
          align="center"
        />

        {/* 4-Step Process List (<ol> for semantic ordered process) */}
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {stepsData.map((step, idx) => (
            <ImplementationStep
              key={step.number}
              {...step}
              isLast={idx === stepsData.length - 1}
            />
          ))}
        </ol>
      </Container>
    </section>
  );
}
