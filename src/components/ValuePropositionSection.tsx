"use client";

import React from "react";
import { Zap, MessageSquareText, TrendingUp, GitMerge } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const ValuePropositionSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Faster Operations",
      description: "Reduce manual tasks by up to 80%, freeing your team for strategic work.",
    },
    {
      icon: MessageSquareText,
      title: "Instant Customer Support",
      description: "AI replies within seconds, ensuring no lead is missed and customers are always happy.",
    },
    {
      icon: TrendingUp,
      title: "Higher Conversions",
      description: "Automation captures leads you would normally lose, boosting your sales funnel efficiency.",
    },
    {
      icon: GitMerge,
      title: "Seamless Integrations",
      description: "Your entire workflow becomes one smooth, interconnected system, eliminating data silos.",
    },
  ];

  return (
    <section id="value" className="py-16 md:py-24 bg-dark-gray-bg text-text-light">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 animate-slide-up">
          Why Businesses Choose Tricore Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col items-center text-center bg-black-primary/50 border border-neon-blue/30 rounded-xl shadow-lg
                         hover:shadow-neon-glow-md hover:scale-[1.02] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${0.1 * index + 0.2}s` }}
            >
              <div className="mb-4 bg-neon-blue/10 text-neon-blue p-4 rounded-full shadow-md animate-pulse-glow">
                <benefit.icon size={36} />
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-semibold text-text-light">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardDescription className="text-muted-foreground text-sm">
                {benefit.description}
              </CardDescription>
            </Card>
          ))}
        </div>
        <p className="text-lg md:text-xl font-semibold text-neon-purple animate-slide-up delay-500">
          We don’t just build tools. We build systems that scale.
        </p>
      </div>
    </section>
  );
};

export default ValuePropositionSection;