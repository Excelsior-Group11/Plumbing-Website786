"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import AICustomerSupportAnimation from "@/components/animations/AICustomerSupportAnimation";
import WebsiteDevelopmentAnimation from "@/components/animations/WebsiteDevelopmentAnimation";
import CRMIntegrationsAnimation from "@/components/animations/CRMIntegrationsAnimation";
import AppointmentSettingAnimation from "@/components/animations/AppointmentSettingAnimation";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { ArrowRight } from "lucide-react";

const servicesData = [
  {
    id: "ai-customer-support",
    title: "AI Customer Support",
    description: "Implement 24/7 AI chatbots to provide instant replies, improve customer satisfaction, and ensure no lead is ever missed. Automate routine inquiries and free up your team.",
    animation: <AICustomerSupportAnimation />,
  },
  {
    id: "website-development",
    title: "AI-Driven Website Development",
    description: "Build modern, high-converting websites with integrated AI automation for personalized user experiences, lead generation, and streamlined operations.",
    animation: <WebsiteDevelopmentAnimation />,
  },
  {
    id: "crm-integrations",
    title: "CRM Integrations",
    description: "Seamlessly connect all your essential business tools like HubSpot, Zoho, GoHighLevel, Notion, and Airtable to create a unified, efficient workflow.",
    animation: <CRMIntegrationsAnimation />,
  },
  {
    id: "appointment-setting",
    title: "AI Appointment Setting",
    description: "Automate your booking process with intelligent systems that qualify leads, manage schedules, and fill your calendar efficiently, reducing manual effort.",
    animation: <AppointmentSettingAnimation />,
  },
];

const ServicesPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-background-primary text-brand-text-light">
      <Header />
      <main className="flex-grow">
        <section className="py-20 md:py-28 text-center bg-brand-background-primary relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Our AI Automation Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Tricore Solutions offers cutting-edge AI automation to transform your business operations, enhance customer engagement, and drive sustainable growth.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-brand-primary-color to-brand-secondary-color text-brand-text-light font-bold text-lg px-8 py-6 rounded-full shadow-brand-glow hover:scale-105 transition-all duration-300">
              <a href="#contact">Get a Free Consultation</a>
            </Button>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-brand-background-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {servicesData.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-xl bg-brand-background-primary/70 border border-brand-accent-color/30 shadow-lg
                             hover:shadow-brand-glow-md hover:scale-[1.01] transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${0.1 * index + 0.2}s` }}
                >
                  <div className="md:w-1/2 flex-shrink-0">
                    {service.animation}
                  </div>
                  <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4 text-brand-text-light">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <Button asChild className="bg-gradient-to-r from-brand-primary-color to-brand-secondary-color text-brand-text-light font-bold px-6 py-3 rounded-full shadow-brand-glow hover:scale-105 transition-all duration-300">
                      <a href="#contact" className="flex items-center gap-2">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default ServicesPage;