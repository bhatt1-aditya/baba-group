import React from "react";
import { motion } from "framer-motion";

import image from "../../../Assets/wallex/about/image2.png";
import image2 from "../../../Assets/core_flexx/wallexx/home2.png"
import image3 from "../../../Assets/core_flexx/wallexx/home3.png"
import image4 from "../../../Assets/core_flexx/wallexx/home4.png"
const images = [
  image,
  image2,
  image3,
  image4
];

export default function Inspirations() {
  return (
    <section className="bg-[#044d42] text-white py-16 px-4 flex flex-col items-center">
      {/* Title */}
      <motion.h2
        className="text-3xl md:text-5xl font-serif mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        INSPIRATIONS
      </motion.h2>

      {/* Grid of images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={src}
              alt={`Inspiration ${index + 1}`}
              className="w-full h-72 object-cover rounded-2xl transition-transform duration-500"
            />
            {/* Overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl"
              whileHover={{ opacity: 1 }}
            >
              <p className="text-white font-semibold text-lg md:text-xl">
                {`Inspiration ${index + 1}`}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
