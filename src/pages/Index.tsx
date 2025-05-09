
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import { setupAnimations } from "@/utils/animations";

const Index = () => {
  useEffect(() => {
    // Update document title and meta description for SEO
    document.title = "Agentic AI Consulting | Strategic AI Advisory Services";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert AI consulting services helping organizations unlock the power of AI safely and strategically. Specialized in AI strategy, agent-based AI solutions, and interpretable AI.');
    }
    
    // Initialize scroll animations
    setupAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
