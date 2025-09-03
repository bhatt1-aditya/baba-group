import React from "react";
import { motion } from "framer-motion";
import logo1 from "../../../Assets/wallex/about/logo1.png";
import logo2 from "../../../Assets/wallex/about/logo2.png";

const logos = [
  logo1, logo2, logo1, logo2,
  logo2, logo1, logo2, logo1,
  logo1, logo2, logo1, logo2,
];

export default function Projects() {
  return (
    <section className="relative bg-[#004736] py-20 px-4 md:px-12 lg:px-24 flex flex-col items-center overflow-hidden">

      {/* Heading */}
      <motion.h2
        className="relative z-10 text-white text-3xl md:text-5xl font-serif mb-16 text-center drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        OUR PROJECTS
      </motion.h2>

      {/* Logos Grid */}
      <motion.div
        className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-6xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center">
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt={`Project logo ${index + 1}`}
              className="w-28 h-auto object-contain rounded-lg p-2 hover:shadow-[0_10px_50px_rgba(0,255,192,0.4)] transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
