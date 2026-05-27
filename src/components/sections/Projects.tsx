"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Projects() {
  const projectsList = [
    {
      title: "Aether Finance",
      industry: "Finance",
      desc: "A dashboard for finance teams to watch crypto investments in real time.",
      tech: ["Next.js", "WebSockets", "Tailwind CSS", "Recharts"],
      results: "Fast live updates, more engaged users",
      metrics: [
        { label: "Latency", val: "14ms" },
        { label: "Asset uptime", val: "99.9%" },
      ],
      color: "from-emerald-500/10 to-brand-primary/20",
    },
    {
      title: "Kortex SaaS",
      industry: "AI tools",
      desc: "A simple platform for teams to plan work and track AI jobs.",
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      results: "Faster team planning and easier scaling",
      metrics: [
        { label: "Team speed", val: "+42%" },
        { label: "Cloud scale", val: "100%" },
      ],
      color: "from-brand-primary/10 to-brand-secondary/20",
    },
    {
      title: "Novus Store",
      industry: "Online shop",
      desc: "A modern online store for a premium watch brand.",
      tech: ["Next.js 15", "Framer Motion", "Stripe API", "Vercel Edge"],
      results: "Quick page loads and better checkout conversions",
      metrics: [
        { label: "Load time", val: "0.21s" },
        { label: "Conversions", val: "+64%" },
      ],
      color: "from-[#8dbd8b]/10 to-[#588157]/20",
    },
  ];

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden bg-brand-bg-dark">
      {/* Background glow and blurs */}
      <div className="absolute top-[20%] right-[-5%] w-[420px] h-[420px] bg-brand-primary/5 rounded-full blur-[130px] pointer-events-none pulse-glow-green" />
      <div className="absolute bottom-[10%] left-[-5%] w-[380px] h-[380px] bg-brand-secondary/5 rounded-full blur-[110px] pointer-events-none pulse-glow-green" style={{ animationDelay: "4s" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-xl text-left">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-3 block">
              Projects
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight text-brand-text-primary">
              Our recent projects
            </h2>
          </div>
          <p className="font-sans text-sm md:text-base text-brand-text-secondary max-w-sm text-left md:text-right">
            Clear examples of real websites and tools we build.
          </p>
        </div>

        {/* Projects Column layout */}
        <div className="flex flex-col gap-16 md:gap-24">
          {projectsList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              
              {/* Text Context (Lg: col-span-5) */}
              <div className={`lg:col-span-5 flex flex-col items-start text-left ${
                index % 2 === 1 ? "lg:order-last" : ""
              }`}>
                <span className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-2 font-mono">
                  {project.industry}
                </span>
                
                <h3 className="font-display font-extrabold text-2xl md:text-3xl text-brand-text-primary mb-4 flex items-center gap-2 group cursor-default">
                  {project.title}
                </h3>
                
                <p className="font-sans text-sm md:text-base text-brand-text-secondary leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* Results achieved */}
                <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-brand-primary/5 border border-brand-primary/10 text-xs font-semibold text-brand-primary mb-6">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{project.results}</span>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-[11px] font-mono font-medium rounded-full bg-brand-card border border-brand-border text-brand-text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-text-primary hover:text-brand-primary transition-colors group border-b border-brand-border hover:border-brand-primary pb-1"
                >
                  Ask how we can build this for you
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>

              {/* Graphical Device Dashboard (Lg: col-span-7) */}
              <div className="lg:col-span-7 relative w-full flex justify-center">
                
                {/* Main Visual Display Device Box */}
                <div className={`w-full max-w-[620px] aspect-[16/10] rounded-2xl border border-brand-border bg-gradient-to-br ${project.color} overflow-hidden relative p-6 flex flex-col justify-between shadow-2xl`}>
                  
                  {/* Decorative browser dots */}
                  <div className="flex justify-between items-center pb-4 border-b border-white/5 w-full">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    </div>
                    <span className="text-[10px] font-mono text-brand-text-secondary/50 uppercase tracking-widest">
                      v-agency // demo
                    </span>
                  </div>

                  {/* Internal Mock Graphic Content */}
                  <div className="flex-1 my-6 flex flex-col justify-center items-center gap-4 relative z-10">
                    <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                      {project.metrics.map((m, mi) => (
                        <div key={mi} className="p-4 rounded-xl glass-panel-glow border border-brand-primary/10 flex flex-col justify-center items-center text-center">
                          <span className="text-[9px] text-brand-text-secondary uppercase tracking-widest mb-1">{m.label}</span>
                          <span className="font-display font-extrabold text-2xl text-brand-text-primary text-glow">{m.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Horizontal visual line */}
                  <div className="w-full h-1 bg-white/5 rounded relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2/3 h-full bg-brand-primary" />
                  </div>

                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
