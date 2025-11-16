"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const CallToActionBanner = () => {
  return (
    <section className="bg-background text-foreground py-16 md:py-20 text-center border-t border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-6 animate-fade-in-up">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-mono">
          Ready to automate your business?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto font-sans text-muted-foreground">
          Let Tricore Solutions build your intelligent systems.
        </p>
        <Button asChild size="lg" className="relative overflow-hidden bg-gradient-to-r from-gradient-start to-gradient-end text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-all duration-300 animate-neon-glow">
          <a href="#contact" className="relative z-10">
            Get Started
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CallToActionBanner;