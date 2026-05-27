import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import WhyChoose from "@/components/sections/WhyChoose";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import TechStack from "@/components/sections/TechStack";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Premium Translucent Header */}
      <Navbar />

      {/* Main Structural Flow */}
      <main className="flex-1">
        {/* Hero Landing */}
        <Hero />

        {/* Minimal Social Proof Statistics */}
        <Trust />

        {/* About Deep-Dive */}
        <About />

        {/* Premium Interactive Services Cards */}
        <Services />

        {/* High-End Portfolio Case Studies */}
        <Projects />

        {/* Grid-based Value Proposition Benefits */}
        <WhyChoose />

        {/* Alternating Timeline Operations Process */}
        <Process />

        {/* Soft-blur Carousel Testimonials */}
        <Testimonials />

        {/* High-fidelity tech stack marquee */}
        <TechStack />

        {/* Epic ambient glow CTA block */}
        <CTA />

        {/* Contact section at the bottom of the homepage */}
        <Contact />
      </main>

      {/* Structured Minimal footer */}
      <Footer />
    </>
  );
}
