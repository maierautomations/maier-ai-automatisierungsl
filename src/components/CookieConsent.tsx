import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-slide-up">
      <Card className="max-w-4xl mx-auto shadow-hero border-0 bg-white">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-brand-primary mb-2">
                Cookie-Einstellungen
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Wir verwenden Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten und unsere Website zu verbessern. 
                Durch die weitere Nutzung stimmen Sie der Verwendung von Cookies zu.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="cta"
                  size="sm"
                  onClick={handleAccept}
                >
                  Akzeptieren
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDecline}
                >
                  Ablehnen
                </Button>
                <Button
                  variant="link"
                  size="sm"
                  className="text-xs"
                  asChild
                >
                  <a href="/datenschutz">Mehr erfahren</a>
                </Button>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDecline}
              className="p-1 h-auto"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;