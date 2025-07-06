import { Bot, Workflow, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "Intelligente KI-Agenten",
      features: [
        "Kundenservice-Automatisierung",
        "Vertriebsunterstützung", 
        "Datenanalyse & Reporting"
      ]
    },
    {
      icon: Workflow,
      title: "n8n Workflow-Automatisierung",
      features: [
        "ERP-Integration",
        "E-Mail-Automatisierung",
        "Dokumentenverarbeitung"
      ]
    },
    {
      icon: Users,
      title: "Individuelle KI-Beratung",
      features: [
        "Potenzialanalyse",
        "Strategieentwicklung",
        "Change Management"
      ]
    }
  ];

  return (
    <section className="py-20 bg-brand-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Unsere{" "}
            <span className="text-brand-accent">KI-Lösungen</span> 
            {" "}für Ihren Erfolg
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 shadow-sm h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-secondary/20 transition-colors">
                    <Icon className="w-10 h-10 text-brand-secondary" />
                  </div>
                  <CardTitle className="text-2xl text-brand-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-brand-accent rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;