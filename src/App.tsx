import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import PromptLibrary from "./pages/PromptLibrary";
import EarningsCalculator from "./pages/EarningsCalculator";
import UnderwritingRisk from "./pages/UnderwritingRisk";
import AlphaAnalytics from "./pages/AlphaAnalytics";
import DataExtractor from "./pages/DataExtractor";
import NotFound from "./pages/NotFound";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* IMPORTANT: Remove basename for a custom domain */}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prompts" element={<PromptLibrary />} />
          <Route path="/earnings-calculator" element={<EarningsCalculator />} />
          <Route path="/underwriting-risk" element={<UnderwritingRisk />} />
          <Route path="/alpha-analytics" element={<AlphaAnalytics />} />
          <Route path="/data-extractor" element={<DataExtractor />} />
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

