"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Award, ShieldCheck, Users, Clock, DollarSign, Zap } from "lucide-react";

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: Award,
      title: "10+ Years Experience",
      description: "Decades of expertise ensuring top-quality plumbing solutions.",
    },
    {
      icon: ShieldCheck,
      title: "Licensed & Insured",
      description: "Fully certified and insured for your peace of mind.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "We prioritize your satisfaction with friendly, reliable service.",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Always available for urgent plumbing issues, day or night.",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Clear, upfront quotes with no hidden fees.",
    },
    {
      icon: Zap,
      title: "Fast Response",
      description: "Quick dispatch to resolve your plumbing emergencies promptly.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-light dark:bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-navy-deep mb-12 animate-fade-in-up font-['Outfit',_sans-serif]">
          Why Choose Jeff’s Plumber?
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up delay-200 font-['Inter',_sans-serif]">
          Founded by Jeff M., Jeff’s Plumber is a proudly Johannesburg-based plumbing service committed to quality and reliability. We handle every job — big or small — with care, precision, and honesty.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col items-center text-center shadow-lg rounded-xl bg-white
                         hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index + 0.4}s` }}
            >
              <div className="bg-blue-primary/10 text-blue-primary p-4 rounded-full mb-4 shadow-md">
                <benefit.icon size={36} />
              </div>
              <h3 className="text-xl font-semibold text-navy-deep mb-2 font-['Outfit',_sans-serif]">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground font-['Inter',_sans-serif]">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;