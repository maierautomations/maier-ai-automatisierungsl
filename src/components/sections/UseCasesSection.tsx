import { ShoppingCart, Hammer, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const UseCasesSection = () => {
  const useCases = [
    {
      icon: ShoppingCart,
      industry: "E-Commerce",
      result: "90% weniger manuelle Bestellbearbeitung",
      description: "Automatisierte Bestellverarbeitung, Lagerbestandsüberwachung und Kundenservice durch intelligente KI-Agenten."
    },
    {
      icon: Hammer,
      industry: "Handwerk", 
      result: "5 Stunden pro Woche eingespart bei Angebotserstellung",
      description: "Automatisierte Kostenkalkulation und Angebotserstellung basierend auf Projektanforderungen und Materialpreisen."
    },
    {
      icon: BarChart3,
      industry: "Beratung",
      result: "3x schnellere Reporterstellung für Kunden", 
      description: "Automatisierte Datensammlung, Analyse und Berichterstellung mit personalisierten Insights für jeden Kunden."
    }
  ];

  return (
    <section id="examples" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            KI-Automatisierung{" "}
            <span className="text-brand-accent">in der Praxis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sehen Sie, wie Unternehmen aus verschiedenen Branchen bereits von unseren KI-Lösungen profitieren
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 shadow-sm h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-brand-primary mb-2">
                    {useCase.industry}
                  </h3>
                  
                  <div className="bg-brand-secondary/10 p-4 rounded-lg mb-4">
                    <p className="text-lg font-semibold text-brand-secondary">
                      {useCase.result}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
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

export default UseCasesSection;