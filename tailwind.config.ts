import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom Brand Colors for Tricore Solutions
        "brand-background-primary": "hsl(var(--brand-background-primary))",
        "brand-background-secondary": "hsl(var(--brand-background-secondary))",
        "brand-primary-color": "hsl(var(--brand-primary-color))",
        "brand-secondary-color": "hsl(var(--brand-secondary-color))",
        "brand-accent-color": "hsl(var(--brand-accent-color))",
        "brand-text-light": "hsl(var(--brand-text-light))",
        // Keeping sidebar colors for now, though not directly used on landing page
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.7", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        "brand-glow": { /* New keyframe for brand glow */
          "0%, 100%": {
            "box-shadow": "0 0 5px hsl(var(--brand-primary-color)), 0 0 10px hsl(var(--brand-accent-color))",
          },
          "50%": {
            "box-shadow": "0 0 10px hsl(var(--brand-primary-color)), 0 0 20px hsl(var(--brand-accent-color))",
          },
        },
        "particle-float": {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(10px, -10px) rotate(5deg)" },
          "50%": { transform: "translate(0, 0) rotate(0deg)" },
          "75%": { transform: "translate(-10px, 10px) rotate(-5deg)" },
          "100%": { transform: "translate(0, 0) rotate(0deg)" },
        },
        "background-grid": {
          "0%": { "background-position": "0% 0%" },
          "100%": { "background-position": "100% 100%" },
        },
        "fill-progress": { /* New keyframe for appointment setting progress bar */
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "slide-up": "slide-up 0.8s ease-out forwards",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "brand-glow": "brand-glow 1.5s ease-in-out infinite", /* New animation */
        "particle-float": "particle-float 15s ease-in-out infinite",
        "background-grid": "background-grid 60s linear infinite",
        "fill-progress": "fill-progress 2s ease-out infinite alternate", /* New animation */
      },
      boxShadow: {
        "brand-glow": "0 0 8px hsl(var(--brand-primary-color)), 0 0 15px hsl(var(--brand-accent-color))",
        "brand-glow-md": "0 0 10px hsl(var(--brand-primary-color)/0.5), 0 0 20px hsl(var(--brand-accent-color)/0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;