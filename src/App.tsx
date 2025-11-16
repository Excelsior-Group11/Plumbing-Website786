import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import NotFound from "./pages/NotFound";
import React from "react";

const queryClient = new QueryClient(); // Keep for potential re-introduction

const App = () => (
  <React.Fragment>
    {/* Temporarily removed QueryClientProvider, Toaster, and Sonner to isolate the error */}
    <TooltipProvider> {/* TooltipProvider expects a single child */}
      <BrowserRouter> {/* BrowserRouter expects a single child */}
        <Routes> {/* Routes expects multiple Route children */}
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    {/* Toaster and Sonner will be re-added once the core issue is resolved */}
    <Toaster />
    <Sonner />
  </React.Fragment>
);

export default App;