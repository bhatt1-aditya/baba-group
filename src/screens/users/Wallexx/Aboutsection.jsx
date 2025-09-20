import React from "react";
import { motion } from "framer-motion";
import image from "../../../Assets/wallex/about/image1.png"
export default function AboutSection() {
  return (
    <div className="bg-[#044d42] text-white py-16 px-4 md:px-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
      
      {/* Left Side - Text */}
      <div className="max-w-xl">
        {/* Big Quote */}
        <motion.h2
          className="text-3xl md:text-4xl font-serif leading-snug mb-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          "Creating <br />
          beautiful spaces <br />
          since a decade."
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-sm md:text-base leading-relaxed mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Baba Group has been a leading producer and exporter for over a decade,
          based in the Rajasthan province of India. We have been into Quartz
          Powder, Grit and Engineered Quartz Slab with a splendid presence across
          the Globe. We’re a pioneer in India for the manufacturing and exporting
          Engineered Quartz Slab.
        </motion.p>

        <motion.p
          className="text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          After creating a very successful legacy in Quartz Powder, Grit &
          Engineered Quartz Stone, we are overjoyed to launch our New Product
          -SPC floors by Baba Flooring Pvt Ltd, a subsidiary organization of
          "BABA QUARTZ" (Baba Super Minerals Pvt Ltd).
        </motion.p>
      </div>

      {/* Right Side - Image */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={image}
          alt="Luxury Interior"
          className="rounded-xl shadow-lg w-full h-auto object-cover"
        />
      </motion.div>
    </div>
  );
}
