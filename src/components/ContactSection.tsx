"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { showSuccess, showError } from "@/utils/toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().regex(/^(\+27|0)[6-9][0-9]{8}$/, { message: "Invalid South African phone number." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // In a real application, you would send this data to a backend.
    // For now, we'll just show a toast message.
    showSuccess("Your message has been sent! We'll get back to you soon.");
    form.reset();
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-navy-deep mb-12 animate-fade-in-up font-['Outfit',_sans-serif]">
          Get in Touch
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up delay-200 font-['Inter',_sans-serif]">
          Call us, send a message, or find us on the map — we’ll respond fast.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Form */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in-up delay-300">
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-blue-primary" />
                <a href="tel:+27795174640" className="text-lg text-foreground hover:text-blue-primary transition-colors font-['Inter',_sans-serif]">
                  +27 79 517 4640
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-blue-primary" />
                <a href="mailto:info@jeffsplumber.co.za" className="text-lg text-foreground hover:text-blue-primary transition-colors font-['Inter',_sans-serif]">
                  info@jeffsplumber.co.za
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-blue-primary" />
                <span className="text-lg text-foreground font-['Inter',_sans-serif]">Johannesburg, South Africa</span>
              </div>
            </div>

            <p className="text-xl font-semibold text-navy-deep mb-4 font-['Outfit',_sans-serif]">Operating Hours: Open 24/7</p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md space-y-6 bg-gray-light dark:bg-gray-900 p-8 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold text-navy-deep mb-4 font-['Outfit',_sans-serif]">Request a Quote</h3>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-navy-deep">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="rounded-md border-gray-300 focus:border-blue-primary focus:ring-blue-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-navy-deep">Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., +27795174640" {...field} className="rounded-md border-gray-300 focus:border-blue-primary focus:ring-blue-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-navy-deep">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your plumbing needs..." rows={5} {...field} className="rounded-md border-gray-300 focus:border-blue-primary focus:ring-blue-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-blue-primary hover:bg-blue-primary/90 text-white font-bold text-lg rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>

          {/* Google Map */}
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-xl animate-fade-in-up delay-400">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229107.00000000002!2d27.870000000000004!3d-26.171000000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x23100e74e94526c3!2sJohannesburg!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Johannesburg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;