import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ScratchCard from "react-scratchcard";
import bestsellerImage from "../../../Assets/core_flexx/inspirations/inspiration.png";
import centerImage from "../../../Assets/core_flexx/inspirations/centerImage.png";
import silverCard from "../../../Assets/core_flexx/core_flex/Textured Metallic Surface in Gray.png"

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 1, delay },
  }),
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay },
  }),
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay },
  }),
};

const Inspirations = () => {
  const [animate, setAnimate] = useState(false);
  const [scratchSize, setScratchSize] = useState({ width: 300, height: 300 });
  const imgRef = useRef(null);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setAnimate(entry.isIntersecting)),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Get image natural size after load
  useEffect(() => {
    if (imgRef.current) {
      const img = imgRef.current;
      img.onload = () => {
        setScratchSize({ width: img.width, height: img.height });
      };
    }
  }, []);

  // Scratch complete handler
  const handleComplete = () => {
    console.log("Scratch Completed 🎉");
  };

  return (
    <section ref={sectionRef} className="relative w-full h-screen">
      {/* Background Image */}
      <motion.img
        src={bestsellerImage}
        alt="Best Seller"
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        variants={fadeIn}
        custom={0}
      />

      {/* Foreground Content */}
      <div
        className="absolute md:inset-0 inset-10 flex md:flex-row flex-col items-center justify-between text-white text-center md:px-6 lg:px-10 px-4"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {/* Left Text */}
        <motion.div
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          variants={slideInLeft}
          custom={0.2}
        >
          <p className="text-lg mb-2 font-light">Get Inspired from our</p>
          <h2 className="text-2xl xl:text-4xl font-serif tracking-wide">
            INSPIRATIONS
          </h2>
        </motion.div>

        {/* Center ScratchCard */}
        <motion.div
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          variants={scaleIn}
          custom={0.4}
          className="xl:w-96 w-72"
        >
          <ScratchCard
            width={scratchSize.width}
            height={scratchSize.height}
            image={silverCard} 
            finishPercent={70}
            brushSize={30}
            onComplete={handleComplete}
          >
            <img
              ref={imgRef}
              src={centerImage}
              alt="Center Inspiration"
              className="w-full h-full object-cover rounded-xl"
            />
          </ScratchCard>
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          variants={slideInRight}
          custom={0.6}
        >
          <p className="text-lg mb-2 font-light">Get Inspired from our</p>
          <h2 className="text-2xl xl:text-4xl font-serif tracking-wide">
            INSPIRATIONS
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Inspirations;
