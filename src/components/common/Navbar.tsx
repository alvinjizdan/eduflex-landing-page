import React from "react";
import Link from "next/link";
import { Container, Button } from "@/components/ui";
import { MobileNav } from "./MobileNav";

export interface NavItem {
  label: string;
  href: string;
}

const defaultNavItems: NavItem[] = [
  { label: "Fitur", href: "#features" },
  { label: "Solusi", href: "#solutions" },
  { label: "Proses", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B0F17]/85 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <Container className="flex items-center justify-between h-18">
        {/* Brand Wordmark */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg py-1 px-1.5"
          aria-label="EduFlex LMS Homepage"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-bold text-base shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            E
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-100">
            Edu<span className="text-emerald-400">Flex</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main Navigation"
        >
          {defaultNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md px-2 py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Action */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#request-demo">
            <Button variant="primary" size="sm">
              Jadwalkan Demo
            </Button>
          </a>
        </div>

        {/* Mobile Menu Component */}
        <MobileNav navItems={defaultNavItems} />
      </Container>
    </header>
  );
}
