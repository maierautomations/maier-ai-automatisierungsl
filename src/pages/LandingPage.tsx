import { useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ServicesSection from "@/components/sections/ServicesSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import AnalysisFormSection from "@/components/sections/AnalysisFormSection";
import ValuePropositionSection from "@/components/sections/ValuePropositionSection";
import FounderSection from "@/components/sections/FounderSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/sections/Footer";
import StickyHeader from "@/components/StickyHeader";
import CookieConsent from "@/components/CookieConsent";

const LandingPage = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('analysis-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExamples = () => {
    const examplesElement = document.getElementById('examples');
    if (examplesElement) {
      examplesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <StickyHeader onCtaClick={scrollToForm} />
      
      <HeroSection 
        onCtaClick={scrollToForm} 
        onExamplesClick={scrollToExamples} 
      />
      
      <ProblemSection />
      
      <SolutionSection />
      
      <HowItWorksSection />
      
      <div id="services">
        <ServicesSection />
      </div>
      
      <UseCasesSection />
      
      <AnalysisFormSection />
      
      <ValuePropositionSection />
      
      <FounderSection />
      
      <TestimonialsSection />
      
      <FAQSection />
      
      <FinalCTASection onCtaClick={scrollToForm} />
      
      <Footer />
      
      <CookieConsent />
    </div>
  );
};

export default LandingPage;