
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-light-gray pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left md:max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-charcoal tracking-tight mb-6">
            <span className="text-dark-red">Agentic AI</span> Strategic Advisory
          </h1>
          <p className="text-lg md:text-xl text-charcoal/80 mb-8 max-w-2xl mx-auto md:mx-0">
            We help organizations unlock the transformative power of AI
            safely and strategically with expert guidance and implementation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              onClick={scrollToContact}
              className="bg-dark-red hover:bg-dark-red/90 text-white text-lg px-8 py-6"
            >
              Book a Consultation
            </Button>
            <Button
              variant="outline"
              className="border-dark-red text-dark-red hover:bg-dark-red/10 text-lg px-8 py-6"
              onClick={() => {
                const expertiseSection = document.getElementById("expertise");
                if (expertiseSection) {
                  expertiseSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-contain bg-no-repeat bg-right-bottom opacity-10 hidden lg:block" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1677442135436-38fc0f6002e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800')" }}>
      </div>
    </section>
  );
};

export default HeroSection;
