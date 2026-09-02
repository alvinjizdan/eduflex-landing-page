import React from "react";
import { Container, SectionHeading } from "@/components/ui";
import { RoleShowcase } from "./RoleShowcase";

export function Solutions() {
  return (
    <section
      id="solutions"
      className="py-12 sm:py-16 bg-[#0B0F17] relative border-t border-slate-800/80"
      aria-label="Role-Based Platform Solutions"
    >
      {/* Background Subtle Gradient Glow Accent */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <Container className="relative z-10 space-y-14">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="ROLE-BASED SOLUTIONS"
          title="Designed for every stakeholder in your learning ecosystem."
          description="EduFlex secara dinamis menyesuaikan antarmuka, kontrol akses, dan alur kerja berdasarkan tanggung jawab setiap pengguna di organisasi Anda — dari pemilik platform hingga peserta pelatihan."
          align="center"
        />

        {/* Role Showcase Client Component */}
        <RoleShowcase />
      </Container>
    </section>
  );
}
