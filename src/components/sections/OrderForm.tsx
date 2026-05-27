"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

type OrderSubmission = {
  id: string;
  name: string;
  email: string;
  websiteType: string;
  budget: string;
  timeline: string;
  contactMethod: string;
  scope: string;
  submittedAt: string;
  status: string;
};

const websiteTypes = [
  "Portfolio Website",
  "Branding Website",
  "Business Website",
  "Startup MVP",
  "Dashboard System",
];

const budgets = [
  "₹2,500 - ₹15,000",
  "₹15,000 - ₹35,000",
  "₹35,000 - ₹60,000",
  "₹60,000+",
];

const timelines = ["2-4 weeks", "4-6 weeks", "6-10 weeks", "Custom timeline"];
const contactMethods = ["Email", "Phone", "WhatsApp"];

const ORDERS_STORAGE_KEY = "zenthro-order-requests";

function saveOrder(order: OrderSubmission) {
  const existing = typeof window !== "undefined" ? localStorage.getItem(ORDERS_STORAGE_KEY) : null;
  const list: OrderSubmission[] = existing ? JSON.parse(existing) : [];
  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify([order, ...list]));
}

export default function OrderForm() {
  const [orderForm, setOrderForm] = useState({
    name: "",
    email: "",
    websiteType: websiteTypes[0],
    budget: budgets[0],
    timeline: timelines[0],
    contactMethod: contactMethods[0],
    scope: "",
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newOrder: OrderSubmission = {
      id: `ORD-${Math.floor(10000 + Math.random() * 90000)}`,
      name: orderForm.name || "New client",
      email: orderForm.email,
      websiteType: orderForm.websiteType,
      budget: orderForm.budget,
      timeline: orderForm.timeline,
      contactMethod: orderForm.contactMethod,
      scope: orderForm.scope,
      status: "Review pending",
      submittedAt: new Date().toLocaleString(),
    };

    saveOrder(newOrder);
    setOrderSubmitted(true);
    setOrderForm({
      name: "",
      email: "",
      websiteType: websiteTypes[0],
      budget: budgets[0],
      timeline: timelines[0],
      contactMethod: contactMethods[0],
      scope: "",
    });
    setTimeout(() => setOrderSubmitted(false), 2800);
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-brand-bg-dark border-t border-brand-border">
      <div className="absolute bottom-[10%] left-[5%] w-[450px] h-[450px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-3">
            Secure Order Route
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight text-brand-text-primary mb-4">
            Submit your request — private and secure.
          </h2>
          <p className="font-sans text-sm md:text-base text-brand-text-secondary leading-relaxed">
            This order form is isolated for team review. Submit and our team will follow up using your preferred contact method.
          </p>
        </div>

        <div className="p-6 md:p-8 rounded-3xl glass-panel bg-brand-card/20 backdrop-blur-md border border-brand-border relative">
          {orderSubmitted ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary text-2xl mx-auto mb-4">✓</div>
              <h4 className="font-display font-bold text-lg text-brand-text-primary mb-2">Request received</h4>
              <p className="font-sans text-xs text-brand-text-secondary max-w-xs mx-auto leading-normal">
                Your order is queued in the internal dashboard for team review.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-brand-text-secondary uppercase font-bold tracking-wider">Full Name</label>
                  <input required type="text" placeholder="e.g. Sterling Marcus" value={orderForm.name} onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })} className="px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-dark text-brand-text-primary text-sm font-sans placeholder:text-brand-text-secondary/30 focus:outline-none focus:border-brand-primary/60 transition-colors" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-brand-text-secondary uppercase font-bold tracking-wider">{orderForm.contactMethod === "Email" ? "Email Address" : orderForm.contactMethod === "Phone" ? "Phone Number" : "WhatsApp Number"}</label>
                  <input required type={orderForm.contactMethod === "Email" ? "email" : "tel"} placeholder={orderForm.contactMethod === "Email" ? "e.g. marcus@aether.finance" : "+91 98765 43210"} value={orderForm.email} onChange={(e) => setOrderForm({ ...orderForm, email: e.target.value })} className="px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-dark text-brand-text-primary text-sm font-sans placeholder:text-brand-text-secondary/30 focus:outline-none focus:border-brand-primary/60 transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-brand-text-secondary uppercase font-bold tracking-wider">Service Scope</label>
                  <select value={orderForm.websiteType} onChange={(e) => setOrderForm({ ...orderForm, websiteType: e.target.value })} className="px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-dark text-brand-text-primary text-sm font-sans focus:outline-none focus:border-brand-primary/60 transition-colors">
                    {websiteTypes.map((s, idx) => (<option key={idx} value={s} className="bg-brand-card">{s}</option>))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-brand-text-secondary uppercase font-bold tracking-wider">Project Budget</label>
                  <select value={orderForm.budget} onChange={(e) => setOrderForm({ ...orderForm, budget: e.target.value })} className="px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-dark text-brand-text-primary text-sm font-sans focus:outline-none focus:border-brand-primary/60 transition-colors">
                    {budgets.map((b, idx) => (<option key={idx} value={b} className="bg-brand-card">{b}</option>))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-brand-text-secondary uppercase font-bold tracking-wider">Target Timeline</label>
                  <select value={orderForm.timeline} onChange={(e) => setOrderForm({ ...orderForm, timeline: e.target.value })} className="px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-dark text-brand-text-primary text-sm font-sans focus:outline-none focus:border-brand-primary/60 transition-colors">
                    {timelines.map((t, idx) => (<option key={idx} value={t} className="bg-brand-card">{t}</option>))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-brand-text-secondary uppercase font-bold tracking-wider">Preferred Contact</label>
                  <select value={orderForm.contactMethod} onChange={(e) => setOrderForm({ ...orderForm, contactMethod: e.target.value })} className="px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-dark text-brand-text-primary text-sm font-sans focus:outline-none focus:border-brand-primary/60 transition-colors">
                    {contactMethods.map((method, idx) => (<option key={idx} value={method} className="bg-brand-card">{method}</option>))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] text-brand-text-secondary uppercase font-bold tracking-wider">Project Specification</label>
                <textarea required rows={5} placeholder="Share the features, pages, and goals for your website." value={orderForm.scope} onChange={(e) => setOrderForm({ ...orderForm, scope: e.target.value })} className="px-4 py-3 rounded-xl border border-brand-border bg-brand-bg-dark text-brand-text-primary text-sm font-sans placeholder:text-brand-text-secondary/30 focus:outline-none focus:border-brand-primary/60 transition-colors resize-none" />
              </div>

              <button type="submit" className="w-full py-4 rounded-xl bg-brand-primary hover:bg-brand-secondary text-brand-bg-dark font-display font-bold text-base transition-all duration-300 transform hover:scale-[1.01] flex items-center justify-center gap-2">Send Order Request <Send className="w-4 h-4" /></button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
