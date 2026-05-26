"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-brand-bg-dark">
      {/* Heavy green ambient glow background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none pulse-glow-green" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="p-8 md:p-16 rounded-3xl glass-panel-glow border border-brand-primary/20 bg-gradient-to-br from-brand-card/80 to-[#101612]/90 backdrop-blur-2xl relative overflow-hidden shadow-2xl flex flex-col items-center text-center">
          
          {/* Floating subtle glowing particles */}
          <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-brand-primary/10 blur-xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-28 h-28 rounded-full bg-brand-secondary/10 blur-xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-xs font-semibold text-brand-primary mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to scale?</span>
          </div>

          {/* Headline */}
          <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight leading-none text-brand-text-primary mb-6 max-w-2xl text-glow">
            Let’s Build Something Exceptional.
          </h2>

          {/* Subheading */}
          <p className="font-sans text-sm md:text-base text-brand-text-secondary max-w-lg mb-10 leading-relaxed">
            We help ambitious brands launch modern, high-performance digital experiences that perform beautifully and scale infinitely.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 items-center w-full sm:w-auto">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-brand-primary hover:bg-brand-secondary text-brand-bg-dark font-display font-bold text-base transition-all duration-300 transform hover:scale-[1.02] flex items-center gap-2 group shadow-[0_4px_20px_rgba(88,129,87,0.3)]"
            >
              Start Your Project
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full glass-panel border border-brand-border hover:border-brand-primary/40 text-brand-text-primary font-display font-semibold text-base transition-all duration-300 hover:bg-white/5 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-brand-primary" />
              Schedule a Call
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
