
import React from "react";
import { 
  Briefcase, 
  Shield, 
  FileText, 
  Users 
} from "lucide-react";

const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      icon: <Briefcase className="h-8 w-8 text-charcoal" />,
      title: "AI Strategy & Roadmapping",
      description: "Develop comprehensive AI strategies aligned with your business goals and market positioning."
    },
    {
      icon: <Shield className="h-8 w-8 text-charcoal" />,
      title: "Responsible AI Deployment",
      description: "Implement AI systems with robust safety mechanisms, ethical considerations, and fail-safes."
    },
    {
      icon: <FileText className="h-8 w-8 text-charcoal" />,
      title: "AI Governance and Safety Audits",
      description: "Evaluate existing AI systems for risks, compliance issues, and improvement opportunities."
    },
    {
      icon: <Users className="h-8 w-8 text-charcoal" />,
      title: "Cross-Industry Applications",
      description: "Specialized experience across Finance, Healthcare, Technology, and other key sectors."
    }
  ];

  return (
    <section id="expertise" className="bg-light-gray py-20">
      <div className="section-container">
        <h2 className="section-title text-center mb-16">Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-start animate-on-scroll"
            >
              <div className="mb-5 p-3 bg-light-gray rounded-md">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">{area.title}</h3>
              <p className="text-charcoal/70">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
