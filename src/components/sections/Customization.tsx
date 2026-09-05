import React from "react";
import {
  BookOpen,
  Users,
  SlidersHorizontal,
  Server,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Container, SectionHeading, Button, Card } from "@/components/ui";
import { CustomizationFlow } from "./CustomizationFlow";
import { CustomizationArea } from "./CustomizationArea";

const areasData = [
  {
    number: "01",
    title: "Learning Structure",
    description:
      "Adapt learning paths, modules, assessments, and competency structures to the organization's training framework.",
    conceptTags: [
      "Modular Curriculum",
      "Custom Learning Paths",
      "Assessments",
      "Competency Model",
    ],
    icon: <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
  },
  {
    number: "02",
    title: "Roles & Permissions",
    description:
      "Configure access levels and responsibilities according to the organization's administrative hierarchy.",
    conceptTags: [
      "Role-Based Access",
      "Permission Control",
      "Administrative Hierarchy",
      "Learner Access",
    ],
    icon: <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
  },
  {
    number: "03",
    title: "Learning Experience",
    description:
      "Shape how learners interact with materials, assessments, practical exercises, and simulations.",
    conceptTags: [
      "Interactive Practice",
      "Virtual Labs",
      "Assessments",
      "Progress Tracking",
    ],
    icon: <SlidersHorizontal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
  },
  {
    number: "04",
    title: "Institutional Deployment",
    description:
      "Structure the platform around the organization's operational environment and implementation needs.",
    conceptTags: [
      "Institutional Setup",
      "Platform Configuration",
      "Deployment Model",
      "Integration Ready",
    ],
    icon: <Server className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
  },
];

const implementationStages = [
  {
    stage: "01",
    title: "Define",
    description:
      "Understand organizational structure, learning requirements, and competency goals.",
  },
  {
    stage: "02",
    title: "Configure",
    description:
      "Translate requirements into curriculum, roles, workflows, and platform configuration.",
  },
  {
    stage: "03",
    title: "Deploy",
    description:
      "Deliver the configured LMS environment for institutional use.",
  },
];

export function Customization() {
  return (
    <section
      id="customization"
      className="py-12 sm:py-16 bg-slate-50 dark:bg-[#0B0F17] relative border-t border-slate-200 dark:border-slate-800/80 transition-colors"
      aria-label="Customization and Deployment Model"
    >
      {/* Background Subtle Gradient Glow Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <Container className="relative z-10 space-y-16">
        {/* Section Heading & Flow Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-5 text-left">
            <SectionHeading
              eyebrow="CUSTOMIZATION"
              title="Built around your organization, not the other way around."
              description="Configure the learning structure, roles, experiences, and deployment model around how your organization actually operates."
              align="left"
            />
          </div>

          <div className="lg:col-span-7 w-full">
            <CustomizationFlow />
          </div>
        </div>

        {/* 4 Customization Areas (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {areasData.map((area) => (
            <CustomizationArea key={area.number} {...area} />
          ))}
        </div>

        {/* High-Level Implementation Model (3 Conceptual Stages) */}
        <div className="pt-8 space-y-6">
          <div className="text-left space-y-2 max-w-xl">
            <h3 className="text-h3 text-slate-900 dark:text-slate-100 font-semibold">
              Implementation Approach
            </h3>
            <p className="text-body-small text-slate-600 dark:text-slate-400">
              The process of consolidating your organization&apos;s requirements into a configured platform environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {implementationStages.map((stg) => (
              <Card
                key={stg.stage}
                variant="default"
                className="p-6 space-y-3 border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/40"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                    STAGE {stg.stage}
                  </span>
                </div>
                <h4 className="text-h3 text-slate-900 dark:text-slate-100 font-semibold">
                  {stg.title}
                </h4>
                <p className="text-body-small text-slate-600 dark:text-slate-400">
                  {stg.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Restrained CTA Box */}
        <div className="pt-6">
          <Card
            variant="glass"
            className="p-8 sm:p-10 border border-emerald-500/40 dark:border-emerald-500/30 bg-gradient-to-r from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-900 text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-h3 text-slate-900 dark:text-slate-100 font-bold">
                  Have a specific LMS structure in mind?
                </h3>
              </div>
              <p className="text-body-small text-slate-600 dark:text-slate-300">
                Tell us how your organization currently manages learning and competency development. We can explore how EduFlex can be structured around those requirements.
              </p>
            </div>

            <a href="#request-demo" className="flex-shrink-0 w-full md:w-auto">
              <Button variant="primary" size="lg" className="w-full md:w-auto">
                <span>Discuss Your Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </Card>
        </div>
      </Container>
    </section>
  );
}

