'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-card relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4 text-balance">
            Client Testimonials
          </h2>
          <div className="w-12 h-1 bg-card-foreground mb-12" />
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="bg-background rounded-lg p-8 md:p-12 border border-border min-h-[300px] flex flex-col justify-between"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <Quote className="w-12 h-12 text-card-foreground/30 mb-6" />
                  <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 italic">
                    "{TESTIMONIALS[currentIndex].text}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <p className="font-semibold text-foreground">
                      {TESTIMONIALS[currentIndex].author}
                    </p>
                    <p className="text-sm text-foreground/60">
                      {TESTIMONIALS[currentIndex].title}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {Array.from({ length: TESTIMONIALS.length }).map((_, i) => (
                      <motion.button
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i === currentIndex ? 'bg-foreground w-8' : 'bg-foreground/30'
                        }`}
                        onClick={() => goToSlide(i)}
                        whileHover={{ scale: 1.2 }}
                        aria-label={`Go to testimonial ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <motion.button
              onClick={goToPrevious}
              className="p-3 rounded-lg border border-border hover:border-foreground/50 transition-colors text-foreground hover:text-foreground"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </motion.button>

            <div className="flex items-center gap-2">
              <span className="text-sm text-foreground/60">
                {currentIndex + 1} / {TESTIMONIALS.length}
              </span>
            </div>

            <motion.button
              onClick={goToNext}
              className="p-3 rounded-lg border border-border hover:border-foreground/50 transition-colors text-foreground hover:text-foreground"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
