"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-background text-foreground shadow-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="text-2xl font-bold text-foreground hover:text-neon-blue transition-colors font-mono">
          Tricore Solutions
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-neon-blue transition-colors animate-underline-grow font-sans"
            >
              {link.name}
            </a>
          ))}
          <Link to="/login" className="text-sm font-medium text-foreground hover:text-neon-blue transition-colors font-mono border border-transparent px-3 py-1 rounded-sm">
            [ LOGIN ]
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="bg-card text-foreground hover:bg-muted">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background text-foreground border-l-gray-800">
            <nav className="flex flex-col gap-4 pt-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavLinkClick}
                  className="text-lg font-medium text-foreground hover:text-neon-blue transition-colors animate-underline-grow font-sans"
                >
                  {link.name}
                </a>
              ))}
              <Link to="/login" onClick={handleNavLinkClick} className="text-lg font-medium text-foreground hover:text-neon-blue transition-colors font-mono border border-transparent px-3 py-1 rounded-sm">
                [ LOGIN ]
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;