"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Smartphone, TrendingUp, Cpu, ShieldCheck } from "lucide-react";

export default function About() {
  const points = [
    {
      icon: <Zap className="w-5 h-5 text-brand-primary" />,
      title: "Fast performance",
      desc: "We make sites load quickly and run smoothly.",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-brand-primary" />,
      title: "Mobile-ready",
      desc: "Works well on phones and desktops.",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-brand-primary" />,
      title: "Easy to use",
      desc: "Simple interfaces that help people take action.",
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-brand-bg-dark">
      {/* Glow Blur */}
      <div className="absolute top-[30%] right-[5%] w-[380px] h-[380px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading and description */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-3">
              Engineering made simple
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight text-brand-text-primary mb-6">
              Modern Development <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary text-glow">
                Made to grow.
              </span>
            </h2>
            <p className="font-sans text-base md:text-lg text-brand-text-secondary leading-relaxed mb-10">
              We combine design and software to build strong, easy-to-use websites and systems.
            </p>

            {/* Core Points list */}
            <div className="flex flex-col gap-8 w-full">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="p-2.5 rounded-lg bg-brand-card border border-brand-border group-hover:border-brand-primary/30 transition-colors">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-brand-text-primary mb-1">
                      {point.title}
                    </h4>
                    <p className="font-sans text-sm text-brand-text-secondary">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Asymmetrical interactive grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1: 100/100 Lighthouse Performance Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl border border-brand-border bg-brand-card/30 flex flex-col justify-between h-[250px] hover:border-brand-primary/20 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] text-brand-text-secondary uppercase font-bold tracking-wider">Performance</span>
                <span className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse" />
              </div>
              <div className="my-auto flex flex-col items-center">
                <span className="font-display font-extrabold text-7xl text-brand-primary text-glow group-hover:scale-105 transition-transform duration-300">
                  100
                </span>
                <span className="text-xs text-brand-text-secondary font-semibold mt-1">Lighthouse Core Score</span>
              </div>
              <p className="text-[11px] text-brand-text-secondary/70">
                Fast page load and stable performance.
              </p>
            </motion.div>

            {/* Card 2: Modern responsive framework grid card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 rounded-2xl border border-brand-border bg-brand-card/30 flex flex-col justify-between h-[280px] sm:translate-y-8 hover:border-brand-primary/20 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] text-brand-text-secondary uppercase font-bold tracking-wider">Responsive Nodes</span>
                <Cpu className="w-4 h-4 text-brand-secondary" />
              </div>
              
              {/* Virtual Wireframe Graphic */}
              <div className="border border-brand-border/60 rounded bg-brand-bg-dark/60 p-2.5 my-2 space-y-1.5 font-mono text-[9px] text-brand-text-secondary">
                <div className="flex justify-between items-center pb-1 border-b border-brand-border/40">
                  <span>grid-layout.ts</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                </div>
                <div className="grid grid-cols-3 gap-1">
                  <div className="h-5 rounded border border-brand-primary/10 bg-brand-primary/5 flex items-center justify-center text-[7px]">col-1</div>
                  <div className="h-5 rounded border border-brand-primary/10 bg-brand-primary/5 flex items-center justify-center text-[7px]">col-2</div>
                  <div className="h-5 rounded border border-brand-primary/10 bg-brand-primary/5 flex items-center justify-center text-[7px]">col-3</div>
                </div>
                <div className="w-full h-4 rounded border border-brand-border bg-brand-card/40 flex items-center px-1.5 justify-between">
                  <span>viewport_width</span>
                  <span className="text-brand-secondary">fluid_px</span>
                </div>
              </div>

              <p className="text-[11px] text-brand-text-secondary/70">
                Layouts that fit every screen cleanly.
              </p>
            </motion.div>

            {/* Card 3: Secure Systems Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-2xl border border-brand-border bg-brand-card/30 flex flex-col justify-between h-[250px] hover:border-brand-primary/20 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] text-brand-text-secondary uppercase font-bold tracking-wider">Security Engine</span>
                <ShieldCheck className="w-4.5 h-4.5 text-brand-primary" />
              </div>
              <div className="my-auto flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span>SSL Encryption</span>
                  <span className="text-brand-primary">SECURE</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span>GDPR Compliance</span>
                  <span className="text-brand-primary">ACTIVE</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span>WAF Protection</span>
                  <span className="text-brand-secondary">ON_EDGE</span>
                </div>
              </div>
              <p className="text-[11px] text-brand-text-secondary/70">
                Built with strong protections and secure defaults.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
