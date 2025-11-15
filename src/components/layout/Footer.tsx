"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Business Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Jeff's Plumber</h3>
          <p className="text-sm mb-2">Reliable plumbing services you can trust.</p>
          <p className="text-sm">Johannesburg, South Africa</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="hover:text-accent-foreground transition-colors"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
        <p>&copy; 2025 Jeff’s Plumber. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;