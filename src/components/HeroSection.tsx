"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32 overflow-hidden"
    >
      {/* Background elements for visual interest */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/placeholder.svg" // Placeholder image for plumbing tools/pipes
          alt="Plumbing tools background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700/80 to-blue-900/80"></div>

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
          Fast, Reliable Plumbing Services in Johannesburg
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
          24/7 Emergency Plumbing – Leak Repairs, Geysers, Drains & More
        </p>
        <p className="text-md md:text-lg mb-10 max-w-2xl mx-auto animate-fade-in-up delay-400">
          Jeff’s Plumber delivers professional, affordable plumbing services across Johannesburg. Whether it’s a leaking tap or a burst geyser, we’ve got you covered — any time, day or night.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-600">
          <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg px-8 py-6 rounded-full shadow-lg">
            <a href="tel:0835550192">📞 Call Now</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800 font-bold text-lg px-8 py-6 rounded-full shadow-lg">
            <a href="#contact">💬 Request a Quote</a>
          </Button>
        </div>
        <div className="mt-12 text-sm flex justify-center items-center gap-4">
          <span className="bg-white/20 px-3 py-1 rounded-full">Licensed & Insured</span>
          <span className="bg-white/20 px-3 py-1 rounded-full">SABS Approved</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;