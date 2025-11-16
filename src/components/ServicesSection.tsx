"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bot, Code, GitFork, CalendarCheck, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Customer Support",
      description: "24/7 instant replies. No missed leads, improved customer satisfaction.",
    },
    {
      icon: Code,
      title: "AI-Driven Website Development",
      description: "Modern, high-converting sites powered by built-in automation and personalized experiences.",
    },
    {
      icon: GitFork,
      title: "CRM Integrations",
      description: "Connect all your tools: HubSpot, Zoho, GoHighLevel, Notion, Airtable for seamless workflows.",
    },
    {
      icon: CalendarCheck,
      title: "AI Appointment Setting",
      description: "Fully automated booking systems that qualify leads and fill your calendar efficiently.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-brand-background-primary text-brand-text-light">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 animate-slide-up">
          We Build Smart Systems That Run Your Business Automatically.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col items-center text-center bg-brand-background-secondary/50 border border-brand-primary-color/30 rounded-xl shadow-lg
                         hover:shadow-brand-glow-md hover:scale-[1.02] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${0.1 * index + 0.2}s` }}
            >
              <div className="mb-4 bg-brand-primary-color/10 text-brand-primary-color p-4 rounded-full shadow-md animate-pulse-glow">
                <service.icon size={36} />
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-semibold text-brand-text-light">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardDescription className="text-muted-foreground text-sm">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
        <a href="#contact" className="text-brand-primary-color hover:text-brand-accent-color transition-colors flex items-center justify-center gap-2 text-lg font-medium animate-slide-up delay-500">
          Explore Services <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;