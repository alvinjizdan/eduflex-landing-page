"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";

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
  ctaLabel = "Jadwalkan Demo",
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
    <div className="md:hidden">
      {/* Menu Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu-drawer"
        aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
        className="inline-flex items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Overlay & Drawer */}
      {isOpen && (
        <div
          id="mobile-menu-drawer"
          className="fixed inset-x-0 top-[73px] bottom-0 z-50 bg-[#0B0F17]/95 backdrop-blur-xl border-t border-slate-800/80 flex flex-col justify-between p-6 overflow-y-auto transition-all"
        >
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="text-lg font-medium text-slate-200 hover:text-emerald-400 py-3 border-b border-slate-800/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg px-2"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-slate-800/80 space-y-4">
            <a href={ctaHref} onClick={handleLinkClick} className="block w-full">
              <Button variant="primary" size="lg" className="w-full justify-center">
                <span>{ctaLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
