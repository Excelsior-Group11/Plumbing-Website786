"use client";

import React from "react";

const WhyChooseUsSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in-up font-mono max-w-4xl mx-auto">
          We Build Systems That Work While You Sleep.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up delay-200 font-sans">
          Tricore Solutions empowers your business with 24/7 automation, significantly reducing your workload and ensuring faster customer responses. Our no-code deployment options and enterprise-grade integrations mean you get powerful, efficient systems without the complexity.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;