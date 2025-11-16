"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection"; // Updated import
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToActionBanner from "@/components/CallToActionBanner";
import ContactSection from "@/components/ContactSection";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection /> {/* Updated component name */}
        <TestimonialsSection />
        <CallToActionBanner />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <MadeWithDyad />
    </div>
  );
};

export default Index;