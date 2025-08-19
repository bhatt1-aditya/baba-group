import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // delay between each child
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Choose = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  // Observe when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setAnimate(entry.isIntersecting));
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-16 px-4">
      {/* Heading */}
      <motion.div
        className="text-center mb-10"
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        variants={fadeUp}
      >
        <p className="text-sm text-gray-500 mb-1">Why Choose</p>
        <h2 className="text-3xl md:text-4xl font-serif tracking-wide">
          COREFLEXX?
        </h2>
      </motion.div>

      {/* Features */}
      <motion.div
        className="flex flex-col items-center space-y-8 md:space-y-10 md:max-w-5xl mx-auto text-gray-700 text-sm md:text-base"
        variants={containerVariants}
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
      >
        {/* Row 1 */}
        <motion.div
          className="flex flex-col sm:flex-row items-center sm:space-x-10 space-y-3 sm:space-y-0 text-center sm:text-left"
          variants={fadeUp}
        >
          <span>Soundproof</span>
          <div className="hidden sm:block w-px h-5 bg-gray-300" />
          <span>Safe &amp; Better Air Quality</span>
          <div className="hidden sm:block w-px h-5 bg-gray-300" />
          <span>Warranty</span>
        </motion.div>

        {/* Row 2 */}
        <motion.div
          className="flex flex-col sm:flex-row items-center sm:space-x-10 space-y-3 sm:space-y-0 text-center sm:text-left"
          variants={fadeUp}
        >
          <div className="hidden sm:block w-5 h-px bg-gray-300" />
          <span>Termite Resistant</span>
          <div className="hidden sm:block w-5 h-px bg-gray-300" />
          <span>Eco-friendly</span>
          <div className="hidden sm:block w-5 h-px bg-gray-300" />
        </motion.div>

        {/* Row 3 */}
        <motion.div
          className="flex flex-col sm:flex-row items-center sm:space-x-10 space-y-3 sm:space-y-0 text-center sm:text-left"
          variants={fadeUp}
        >
          <span>Waterproof</span>
          <div className="hidden sm:block w-px h-5 bg-gray-300" />
          <span>Low Cost Installation</span>
          <div className="hidden sm:block w-px h-5 bg-gray-300" />
          <span>Ultimate Durability</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Choose;
