import React from "react";
import Link from "next/link";
import { Container, Button } from "@/components/ui";

export function Footer() {
  return (
    <footer className="w-full bg-[#070A0F] border-t border-slate-800/80 text-slate-400 py-12 sm:py-16">
      <Container className="space-y-12">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start text-left">
          {/* Brand Block (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg py-1"
              aria-label="EduFlex LMS Homepage"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-bold text-sm shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                E
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-100">
                Edu<span className="text-emerald-400">Flex</span>
              </span>
            </Link>

            <p className="text-body-small text-slate-400 max-w-sm leading-relaxed font-normal">
              Customizable learning infrastructure for organizations that need structured learning, practical training, and measurable competency.
            </p>
          </div>

          {/* Navigation Columns (4 cols on lg: 2 cols x 2) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6">
            {/* Column 1: Platform */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                PLATFORM
              </h3>
              <nav aria-label="Footer platform links" className="flex flex-col space-y-2 text-xs">
                <a
                  href="#features"
                  className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                >
                  Features
                </a>
                <a
                  href="#solutions"
                  className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                >
                  Solutions
                </a>
                <a
                  href="#customization"
                  className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                >
                  Customization
                </a>
                <a
                  href="#how-it-works"
                  className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                >
                  Process
                </a>
              </nav>
            </div>

            {/* Column 2: Resources */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                RESOURCES
              </h3>
              <nav aria-label="Footer resource links" className="flex flex-col space-y-2 text-xs">
                <a
                  href="#faq"
                  className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                >
                  FAQ
                </a>
                <a
                  href="#request-demo"
                  className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                >
                  Request a Demo
                </a>
              </nav>
            </div>
          </div>

          {/* Conversion CTA Block (4 cols on lg) */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-slate-100">
                Ready to build around your organization?
              </h4>
              <p className="text-xs text-slate-400">
                Discuss your learning requirements with the EduFlex team.
              </p>
            </div>

            <a href="#request-demo" className="block w-full">
              <Button variant="primary" size="sm" className="w-full justify-center">
                Request a Demo
              </Button>
            </a>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 EduFlex. All rights reserved.</p>
          <p className="text-slate-400 text-[11px]">
            Infrastructure LMS SaaS Terkustomisasi untuk Instansi & Perusahaan.
          </p>
        </div>
      </Container>
    </footer>
  );
}
