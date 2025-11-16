"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import AIAnimation from "./AIAnimation"; // Import the new AI animation component

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-background text-foreground min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Abstract AI animation in the background */}
      <AIAnimation />

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left side: Headline and CTA */}
        <div className="text-center md:text-left md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up font-mono">
            AUTOMATE WITH INTELLIGENCE
          </h1>
          <p className="text-lg md:text-2xl mb-10 max-w-xl mx-auto md:mx-0 animate-fade-in-up delay-200 font-sans">
            AI-Powered Systems for Growth, Efficiency & Customer Experience.
          </p>
          <div className="animate-fade-in-up delay-400">
            <Button asChild size="lg" className="relative overflow-hidden bg-gradient-to-r from-gradient-start to-gradient-end text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-all duration-300 animate-neon-glow">
              <a href="#contact" className="relative z-10">
                BOOK A FREE CONSULTATION
              </a>
            </Button>
          </div>
        </div>

        {/* Right side: Placeholder for AI animation (handled by AIAnimation component) */}
        <div className="hidden md:block md:w-1/2 h-96">
          {/* The AIAnimation component covers the whole section, so this div is mostly for layout */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;