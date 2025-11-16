"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Quote } from "lucide-react";

const ProofSection = () => {
  const testimonials = [
    {
      quote: "Response time reduced from 6 hours to 10 seconds. Our customers are thrilled!",
      author: "Sarah L., Marketing Agency Owner",
    },
    {
      quote: "We've seen 30% more booked appointments since implementing Tricore's AI system.",
      author: "Mark T., Service Business CEO",
    },
    {
      quote: "Double the leads captured and a significant boost in conversion rates. Highly recommend!",
      author: "Jessica R., E-commerce Manager",
    },
  ];

  return (
    <section id="proof" className="py-16 md:py-24 bg-black-primary text-text-light">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 animate-slide-up">
          Real Results from Real Businesses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col items-center text-center bg-dark-gray-bg/50 border border-neon-purple/30 rounded-xl shadow-lg
                         hover:shadow-neon-glow-md hover:scale-[1.02] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${0.1 * index + 0.2}s` }}
            >
              <Quote size={36} className="text-neon-purple mb-4" />
              <CardDescription className="text-lg italic text-muted-foreground mb-4">
                "{testimonial.quote}"
              </CardDescription>
              <CardTitle className="text-md font-semibold text-text-light">
                - {testimonial.author}
              </CardTitle>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;