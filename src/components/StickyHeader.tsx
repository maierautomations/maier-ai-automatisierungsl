import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface StickyHeaderProps {
  onCtaClick: () => void;
}

const StickyHeader = ({ onCtaClick }: StickyHeaderProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-brand-light animate-slide-down">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-brand-primary">Maier AI</h1>
          <Button
            variant="cta"
            onClick={onCtaClick}
            className="px-6 py-2"
          >
            Analyse starten
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;