import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScratchCard from "react-scratchcard";
import bestsellerImage from "../../../Assets/core_flexx/inspirations/inspiration.png";
import centerImage1 from "../../../Assets/core_flexx/inspirations/centerImage.png";
import silverCard from "../../../Assets/core_flexx/core_flex/Textured Metallic Surface in Gray.png";

// Add multiple images here if needed
const centerImages = [centerImage1];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 1.2, delay },
  }),
};

const slide = (direction = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -80 : 80 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay, ease: "easeOut" },
  }),
});

const floatAnimation = {
  hidden: { y: 0 },
  visible: {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const Inspirations = () => {
  const [animate, setAnimate] = useState(false);
  const [scratchSize, setScratchSize] = useState({ width: 320, height: 320 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imgRef = useRef(null);
  const sectionRef = useRef(null);

  // Auto-change images (if multiple provided)
  useEffect(() => {
    if (centerImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % centerImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, []);

  // Trigger animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setAnimate(entry.isIntersecting)),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Update scratch size dynamically when image loads
  useEffect(() => {
    if (imgRef.current) {
      const img = imgRef.current;
      img.onload = () => {
        setScratchSize({ width: img.width, height: img.height });
      };
    }
  }, []);

  const handleComplete = () => {
    console.log("Scratch Completed 🎉");
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden"
    >
      {/* Background with dark overlay */}
      <motion.div
        className="absolute inset-0"
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <img
          src={bestsellerImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </motion.div>

      {/* Floating ambient glow circles */}
      <motion.div
        className="absolute w-64 h-64 bg-gray-600/20 rounded-full blur-3xl top-10 left-10"
        variants={floatAnimation}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="absolute w-72 h-72 bg-gray-500/10 rounded-full blur-3xl bottom-10 right-10"
        variants={floatAnimation}
        initial="hidden"
        animate="visible"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-16 px-6">
        {/* Left Section */}
        <motion.div
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          variants={slide("left")}
          custom={0.2}
          className="max-w-sm text-center md:text-left"
        >
          <p className="text-gray-300 text-lg mb-2 tracking-wide">
            Discover the Future of
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            INSPIRATIONS
          </h2>
          <p className="text-gray-400 mt-4 text-base leading-relaxed">
            Unlock premium flooring ideas and modern designs to transform your space into a masterpiece.
          </p>
        </motion.div>

        {/* Center ScratchCard */}
        <motion.div
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          variants={fadeIn}
          custom={0.4}
          className="relative"
        >
          <div className="relative p-5 rounded-2xl bg-gray-800/50 border border-gray-700 shadow-2xl backdrop-blur-md">
            <ScratchCard
              width={scratchSize.width}
              height={scratchSize.height}
              image={silverCard}
              finishPercent={70}
              brushSize={25}
              onComplete={handleComplete}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={centerImages[currentImageIndex]}
                  ref={imgRef}
                  src={centerImages[currentImageIndex]}
                  alt="Inspiration Reveal"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                />
              </AnimatePresence>
            </ScratchCard>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gray-900 px-4 py-2 rounded-full text-gray-300 text-sm shadow-md"
          >
            Scratch to Reveal Inspiration
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          variants={slide("right")}
          custom={0.6}
          className="max-w-sm text-center md:text-left"
        >
          <p className="text-gray-300 text-lg mb-2 tracking-wide">
            Elevate Your Design
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            FLOORREX
          </h2>
          <p className="text-gray-400 mt-4 text-base leading-relaxed">
            From luxury spaces to minimalist interiors, we bring innovation and
            beauty together through cutting-edge design inspirations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Inspirations;
