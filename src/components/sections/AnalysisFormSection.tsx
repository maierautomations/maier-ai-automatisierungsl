import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AnalysisFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      website: formData.get('website'),
      email: formData.get('email'),
      name: formData.get('name'),
      additionalInfo: formData.get('additionalInfo'),
      timestamp: new Date().toISOString()
    };

    try {
      // Replace with actual webhook URL
      await fetch('https://webhook.site/YOUR-WEBHOOK-URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      toast({
        title: "Vielen Dank!",
        description: "Wir melden uns innerhalb von 24 Stunden mit Ihrer kostenlosen Analyse."
      });

      e.currentTarget.reset();
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="analysis-form" className="py-20 bg-brand-light/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
              Entdecken Sie Ihr{" "}
              <span className="text-brand-accent">KI-Potenzial</span>
            </h2>
            <h3 className="text-2xl text-brand-primary mb-4">
              Kostenlos & Unverbindlich
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Lassen Sie unsere KI Ihr Unternehmen analysieren und erhalten Sie einen personalisierten Automatisierungsplan
            </p>
          </div>

          <Card className="shadow-hero border-0">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-brand-primary font-medium">
                      Ihre Unternehmenswebseite *
                    </Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="https://ihr-unternehmen.de"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-brand-primary font-medium">
                      Ihre E-Mail-Adresse *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ihre.email@unternehmen.de"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-brand-primary font-medium">
                    Ihr Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Max Mustermann"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo" className="text-brand-primary font-medium">
                    Was möchten Sie automatisieren? (optional)
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    placeholder="Beschreiben Sie Ihre größten Herausforderungen oder Wünsche..."
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-12 py-4 text-lg"
                  >
                    {isSubmitting ? "Wird gesendet..." : "Kostenlose Analyse anfordern"}
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-brand-secondary" />
                  <span>Ihre Daten sind bei uns sicher. 100% DSGVO-konform.</span>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AnalysisFormSection;