"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12 animate-fade-in-up font-mono">
          Get in Touch
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up delay-200 font-sans">
          We’re ready to discuss your AI automation needs. Reach out to us directly.
        </p>

        <div className="flex flex-col items-center space-y-6 animate-fade-in-up delay-300">
          <div className="flex items-center gap-4">
            <Phone className="h-6 w-6 text-neon-blue" />
            <a href="tel:+27798792466" className="text-lg text-foreground hover:text-neon-blue transition-colors font-sans">
              079 879 2466
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="h-6 w-6 text-neon-blue" />
            <a href="mailto:info@tricore.solutions.co.za" className="text-lg text-foreground hover:text-neon-blue transition-colors font-sans">
              info@tricore.solutions.co.za
            </a>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="h-6 w-6 text-neon-blue" />
            <span className="text-lg text-foreground font-sans">South Africa</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;