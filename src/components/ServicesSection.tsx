"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Wrench, Droplet, ShowerHead, Plug, Clock } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Droplet,
      title: "Leak Repairs",
      description: "Stop water damage fast with expert leak detection and repair.",
    },
    {
      icon: ShowerHead,
      title: "Geyser Installation & Repairs",
      description: "Efficient, SABS-approved geyser services to keep your hot water running.",
    },
    {
      icon: Plug, // Using Plug as a generic icon for drains
      title: "Drain Unblocking",
      description: "Quick, clean drain clearing — no mess, no stress.",
    },
    {
      icon: Wrench,
      title: "Bathroom Renovations",
      description: "From design to installation, we create bathrooms that work beautifully.",
    },
    {
      icon: Clock,
      title: "Emergency Plumbing (24/7)",
      description: "We’re always on call for urgent plumbing problems.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-12">
          Expert Plumbing for Homes & Businesses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                <service.icon size={36} />
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardDescription className="text-muted-foreground">
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