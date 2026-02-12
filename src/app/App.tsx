import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';
import { Slide1 } from '@/app/components/Slide1';
import { Slide2 } from '@/app/components/Slide2';
import { Slide3 } from '@/app/components/Slide3';
import { Slide4 } from '@/app/components/Slide4';
import { Slide5 } from '@/app/components/Slide5';
import { Slide6 } from '@/app/components/Slide6';
import { Slide7 } from '@/app/components/Slide7';
import { Slide8 } from '@/app/components/Slide8';
import { Slide9 } from '@/app/components/Slide9';
import { Slide10 } from '@/app/components/Slide10';
import { SlideSequence } from '@/app/components/SlideSequence';
import { SlideConversation } from '@/app/components/SlideConversation';

import { SlideContext } from '@/app/components/SlideContext';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 13;

  const slides = [
    <Slide1 key="slide-1" />,
    <Slide2 key="slide-2" />,
    <Slide3 key="slide-3" />,
    <Slide4 key="slide-4" />,
    <SlideConversation key="slide-conversation" />,
    <Slide5 key="slide-5" />,
    <Slide6 key="slide-6" />,
    <Slide7 key="slide-7" />,
    <SlideContext key="slide-context" />,
    <Slide8 key="slide-8" />,
    <SlideSequence key="slide-sequence" />,
    <Slide9 key="slide-9" />,
    <Slide10 key="slide-10" />
  ];

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
  }, []);

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
              {slides[currentSlide]}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between p-6">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
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
                className={`w-3 h-3 transition-all ${index === currentSlide
                  ? 'fill-white text-white scale-125'
                  : 'text-white/40 hover:text-white/60'
                  }`}
              />
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 text-white/60 text-sm font-medium">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
}