"use client";

import React from "react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="lg:order-2">
          <img
            src="/placeholder.svg" // Placeholder for an image of Jeff or his team
            alt="Jeff's Plumber team at work"
            className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[400px]"
          />
        </div>
        <div className="lg:order-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Trusted Local Plumber with 10+ Years of Experience
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Founded by Jeff M., Jeff’s Plumber is a proudly Johannesburg-based plumbing service committed to quality and reliability. We handle every job — big or small — with care, precision, and honesty.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Our mission is simple: provide top-notch plumbing solutions that keep your home safe and comfortable. From minor leaks to full installations, we treat every customer like family.
          </p>
          <Card className="p-6 bg-blue-50 border-l-4 border-blue-600 italic text-blue-800 shadow-md">
            <p className="text-xl font-semibold">
              “We fix it right the first time — guaranteed.”
            </p>
            <p className="text-right mt-2">— Jeff M.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;