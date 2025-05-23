
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RegisterProvider from "./pages/RegisterProvider";
import StudentProfile from "./pages/StudentProfile";
import CreateGig from "./pages/CreateGig";
import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";
import GigDetail from "./pages/GigDetail";
import GigEdit from "./pages/GigEdit";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<RegisterProvider />} />
          <Route path="/profile" element={<StudentProfile />} />
          <Route path="/create-gig" element={<CreateGig />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<GigDetail />} />
          <Route path="/gig/:id" element={<GigDetail />} />
          <Route path="/gig/:id/edit" element={<GigEdit />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
