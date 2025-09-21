"use client";

import React from "react";
import { motion } from "framer-motion";
import spcImage from "../../../Assets/new_home/wallexx/spcPanels.png";

const WhySPC = () => {
  const features = [
    "Representative available worldwide",
    "HOMAG line German Technology",
    "20+ Countries Supply chain",
    "Unilin Locking System",
    "Customer Centric",
    "Since 2 decades",
    "Quality & Design",
  ];

  return (
    <section className="relative px-4 md:px-10 lg:px-20 py-20 overflow-hidden bg-gradient-to-b from-white via-green-50 to-white">
      {/* Background Accents */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute -top-20 -left-20 w-72 h-72 bg-green-200 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 rounded-full blur-3xl"
      />

      <div className="grid md:grid-cols-2 max-w-6xl mx-auto grid-cols-1 gap-12 items-center relative z-10">
        {/* LEFT - Title and Tags */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-800">
            Why{" "}
            <span className="text-green-700 font-semibold">SPC Panels?</span>
          </h2>

          <div className="flex flex-wrap gap-4 max-w-lg">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.08 }}
                className="px-4 py-2 border border-green-700 text-green-700 rounded-full text-sm font-medium bg-white/60 backdrop-blur-md shadow-sm hover:shadow-md hover:border-green-500 transition-all"
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          className="overflow-hidden rounded-2xl shadow-xl"
        >
          <img
            src={spcImage}
            alt="SPC Panels"
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhySPC;
