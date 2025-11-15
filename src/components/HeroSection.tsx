"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-primary to-navy-deep text-white py-24 md:py-40 overflow-hidden rounded-b-[3rem] shadow-xl"
    >
      {/* Background elements for visual interest */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/placeholder.svg" // Placeholder image for plumbing tools/pipes
          alt="Plumbing tools background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-primary/80 to-navy-deep/80"></div>

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up font-['Outfit',_sans-serif]">
          Fast, Reliable Plumbing Services in Johannesburg
        </h1>
        <p className="text-lg md:text-2xl mb-10 max-w-4xl mx-auto animate-fade-in-up delay-200 font-['Inter',_sans-serif]">
          24/7 Emergency Plumbing – Leak Repairs, Geysers, Drains & More
        </p>
        <p className="text-md md:text-lg mb-12 max-w-3xl mx-auto animate-fade-in-up delay-400 font-['Inter',_sans-serif]">
          Jeff’s Plumber delivers professional, affordable plumbing services across Johannesburg. Whether it’s a leaking tap or a burst geyser, we’ve got you covered — any time, day or night.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-600">
          <Button asChild size="lg" className="bg-orange-accent hover:bg-orange-accent/90 text-navy-deep font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
            <a href="tel:0835550192">📞 Get Quick Help</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-primary font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
            <a href="https://wa.me/27835550192" target="_blank" rel="noopener noreferrer">💬 Chat on WhatsApp</a>
          </Button>
        </div>
        <div className="mt-16 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm md:text-base">
          <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full animate-fade-in-up delay-800">
            <CheckCircle className="h-4 w-4 text-white" /> Licensed & Insured
          </span>
          <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full animate-fade-in-up delay-900">
            <CheckCircle className="h-4 w-4 text-white" /> Fast Response
          </span>
          <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full animate-fade-in-up delay-1000">
            <CheckCircle className="h-4 w-4 text-white" /> 200+ Happy Customers
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;