"use client";

import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Container, Button } from "@/components/ui";
import { HeroProductMockup } from "./HeroProductMockup";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-6 sm:pt-10 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 overflow-hidden bg-slate-50 dark:bg-[#090D14] transition-colors"
      aria-label="Hero Section"
    >
      {/* Background Ambient Glow Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 dark:bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Messaging & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Main Headline (Exactly One H1 per Page) */}
            <h1 className="text-display text-slate-900 dark:text-slate-100">
              Build a learning infrastructure tailored to your organization.
            </h1>

            {/* Supporting Copy */}
            <p className="text-body text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
              EduFlex delivers a modular LMS foundation engineered around your organizational training needs—from role-based access control and custom curriculum paths to measurable competency tracking and interactive practical simulations.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a href="#request-demo">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  <span>Request Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>

              <a href="#features">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <span>Explore Platform</span>
                </Button>
              </a>
            </div>

            {/* Credible B2B Trust Indicators (Zero Fake Claims) */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Three-tier access control</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Modular competency architecture</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive HTML/CSS Product Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 w-full"
          >
            <HeroProductMockup />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

