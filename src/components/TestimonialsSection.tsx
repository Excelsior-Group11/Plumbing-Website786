"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    {
      name: "Priya S.",
      review: "Excellent work on our geyser installation. Quick, clean, and very professional. Highly satisfied!",
      avatar: "/placeholder.svg",
    },
    {
      name: "David K.",
      review: "Had a blocked drain, and they sorted it out in no time. Very impressed with the speed and quality of service.",
      avatar: "/placeholder.svg",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-aqua-soft dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-navy-deep mb-12 animate-fade-in-up font-['Outfit',_sans-serif]">
          What Our Customers Say
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          // Added px-8 for internal padding and adjusted max-w for better button visibility
          className="w-full max-w-5xl mx-auto px-8 animate-fade-in-up delay-200"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              // Adjusted basis for smaller screens to make review boxes slightly narrower
              <CarouselItem key={index} className="pl-4 basis-[90%] md:basis-1/2 lg:basis-1/3">
                <Card className="p-6 flex flex-col items-center text-center shadow-lg rounded-xl bg-white h-full">
                  <Avatar className="h-20 w-20 mb-4 shadow-md">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-blue-primary text-white text-xl font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-orange-accent text-orange-accent" />
                    ))}
                  </div>
                  <CardContent className="p-0 flex-grow flex flex-col justify-center">
                    <p className="text-lg italic text-muted-foreground mb-4 font-['Inter',_sans-serif]">
                      "{testimonial.review}"
                    </p>
                    <p className="font-semibold text-navy-deep font-['Outfit',_sans-serif]">
                      — {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Positioned buttons at the edge of the carousel's padding */}
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-primary text-white hover:bg-blue-primary/90" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-primary text-white hover:bg-blue-primary/90" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;