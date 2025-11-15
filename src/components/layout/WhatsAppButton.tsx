"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/27835550192"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="icon"
        className="h-14 w-14 rounded-full shadow-lg bg-green-500 hover:bg-green-600"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;