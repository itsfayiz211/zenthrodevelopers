"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Layout, Shield, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-dot-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none pulse-glow-green" />
      <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] bg-brand-secondary/8 rounded-full blur-[140px] pointer-events-none pulse-glow-green" style={{ animationDelay: "2s" }} />

      {/* Hero Grid Lines Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-brand-primary/20 text-xs font-semibold text-brand-secondary mb-6 hover:border-brand-primary/40 transition-colors cursor-default"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-brand-primary" />
            <span>Trusted digital partner</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-brand-text-primary mb-6"
          >
            We Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-[#83b482] drop-shadow-sm text-glow">
              Digital Products
            </span> <br />
            That Scale.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-lg md:text-xl text-brand-text-secondary max-w-xl leading-relaxed mb-10"
          >
            Simple, fast websites and apps for modern brands.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center w-full sm:w-auto"
          >
            <a
              href="/order"
              className="px-8 py-4 rounded-full bg-brand-primary hover:bg-brand-secondary text-brand-bg-dark font-display font-bold text-base transition-all duration-300 transform hover:scale-[1.02] flex items-center gap-2 group shadow-[0_4px_20px_rgba(88,129,87,0.3)] hover:shadow-[0_4px_30px_rgba(88,129,87,0.5)]"
            >
              Start a Project
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
            <a
              href="#projects"
              className="px-8 py-4 rounded-full glass-panel border border-brand-border hover:border-brand-primary/40 text-brand-text-primary font-display font-semibold text-base transition-all duration-300 hover:bg-white/5 flex items-center gap-1.5"
            >
              View Projects
            </a>
          </motion.div>

          {/* Bullet Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-6 text-xs text-brand-text-secondary/70 border-t border-brand-border/60 pt-6 w-full"
          >
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-brand-primary" />
              <span>Fast tech</span>
            </div>
            <div className="flex items-center gap-2">
              <Layout className="w-4 h-4 text-brand-primary" />
              <span>Easy design</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-primary" />
              <span>Secure systems</span>
            </div>
          </motion.div>
        </div>

        {/* Right Dashboard Mockup Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative w-full flex justify-center"
        >
          {/* Floating Outer Glass Card 1 */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -left-8 z-30 p-4 rounded-xl glass-panel-glow border border-brand-primary/20 max-w-[200px] hidden sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                ⚡
              </div>
              <div>
                <p className="text-[10px] text-brand-text-secondary uppercase tracking-wider font-semibold">Load Speed</p>
                <h4 className="font-display font-bold text-sm text-brand-text-primary">0.24s (A+)</h4>
              </div>
            </div>
          </motion.div>

          {/* Floating Outer Glass Card 2 */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -right-4 z-30 p-4 rounded-xl glass-panel border border-brand-border max-w-[210px] hidden sm:block"
          >
            <p className="text-[10px] text-brand-text-secondary uppercase tracking-wider font-semibold mb-2">Systems Health</p>
            <div className="flex items-end gap-1 h-12">
              {[20, 45, 30, 60, 50, 75, 95].map((height, i) => (
                <div
                  key={i}
                  className="w-2.5 rounded-t bg-brand-primary"
                  style={{ height: `${height}%`, opacity: 0.4 + i * 0.1 }}
                />
              ))}
            </div>
            <p className="text-xs font-semibold text-brand-primary mt-2">Active Node: OK</p>
          </motion.div>

          {/* Main Simulated Browser Frame */}
          <div className="w-full max-w-[500px] aspect-[4/3] rounded-2xl border border-brand-primary/10 bg-brand-bg-medium/80 overflow-hidden shadow-2xl relative">
            {/* Header tab line */}
            <div className="w-full bg-[#111613] px-4 py-3 flex items-center justify-between border-b border-brand-border">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/20" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/20" />
                <span className="w-3 h-3 rounded-full bg-brand-primary/20" />
              </div>
              <div className="px-3 py-1 rounded bg-brand-bg-dark/40 text-[10px] text-brand-text-secondary font-mono flex items-center gap-1 border border-brand-border/60">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse" />
                <span>v-system.engine</span>
              </div>
              <div className="w-8" />
            </div>

            {/* Dashboard Workspace */}
            <div className="p-5 flex flex-col gap-4 h-full">
              {/* Analytics row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "ARR Growth", val: "+148%", color: "text-brand-primary" },
                  { label: "Uptime", val: "99.99%", color: "text-brand-text-primary" },
                  { label: "Request Latency", val: "12ms", color: "text-brand-secondary" },
                ].map((item, index) => (
                  <div key={index} className="p-2.5 rounded bg-brand-card/60 border border-brand-border">
                    <p className="text-[9px] text-brand-text-secondary/70 font-sans tracking-wide uppercase">{item.label}</p>
                    <p className={`font-display text-sm font-bold ${item.color} mt-1`}>{item.val}</p>
                  </div>
                ))}
              </div>

              {/* Graphic Plot Box */}
              <div className="flex-1 p-3.5 rounded border border-brand-border bg-brand-card/40 flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between z-10">
                  <div>
                    <h5 className="font-display font-bold text-xs text-brand-text-primary">Operational Matrix</h5>
                    <p className="text-[9px] text-brand-text-secondary/60">Global system load balancer metrics</p>
                  </div>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-brand-primary/10 text-brand-primary">Live</span>
                </div>

                {/* SVG Graph Chart */}
                <div className="w-full h-24 mt-2 z-10 relative">
                  <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="gradient-chart" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#588157" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#588157" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Fill */}
                    <path
                      d="M0 40 L0 30 Q15 15, 30 25 T60 10 T90 5 L100 8 L100 40 Z"
                      fill="url(#gradient-chart)"
                    />
                    {/* Line */}
                    <path
                      d="M0 30 Q15 15, 30 25 T60 10 T90 5 L100 8"
                      fill="none"
                      stroke="#588157"
                      strokeWidth="1.5"
                    />
                    {/* Dots along path */}
                    <circle cx="30" cy="25" r="1.5" fill="#6B9B69" className="animate-pulse" />
                    <circle cx="60" cy="10" r="1.5" fill="#6B9B69" className="animate-pulse" />
                    <circle cx="90" cy="5" r="1.5" fill="#F5F7F5" className="animate-pulse" />
                  </svg>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="p-3 rounded border border-brand-border bg-brand-bg-dark/70 font-mono text-[9px] text-brand-text-secondary leading-normal relative">
                <p className="text-brand-secondary"><span className="text-blue-400">const</span> engine = <span className="text-yellow-400">createSystem</span>({`{`}</p>
                <p className="pl-4">scale: <span className="text-orange-400">"infinite"</span>,</p>
                <p className="pl-4">speed: <span className="text-orange-400">"0.24s"</span>,</p>
                <p className="pl-4">stack: [<span className="text-brand-primary">"NextJS"</span>, <span className="text-brand-primary">"TS"</span>, <span className="text-brand-primary">"Framer"</span>]</p>
                <p className="text-brand-secondary">{`});`}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
