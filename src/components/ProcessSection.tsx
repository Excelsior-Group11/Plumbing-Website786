"use client";

import React from "react";
import { MessageSquareText, Settings, Rocket } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageSquareText,
      title: "Tell Us Your Workflow",
      description: "Share your current processes and business goals with our experts.",
    },
    {
      icon: Settings,
      title: "We Build Your AI System",
      description: "Our team designs and implements a custom AI automation solution for you.",
    },
    {
      icon: Rocket,
      title: "You Scale Effortlessly",
      description: "Launch your new system and watch your business grow with minimal effort.",
    },
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-brand-background-secondary text-brand-text-light">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 animate-slide-up">
          Automation Built Around Your Business, Not the Other Way Around.
        </h2>
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          {/* Horizontal line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-primary-color to-brand-accent-color opacity-50 z-0"></div>
          {/* Vertical line for mobile */}
          <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary-color to-brand-accent-color opacity-50 z-0 transform -translate-x-1/2"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center text-center p-6 bg-brand-background-primary/70 border border-brand-primary-color/30 rounded-xl shadow-lg
                         hover:shadow-brand-glow-md hover:scale-[1.02] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${0.1 * index + 0.2}s` }}
            >
              <div className="mb-4 bg-brand-primary-color/10 text-brand-primary-color p-4 rounded-full shadow-md animate-pulse-glow">
                <step.icon size={36} />
              </div>
              <h3 className="text-xl font-semibold text-brand-text-light mb-2">
                {index + 1} — {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;