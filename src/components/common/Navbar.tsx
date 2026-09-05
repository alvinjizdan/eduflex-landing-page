import React from "react";
import Link from "next/link";
import { Container, Button } from "@/components/ui";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";

export interface NavItem {
  label: string;
  href: string;
}

const defaultNavItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#090D14]/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
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
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Edu<span className="text-emerald-500 dark:text-emerald-400">Flex</span>
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
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md px-2 py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Action & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a href="#request-demo">
            <Button variant="primary" size="sm">
              Request Demo
            </Button>
          </a>
        </div>

        {/* Mobile Menu Component */}
        <MobileNav navItems={defaultNavItems} />
      </Container>
    </header>
  );
}

