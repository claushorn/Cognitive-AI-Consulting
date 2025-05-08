
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-light-gray rounded-full opacity-30"></div>
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-light-gray rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 right-1/3 w-[30rem] h-[30rem] bg-light-gray rounded-full opacity-25"></div>
        
        {/* Grid dots pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-charcoal rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-container z-10 pt-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-blue mb-6 leading-tight animate-fade-in">
            Transform Your Business with Safe, Strategic AI
          </h1>
          <p className="text-lg md:text-xl text-charcoal/80 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Advisory and implementation services from a world-class AI expert. 
            Navigate the future with confidence and clarity.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              onClick={scrollToContact}
              className="bg-dark-red hover:bg-dark-red/90 text-white text-lg px-8 py-6"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
