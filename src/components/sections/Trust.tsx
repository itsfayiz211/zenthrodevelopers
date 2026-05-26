"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
}

function Counter({ value, suffix = "", decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display font-bold text-3xl md:text-4xl text-brand-text-primary text-glow">
      {decimals ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function Trust() {
  const stats = [
    { label: "Elite Projects Delivered", value: 140, suffix: "+" },
    { label: "Client Satisfaction", value: 99.8, suffix: "%", decimals: 1 },
    { label: "Years Combined Mastery", value: 12, suffix: "+" },
    { label: "Max System Latency", value: 15, suffix: "ms" },
  ];

  const logos = [
    { name: "VERCEL", style: "font-mono font-extrabold tracking-tighter" },
    { name: "LINEAR", style: "font-sans font-light tracking-widest" },
    { name: "STRIPE", style: "font-serif font-black tracking-normal" },
    { name: "RAYCAST", style: "font-mono font-medium tracking-wide" },
    { name: "SUPABASE", style: "font-sans font-bold tracking-tight text-glow" },
  ];

  return (
    <section className="relative py-12 border-y border-brand-border bg-brand-bg-medium/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Stats Column */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-4 rounded-xl glass-panel bg-brand-card/25 hover:border-brand-primary/20 transition-all duration-300 flex flex-col justify-center"
              >
                <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                <span className="text-xs text-brand-text-secondary mt-1.5 uppercase tracking-wider font-semibold font-sans">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Divider line for desktop */}
          <div className="hidden lg:block lg:col-span-1 h-24 w-px bg-brand-border justify-self-center" />

          {/* Logos Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-[10px] text-brand-text-secondary uppercase tracking-widest font-semibold mb-6 text-center lg:text-left">
              Engineered systems for innovators at
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 md:gap-8">
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.4 }}
                  whileHover={{ opacity: 0.9, scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className={`text-brand-text-primary text-xs md:text-sm font-semibold tracking-wider cursor-default select-none transition-all ${logo.style}`}
                >
                  {logo.name}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
