"use client";

import React from "react";
import { MessageSquareText, Bot, Sparkles } from "lucide-react";

const AICustomerSupportAnimation = () => {
  return (
    <div className="relative w-full h-48 flex items-center justify-center overflow-hidden rounded-lg bg-brand-background-secondary/50 border border-brand-primary-color/20">
      <Bot className="absolute text-brand-primary-color/40 w-24 h-24 animate-pulse-glow" />
      <MessageSquareText
        className="absolute top-8 left-1/4 text-brand-accent-color/60 w-10 h-10 animate-particle-float"
        style={{ animationDelay: '0.5s', animationDuration: '12s' }}
      />
      <MessageSquareText
        className="absolute bottom-10 right-1/4 text-brand-primary-color/60 w-8 h-8 animate-particle-float"
        style={{ animationDelay: '1.2s', animationDuration: '10s' }}
      />
      <Sparkles
        className="absolute top-1/3 right-1/3 text-brand-text-light/70 w-6 h-6 animate-pulse-glow"
        style={{ animationDelay: '0.8s', animationDuration: '1.5s' }}
      />
    </div>
  );
};

export default AICustomerSupportAnimation;