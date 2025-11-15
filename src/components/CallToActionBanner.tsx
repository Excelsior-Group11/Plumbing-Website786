"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Wrench } from "lucide-react"; // Added Wrench icon

const CallToActionBanner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-primary to-navy-deep text-white py-16 md:py-20 text-center shadow-inner">
      <div className="container mx-auto px-4 md:px-6 animate-fade-in-up">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-['Outfit',_sans-serif]">
          Need a Plumber? We’re Available 24/7!
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto font-['Inter',_sans-serif]">
          Don’t wait for water damage — our team is standing by to help you right now.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-orange-accent hover:bg-orange-accent/90 text-green-500 font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
            <a href="tel:0835550192" className="flex items-center gap-2">
              <Wrench className="h-6 w-6" /> Get Quick Help
            </a>
          </Button>
          <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
            <a href="https://wa.me/27835550192" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageCircle className="h-6 w-6" /> Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;