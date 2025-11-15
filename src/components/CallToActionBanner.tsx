"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const CallToActionBanner = () => {
  return (
    <section className="bg-blue-700 text-white py-16 md:py-20 text-center">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Need a Plumber? We’re Available 24/7!
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          Don’t wait for water damage — our team is standing by to help you right now.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg px-8 py-6 rounded-full shadow-lg">
            <a href="tel:0835550192">📞 Call Now</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800 font-bold text-lg px-8 py-6 rounded-full shadow-lg">
            <a href="#contact">💬 Request a Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;