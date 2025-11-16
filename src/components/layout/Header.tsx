"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils"; // Import cn for conditional class merging

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Adjust scroll threshold as needed
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-black-primary/80 backdrop-blur-sm border-b border-dark-gray-bg/50 shadow-md"
          : "bg-black-primary border-b border-dark-gray-bg/50 shadow-lg"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="text-2xl font-bold text-text-light hover:text-neon-blue transition-colors">
          Tricore Solutions
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-light hover:text-neon-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="ml-4 bg-gradient-to-r from-neon-blue to-neon-purple text-text-light font-bold text-base px-6 py-3 rounded-full shadow-neon-glow hover:scale-105 transition-all duration-300">
            <a href="#contact">Login</a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="bg-dark-gray-bg text-text-light hover:bg-dark-gray-bg/80 border-neon-blue/50">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black-primary text-text-light border-l-dark-gray-bg/50">
            <nav className="flex flex-col gap-4 pt-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-text-light hover:text-neon-blue transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button asChild className="mt-4 bg-gradient-to-r from-neon-blue to-neon-purple text-text-light font-bold text-base px-6 py-3 rounded-full shadow-neon-glow hover:scale-105 transition-all duration-300">
                <a href="#contact">Login</a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;