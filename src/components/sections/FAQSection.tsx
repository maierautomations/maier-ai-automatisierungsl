import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Wie lange dauert die Umsetzung?",
      answer: "Die Umsetzung variiert je nach Komplexität des Projekts. Einfache Automatisierungen können bereits in 2-4 Wochen implementiert werden, während umfangreichere KI-Agenten 6-8 Wochen benötigen. Sie erhalten bereits nach der ersten Woche erste Zwischenergebnisse."
    },
    {
      question: "Welche Kosten entstehen?",
      answer: "Unsere Preise sind transparent und richten sich nach dem Umfang Ihrer Automatisierung. Einfache Workflows starten bei 2.500€, während komplexe KI-Agenten bei 5.000€ beginnen. Die kostenlose Analyse gibt Ihnen eine genaue Kostenschätzung mit garantiertem ROI."
    },
    {
      question: "Sind meine Daten sicher?",
      answer: "Absolut. Wir sind 100% DSGVO-konform und alle Daten werden ausschließlich auf deutschen Servern verarbeitet. Ihre Unternehmensdaten verlassen niemals die EU und wir implementieren höchste Sicherheitsstandards in alle unsere Lösungen."
    },
    {
      question: "Was passiert nach der kostenlosen Analyse?",
      answer: "Nach der Analyse erhalten Sie innerhalb von 24 Stunden einen detaillierten Bericht mit konkreten Automatisierungsvorschlägen, ROI-Berechnungen und einem Umsetzungsplan. Es gibt keine Verpflichtung - Sie entscheiden, ob und wie Sie fortfahren möchten."
    },
    {
      question: "Benötige ich technisches Vorwissen?",
      answer: "Nein, überhaupt nicht. Wir übernehmen die komplette technische Umsetzung und Betreuung. Sie müssen sich nur um Ihr Kerngeschäft kümmern - um alles andere kümmern wir uns. Selbst die Schulung Ihrer Mitarbeiter ist inklusive."
    }
  ];

  return (
    <section className="py-20 bg-brand-light/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
              Häufig gestellte{" "}
              <span className="text-brand-accent">Fragen</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border-0 px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-primary hover:text-brand-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;