import React from "react";
import { motion } from "framer-motion";

const features = [
  "Soundproof",
  "Safe & Better Air Quality",
  "Warranty",
  "Endless Options",
  "Low Cost Installation",
  "Ultimate Durability",
  "Termite Resistant",
  "Eco-friendly",
  "Waterproof",
];

const Wallexx = () => {
  return (
    <section className="w-full min-h-screen bg-[#044d42] flex items-center justify-center px-4 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl w-full bg-white rounded-3xl shadow-2xl p-10 md:p-16 text-center"
      >
        {/* Title */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-700 mb-2 font-medium"
        >
          Why Choose
        </motion.h3>
        <motion.h2
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-5xl font-serif font-bold tracking-wide mb-12"
        >
          WALLEXX
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 flex items-center justify-center text-center cursor-default hover:shadow-2xl"
            >
              <p className="font-semibold text-lg md:text-xl">{feature}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Wallexx;
