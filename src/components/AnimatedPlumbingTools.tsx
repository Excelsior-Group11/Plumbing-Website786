"use client";

import React from "react";
import { Wrench, Droplet, Pipe, Faucet } from "lucide-react";

const AnimatedPlumbingTools = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Wrench
        className="absolute top-1/4 left-1/4 text-white/10 w-24 h-24 md:w-32 md:h-32 animate-float animate-spin-slow"
        style={{ animationDelay: '0s', animationDuration: '4s' }}
      />
      <Droplet
        className="absolute top-1/2 right-1/4 text-white/10 w-20 h-20 md:w-28 md:h-28 animate-float animate-spin-slow"
        style={{ animationDelay: '1.5s', animationDuration: '5s' }}
      />
      <Pipe
        className="absolute bottom-1/4 left-1/3 text-white/10 w-28 h-28 md:w-36 md:h-36 animate-float animate-spin-slow"
        style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}
      />
      <Faucet
        className="absolute top-1/3 right-1/3 text-white/10 w-20 h-20 md:w-28 md:h-28 animate-float animate-spin-slow"
        style={{ animationDelay: '2s', animationDuration: '3.8s' }}
      />
      <Wrench
        className="absolute bottom-1/3 left-1/4 text-white/10 w-16 h-16 md:w-24 md:h-24 animate-float animate-spin-slow"
        style={{ animationDelay: '1s', animationDuration: '3s' }}
      />
    </div>
  );
};

export default AnimatedPlumbingTools;