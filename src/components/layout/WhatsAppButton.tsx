"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Whatsapp } from "lucide-react"; // Changed from MessageCircle to Whatsapp

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/27835550192"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-bounce-in"
    >
      <Button
        size="icon"
        className="h-16 w-16 rounded-full shadow-lg bg-green-500 hover:bg-green-600 hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <Whatsapp className="h-9 w-9 text-white" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;