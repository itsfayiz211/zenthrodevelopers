"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, Send, MessageCircle, ShieldCheck } from "lucide-react";

const contactMethods = ["Email", "Phone", "WhatsApp"];

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    contactMethod: "Email",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setContactForm({ name: "", email: "", subject: "", message: "", contactMethod: "Email" });
    setTimeout(() => setSubmitted(false), 2800);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-brand-bg-dark border-t border-brand-border">
      <div className="absolute bottom-[10%] left-[5%] w-[450px] h-[450px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-3">
            Contact Us
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight text-brand-text-primary mb-4">
            Reach us directly. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary text-glow">
              Simple and clear contact.
            </span>
          </h2>
          <p className="font-sans text-sm md:text-base text-brand-text-secondary leading-relaxed">
            Use the form below for questions, projects, or support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 p-6 md:p-8 rounded-3xl glass-panel bg-brand-card/20 backdrop-blur-md border border-brand-border relative">
            <h3 className="font-display font-bold text-xl text-brand-text-primary mb-6 text-left">
              Send a message
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary text-2xl mb-4">
                  ✓
                </div>
                <h4 className="font-display font-bold text-lg text-brand-text-primary mb-2">Message sent</h4>
                <p className="font-sans text-xs text-brand-text-secondary max-w-xs leading-normal">
                  We got your message and will reply soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-brand-text-secondary uppercase font-bold tracking-wider">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Sterling Marcus"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-dark text-brand-text-primary text-sm font-sans placeholder:text-brand-text-secondary/30 focus:outline-none focus:border-brand-primary/60 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-brand-text-secondary uppercase font-bold tracking-wider">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. hello@yourbrand.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-dark text-brand-text-primary text-sm font-sans placeholder:text-brand-text-secondary/30 focus:outline-none focus:border-brand-primary/60 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-brand-text-secondary uppercase font-bold tracking-wider">
                    Subject
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="What would you like to discuss?"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-dark text-brand-text-primary text-sm font-sans placeholder:text-brand-text-secondary/30 focus:outline-none focus:border-brand-primary/60 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-brand-text-secondary uppercase font-bold tracking-wider">
                      Preferred Contact
                    </label>
                    <select
                      value={contactForm.contactMethod}
                      onChange={(e) => setContactForm({ ...contactForm, contactMethod: e.target.value })}
                      className="px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-dark text-brand-text-primary text-sm font-sans focus:outline-none focus:border-brand-primary/60 transition-colors"
                    >
                      {contactMethods.map((method, idx) => (
                        <option key={idx} value={method} className="bg-brand-card">
                          {method}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-brand-text-secondary uppercase font-bold tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Tell us how we can help."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-dark text-brand-text-primary text-sm font-sans placeholder:text-brand-text-secondary/30 focus:outline-none focus:border-brand-primary/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-brand-primary hover:bg-brand-secondary text-brand-bg-dark font-display font-bold text-base transition-all duration-300 transform hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            <div className="p-6 rounded-3xl border border-brand-border bg-brand-card/35 backdrop-blur-md flex flex-col gap-4">
              <div className="flex items-center gap-3 text-brand-primary">
                <ShieldCheck className="w-5 h-5" />
                <h4 className="font-display font-bold text-base text-brand-text-primary">Always reachable</h4>
              </div>
              <p className="text-sm text-brand-text-secondary leading-relaxed">
                If people can’t reach us, we can’t help them. This page makes it easy to connect.
              </p>
              <div className="rounded-3xl bg-brand-bg-dark/80 border border-brand-border p-4 text-sm text-brand-text-secondary">
                <p className="font-semibold text-brand-text-primary">Get connected</p>
                <p className="mt-2">Reach us by email, WhatsApp, or use the form below.</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl border border-brand-border bg-brand-card/35 backdrop-blur-md">
              <div className="flex items-center gap-4 py-2 border-b border-brand-border/60">
                <div className="p-2 rounded bg-brand-bg-dark border border-brand-border text-brand-primary">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[9px] text-brand-text-secondary uppercase tracking-wider font-semibold">Email</p>
                  <a href="mailto:hello@v-system.io" className="text-sm font-semibold text-brand-text-primary hover:text-brand-primary transition-colors">hello@v-system.io</a>
                </div>
              </div>

              <div className="flex items-center gap-4 py-2 border-b border-brand-border/60">
                <div className="p-2 rounded bg-brand-bg-dark border border-brand-border text-brand-primary">
                  <Globe className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[9px] text-brand-text-secondary uppercase tracking-wider font-semibold">Office</p>
                  <p className="text-sm font-semibold text-brand-text-primary">Zurich, Switzerland</p>
                </div>
              </div>

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
          </div>
        </div>
      </div>
    </section>
  );
}
