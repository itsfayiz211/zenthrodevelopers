"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TechStack() {
  const row1 = [
    { name: "Next.js", category: "Frontend" },
    { name: "React", category: "Library" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "TypeScript", category: "Language" },
    { name: "Framer Motion", category: "Animations" },
    { name: "Three.js", category: "3D Engine" },
    { name: "Vite", category: "Bundler" },
    { name: "HTML5/CSS3", category: "Core" },
  ];

  const row2 = [
    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Framework" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Socket.IO", category: "Real-time" },
    { name: "Firebase", category: "Serverless" },
    { name: "Amazon AWS", category: "Cloud Infrastructure" },
    { name: "Stripe Billing", category: "Payments Engine" },
  ];

  // Double the arrays to ensure seamless infinite looping marquee
  const row1Doubled = [...row1, ...row1];
  const row2Doubled = [...row2, ...row2];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-brand-bg-dark border-b border-brand-border">
      {/* Glow Blur */}
      <div className="absolute top-[20%] left-[20%] w-[350px] h-[350px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none pulse-glow-green" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-12">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-3">
            Our tools
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight text-brand-text-primary mb-4">
            Modern tools <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary text-glow">
              Made with care.
            </span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-brand-text-secondary leading-relaxed">
            We use modern tools to build fast, secure, and reliable platforms.
          </p>
        </div>
      </div>

      {/* Marquee Rows */}
      <div className="flex flex-col gap-6 w-full relative">
        {/* Soft shadow edge mask overlays (creates gradient fade out on left and right) */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-brand-bg-dark to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-brand-bg-dark to-transparent z-20 pointer-events-none" />

        {/* Row 1 - Left to Right */}
        <div className="flex overflow-hidden select-none w-full">
          <div className="flex gap-4 md:gap-6 py-2 animate-marquee whitespace-nowrap min-w-full">
            {row1Doubled.map((tech, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-brand-border bg-brand-card/40 backdrop-blur-sm cursor-default hover:border-brand-primary/45 transition-all duration-300 group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary group-hover:scale-150 transition-transform duration-300" />
                <div className="flex flex-col items-start">
                  <span className="font-display font-bold text-xs md:text-sm text-brand-text-primary">{tech.name}</span>
                  <span className="font-sans text-[8px] md:text-[9px] text-brand-text-secondary/60 uppercase tracking-widest">{tech.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex overflow-hidden select-none w-full">
          <div className="flex gap-4 md:gap-6 py-2 animate-marquee-reverse whitespace-nowrap min-w-full">
            {row2Doubled.map((tech, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-brand-border bg-brand-card/40 backdrop-blur-sm cursor-default hover:border-brand-primary/45 transition-all duration-300 group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary group-hover:scale-150 transition-transform duration-300" />
                <div className="flex flex-col items-start">
                  <span className="font-display font-bold text-xs md:text-sm text-brand-text-primary">{tech.name}</span>
                  <span className="font-sans text-[8px] md:text-[9px] text-brand-text-secondary/60 uppercase tracking-widest">{tech.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
