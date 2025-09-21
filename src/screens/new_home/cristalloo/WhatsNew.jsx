import React from "react";
import { motion } from "framer-motion";
import image1 from "../../../Assets/new_home/cristalloo_pannel/whatsnew.png";

const WhatsNew = () => {
  const images = [image1, image1, image1];

  return (
    <section className="relative px-6 py-16 text-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Background floating circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute -top-16 -left-16 w-72 h-72 bg-gray-200 rounded-full blur-3xl animate-pulseSlow"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-gray-300 rounded-full blur-3xl animate-pulseSlow"
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-2xl md:text-3xl font-semibold text-gray-800"
      >
        What’s New at <span className="text-gray-500">CRISTALLOO?</span>
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed"
      >
        See our fresh quartz surface designs, larger formats, and premium
        finishes crafted to transform kitchens, bathrooms, and commercial spaces
        with timeless elegance. Cristalloo redefines luxury surfaces.
      </motion.p>

      {/* Image Grid */}
      <div className="relative grid grid-cols-3 gap-6 mt-10 items-center justify-center">
        {images.map((img, idx) => {
          // make middle image larger
          const isMiddle = idx === 1;
          return (
            <motion.img
              key={idx}
              src={img}
              alt={`Cristalloo Surface ${idx + 1}`}
              initial={{ opacity: 0, scale: isMiddle ? 0.95 : 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: isMiddle ? 1 : 0.95, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              whileHover={{
                scale: isMiddle ? 1.05 : 1.02,
                rotate: [0, 1, -1, 0],
                boxShadow:
                  "0 10px 20px rgba(107,114,128,0.2), 0 6px 10px rgba(156,163,175,0.15)",
                transition: { duration: 0.3 },
              }}
              className={`w-full rounded-md shadow-md cursor-pointer transition-transform ${
                isMiddle ? "md:col-span-1" : "md:mt-6"
              }`}
              style={{ zIndex: isMiddle ? 10 : 5 }}
            />
          );
        })}

        {/* Connecting Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.line
            x1="20%"
            y1="50%"
            x2="50%"
            y2="50%"
            stroke="#9CA3AF"
            strokeWidth="2"
            initial={{ opacity: 0, pathLength: 0 }}
            whileInView={{ opacity: 0.3, pathLength: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.line
            x1="50%"
            y1="50%"
            x2="80%"
            y2="50%"
            stroke="#9CA3AF"
            strokeWidth="2"
            initial={{ opacity: 0, pathLength: 0 }}
            whileInView={{ opacity: 0.3, pathLength: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </svg>
      </div>

      {/* Button */}
      <motion.a
        href="#"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileHover={{
          scale: 1.05,
          backgroundColor: "#D1D5DB",
          transition: { duration: 0.3 },
        }}
        className="mt-8 inline-block px-6 py-2 bg-gray-200 text-gray-700 text-sm md:text-base rounded-full shadow cursor-pointer transition"
      >
        Explore More &gt;
      </motion.a>
    </section>
  );
};

export default WhatsNew;
