import React from "react";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeading, Button, Card } from "@/components/ui";
import { FAQAccordion } from "./FAQAccordion";
import { TrustAssurance } from "./TrustAssurance";

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-12 sm:py-16 bg-slate-50 dark:bg-[#0B0F17] relative border-t border-slate-200 dark:border-slate-800/80 transition-colors"
      aria-label="Frequently Asked Questions"
    >
      {/* Background Subtle Gradient Glow Accent */}
      <div className="absolute top-1/3 right-10 w-[700px] h-[300px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <Container className="relative z-10 space-y-16">
        {/* FAQ Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Heading & Reassurance */}
          <div className="lg:col-span-5 text-left space-y-6 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="FREQUENTLY ASKED QUESTIONS"
              title="Questions about building your learning environment?"
              description="EduFlex is designed to adapt to how your organization structures learning, access, practice, and deployment."
              align="left"
            />

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3 shadow-subtle">
              <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-200">
                Need more information?
              </h4>
              <p className="text-body-small text-slate-600 dark:text-slate-400">
                The EduFlex team is ready to discuss your organization&apos;s LMS architecture requirements in detail.
              </p>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7 w-full">
            <FAQAccordion />
          </div>
        </div>

        {/* Product Assurance Principles */}
        <TrustAssurance />

        {/* Section CTA Box */}
        <div className="pt-6">
          <Card
            variant="glass"
            className="p-8 sm:p-10 border border-emerald-500/40 dark:border-emerald-500/30 bg-gradient-to-r from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-900 text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                STILL HAVE QUESTIONS?
              </span>
              <h3 className="text-h3 text-slate-900 dark:text-slate-100 font-bold">
                Let&apos;s talk about your learning environment.
              </h3>
              <p className="text-body-small text-slate-600 dark:text-slate-300">
                Tell us how your organization structures learning, access, and practical training, and we can discuss how EduFlex could be configured around it.
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

