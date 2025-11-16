"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-background-secondary/50 bg-brand-background-primary text-brand-text-light shadow-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="text-2xl font-bold text-brand-text-light hover:text-brand-primary-color transition-colors">
          Tricore Solutions
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-text-light hover:text-brand-primary-color transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="ml-4 bg-gradient-to-r from-brand-primary-color to-brand-secondary-color text-brand-text-light font-bold text-base px-6 py-3 rounded-full shadow-brand-glow hover:scale-105 transition-all duration-300">
            <a href="#contact">Login</a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="bg-brand-background-secondary text-brand-text-light hover:bg-brand-background-secondary/80 border-brand-primary-color/50">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-brand-background-primary text-brand-text-light border-l-brand-background-secondary/50">
            <nav className="flex flex-col gap-4 pt-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-brand-text-light hover:text-brand-primary-color transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button asChild className="mt-4 bg-gradient-to-r from-brand-primary-color to-brand-secondary-color text-brand-text-light font-bold text-base px-6 py-3 rounded-full shadow-brand-glow hover:scale-105 transition-all duration-300">
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