"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      review: "Fantastic service! Jeff arrived within 30 minutes and fixed our burst pipe in no time. Highly recommend their emergency service!",
      avatar: "/placeholder.svg", // Placeholder for avatar
    },
    {
      name: "Lebo T.",
      review: "Professional and friendly — they redid our bathroom plumbing perfectly. The team was tidy and efficient.",
      avatar: "/placeholder.svg", // Placeholder for avatar
    },
    {
      name: "Thabo R.",
      review: "Affordable, honest, and efficient. Jeff’s Plumber is my go-to for all plumbing needs. Great communication throughout the process.",
      avatar: "/placeholder.svg", // Placeholder for avatar
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 flex flex-col items-center text-center shadow-lg">
              <Avatar className="h-20 w-20 mb-4">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback className="bg-blue-200 text-blue-800 text-xl font-semibold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <CardContent className="p-0">
                <p className="text-lg italic text-muted-foreground mb-4">
                  "{testimonial.review}"
                </p>
                <p className="font-semibold text-foreground">
                  — {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;