import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import newImage from "../../../Assets/floorrex/image1.png";

const images = [newImage, newImage, newImage]; // Replace with multiple images

const New = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  // Auto-slide vertically every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants = {
    animate: {
      y: `-${currentIndex * 300}px`, // 300px is approx image height
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    inactive: { scale: 0.9, opacity: 0.6 },
    active: { scale: 1.1, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto bg-white px-6 md:px-16 py-10 overflow-hidden">
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left mb-6 md:mb-0"
      >
        <h2 className="text-2xl md:text-3xl font-light text-[#7a4a24]">
          What’s New on
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-[#7a4a24] tracking-wide mt-2">
          FLOORREX ?
        </h1>
      </motion.div>

      {/* Right Image Section */}
      <div className="relative h-[300px] overflow-hidden">
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
          animate="animate"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="relative mb-6"
              variants={imageVariants}
              animate={index === currentIndex ? "active" : "inactive"}
            >
              {/* New Tag on Active Image */}
              {index === currentIndex && (
                <span className="absolute top-3 left-3 bg-[#7a4a24] text-white px-4 py-1 rounded-md text-sm font-medium z-10">
                  NEW
                </span>
              )}
              <img
                src={img}
                alt={`New on Floorrex ${index + 1}`}
                className="w-72 md:w-96 h-auto  shadow-md"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default New;
