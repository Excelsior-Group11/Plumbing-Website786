"use client";

import React from "react";
import { GitFork, Database, Network, Link as LinkIcon } from "lucide-react";

const CRMIntegrationsAnimation = () => {
  return (
    <div className="relative w-full h-48 flex items-center justify-center overflow-hidden rounded-lg bg-brand-background-secondary/50 border border-brand-primary-color/20">
      <Database className="absolute top-1/4 left-1/4 text-brand-primary-color/40 w-20 h-20 animate-pulse-glow" />
      <Network className="absolute bottom-1/4 right-1/4 text-brand-accent-color/40 w-20 h-20 animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
      <GitFork className="absolute text-brand-secondary-color/40 w-24 h-24 animate-fade-in" style={{ animationDelay: '0.2s' }} />
      <LinkIcon
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-text-light/70 w-8 h-8 animate-pulse-glow"
        style={{ animationDelay: '0.8s', animationDuration: '1.8s' }}
      />
    </div>
  );
};

export default CRMIntegrationsAnimation;