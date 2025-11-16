"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="bg-brand-background-primary text-brand-text-light py-16 md:py-24 text-center border-t border-brand-background-secondary/50">
      <div className="container mx-auto px-4 md:px-6 animate-slide-up">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Automate and Grow?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-muted-foreground">
          Let’s build the AI systems that will transform your business.
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-brand-primary-color to-brand-secondary-color text-brand-text-light font-bold text-lg px-8 py-6 rounded-full shadow-brand-glow hover:scale-105 transition-all duration-300">
          <a href="#contact">Book Your Free Strategy Call</a>
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;