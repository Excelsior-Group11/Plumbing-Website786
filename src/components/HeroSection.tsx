"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import AIAnimation from "./AIAnimation";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-black-primary text-text-light min-h-screen flex items-center justify-center py-24 md:py-0 overflow-hidden"
    >
      <AIAnimation />

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className="md:w-1/2 animate-slide-up">
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6">
            AUTOMATE WITH INTELLIGENCE
          </h1>
          <p className="text-lg md:text-2xl mb-10 max-w-xl mx-auto md:mx-0">
            AI-Powered Systems for Growth, Efficiency & Customer Experience.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple text-text-light font-bold text-lg px-8 py-6 rounded-full shadow-neon-glow hover:scale-105 transition-all duration-300">
            <a href="#contact">BOOK A FREE CONSULTATION</a>
          </Button>
        </div>
        <div className="md:w-1/2 h-64 md:h-auto flex items-center justify-center mt-12 md:mt-0">
          {/* AIAnimation component handles the visual on the right */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;