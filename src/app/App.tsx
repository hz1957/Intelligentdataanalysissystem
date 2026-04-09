import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';
import { resolveSlideDeckId, slideDecks } from '@/app/slideDecks';
import { TechnicalSectionShell } from '@/app/components/TechnicalSectionShell';

export default function App() {
  const [deckId, setDeckId] = useState(() =>
    resolveSlideDeckId(window.location.search, import.meta.env.VITE_SLIDE_DECK)
  );
  const [currentSlide, setCurrentSlide] = useState(0);

  const activeDeck = slideDecks[deckId];
  const totalSlides = activeDeck.slides.length;
  const ActiveSlide = activeDeck.slides[currentSlide];
  const isBusinessDeck = deckId === 'business';
  const renderedSlide = isBusinessDeck ? (
    <ActiveSlide />
  ) : (
    <TechnicalSectionShell eyebrow="TECHNICAL DECK">
      <ActiveSlide />
    </TechnicalSectionShell>
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides]);

  useEffect(() => {
    const syncDeckFromLocation = () => {
      setDeckId(resolveSlideDeckId(window.location.search, import.meta.env.VITE_SLIDE_DECK));
    };

    syncDeckFromLocation();
    window.addEventListener('popstate', syncDeckFromLocation);
    return () => window.removeEventListener('popstate', syncDeckFromLocation);
  }, []);

  useEffect(() => {
    setCurrentSlide(0);
  }, [deckId]);

  return (
    <div className="size-full bg-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-slate-900 to-slate-900 flex flex-col text-slate-100">
      {/* Slide Container */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0 overflow-y-auto"
          >
            <div className="min-h-full w-full flex items-center justify-center p-8">
              {renderedSlide}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between p-6">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="p-3 rounded-full transition-colors backdrop-blur-sm bg-white/90 border border-[#d7d2e3] hover:bg-white text-[#282562] shadow-[0_10px_20px_rgba(40,37,98,0.10)]"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-[#282562]" />
        </button>

        {/* Slide Indicators */}
        <div className="flex gap-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group"
              aria-label={`Go to slide ${index + 1}`}
            >
              <Circle
                className={`w-3 h-3 transition-all ${
                  index === currentSlide
                    ? 'fill-[#C8242B] text-[#C8242B] scale-125'
                    : 'text-[#b3acc4] hover:text-[#7a7491]'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="p-3 rounded-full transition-colors backdrop-blur-sm bg-white/90 border border-[#d7d2e3] hover:bg-white text-[#282562] shadow-[0_10px_20px_rgba(40,37,98,0.10)]"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-[#282562]" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute right-6 bottom-24 rounded-full border border-[#d7d2e3] bg-white/92 px-4 py-2 text-right shadow-[0_14px_26px_rgba(40,37,98,0.12)]">
        <div className="text-[#7c7590] text-[10px] font-medium uppercase tracking-[0.18em]">
          {activeDeck.label}
        </div>
        <div className="text-[#282562] text-sm font-semibold">
          {currentSlide + 1} / {totalSlides}
        </div>
      </div>
    </div>
  );
}
