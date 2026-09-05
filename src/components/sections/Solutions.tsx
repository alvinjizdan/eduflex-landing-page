import React from "react";
import { Container, SectionHeading } from "@/components/ui";
import { RoleShowcase } from "./RoleShowcase";

export function Solutions() {
  return (
    <section
      id="solutions"
      className="py-12 sm:py-16 bg-slate-50 dark:bg-[#0B0F17] relative border-t border-slate-200 dark:border-slate-800/80 transition-colors"
      aria-label="Role-Based Platform Solutions"
    >
      {/* Background Subtle Gradient Glow Accent */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <Container className="relative z-10 space-y-14">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="ROLE-BASED SOLUTIONS"
          title="Designed for every stakeholder in your learning ecosystem."
          description="EduFlex dynamically adapts interfaces, access controls, and workflows based on each user's responsibility in your organization—from platform owners to learners."
          align="center"
        />

        {/* Role Showcase Client Component */}
        <RoleShowcase />
      </Container>
    </section>
  );
}

