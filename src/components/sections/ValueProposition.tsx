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
      "Design training programs tailored to your institution's actual workflows without being forced into rigid, monolithic course structures.",
    icon: <Layers className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />,
    conceptTags: ["Modular Curriculum", "Custom Paths"],
  },
  {
    number: "02",
    title: "Configurable Role Control",
    description:
      "Configure granular permissions, administrative authorities, and privacy boundaries customized to your institution's organizational hierarchy.",
    icon: <ShieldCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />,
    conceptTags: ["3-Tier Hierarchy", "Access Control"],
  },
  {
    number: "03",
    title: "Competency Tracking",
    description:
      "Track real competency achievement, unit evaluations, and learner completion progress—not just video watch duration.",
    icon: <BarChart3 className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />,
    conceptTags: ["Learning Outcomes", "Oversight"],
  },
  {
    number: "04",
    title: "Interactive Practice",
    description:
      "Take education beyond theory with interactive web-based simulation labs, task-based exercises, and practical evaluations.",
    icon: <SlidersHorizontal className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />,
    conceptTags: ["Virtual Labs", "Practical Practice"],
  },
];

export function ValueProposition() {
  return (
    <section
      id="value-prop"
      className="py-12 sm:py-16 bg-slate-50 dark:bg-[#0B0F17] relative border-t border-slate-200 dark:border-slate-800/80 transition-colors"
      aria-label="Why EduFlex Value Proposition"
    >
      {/* Background Subtle Gradient Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <Container className="relative z-10 space-y-16">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="WHY EDUFLEX"
          title="An LMS should adapt to your organization — not the other way around."
          description="Conventional LMS platforms often force institutions into rigid course structures. EduFlex is built as a flexible foundation that aligns with your organization's program structure, roles, competency models, and practical training needs."
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

