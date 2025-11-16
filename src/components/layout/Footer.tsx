"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background text-muted-foreground py-10 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 text-center text-sm font-mono space-y-2">
        <p>&copy; 2025 Tricore Solutions</p>
        <p>South Africa</p>
        <p>Email: <a href="mailto:info@tricore.solutions.co.za" className="hover:text-neon-blue transition-colors">info@tricore.solutions.co.za</a></p>
        <p>Website: <a href="https://tricore.solutions.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors">tricore.solutions.co.za</a></p>
        <p>Phone: <a href="tel:+27798792466" className="hover:text-neon-blue transition-colors">079 879 2466</a></p>
      </div>
    </footer>
  );
};

export default Footer;