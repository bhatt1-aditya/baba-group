"use client";

import React from "react";
import { motion } from "framer-motion";
import luxuryImg from "../../../Assets/new_home/wallexx/luxury.png";

const LuxuryWalls = () => {
  return (
    <section className="relative px-4 md:px-6 lg:px-10 py-20 overflow-hidden bg-gradient-to-b from-white via-green-50 to-white">
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
        {/* LEFT - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
          className="overflow-hidden rounded-2xl shadow-xl"
        >
          <img
            src={luxuryImg}
            alt="Luxury bathroom walls"
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>

        {/* RIGHT - Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 leading-snug">
            Walls That Speak <br />
            <span className="text-green-800 font-semibold">Luxury.</span>
          </h2>

          <p className="text-green-700 leading-relaxed text-base md:text-lg">
            Watch how Baba Group blends innovation, craftsmanship, and
            sustainability to deliver world-class surfaces.
          </p>

          <motion.a
            href="#"
            whileHover={{ x: 5 }}
            className="inline-block text-sm md:text-base font-medium text-gray-800 relative group"
          >
            Watch Now ›
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-700 transition-all group-hover:w-full"></span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default LuxuryWalls;
