import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../../Assets/core_flexx/core_flex/hero1.png";
import img2 from "../../../Assets/core_flexx/core_flex/hero1.png";
import img3 from "../../../Assets/core_flexx/best_seller/seller.png";
import img4 from "../../../Assets/core_flexx/inspirations/centerImage.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const BestSeller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  const images = [img1, img2, img3, img4];

  // Auto-change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Animate on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setAnimate(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Background images with animation */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Best Seller Background"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0.2}
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <p className="text-lg mb-2 font-light tracking-wider">Our</p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-wide drop-shadow-lg"
            variants={fadeUp}
            custom={0.4}
          >
            BESTSELLERS
          </motion.h2>
        </motion.div>

        {/* Product Code */}
        <motion.p
          className="mt-8 text-5xl md:text-6xl font-[cursive] drop-shadow-2xl"
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0.6}
          style={{ fontFamily: "Comforter, cursive" }}
        >
          CFX-411
        </motion.p>

        {/* Scrolling Text Marquee */}
        <div className="absolute bottom-8 w-full overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex text-center font-bold text-transparent text-3xl md:text-4xl tracking-wide bg-clip-text bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 drop-shadow-lg">
            <span className="px-12">
              ✦ Soundproof • Safe & Better Air Quality • Scratch Resistant • Durable • Stylish ✦
            </span>
            <span className="px-12">
              ✦ Soundproof • Safe & Better Air Quality • Scratch Resistant • Durable • Stylish ✦
            </span>
          </div>
        </div>
      </div>

      {/* Marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default BestSeller;
