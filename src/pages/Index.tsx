"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CallToActionBanner from "@/components/CallToActionBanner";
import ContactSection from "@/components/ContactSection";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <CallToActionBanner />
        <ContactSection />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;