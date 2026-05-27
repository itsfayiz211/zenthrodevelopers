"use client";

import React from "react";
import { ArrowUp, ExternalLink } from "lucide-react";

export default function Footer() {
  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "Why Us", href: "#why-choose-v" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    { label: "Email", value: "hello@v-system.io", href: "mailto:hello@v-system.io" },
    { label: "Location", value: "Zurich, Switzerland" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "#", icon: <ExternalLink className="w-4 h-4" /> },
    { label: "Twitter", href: "#", icon: <ExternalLink className="w-4 h-4" /> },
    { label: "Instagram", href: "#", icon: <ExternalLink className="w-4 h-4" /> },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 bg-brand-bg-dark border-t border-brand-border overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Footer Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start mb-10">
          
          {/* Brand Column */}
          <div className="flex flex-col items-start text-left">
            <span className="font-display font-extrabold text-3xl tracking-tighter text-brand-text-primary flex items-center mb-4">
              Z
              <span className="inline-block w-2 h-2 rounded-full bg-brand-primary ml-1"></span>
            </span>
            <p className="font-sans text-xs md:text-sm text-brand-text-secondary leading-relaxed max-w-sm mb-6">
              Simple websites and apps for growing businesses.
            </p>
            <a
              href="mailto:hello@v-system.io"
              className="inline-flex items-center text-[11px] font-semibold uppercase tracking-wider text-brand-primary hover:text-brand-secondary transition-colors"
            >
              hello@v-system.io
            </a>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-start text-left">
            <h5 className="font-display font-bold text-xs uppercase tracking-wider text-brand-text-primary mb-4">Quick links</h5>
            <div className="flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="font-sans text-xs text-brand-text-secondary hover:text-brand-text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact details */}
          <div className="flex flex-col items-start text-left">
            <h5 className="font-display font-bold text-xs uppercase tracking-wider text-brand-text-primary mb-4">Contact</h5>
            <div className="flex flex-col gap-2">
              {contactInfo.map((item, idx) => (
                <div key={idx}>
                  <span className="block text-[10px] text-brand-text-secondary/70 uppercase tracking-wider mb-1">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-sans text-xs text-brand-text-secondary hover:text-brand-text-primary transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-sans text-xs text-brand-text-secondary">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social media */}
          <div className="flex flex-col items-start text-left">
            <h5 className="font-display font-bold text-xs uppercase tracking-wider text-brand-text-primary mb-4">Follow us</h5>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  aria-label={link.label}
                  className="inline-flex items-center gap-2 rounded-xl border border-brand-border/60 px-3 py-2 text-[11px] font-semibold text-brand-text-secondary hover:border-brand-primary/40 hover:text-brand-primary transition-all duration-200"
                >
                  {link.icon}
                  {link.label}
                </a>
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
              Privacy Policy
            </a>
            <a href="#" className="text-[11px] text-brand-text-secondary/70 hover:text-brand-text-primary transition-colors">
              Terms of Service
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
