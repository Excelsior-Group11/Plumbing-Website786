"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Wrench } from "lucide-react"; // Added Wrench icon
import { Link } from "react-router-dom";

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-deep/20 bg-navy-deep text-white shadow-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="text-2xl font-bold text-white hover:text-orange-accent transition-colors">
          Jeff's Plumber
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white hover:text-orange-accent transition-colors animate-underline-grow"
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="ml-4 bg-orange-accent hover:bg-orange-accent/90 text-green-500 font-bold text-base px-6 py-3 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
            <a href="tel:0835550192" className="flex items-center gap-2">
              <Wrench className="h-6 w-6" /> Get Quick Help
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="bg-white text-navy-deep hover:bg-gray-100">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-navy-deep text-white border-l-navy-deep/50">
            <nav className="flex flex-col gap-4 pt-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavLinkClick}
                  className="text-lg font-medium text-white hover:text-orange-accent transition-colors animate-underline-grow"
                >
                  {link.name}
                </a>
              ))}
              <Button asChild className="mt-4 bg-orange-accent hover:bg-orange-accent/90 text-green-500 font-bold text-base px-6 py-3 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
                <a href="tel:0835550192" onClick={handleNavLinkClick} className="flex items-center gap-2">
                  <Wrench className="h-6 w-6" /> Get Quick Help
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;