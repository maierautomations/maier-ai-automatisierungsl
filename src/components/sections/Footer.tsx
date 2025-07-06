import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Company */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Maier AI</h3>
            <p className="text-white/80 mb-6 max-w-md">
              Ihr Partner für maßgeschneiderte KI-Automatisierung. Wir bringen deutsche Unternehmen in die Zukunft der Arbeit.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-brand-primary">
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-brand-primary">
                XING
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#examples" className="hover:text-white transition-colors">
                  Beispiele
                </a>
              </li>
              <li>
                <a href="#analysis-form" className="hover:text-white transition-colors">
                  Kostenlose Analyse
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Unsere Services
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt & Rechtliches</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="/impressum" className="hover:text-white transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="hover:text-white transition-colors">
                  Datenschutzerklärung
                </a>
              </li>
              <li>
                <a href="mailto:info@maier-ai.de" className="hover:text-white transition-colors">
                  info@maier-ai.de
                </a>
              </li>
              <li>
                <a href="tel:+49XXXXXXXXX" className="hover:text-white transition-colors">
                  +49 XXX XXXXXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>&copy; 2024 Maier AI. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;