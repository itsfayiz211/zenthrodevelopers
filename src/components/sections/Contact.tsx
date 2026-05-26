"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, Send, MessageCircle, Calendar } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Full Stack Development",
    budget: "$10k - $25k",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const services = [
    "Full Stack Development",
    "SaaS Applications",
    "Dashboard Systems",
    "Portfolio Websites",
    "UI/UX Design",
    "API / Admin Panels",
  ];

  const budgets = [
    "<$5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        service: "Full Stack Development",
        budget: "$10k - $25k",
        message: "",
      });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-brand-bg-dark border-t border-brand-border">
      {/* Ambient background glows */}
      <div className="absolute bottom-[10%] left-[5%] w-[450px] h-[450px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-3">
            Get In Touch
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight text-brand-text-primary mb-4">
            Connect With V. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary text-glow">
              Engineered for Launch.
            </span>
          </h2>
          <p className="font-sans text-sm md:text-base text-brand-text-secondary leading-relaxed">
            Fill out the project scope builder or schedule an architectural call directly below.
          </p>
        </div>

        {/* Form and Contact Detail Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Premium Contact Form */}
          <div className="lg:col-span-7 p-6 md:p-8 rounded-3xl glass-panel bg-brand-card/20 backdrop-blur-md border border-brand-border relative">
            <h3 className="font-display font-bold text-xl text-brand-text-primary mb-6 text-left">
              Project Builder
            </h3>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary text-2xl mb-4">
                  ✓
                </div>
                <h4 className="font-display font-bold text-lg text-brand-text-primary mb-2">Message Dispatched!</h4>
                <p className="font-sans text-xs text-brand-text-secondary max-w-xs leading-normal">
                  Our systems director will review your project parameters and respond within 6 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-brand-text-secondary uppercase font-bold tracking-wider">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Sterling Marcus"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-dark text-brand-text-primary text-sm font-sans placeholder:text-brand-text-secondary/30 focus:outline-none focus:border-brand-primary/60 transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-brand-text-secondary uppercase font-bold tracking-wider">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. marcus@aether.finance"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-dark text-brand-text-primary text-sm font-sans placeholder:text-brand-text-secondary/30 focus:outline-none focus:border-brand-primary/60 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Service type dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-brand-text-secondary uppercase font-bold tracking-wider">Service Scope</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-dark text-brand-text-primary text-sm font-sans focus:outline-none focus:border-brand-primary/60 transition-colors"
                    >
                      {services.map((s, idx) => (
                        <option key={idx} value={s} className="bg-brand-card">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-brand-text-secondary uppercase font-bold tracking-wider">Project Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-dark text-brand-text-primary text-sm font-sans focus:outline-none focus:border-brand-primary/60 transition-colors"
                    >
                      {budgets.map((b, idx) => (
                        <option key={idx} value={b} className="bg-brand-card">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-brand-text-secondary uppercase font-bold tracking-wider">Project Specification</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Brief description of the product or features you need built..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-dark text-brand-text-primary text-sm font-sans placeholder:text-brand-text-secondary/30 focus:outline-none focus:border-brand-primary/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-brand-primary hover:bg-brand-secondary text-brand-bg-dark font-display font-bold text-base transition-all duration-300 transform hover:scale-[1.01] flex items-center justify-center gap-2 group shadow-[0_4px_15px_rgba(88,129,87,0.2)]"
                >
                  Submit Project Parameters
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Connect options / Calendly mockup */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            
            {/* Quick stats and connections */}
            <div className="p-6 rounded-3xl border border-brand-border bg-brand-card/35 backdrop-blur-md flex flex-col gap-4">
              <h4 className="font-display font-bold text-base text-brand-text-primary mb-2">Direct Hub</h4>
              
              <div className="flex items-center gap-4 py-2 border-b border-brand-border/60">
                <div className="p-2 rounded bg-brand-bg-dark border border-brand-border text-brand-primary">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[9px] text-brand-text-secondary uppercase tracking-wider font-semibold">Direct Email</p>
                  <a href="mailto:hello@v-system.io" className="text-sm font-semibold text-brand-text-primary hover:text-brand-primary transition-colors">hello@v-system.io</a>
                </div>
              </div>

              <div className="flex items-center gap-4 py-2 border-b border-brand-border/60">
                <div className="p-2 rounded bg-brand-bg-dark border border-brand-border text-brand-primary">
                  <Globe className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[9px] text-brand-text-secondary uppercase tracking-wider font-semibold">Base Operations</p>
                  <p className="text-sm font-semibold text-brand-text-primary">Zurich, Switzerland</p>
                </div>
              </div>

              {/* WhatsApp Premium CTA Button */}
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center justify-center gap-2 py-3 rounded-xl border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 text-green-400 text-sm font-bold transition-all duration-300"
              >
                <MessageCircle className="w-4.5 h-4.5 text-green-400" />
                Connect on WhatsApp
              </a>
            </div>

            {/* Calendly Interactive Selector Mockup */}
            <div className="p-6 rounded-3xl border border-brand-border bg-brand-card/35 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-4.5 h-4.5 text-brand-primary" />
                <h4 className="font-display font-bold text-base text-brand-text-primary">Instant Booking</h4>
              </div>
              <p className="text-xs text-brand-text-secondary leading-normal mb-4">
                Secure a 15-minute system architecture review with our master engineer.
              </p>

              {/* Mock dates calendar grid */}
              <div className="grid grid-cols-5 gap-1.5 border border-brand-border/40 rounded-xl bg-brand-bg-dark/40 p-3 mb-4">
                {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => (
                  <div key={i} className="text-center">
                    <p className="text-[8px] text-brand-text-secondary uppercase font-semibold mb-1">{day}</p>
                    <button
                      type="button"
                      className={`w-full py-2 rounded text-[10px] font-mono font-bold transition-all ${
                        i === 1 
                          ? "bg-brand-primary text-brand-bg-dark" 
                          : "border border-brand-border bg-brand-card/30 text-brand-text-primary hover:border-brand-primary/30"
                      }`}
                    >
                      {26 + i}
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center text-[10px] text-brand-text-secondary">
                <span>Active timezone: Europe/Zurich</span>
                <span className="text-brand-primary font-bold">1 spot available tomorrow</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
