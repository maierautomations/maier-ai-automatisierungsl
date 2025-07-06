import { Search, FileText, Cog, Headphones } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Kostenlose Analyse",
      description: "Wir analysieren Ihr Unternehmen und identifizieren Automatisierungspotenziale"
    },
    {
      icon: FileText,
      title: "Maßgeschneidertes Konzept",
      description: "Sie erhalten einen konkreten Fahrplan mit ROI-Berechnung"
    },
    {
      icon: Cog,
      title: "Professionelle Umsetzung",
      description: "Wir entwickeln und implementieren Ihre KI-Agenten"
    },
    {
      icon: Headphones,
      title: "Kontinuierliche Betreuung",
      description: "Wir optimieren und betreuen Ihre Lösungen langfristig"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Ihr Weg zur{" "}
            <span className="text-brand-accent">KI-gestützten Effizienz</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-brand-primary/20 z-0" />
                )}
                
                <div className="relative bg-white p-8 rounded-xl shadow-sm hover:shadow-card transition-all duration-300 border border-brand-light">
                  <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center mb-6 font-bold text-lg">
                    {index + 1}
                  </div>
                  
                  <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-secondary/20 transition-colors">
                    <Icon className="w-8 h-8 text-brand-secondary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-brand-primary mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;