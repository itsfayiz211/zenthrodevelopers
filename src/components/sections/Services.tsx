"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Layers, 
  LayoutDashboard, 
  UserCheck, 
  Compass, 
  Briefcase, 
  Rocket, 
  Palette, 
  Cpu, 
  ShieldAlert 
} from "lucide-react";

export default function Services() {
  const servicesList = [
    {
      icon: <Code2 className="w-6 h-6 text-brand-primary" />,
      title: "Full Stack Development",
      desc: "Full web apps built with modern tools and strong backend support.",
    },
    {
      icon: <Layers className="w-6 h-6 text-brand-primary" />,
      title: "SaaS Applications",
      desc: "Subscription apps with secure billing and scalable design.",
    },
    {
      icon: <LayoutDashboard className="w-6 h-6 text-brand-primary" />,
      title: "Dashboard Systems",
      desc: "Dashboard systems with live analytics and useful controls.",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-brand-primary" />,
      title: "Portfolio Websites",
      desc: "Portfolio sites with clean visuals and smooth motion.",
    },
    {
      icon: <Compass className="w-6 h-6 text-brand-primary" />,
      title: "Branding Websites",
      desc: "Brand websites designed to look sharp and professional.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-brand-primary" />,
      title: "Business Websites",
      desc: "Business websites built to help people trust your brand.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-brand-primary" />,
      title: "Startup MVPs",
      desc: "Fast MVPs built to launch quickly and grow later.",
    },
    {
      icon: <Palette className="w-6 h-6 text-brand-primary" />,
      title: "UI/UX Design",
      desc: "Polished UI designs that feel modern and clear.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-brand-primary" />,
      title: "API Development",
      desc: "Fast APIs with secure access and clear documentation.",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-brand-primary" />,
      title: "Admin Panels",
      desc: "Admin dashboards made for simple team workflows.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } as any,
    },
  };

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden bg-brand-bg-medium/40 border-y border-brand-border">
      {/* Background glow effects */}
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none pulse-glow-green" />
      <div className="absolute bottom-[20%] right-[10%] w-[380px] h-[380px] bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none pulse-glow-green" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-3">
            Our Services
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight text-brand-text-primary mb-4">
            Simple solutions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-[#78b376] text-glow">
              Built for results.
            </span>
          </h2>
          <p className="font-sans text-sm md:text-base text-brand-text-secondary leading-relaxed">
            We build websites and apps that are easy to use, fast, and reliable.
          </p>
        </div>

        {/* Website Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Budget Website",
              price: "₹2,500+",
              note: "A simple launch site with the main pages. Support is available after delivery.",
            },
            {
              title: "Standard Website",
              price: "₹12,000+",
              note: "A modern multi-page site with forms and clean design. Includes one week of support.",
            },
            {
              title: "Premium site",
              price: "₹35,000+",
              note: "A custom site with fast performance and polished styling. Includes one week of support.",
            },
          ].map((pkg, index) => (
            <div key={index} className="rounded-3xl border border-brand-border bg-brand-card/45 backdrop-blur-md p-6 text-left shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display font-bold text-lg text-brand-text-primary">{pkg.title}</h3>
                <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary">
                  {pkg.price}
                </span>
              </div>
              <p className="font-sans text-sm leading-relaxed text-brand-text-secondary">
                {pkg.note}
              </p>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -6,
                borderColor: "rgba(88, 129, 87, 0.4)",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4), inset 0 0 15px rgba(88, 129, 87, 0.05)"
              }}
              className="p-8 rounded-2xl border border-brand-border bg-brand-card/45 backdrop-blur-md transition-all duration-300 group flex flex-col items-start text-left"
            >
              {/* Icon slot with subtle back glow */}
              <div className="p-3.5 rounded-xl bg-brand-bg-dark border border-brand-border/60 mb-6 group-hover:border-brand-primary/30 group-hover:bg-brand-primary/5 transition-all duration-300 relative">
                {service.icon}
                <div className="absolute inset-0 rounded-xl bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg text-brand-text-primary mb-3 group-hover:text-brand-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-brand-text-secondary leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
