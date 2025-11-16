"use client";

import React from "react";

const WhyChooseUsSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-dark-gray-bg text-text-light">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-6xl font-extrabold leading-tight mb-8 max-w-4xl mx-auto animate-slide-up">
          We Build Systems That Work While You Sleep.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up delay-200">
          Tricore Solutions empowers your business with 24/7 automation, significantly reducing workload, ensuring faster customer responses, and offering flexible no-code deployment options. We specialize in enterprise-grade integrations that scale with your ambition.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;