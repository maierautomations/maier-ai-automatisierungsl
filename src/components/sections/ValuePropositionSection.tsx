import { Shield, TrendingUp, Settings, Users, Cog, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ValuePropositionSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "100% DSGVO-konform",
      description: "Ihre Daten bleiben in Deutschland"
    },
    {
      icon: TrendingUp,
      title: "ROI in 6 Monaten",
      description: "Garantierte Kosteneinsparungen"
    },
    {
      icon: Settings,
      title: "Keine IT-Kenntnisse nötig",
      description: "Wir übernehmen die komplette Technik"
    },
    {
      icon: Users,
      title: "Persönlicher Ansprechpartner",
      description: "Deutsch, lokal, immer erreichbar"
    },
    {
      icon: Cog,
      title: "Bewährte Technologie",
      description: "Basierend auf n8n und führenden KI-Modellen"
    },
    {
      icon: BarChart3,
      title: "Flexible Skalierung",
      description: "Wächst mit Ihrem Unternehmen"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Warum{" "}
            <span className="text-brand-accent">Maier AI?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-secondary/20 transition-colors">
                    <Icon className="w-7 h-7 text-brand-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
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

export default ValuePropositionSection;