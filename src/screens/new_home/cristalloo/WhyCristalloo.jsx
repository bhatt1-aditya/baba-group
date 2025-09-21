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
    <section className="relative px-4 md:px-10 lg:px-20 py-24 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Background floating circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute -top-24 -left-24 w-80 h-80 bg-gray-300 rounded-full blur-3xl animate-pulseSlow"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-gray-300 rounded-full blur-3xl animate-pulseSlow"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-1/3 right-1/4 w-60 h-60 bg-gray-200 rounded-full blur-2xl animate-pulseSlow"
      />

      <div className="grid md:grid-cols-2 max-w-6xl mx-auto grid-cols-1 gap-12 items-center relative z-10">
        {/* LEFT - Title and Features */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-800">
            Why{" "}
            <span className="text-gray-600 font-semibold">SPC Panels?</span>
          </h2>

          <div className="flex flex-wrap gap-4 max-w-lg">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.08,
                  rotate: [0, 2, -2, 0],
                  boxShadow:
                    "0 10px 25px rgba(107, 114, 128, 0.3), 0 6px 10px rgba(156, 163, 175, 0.2)",
                  transition: { duration: 0.3 },
                }}
                className="px-5 py-3 border border-gray-400 text-gray-700 rounded-full text-sm font-medium bg-white/60 backdrop-blur-md shadow-sm hover:border-gray-500 hover:text-gray-800 cursor-pointer transition-all"
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
          whileHover={{
            scale: 1.05,
            rotate: [0, -1, 1, 0],
            transition: { duration: 0.4 },
          }}
          className="overflow-hidden rounded-3xl shadow-2xl border border-gray-200"
        >
          <motion.img
            src={spcImage}
            alt="SPC Panels"
            className="w-full h-full object-cover rounded-3xl"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhySPC;
