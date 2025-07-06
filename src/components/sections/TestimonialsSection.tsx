import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      company: "Müller GmbH",
      industry: "Maschinenbau",
      result: "40% Zeitersparnis bei der Angebotserstellung",
      quote: "Die KI-Automatisierung von Maier AI hat unsere Angebotserstellung revolutioniert. Was früher Stunden dauerte, erledigen wir jetzt in wenigen Minuten.",
      author: "Thomas Müller, Geschäftsführer",
      rating: 5
    },
    {
      company: "Digital Solutions AG", 
      industry: "IT-Dienstleistungen",
      result: "60% weniger manuelle Supportanfragen",
      quote: "Dank der intelligenten KI-Agenten können sich unsere Mitarbeiter auf komplexe Projekte konzentrieren, während Routineanfragen automatisch bearbeitet werden.",
      author: "Sarah Schmidt, Projektleiterin",
      rating: 5
    },
    {
      company: "Handwerk Plus e.K.",
      industry: "Handwerk",
      result: "3 Stunden täglich eingespart",
      quote: "Als kleinerer Betrieb hatten wir Bedenken wegen der Komplexität. Aber Dominik und sein Team haben alles perfekt umgesetzt – ohne dass wir uns um die Technik kümmern mussten.",
      author: "Michael Weber, Inhaber",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Was unsere{" "}
            <span className="text-brand-accent">Kunden sagen</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 shadow-sm h-full">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />
                  ))}
                </div>
                
                <div className="mb-4">
                  <h4 className="font-bold text-brand-primary text-lg">{testimonial.company}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.industry}</p>
                </div>
                
                <div className="bg-brand-secondary/10 p-3 rounded-lg mb-4">
                  <p className="font-semibold text-brand-secondary text-sm">
                    {testimonial.result}
                  </p>
                </div>
                
                <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <p className="font-medium text-brand-primary text-sm">
                  — {testimonial.author}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;