
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "lucide-react";
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailJSInitialized, setEmailJSInitialized] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    // Using a hardcoded service ID for this example
    emailjs.init("public_key"); // Replace with your actual public key
    setEmailJSInitialized(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!emailJSInitialized) {
      toast({
        title: "Error",
        description: "Email service not initialized yet. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_email: "agentic-consulting@gmail.com",
      };

      await emailjs.send(
        "service_id", // Replace with your EmailJS service ID
        "template_id", // Replace with your EmailJS template ID
        templateParams
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Ready to Start?</h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="w-full border-gray-200 focus:border-dark-red focus:ring-dark-red"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="w-full border-gray-200 focus:border-dark-red focus:ring-dark-red"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">
                  How can I help?
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project or questions"
                  required
                  className="w-full border-gray-200 focus:border-dark-red focus:ring-dark-red min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-dark-red hover:bg-dark-red/90 text-white"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          {/* Schedule Call */}
          <div className="flex flex-col items-start justify-center animate-on-scroll">
            <div className="bg-light-gray p-8 rounded-lg w-full">
              <div className="flex items-center mb-6">
                <Calendar className="h-6 w-6 text-dark-red mr-3" />
                <h3 className="text-xl font-semibold text-charcoal">Prefer a conversation?</h3>
              </div>
              <p className="text-charcoal/70 mb-6">
                Schedule a free 30-minute consultation to discuss your specific needs and how I can help your organization leverage AI effectively.
              </p>
              <Button
                onClick={() => window.open("https://calendly.com", "_blank")}
                className="w-full bg-white border border-dark-red text-dark-red hover:bg-light-gray"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
