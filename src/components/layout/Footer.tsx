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
    <footer className="bg-navy-deep text-white py-10 rounded-t-[3rem] shadow-inner">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Business Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 font-['Outfit',_sans-serif]">Jeff's Plumber</h3>
          <p className="text-sm mb-2 font-['Inter',_sans-serif]">Reliable plumbing services you can trust.</p>
          <p className="text-sm font-['Inter',_sans-serif]">Johannesburg, South Africa</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 font-['Outfit',_sans-serif]">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm hover:text-orange-accent transition-colors animate-underline-grow font-['Inter',_sans-serif]">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 font-['Outfit',_sans-serif]">Follow Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-white hover:text-orange-accent transition-colors"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 border-t border-white/20 mt-8 pt-8 text-center text-sm font-['Inter',_sans-serif]">
        <p>&copy; 2025 Jeff’s Plumber. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;