import React from "react";
import { motion } from "framer-motion";

const WhyChooseCristalloo = () => {
  const features = [
    "WARRANTY",
    "WATERPROOF",
    "SOUNDPROOF",
    "ENDLESS OPTIONS",
    "TERMITE RESISTANT",
    "ECO-FRIENDLY",
    "SAFE AND BETTER AIR QUALITY",
    "LOW COST INSTALLATION",
    "ULTIMATE DURABILITY",
  ];

  return (
    <section className="relative text-center py-16 bg-white overflow-hidden">
      {/* Background floating circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute -top-16 -left-16 w-72 h-72 bg-gray-200 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-gray-300 rounded-full blur-3xl"
      />

      {/* Headings */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-semibold text-gray-900 mb-2"
      >
        Why Choose
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl font-bold text-gray-500 mb-4 tracking-wide"
      >
        CRISTALLOO ?
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-gray-500 max-w-2xl mx-auto mb-10"
      >
        Premium quality. Innovative designs. Durable, eco-friendly quartz
        surfaces with reliable global supply — crafted to elevate every space.
      </motion.p>

      {/* Features */}
      <div className="flex flex-wrap gap-4 max-w-4xl justify-center items-center mx-auto mb-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 6px 12px rgba(107,114,128,0.2)",
              transition: { duration: 0.3 },
            }}
            className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 font-medium text-sm shadow-sm hover:shadow-md hover:border-gray-400 cursor-pointer transition-all"
          >
            {feature}
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        whileHover={{
          scale: 1.05,
          backgroundColor: "#E5E7EB",
          transition: { duration: 0.3 },
        }}
        className="text-gray-600 text-sm font-medium flex items-center gap-1 mx-auto px-6 py-2 rounded-full bg-gray-100 shadow cursor-pointer transition"
      >
        Learn More <span>›</span>
      </motion.button>
    </section>
  );
};

export default WhyChooseCristalloo;
