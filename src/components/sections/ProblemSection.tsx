import { Clock, Users, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProblemSection = () => {
  const painPoints = [
    {
      icon: Clock,
      title: "Stunden verschwendet mit repetitiven Aufgaben",
      description: "Ihre wertvollen Mitarbeiter verbringen täglich Stunden mit Routinearbeiten, die automatisiert werden könnten."
    },
    {
      icon: Users, 
      title: "Mitarbeiter überlastet durch Routinearbeit",
      description: "Qualifizierte Fachkräfte sind frustriert, weil sie sich nicht auf wertschöpfende Tätigkeiten konzentrieren können."
    },
    {
      icon: TrendingDown,
      title: "Wettbewerber ziehen mit KI-Lösungen vorbei", 
      description: "Während Sie manuell arbeiten, nutzen Ihre Konkurrenten bereits KI für Effizienzvorteile und Kosteneinsparungen."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Verlieren Sie täglich Geld durch{" "}
            <span className="text-brand-accent">manuelle Prozesse?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-accent/20 transition-colors">
                    <Icon className="w-8 h-8 text-brand-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-primary mb-4">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-block bg-brand-light p-6 rounded-xl">
            <p className="text-lg font-semibold text-brand-primary">
              <span className="text-3xl font-bold text-brand-accent">67%</span> der deutschen KMUs haben noch keine KI im Einsatz
            </p>
            <p className="text-muted-foreground mt-2">– gehören Sie dazu?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;