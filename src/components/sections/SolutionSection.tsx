import { Shield, Zap, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SolutionSection = () => {
  const differentiators = [
    {
      icon: Shield,
      title: "Vollständig betreut",
      description: "Keine Technik-Kopfschmerzen"
    },
    {
      icon: Zap,
      title: "Schnelle Umsetzung", 
      description: "Erste Ergebnisse in 4 Wochen"
    },
    {
      icon: Target,
      title: "Garantierter ROI",
      description: "Oder Geld zurück"
    }
  ];

  return (
    <section className="py-20 bg-brand-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            KI-Automatisierung speziell für den{" "}
            <span className="text-brand-accent">deutschen Mittelstand</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Wir verstehen die Herausforderungen mittelständischer Unternehmen und überbrücken die Lücke zwischen komplexer KI-Technologie und praktischen Geschäftslösungen. Unsere maßgeschneiderten Automatisierungen integrieren sich nahtlos in Ihre bestehenden Prozesse.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-secondary/20 transition-colors">
                    <Icon className="w-10 h-10 text-brand-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;