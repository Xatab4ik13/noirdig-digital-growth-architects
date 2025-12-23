import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/hooks/useTheme";

// Pages
import Index from "./pages/Index";
import Services from "./pages/Services";
import Websites from "./pages/services/Websites";
import TelegramBots from "./pages/services/TelegramBots";
import Support from "./pages/services/Support";
import Ads from "./pages/services/Ads";
import Portfolio from "./pages/Portfolio";
import CaseStudy from "./pages/CaseStudy";

import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";

import Contacts from "./pages/Contacts";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Consent from "./pages/Consent";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/websites" element={<Websites />} />
              <Route path="/services/telegram-bots" element={<TelegramBots />} />
              <Route path="/services/support" element={<Support />} />
              <Route path="/services/ads" element={<Ads />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:caseId" element={<CaseStudy />} />
              
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:articleSlug" element={<BlogArticle />} />
              
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/consent" element={<Consent />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
