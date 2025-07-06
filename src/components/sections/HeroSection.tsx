import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

interface HeroSectionProps {
  onCtaClick: () => void;
  onExamplesClick: () => void;
}

const HeroSection = ({ onCtaClick, onExamplesClick }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-brand-primary mb-6 leading-tight">
            Entdecken Sie das KI-Potenzial{" "}
            <span className="text-brand-accent">Ihres Unternehmens</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Maßgeschneiderte KI-Agenten und Automatisierungen, die Ihre Prozesse revolutionieren – ohne IT-Kenntnisse
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="hero"
              size="lg"
              onClick={onCtaClick}
              className="px-8 py-4"
            >
              Jetzt KI-Potenzial entdecken
            </Button>
            
            <Button
              variant="cta-secondary"
              size="lg"
              onClick={onExamplesClick}
              className="px-8 py-4"
            >
              Beispiele ansehen
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-brand-primary">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand-secondary" />
              <span className="font-medium">100% DSGVO-konform</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand-secondary" />
              <span className="font-medium">Deutsche Server</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand-secondary" />
              <span className="font-medium">Persönliche Betreuung</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;