import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import NotFound from "./pages/NotFound";
import React from "react"; // Ensure React is imported for React.Fragment

const queryClient = new QueryClient();

const App = () => (
  <React.Fragment> {/* This Fragment ensures App returns a single root element */}
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
    {/* Toaster and Sonner are global components and can be siblings to the main app structure within the Fragment */}
    <Toaster />
    <Sonner />
  </React.Fragment>
);

export default App;