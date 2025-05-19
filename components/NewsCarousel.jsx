/* src/components/NewsCarousel.js */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cardsData = [
  {
    title: 'Quantum Computing',
    description: 'Explore the future of computing with quantum technology, paving the way for unprecedented computational power.',
  },
  {
    title: 'Neural Networks',
    description: 'Advanced AI systems inspired by the human brain, revolutionizing machine learning and data processing.',
  },
];

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const moveRight = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % cardsData.length);
  };

  const moveLeft = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      moveRight();
    } else {
      moveLeft();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative" onWheel={handleWheel}>
      <div className="w-full max-w-2xl relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 text-center shadow-[0_0_20px_rgba(0,255,255,0.3)]"
          >
            <h2 className="text-4xl text-cyan-400 shadow-[0_0_10px_#00ddeb] mb-6">
              {cardsData[currentIndex].title}
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              {cardsData[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={moveLeft}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400 text-4xl hover:shadow-[0_0_15px_#00ddeb] transition-all duration-300"
      >
        ‹
      </button>
      <button
        onClick={moveRight}
        className="absolute right-5 top-1/2 -translate-y-1/2 text-cyan-400 text-4xl hover:shadow-[0_0_15px_#00ddeb] transition-all duration-300"
      >
        ›
      </button>
    </div>
  );
};

export default NewsCarousel;
