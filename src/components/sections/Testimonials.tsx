"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonialsList = [
    {
      quote: "V built a fast fintech dashboard that made our operations much easier. The design and speed were impressive.",
      author: "Marcus Sterling",
      role: "Founder & CEO",
      company: "Aether Finance",
      rating: "★★★★★",
    },
    {
      quote: "The team wrote great TypeScript and built our ML dashboard quickly. Communication was clear and fast.",
      author: "Elena Rostova",
      role: "VP of Product Engineering",
      company: "Kortex AI",
      rating: "★★★★★",
    },
    {
      quote: "V built a beautiful e-commerce site that works well on every device and loads quickly.",
      author: "Christian Dupond",
      role: "Creative Brand Director",
      company: "Novus Horology",
      rating: "★★★★★",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsList.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length);
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-brand-bg-medium/40 border-y border-brand-border">
      {/* Background glow overlay */}
      <div className="absolute top-[30%] right-[-10%] w-[450px] h-[450px] bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none pulse-glow-green" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-3">
            Client feedback
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight text-brand-text-primary mb-4">
            Real feedback. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary text-glow">
              Trusted by clients.
            </span>
          </h2>
          <p className="font-sans text-sm md:text-base text-brand-text-secondary leading-relaxed">
            Read what clients say about our work.
          </p>
        </div>

        {/* Carousel Window Box */}
        <div className="max-w-3xl mx-auto relative px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-12 rounded-3xl glass-panel-glow border border-brand-primary/20 backdrop-blur-xl relative shadow-2xl flex flex-col items-center text-center"
            >
              {/* Giant elegant quotes icon */}
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6">
                <Quote className="w-5 h-5 fill-brand-primary/20" />
              </div>

              {/* Quote text */}
              <p className="font-sans text-lg md:text-xl text-brand-text-primary leading-relaxed italic mb-8 max-w-2xl font-light">
                "{testimonialsList[activeIndex].quote}"
              </p>

              {/* Rating */}
              <div className="text-brand-secondary text-xs tracking-wider mb-4 font-bold">
                {testimonialsList[activeIndex].rating}
              </div>

              {/* Author info */}
              <div>
                <h4 className="font-display font-bold text-base text-brand-text-primary">
                  {testimonialsList[activeIndex].author}
                </h4>
                <p className="font-sans text-xs text-brand-text-secondary mt-0.5">
                  {testimonialsList[activeIndex].role} —{" "}
                  <span className="text-brand-primary font-semibold">
                    {testimonialsList[activeIndex].company}
                  </span>
                </p>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Carousel controls */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-brand-border bg-brand-card hover:border-brand-primary/40 text-brand-text-primary hover:bg-white/5 transition-all duration-300 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            
            {/* Indicators */}
            <div className="flex gap-2">
              {testimonialsList.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "bg-brand-primary w-6" : "bg-brand-border hover:bg-brand-text-secondary/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-brand-border bg-brand-card hover:border-brand-primary/40 text-brand-text-primary hover:bg-white/5 transition-all duration-300 active:scale-95"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
