"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Droplet } from "lucide-react"; // Using Droplet as a placeholder icon

const ServicesSection = () => {
  const services = [
    {
      // threeDIconType: "leak", // Removed as 3D icon is removed
      icon: Droplet, // Placeholder icon
      title: "Leak Detection & Repair",
      description: "Stop water damage fast with expert leak detection and repair.",
    },
    {
      // threeDIconType: "geyser",
      icon: Droplet, // Placeholder icon
      title: "Geyser Installation & Repairs",
      description: "Efficient, SABS-approved geyser services to keep your hot water running.",
    },
    {
      // threeDIconType: "drain",
      icon: Droplet, // Placeholder icon
      title: "Drain Unblocking",
      description: "Quick, clean drain clearing — no mess, no stress.",
    },
    {
      // threeDIconType: "pipe",
      icon: Droplet, // Placeholder icon
      title: "Pipe Repairs & Installation",
      description: "From burst pipes to new installations, we ensure durable plumbing.",
    },
    {
      // threeDIconType: "tap",
      icon: Droplet, // Placeholder icon
      title: "Tap & Fixture Installation",
      description: "Professional installation of taps, toilets, showers, and more.",
    },
    {
      // threeDIconType: "emergency",
      icon: Droplet, // Placeholder icon
      title: "Emergency Plumbing (24/7)",
      description: "We’re always on call for urgent plumbing problems.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-aqua-soft dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-navy-deep mb-12 animate-fade-in-up font-['Outfit',_sans-serif]">
          Expert Plumbing for Homes & Businesses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col items-center text-center shadow-lg rounded-xl bg-white
                         hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index + 0.2}s` }}
            >
              <div className="mb-4 bg-blue-primary/10 text-blue-primary p-4 rounded-full shadow-md">
                <service.icon size={36} /> {/* Placeholder 2D Icon */}
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-semibold text-navy-deep font-['Outfit',_sans-serif]">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardDescription className="text-muted-foreground font-['Inter',_sans-serif]">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;