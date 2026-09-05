"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui";
import { ThemeToggle } from "./ThemeToggle";

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavProps {
  navItems: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export function MobileNav({
  navItems,
  ctaLabel = "Request Demo",
  ctaHref = "#request-demo",
}: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden flex items-center gap-2">
      <ThemeToggle />

      {/* Menu Trigger Button */}
      <motion.button
        type="button"
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu-drawer"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white bg-slate-200/60 dark:bg-slate-800/60 border border-slate-300/80 dark:border-slate-700/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 min-w-[44px] min-h-[44px]"
      >
        {isOpen ? <X className="w-6 h-6 text-emerald-500 dark:text-emerald-400" /> : <Menu className="w-6 h-6" />}
      </motion.button>

      {/* Mobile Overlay & Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-x-0 top-[73px] h-[calc(100dvh-73px)] z-50 bg-white/95 dark:bg-[#090D14]/95 backdrop-blur-2xl border-t border-slate-200 dark:border-slate-800 flex flex-col justify-between p-6 overflow-y-auto pb-[calc(1.5rem+env(safe-area-inset-bottom))]"
          >
            <nav className="flex flex-col space-y-2 pt-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="text-lg font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-emerald-400 py-3.5 border-b border-slate-100 dark:border-slate-800/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg px-2 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </nav>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 space-y-4">
              <a href={ctaHref} onClick={handleLinkClick} className="block w-full">
                <Button variant="primary" size="lg" className="w-full justify-center">
                  <span>{ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

