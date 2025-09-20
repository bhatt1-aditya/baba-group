import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const slides = [
  { image: "../../../Assets/core_flexx/core_flex/hero1.png", title: "LUXUS", subtitle: "Popular Picks" },
  { image: "../../../Assets/core_flexx/core_flex/hero1.png", title: "ELEGANCE", subtitle: "New Arrival" },
  { image: "../../../Assets/core_flexx/core_flex/hero1.png", title: "MODERN", subtitle: "Exclusive Collection" },
  { image: "../../../Assets/core_flexx/core_flex/hero1.png", title: "SLEEK", subtitle: "Premium Selection" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic image change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % slides.length);
  };

  return (
    <div className="w-full h-screen relative overflow-hidden bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="w-full h-full bg-cover bg-center absolute inset-0"
          style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black/30"></div>

          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-serif text-white drop-shadow-lg"
              variants={fadeUp}
            >
              {slides[currentIndex].title}
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-200 mt-3 tracking-wide"
              variants={fadeUp}
            >
              {slides[currentIndex].subtitle}
            </motion.p>
          </motion.div>

          {/* Circular CTA at bottom */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 md:w-40 md:h-40 cursor-pointer group"
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
          >
            <motion.svg
              viewBox="0 0 200 200"
              className="w-full h-full absolute"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                />
              </defs>
              <text
                className="fill-gray-900 text-[11px] md:text-[13px] tracking-[3px]"
                style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
              >
                <textPath href="#circlePath" startOffset="0%">
                  EXPLORE MORE • PREMIUM COLLECTION • EXPLORE MORE •
                </textPath>
              </text>
            </motion.svg>

            <motion.div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-900 flex items-center justify-center shadow-lg transition group-hover:bg-gray-800">
                <FiArrowRight className="text-white text-xl" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Hero;
