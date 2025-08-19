import React from "react";
import { motion } from "framer-motion";
import floorImage from "../../../Assets/core_flexx/wallexx/home.png";

const FloorrexSection = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-16 text-center">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        viewport={{ once: false }}
      >
        <h3 className="text-lg md:text-xl text-gray-700 mb-2">Learn more about</h3>
        <h1 className="text-4xl md:text-5xl font-serif text-[#8B5B2E] font-bold mb-10">
          FLOORREX
        </h1>
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        {/* Left Text */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
          viewport={{ once: false }}
          className="text-xs tracking-wide text-[#8B5B2E] max-w-xs leading-relaxed uppercase"
        >
          A unique multilayer fusion that offers warmth of wood and resilience of stone.
          All the looks & features of laminate & hardwood floors but none of their
          limitations.
        </motion.p>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8 } }}
          viewport={{ once: false }}
          className="shadow-lg"
        >
          <img
            src={floorImage}
            alt="Flooring"
            className="w-full md:w-[600px] object-cover"
          />
        </motion.div>

        {/* Right Text */}
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
          viewport={{ once: false }}
          className="text-xs tracking-wide text-[#8B5B2E] max-w-xs leading-relaxed uppercase"
        >
          A unique multilayer fusion that offers warmth of wood and resilience of stone.
          All the looks & features of laminate & hardwood floors but none of their
          limitations.
        </motion.p>
      </div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
        viewport={{ once: false }}
        className="mt-10"
      >
        <span className="text-[#8B5B2E] text-2xl">“</span>
        <p className="mt-2 text-xl text-[#8B5B2E] font-medium">
          The Flooring of Future.
        </p>
      </motion.div>
    </div>
  );
};

export default FloorrexSection;
