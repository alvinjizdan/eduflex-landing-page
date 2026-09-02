import React from "react";
import { Search, Compass, Rocket } from "lucide-react";
import { Container, SectionHeading, Card } from "@/components/ui";
import { DemoForm } from "./DemoForm";

const expectations = [
  {
    step: "1",
    title: "Understand your training requirements",
    description: "Analisa mendalam struktur pelatihan, target peserta, dan sasaran kompetensi instansi.",
    icon: <Search className="w-4 h-4 text-emerald-400" />,
  },
  {
    step: "2",
    title: "Explore the right platform structure",
    description: "Perancangan alur materi modular, hirarki wewenang role, dan simulasi interaktif.",
    icon: <Compass className="w-4 h-4 text-emerald-400" />,
  },
  {
    step: "3",
    title: "Discuss customization and deployment needs",
    description: "Konsolidasi model implementasi yang sesuai dengan lingkungan operasional organisasi.",
    icon: <Rocket className="w-4 h-4 text-emerald-400" />,
  },
];

export function RequestDemo() {
  return (
    <section
      id="request-demo"
      className="py-12 sm:py-16 bg-[#0B0F17] relative border-t border-slate-800/80"
      aria-label="Request a Demo"
    >
      {/* Background Subtle Gradient Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <Container className="relative z-10 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Heading & What to Expect */}
          <div className="lg:col-span-5 text-left space-y-8 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="REQUEST A DEMO"
              title="Let's build the right learning environment for your organization."
              description="Tell us how your organization structures learning, access, and practical training. We'll use those requirements as the starting point for a focused discussion about EduFlex."
              align="left"
            />

            {/* WHAT TO EXPECT Block */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                WHAT TO EXPECT
              </h3>

              <div className="space-y-3">
                {expectations.map((item) => (
                  <div
                    key={item.step}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-semibold text-slate-200">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7 w-full">
            <Card
              variant="glass"
              className="p-6 sm:p-8 border border-emerald-500/40 bg-slate-900/90 shadow-xl shadow-emerald-500/5 backdrop-blur-xl"
            >
              <DemoForm />
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
