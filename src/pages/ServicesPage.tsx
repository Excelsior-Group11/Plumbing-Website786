"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bot, Code, GitFork, CalendarCheck, MessageSquareText, Clock, Network } from "lucide-react";
import WebsiteDevAnimation from "@/components/WebsiteDevAnimation";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";

const ServicesPage = () => {
  const services = [
    {
      id: "customer-support",
      icon: Bot,
      title: "AI Customer Support",
      description: "Deploy 24/7 AI chatbots for instant replies, lead qualification, and improved customer satisfaction. Never miss a lead again.",
      animation: (
        <div className="relative w-full h-32 flex items-center justify-center">
          <Bot size={64} className="text-brand-primary-color animate-pulse-glow" />
          <div className="absolute top-4 left-1/4 w-8 h-8 bg-brand-accent-color/30 rounded-full animate-particle-float" style={{ animationDelay: '0.5s', animationDuration: '10s' }}></div>
          <div className="absolute bottom-8 right-1/4 w-6 h-6 bg-brand-primary-color/30 rounded-full animate-particle-float" style={{ animationDelay: '1s', animationDuration: '12s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-brand-secondary-color/30 rounded-full animate-particle-float" style={{ animationDelay: '1.5s', animationDuration: '14s' }}></div>
        </div>
      ),
    },
    {
      id: "website-development",
      icon: Code,
      title: "AI-Driven Website Development",
      description: "Build modern, high-converting websites with integrated AI automation for personalized experiences and streamlined operations.",
      animation: (
        <div className="w-full h-32">
          <WebsiteDevAnimation />
        </div>
      ),
    },
    {
      id: "crm-integrations",
      icon: GitFork,
      title: "Seamless CRM Integrations",
      description: "Connect all your essential business tools like HubSpot, Zoho, GoHighLevel, Notion, and Airtable for a unified, error-free workflow.",
      animation: (
        <div className="relative w-full h-32 flex items-center justify-center">
          <Network size={64} className="text-brand-accent-color animate-pulse-glow" />
          <div className="absolute top-4 left-1/4 w-4 h-4 bg-brand-primary-color rounded-full animate-fade-in" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute bottom-8 right-1/4 w-4 h-4 bg-brand-secondary-color rounded-full animate-fade-in" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-brand-accent-color rounded-full animate-fade-in" style={{ animationDelay: '0.6s' }}></div>
          <div className="absolute h-0.5 w-1/3 bg-brand-primary-color/50 animate-fade-in" style={{ animationDelay: '0.8s', transform: 'rotate(30deg)' }}></div>
          <div className="absolute h-0.5 w-1/3 bg-brand-secondary-color/50 animate-fade-in" style={{ animationDelay: '1s', transform: 'rotate(-30deg)' }}></div>
        </div>
      ),
    },
    {
      id: "appointment-settings",
      icon: CalendarCheck,
      title: "Automated Appointment Setting",
      description: "Implement fully automated booking systems that qualify leads, manage schedules, and fill your calendar efficiently, 24/7.",
      animation: (
        <div className="relative w-full h-32 flex items-center justify-center">
          <CalendarCheck size={64} className="text-brand-primary-color animate-slide-up" />
          <Clock size={32} className="absolute top-4 right-1/4 text-brand-accent-color animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-4 left-1/4 w-16 h-2 bg-brand-secondary-color/50 rounded-full overflow-hidden">
            <div className="h-full bg-brand-secondary-color animate-[fill-progress_2s_ease-out_infinite_alternate]" style={{ width: '0%' }}></div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-background-primary text-brand-text-light">
      <Header />
      <main className="flex-grow py-16 md:py-24">
        <section className="container mx-auto px-4 md:px-6 text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-slide-up">
            Our Services: Automate, Innovate, Grow.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up delay-200">
            Tricore Solutions empowers your business with cutting-edge AI and automation, transforming your operations and driving unparalleled growth.
          </p>
        </section>

        <section className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="p-6 flex flex-col items-center text-center bg-brand-background-secondary/50 border border-brand-primary-color/30 rounded-xl shadow-lg
                         hover:shadow-brand-glow-md hover:scale-[1.02] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${0.1 * index + 0.3}s` }}
            >
              <div className="mb-4 w-full h-32 flex items-center justify-center">
                {service.animation}
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-2xl font-semibold text-brand-text-light">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardDescription className="text-muted-foreground text-base">
                {service.description}
              </CardDescription>
              <Button asChild className="mt-6 bg-gradient-to-r from-brand-primary-color to-brand-secondary-color text-brand-text-light font-bold text-base px-6 py-3 rounded-full shadow-brand-glow hover:scale-105 transition-all duration-300">
                <a href="#contact">Learn More</a>
              </Button>
            </Card>
          ))}
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default ServicesPage;