"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
// import ServicesSection from "@/components/ServicesSection"; // Removed
import ValuePropositionSection from "@/components/ValuePropositionSection";
import ProofSection from "@/components/ProofSection";
import ProcessSection from "@/components/ProcessSection";
import CallToActionSection from "@/components/CallToActionSection";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-background-primary text-brand-text-light">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProblemSection />
        {/* ServicesSection removed, now on its own page */}
        <ValuePropositionSection />
        <ProofSection />
        <ProcessSection />
        <CallToActionSection />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;