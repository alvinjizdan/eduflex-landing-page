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
      "Analyze organizational structure, target learners, training requirements, competency goals, and the learning workflows you want to build.",
    tags: ["Organization", "Training Goals", "Learner Structure", "Competency"],
    icon: <Search className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
  },
  {
    number: "02",
    stageName: "DESIGN",
    title: "Define the Learning Structure",
    description:
      "Translate requirements into learning paths, modules, assessments, competency structures, roles, and permission boundaries.",
    tags: ["Learning Paths", "Curriculum", "Assessments", "Roles"],
    icon: <Compass className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
  },
  {
    number: "03",
    stageName: "CONFIGURE",
    title: "Configure the Platform",
    description:
      "Configure the platform around defined structures, including access control, learner experience, practical activities, and platform behaviors.",
    tags: [
      "Permissions",
      "Learning Experience",
      "Interactive Practice",
      "Platform Configuration",
    ],
    icon: <SlidersHorizontal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
  },
  {
    number: "04",
    stageName: "DEPLOY",
    title: "Launch Your Learning Environment",
    description:
      "Prepare and launch your configured EduFlex environment ready for administrators, instructors, and organizational learners.",
    tags: ["Institutional Setup", "Admin Access", "Learner Access", "Deployment"],
    icon: <Rocket className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-16 bg-slate-50 dark:bg-[#0B0F17] relative border-t border-slate-200 dark:border-slate-800/80 transition-colors"
      aria-label="How EduFlex Works"
    >
      {/* Background Subtle Gradient Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <Container className="relative z-10 space-y-16">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="From requirements to a working learning platform."
          description="Every EduFlex implementation follows a structured progression from institutional requirement analysis to a ready-to-use platform environment—ensuring smooth customization with zero operational friction."
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

