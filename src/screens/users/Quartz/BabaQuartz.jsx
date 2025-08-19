import React from "react";
import { motion } from "framer-motion";
import homeImage from "../../../Assets/Quartz/quartz.png";

// ✅ Variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between items
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const BabaQuartz = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{
        backgroundImage: `url(${homeImage})`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-1"></div>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }} // 🔄 re-trigger when revisiting
        className="bg-[#f8f6f0] md:pt-0 mt-2 backdrop-blur-lg rounded-2xl shadow-lg px-6 py-10 md:px-10 md:py-14 max-w-5xl w-full text-center relative z-10"
      >
        {/* Stats Grid */}
        <div className="py-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-semibold"
          >
            Why Choose
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold mb-8"
          >
            Baba Quartz ?
          </motion.h1>
        </div>

        {/* Grid Items with staggered animation */}
        <motion.div
          className="grid divide-x-2 grid-cols-1 md:grid-cols-3 md:gap-y-16 gap-y-10 md:py-6 gap-x-6 text-black whitespace-nowrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          {[
            "Soundproof",
            "Safe & Better Air Quality",
            "Warranty",
            "Endless Options",
            "Endless Options",
            "Ultimate Durability",
            "Termite Resistant",
            "Eco-friendly",
            "Waterproof",
          ].map((text, index) => (
            <motion.div key={index} variants={itemVariants}>
              <p className="text-xl md:text-xl font-semibold">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BabaQuartz;
