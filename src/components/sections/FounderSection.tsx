import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FounderSection = () => {
  return (
    <section className="py-20 bg-brand-light/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card border-0">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center">
                    <div className="w-44 h-44 bg-white rounded-full flex items-center justify-center">
                      <span className="text-6xl font-bold text-brand-primary">DM</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-brand-primary mb-4">
                    Dominik Maier
                  </h3>
                  <p className="text-xl text-brand-secondary font-semibold mb-4">
                    Gründer & KI-Experte
                  </p>
                  
                  <blockquote className="text-lg italic text-muted-foreground mb-6 border-l-4 border-brand-accent pl-4">
                    "Ich glaube fest daran, dass KI jedem Unternehmen helfen kann – unabhängig von Größe oder Branche. Meine Mission ist es, die Kraft der Automatisierung für den deutschen Mittelstand zugänglich zu machen."
                  </blockquote>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Mit über 5 Jahren Erfahrung in der Automatisierung und als zertifizierter n8n-Experte hat Dominik bereits hunderten von Unternehmen dabei geholfen, ihre Prozesse zu optimieren. Seine Leidenschaft gilt der Verbindung von modernster Technologie mit praktischen Geschäftslösungen.
                  </p>
                  
                  <div className="flex gap-4 justify-center md:justify-start">
                    <Button variant="outline" size="sm">
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm">
                      XING
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;