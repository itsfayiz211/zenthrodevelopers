"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Boxes, 
  Sparkles, 
  Gauge, 
  Binary, 
  Search, 
  Smartphone, 
  ShieldCheck, 
  Zap 
} from "lucide-react";

export default function WhyChoose() {
  const benefitsList = [
    {
      icon: <Boxes className="w-5 h-5 text-brand-primary" />,
      title: "Scalable systems",
      desc: "Built to handle more traffic without slowing down.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-brand-primary" />,
      title: "Strong UI",
      desc: "Clean interfaces that are easy to use.",
    },
    {
      icon: <Gauge className="w-5 h-5 text-brand-primary" />,
      title: "Fast performance",
      desc: "Pages load quickly on all devices.",
    },
    {
      icon: <Binary className="w-5 h-5 text-brand-primary" />,
      title: "Clean Architecture",
      desc: "Simple code that is easy to update and grow.",
    },
    {
      icon: <Search className="w-5 h-5 text-brand-primary" />,
      title: "SEO Optimized",
      desc: "Built so search engines can find your pages.",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-brand-primary" />,
      title: "Mobile First",
      desc: "Works smoothly on phones and desktops.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-primary" />,
      title: "Secure Development",
      desc: "Built with secure connections and safe server rules.",
    },
    {
      icon: <Zap className="w-5 h-5 text-brand-primary" />,
      title: "Startup Focused",
      desc: "Fast work focused on early-stage growth.",
    },
  ];

  return (
    <section id="why-choose-v" className="relative py-24 md:py-32 overflow-hidden bg-brand-bg-medium/30 border-y border-brand-border">
      {/* Background radial ambient blurs */}
      <div className="absolute top-[20%] right-[10%] w-[360px] h-[360px] bg-brand-primary/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-3">
            Why choose us
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight text-brand-text-primary mb-4">
            Built different. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary text-glow">
              Built better.
            </span>
          </h2>
          <p className="font-sans text-sm md:text-base text-brand-text-secondary leading-relaxed">
            We blend clean design with strong code.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsList.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{
                borderColor: "rgba(88, 129, 87, 0.3)",
                y: -4,
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)"
              }}
              className="p-6 rounded-2xl border border-brand-border bg-brand-card/40 hover:bg-brand-card/75 transition-all duration-300 flex flex-col items-start text-left"
            >
              {/* Icon slot */}
              <div className="p-2.5 rounded-lg bg-brand-bg-dark border border-brand-border mb-4 flex items-center justify-center">
                {benefit.icon}
              </div>

              {/* Title */}
              <h4 className="font-display font-bold text-base text-brand-text-primary mb-2">
                {benefit.title}
              </h4>

              {/* Description */}
              <p className="font-sans text-xs text-brand-text-secondary leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
