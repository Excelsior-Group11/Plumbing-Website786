"use client";

import React from "react";
import { CircuitBoard, Sparkles, Atom, Network, Brain, Cpu } from "lucide-react";

const AIAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 background-grid-pattern opacity-10"></div> {/* Subtle grid */}
      <CircuitBoard
        className="absolute top-1/4 left-1/4 text-neon-blue/30 w-24 h-24 md:w-32 md:h-32 animate-particle-float animate-pulse-glow"
        style={{ animationDelay: '0s', animationDuration: '15s' }}
      />
      <Sparkles
        className="absolute top-1/2 right-1/4 text-neon-purple/30 w-20 h-20 md:w-28 md:h-28 animate-particle-float animate-pulse-glow"
        style={{ animationDelay: '1.5s', animationDuration: '18s' }}
      />
      <Atom
        className="absolute bottom-1/4 left-1/3 text-neon-blue/30 w-28 h-28 md:w-36 md:h-36 animate-particle-float animate-pulse-glow"
        style={{ animationDelay: '0.5s', animationDuration: '16s' }}
      />
      <Network
        className="absolute top-1/3 right-1/3 text-neon-purple/30 w-20 h-20 md:w-28 md:h-28 animate-particle-float animate-pulse-glow"
        style={{ animationDelay: '2s', animationDuration: '14s' }}
      />
      <Brain
        className="absolute bottom-1/3 left-1/4 text-neon-blue/30 w-16 h-16 md:w-24 md:h-24 animate-particle-float animate-pulse-glow"
        style={{ animationDelay: '1s', animationDuration: '17s' }}
      />
      <Cpu
        className="absolute top-1/5 right-1/5 text-neon-purple/30 w-20 h-20 md:w-28 md:h-28 animate-particle-float animate-pulse-glow"
        style={{ animationDelay: '2.5s', animationDuration: '19s' }}
      />
    </div>
  );
};

export default AIAnimation;