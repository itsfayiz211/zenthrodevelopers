"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Process() {
  const stepsList = [
    {
      num: "01",
      title: "Discovery",
      desc: "Deep research into your target audience, core objectives, brand mechanics, and scaling aspirations.",
    },
    {
      num: "02",
      title: "Strategy",
      desc: "Architecting functional specifications, high-performance database mapping, and custom UI design patterns.",
    },
    {
      num: "03",
      title: "Design",
      desc: "Crafting highly aesthetic interactive prototypes based on mathematical layouts and strict component logic.",
    },
    {
      num: "04",
      title: "Development",
      desc: "Clean production engineering with Next.js, robust type checking, structured server integrations, and clean modules.",
    },
    {
      num: "05",
      title: "Optimization",
      desc: "Rigorous performance audits, layout shift minimization, caching setups, and accessibility updates.",
    },
    {
      num: "06",
      title: "Launch",
      desc: "Edge server deployment, live SSL configuration, continuous web analytics hookups, and smooth handoff.",
    },
  ];

  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden bg-brand-bg-dark">
      {/* Background ambient glow blur */}
      <div className="absolute top-[30%] left-[-5%] w-[420px] h-[420px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none pulse-glow-green" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-24">
          <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-3">
            How We Partner
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight text-brand-text-primary mb-4">
            Our Development Process <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary text-glow">
              Engineered to Perfection.
            </span>
          </h2>
          <p className="font-sans text-sm md:text-base text-brand-text-secondary leading-relaxed">
            A precise, hyper-detailed approach that bridges conceptual aesthetics with robust backend systems.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical continuous glowing line in center (hidden on small screen, visible on desktop) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-primary/20 via-brand-primary/40 to-brand-secondary/10 hidden md:block" />
          
          {/* Steps */}
          <div className="flex flex-col gap-12 md:gap-16">
            {stepsList.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`flex flex-col md:flex-row relative items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Step Card (Width: 1/2 of container) */}
                  <div className="w-full md:w-1/2 md:px-8">
                    <motion.div
                      whileHover={{ 
                        borderColor: "rgba(88, 129, 87, 0.3)", 
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
                        x: isEven ? -4 : 4
                      }}
                      className="p-6 rounded-2xl border border-brand-border bg-brand-card/45 backdrop-blur-md transition-all duration-300 relative group text-left"
                    >
                      {/* Step Number Badge */}
                      <span className="absolute top-4 right-4 text-xs font-mono font-bold text-brand-primary/50 group-hover:text-brand-primary transition-colors">
                        {step.num}
                      </span>
                      
                      <h4 className="font-display font-bold text-lg text-brand-text-primary mb-2">
                        {step.title}
                      </h4>
                      <p className="font-sans text-xs md:text-sm text-brand-text-secondary leading-relaxed">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Desktop Dot in center of vertical line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-brand-primary bg-brand-bg-dark hidden md:flex items-center justify-center z-20">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                  </div>

                  {/* Left / Right spacing offset spacer block for alignment */}
                  <div className="hidden md:block w-1/2" />

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
