"use client";

import React from "react";
import { Clock, Briefcase, Unlink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const ProblemSection = () => {
  const painPoints = [
    {
      icon: Clock,
      title: "Slow Response Times",
      description: "Customers expect instant replies. Manual support loses leads and damages reputation.",
    },
    {
      icon: Briefcase,
      title: "Busywork Overload",
      description: "Your team is stuck doing repetitive tasks instead of focusing on growth and innovation.",
    },
    {
      icon: Unlink,
      title: "Disconnected Systems",
      description: "Different apps and CRMs cause errors, delays, and missed opportunities, hindering efficiency.",
    },
  ];

  return (
    <section id="problems" className="py-16 md:py-24 bg-dark-gray-bg text-text-light">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 animate-slide-up">
          You’re Losing Time, Money & Customers Without Automation.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col items-center text-center bg-black-primary/50 border border-neon-purple/30 rounded-xl shadow-lg
                         hover:shadow-neon-glow-md hover:scale-[1.02] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${0.1 * index + 0.2}s` }}
            >
              <div className="mb-4 bg-neon-purple/10 text-neon-purple p-4 rounded-full shadow-md animate-pulse-glow">
                <point.icon size={36} />
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-semibold text-text-light">
                  {point.title}
                </CardTitle>
              </CardHeader>
              <CardDescription className="text-muted-foreground text-sm">
                {point.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;