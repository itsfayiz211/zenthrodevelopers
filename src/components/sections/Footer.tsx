"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "Why Us", href: "#why-choose-v" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Full-Stack Web Systems",
    "SaaS Architectures",
    "Analytics Dashboards",
    "Branding Experiences",
    "Startup MVPs",
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 bg-brand-bg-dark border-t border-brand-border overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Footer Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start mb-12">
          
          {/* Logo Column */}
          <div className="md:col-span-5 flex flex-col items-start text-left">
            <span className="font-display font-extrabold text-3xl tracking-tighter text-brand-text-primary flex items-center mb-4">
              V
              <span className="inline-block w-2 h-2 rounded-full bg-brand-primary ml-1"></span>
            </span>
            <p className="font-sans text-xs md:text-sm text-brand-text-secondary leading-relaxed max-w-sm mb-6">
              Crafting premium digital systems for modern brands. We engineer high-performance custom software, SaaS products, and premium websites.
            </p>
            <span className="text-[10px] font-mono text-brand-text-secondary/50 uppercase tracking-widest">
              v-agency // engineering
            </span>
          </div>

          {/* Nav Links Column */}
          <div className="md:col-span-3 flex flex-col items-start text-left">
            <h5 className="font-display font-bold text-xs uppercase tracking-wider text-brand-text-primary mb-4">Navigation</h5>
            <div className="flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="font-sans text-xs text-brand-text-secondary hover:text-brand-text-primary hover:text-brand-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="md:col-span-4 flex flex-col items-start text-left">
            <h5 className="font-display font-bold text-xs uppercase tracking-wider text-brand-text-primary mb-4">Core Systems</h5>
            <div className="flex flex-col gap-2">
              {services.map((svc, idx) => (
                <span
                  key={idx}
                  className="font-sans text-xs text-brand-text-secondary"
                >
                  {svc}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-8 border-t border-brand-border/60 gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-left">
            <span className="text-[11px] text-brand-text-secondary/70">
              © {currentYear} Zenthro Developers. All rights reserved.
            </span>
            <a href="#" className="text-[11px] text-brand-text-secondary/70 hover:text-brand-text-primary transition-colors">
              Privacy Protocol
            </a>
            <a href="#" className="text-[11px] text-brand-text-secondary/70 hover:text-brand-text-primary transition-colors">
              Terms of Operation
            </a>
          </div>

          {/* Scroll to Top button */}
          <button
            onClick={handleScrollTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-brand-border bg-brand-card hover:border-brand-primary/40 text-brand-text-primary text-[10px] font-bold uppercase tracking-wider transition-all duration-300 self-start sm:self-center"
            aria-label="Scroll back to top"
          >
            Top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
