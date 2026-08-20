"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { navLinks } from "@/lib/data";
import { useActiveSection } from "@/lib/useActiveSection";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-[0_8px_40px_-12px_rgba(124,77,255,0.35)]" : "bg-transparent"
          }`}
        >
          <a
            href="#home"
            onClick={(e) => handleClick(e, "#home")}
            className="flex items-center gap-2 font-display text-lg font-bold tracking-tight"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-[0_0_20px_-4px_rgba(124,77,255,0.7)]">
              <Code2 size={18} />
            </span>
            <span>
              Jethro<span className="text-gradient">.dev</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive ? "text-white" : "text-text-muted hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-white/10 border border-primary/40"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_-6px_rgba(124,77,255,0.8)] transition-transform hover:scale-105"
            >
              Let&apos;s Talk
            </a>
          </div>

          <button
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-border text-text"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-5 mt-2 rounded-2xl glass-strong px-2 py-3"
          >
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive ? "bg-white/10 text-white" : "text-text-muted hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
