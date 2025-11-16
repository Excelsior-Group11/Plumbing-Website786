"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bot, Globe, Workflow, CalendarCheck } from "lucide-react"; // New icons

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Customer Support Automation",
      description: "Implement intelligent chatbots and virtual assistants for 24/7 customer service.",
    },
    {
      icon: Globe,
      title: "AI-Driven Website Development",
      description: "Build dynamic, personalized websites with AI-powered content and user experiences.",
    },
    {
      icon: Workflow,
      title: "CRM Integrations & Workflows",
      description: "Automate your sales and marketing processes with seamless CRM integrations.",
    },
    {
      icon: CalendarCheck,
      title: "AI Appointment Setting Systems",
      description: "Streamline scheduling and reduce no-shows with smart, automated booking.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12 animate-fade-in-up font-mono">
          Our AI Automation Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col items-center text-center bg-card border border-gray-800 rounded-xl
                         hover:shadow-neon-glow hover:border-neon-blue transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index + 0.2}s` }}
            >
              <div className="mb-4 text-neon-blue p-4 rounded-full border border-neon-blue/50 shadow-lg">
                <service.icon size={36} />
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-semibold text-foreground font-mono">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardDescription className="text-muted-foreground font-sans">
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