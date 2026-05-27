"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-4 bg-brand-bg-dark/95 backdrop-blur-xl border-b border-brand-border"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-6">
          <a href="#" className="flex items-center gap-3 rounded-3xl px-3 py-2 transition hover:bg-brand-bg-light/80">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-primary/15 ring-1 ring-brand-primary/30 text-brand-primary">
              <span className="font-display text-lg font-bold">Z</span>
            </div>
            <div>
              <p className="font-display text-xl font-semibold text-brand-text-primary">Zenthro</p>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-text-secondary">Digital partner</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-brand-text-secondary transition-colors duration-200 hover:text-brand-text-primary"
              >
                {link.name}
                <span className="absolute inset-x-0 bottom-0 mx-auto h-0.5 w-0 rounded-full bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <ThemeToggle />
            <a
              href="/order"
              className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-5 py-2.5 text-sm font-semibold text-brand-text-primary transition duration-300 hover:bg-brand-primary/20 hover:border-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-border bg-brand-bg-medium text-brand-text-primary transition hover:bg-brand-bg-light/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 md:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden bg-brand-bg-dark/95 backdrop-blur-2xl px-6 py-6"
          >
            <div className="mx-auto flex max-w-lg flex-col gap-5 rounded-[32px] border border-brand-border bg-brand-bg-medium/95 p-6 shadow-2xl shadow-brand-primary/10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-semibold text-brand-text-primary transition-colors duration-200 hover:text-brand-primary"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center justify-between gap-3">
                <ThemeToggle />
                <a
                  href="/order"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center rounded-3xl bg-brand-primary px-6 py-4 text-center text-base font-semibold text-brand-bg-dark transition hover:bg-brand-secondary"
                >
                  Start Your Project
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
