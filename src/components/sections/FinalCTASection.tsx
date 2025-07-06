import { Button } from "@/components/ui/button";

interface FinalCTASectionProps {
  onCtaClick: () => void;
}

const FinalCTASection = ({ onCtaClick }: FinalCTASectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Bereit für die{" "}
            <span className="text-brand-accent">Zukunft?</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90">
            Schließen Sie sich den erfolgreichen Unternehmen an, die bereits mit KI arbeiten
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button
              variant="secondary"
              size="lg"
              onClick={onCtaClick}
              className="px-12 py-4 text-lg bg-white text-brand-primary hover:bg-white/90 font-semibold"
            >
              Jetzt starten
            </Button>
            
            <div className="text-center">
              <p className="text-lg mb-2">Oder rufen Sie uns an:</p>
              <a 
                href="tel:+49XXXXXXXXX" 
                className="text-2xl font-bold hover:text-brand-accent transition-colors"
              >
                +49 XXX XXXXXXX
              </a>
            </div>
          </div>

          <div className="text-center opacity-75">
            <p className="text-lg">
              Kostenlose Beratung • Keine Verpflichtung • Sofortige Antwort
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;