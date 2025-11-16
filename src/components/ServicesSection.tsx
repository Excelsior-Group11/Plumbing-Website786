"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bot, Code, GitFork, CalendarCheck } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Customer Support Automation",
      description: "Deploy intelligent chatbots and virtual assistants to handle inquiries 24/7, improving response times and customer satisfaction.",
    },
    {
      icon: Code,
      title: "AI-Driven Website Development",
      description: "Build dynamic, personalized websites with AI-powered content generation, user experience optimization, and predictive analytics.",
    },
    {
      icon: GitFork,
      title: "CRM Integrations & Workflows",
      description: "Streamline your sales and marketing with seamless AI integrations into your CRM, automating lead nurturing and data management.",
    },
    {
      icon: CalendarCheck,
      title: "AI Appointment Setting Systems",
      description: "Automate your scheduling with AI-powered systems that qualify leads, book appointments, and manage calendars efficiently.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-black-primary text-text-light">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 animate-slide-up">
          Our AI Automation Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col items-center text-center bg-dark-gray-bg/50 border border-neon-blue/30 rounded-xl shadow-lg
                         hover:shadow-neon-glow-md hover:scale-[1.02] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${0.1 * index + 0.2}s` }}
            >
              <div className="mb-4 bg-neon-blue/10 text-neon-blue p-4 rounded-full shadow-md animate-pulse-glow">
                <service.icon size={36} />
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-semibold text-text-light">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardDescription className="text-muted-foreground text-sm">
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