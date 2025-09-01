import React from "react";
import { motion } from "framer-motion";

const Wallexx = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center  bg-teal-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl w-full bg-white rounded-2xl shadow-lg md:mx-0 mx-4 p-16 text-center min-h-[600px]"
      >
        {/* Title Section */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-700 mb-1"
        >
          Why Choose
        </motion.h3>
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-3xl font-serif tracking-wide mb-10"
        >
          WALLEXX?
        </motion.h2>

        {/* Content Grid */}
        <div className="relative grid md:grid-cols-3 grid-cols-1 md:gap-y-20 gap-y-5 text-gray-900 font-light">
          {/* First Row */}
          <motion.p whileHover={{ scale: 1.05 }} className="cursor-default">
            Soundproof
          </motion.p>
          <motion.p whileHover={{ scale: 1.05 }} className="cursor-default">
            Safe & Better Air Quality
          </motion.p>
          <motion.p whileHover={{ scale: 1.05 }} className="cursor-default">
            Warranty
          </motion.p>

          {/* Horizontal Line */}
          <div className="absolute top-1/3 left-0 w-full h-px bg-gray-400"></div>

          {/* Second Row */}
          <motion.p whileHover={{ scale: 1.05 }} className="cursor-default">
            Endless Options
          </motion.p>
          <motion.p whileHover={{ scale: 1.05 }} className="cursor-default">
            Low Cost Installation
          </motion.p>
          <motion.p whileHover={{ scale: 1.05 }} className="cursor-default">
            Ultimate Durability
          </motion.p>

          {/* Horizontal Line */}
          <div className="absolute top-2/3 left-0 w-full h-px bg-gray-400"></div>

          {/* Third Row */}
          <motion.p whileHover={{ scale: 1.05 }} className="cursor-default">
            Termite Resistant
          </motion.p>
          <motion.p whileHover={{ scale: 1.05 }} className="cursor-default">
            Eco-friendly
          </motion.p>
          <motion.p whileHover={{ scale: 1.05 }} className="cursor-default">
            Waterproof
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Wallexx;
