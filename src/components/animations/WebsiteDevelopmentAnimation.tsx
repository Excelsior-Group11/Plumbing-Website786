"use client";

import React from "react";
import { Laptop, Code, Palette, Monitor } from "lucide-react";

const WebsiteDevelopmentAnimation = () => {
  return (
    <div className="relative w-full h-48 flex items-center justify-center overflow-hidden rounded-lg bg-brand-background-secondary/50 border border-brand-primary-color/20">
      <Laptop className="absolute text-brand-primary-color/40 w-32 h-32 animate-slide-up" style={{ animationDelay: '0s' }} />
      <Code
        className="absolute top-1/4 left-1/4 text-brand-accent-color/60 w-12 h-12 animate-fade-in"
        style={{ animationDelay: '0.3s' }}
      />
      <Palette
        className="absolute bottom-1/4 right-1/4 text-brand-secondary-color/60 w-10 h-10 animate-fade-in"
        style={{ animationDelay: '0.6s' }}
      />
      <Monitor
        className="absolute top-1/2 right-1/4 text-brand-primary-color/60 w-8 h-8 animate-particle-float"
        style={{ animationDelay: '1s', animationDuration: '15s' }}
      />
    </div>
  );
};

export default WebsiteDevelopmentAnimation;