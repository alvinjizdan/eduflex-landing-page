import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Container, Button } from "@/components/ui";
import { HeroProductMockup } from "./HeroProductMockup";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-6 sm:pt-8 lg:pt-12 pb-10 sm:pb-12 lg:pb-16 overflow-hidden bg-[#0B0F17]"
      aria-label="Hero Section"
    >
      {/* Background Ambient Glow Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Main Headline (Exactly One H1 per Page) */}
            <h1 className="text-display text-slate-100">
              Bangun infrastruktur pembelajaran yang sesuai dengan organisasi Anda.
            </h1>

            {/* Supporting Copy */}
            <p className="text-body text-slate-300 max-w-2xl font-normal leading-relaxed">
              EduFlex menyediakan fondasi LMS modular yang mengikuti kebutuhan pelatihan organisasi Anda—mulai dari kontrol akses berbasis peran, jalur kurikulum khusus, hingga pelacakan kompetensi dan simulasi praktik interaktif.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a href="#request-demo">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  <span>Jadwalkan Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>

              <a href="#features">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <span>Jelajahi Platform</span>
                </Button>
              </a>
            </div>

            {/* Credible B2B Trust Indicators (Zero Fake Claims) */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Kontrol akses tiga tingkat</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Arsitektur kompetensi modular</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive HTML/CSS Product Visual Mockup */}
          <div className="lg:col-span-5 w-full">
            <HeroProductMockup />
          </div>
        </div>
      </Container>
    </section>
  );
}
