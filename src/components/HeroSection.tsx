"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import AIAnimation from "./AIAnimation";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-brand-background-primary text-brand-text-light min-h-screen flex items-center justify-center py-24 md:py-0 overflow-hidden"
    >
      <AIAnimation />

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className="md:w-1/2 animate-slide-up">
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6">
            AI That Automates Your Business While You Sleep.
          </h1>
          <p className="text-lg md:text-2xl mb-10 max-w-xl mx-auto md:mx-0 text-muted-foreground">
            Tricore Solutions builds intelligent systems that reduce workload, cut costs, and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8">
            <Button asChild size="lg" className="bg-gradient-to-r from-brand-primary-color to-brand-secondary-color text-brand-text-light font-bold text-lg px-8 py-6 rounded-full shadow-brand-glow hover:scale-105 transition-all duration-300">
              <a href="#contact">Book a Free Consultation</a>
            </Button>
            <a href="#services" className="text-brand-primary-color hover:text-brand-accent-color transition-colors flex items-center gap-2 text-lg font-medium">
              See How Automation Works <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto md:mx-0">
            Trusted by service businesses, agencies, and fast-growing brands.
          </p>
        </div>
        <div className="md:w-1/2 h-64 md:h-auto flex items-center justify-center mt-12 md:mt-0">
          {/* AIAnimation component handles the visual on the right */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;