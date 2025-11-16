"use client";

import React from "react";
import { CalendarCheck, Clock, CheckCircle, UserPlus } from "lucide-react";

const AppointmentSettingAnimation = () => {
  return (
    <div className="relative w-full h-48 flex items-center justify-center overflow-hidden rounded-lg bg-brand-background-secondary/50 border border-brand-primary-color/20">
      <CalendarCheck className="absolute text-brand-primary-color/40 w-24 h-24 animate-slide-up" />
      <Clock
        className="absolute top-1/4 right-1/4 text-brand-accent-color/60 w-10 h-10 animate-particle-float"
        style={{ animationDelay: '0.4s', animationDuration: '13s' }}
      />
      <CheckCircle
        className="absolute bottom-1/4 left-1/4 text-brand-secondary-color/60 w-12 h-12 animate-fade-in"
        style={{ animationDelay: '0.7s' }}
      />
      <UserPlus
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-text-light/70 w-8 h-8 animate-pulse-glow"
        style={{ animationDelay: '1s', animationDuration: '1.6s' }}
      />
    </div>
  );
};

export default AppointmentSettingAnimation;