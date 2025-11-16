"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="bg-black-primary text-text-light py-16 md:py-24 text-center">
      <div className="container mx-auto px-4 md:px-6 animate-slide-up">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to automate your business?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-muted-foreground">
          Let Tricore Solutions build your intelligent systems.
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple text-text-light font-bold text-lg px-8 py-6 rounded-full shadow-neon-glow hover:scale-105 transition-all duration-300">
          <a href="#contact">Get Started</a>
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;