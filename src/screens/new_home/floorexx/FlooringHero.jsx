import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import mainImage from "../../../Assets/new_home/floorexx/home.png";

const FlooringHero = () => {
  const { scrollY } = useScroll();
  const yPos = useTransform(scrollY, [0, 500], [0, -20]); // parallax effect

  return (
    <section className="px-4 md:px-6 lg:px-10 md:py-12 pb-6 text-center relative">
      {/* Heading */}
      <motion.h2
        className="text-2xl md:text-4xl font-light text-gray-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        The flooring of the future –
      </motion.h2>

      <motion.h1
        className="text-3xl md:text-4xl font-bold text-orange-600 mt-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        FLOOREXX
      </motion.h1>

      <motion.p
        className="text-sm md:text-base text-gray-600 mt-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        quality as high as possible & cost as economical as possible.
      </motion.p>

      {/* Image with overlay caption */}
      <motion.div
        className="mt-8 relative w-full max-w-5xl mx-auto"
        style={{ y: yPos }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
      >
        <img
          src={mainImage}
          alt="Modern flooring"
          className="w-full rounded-xl shadow-2xl object-cover"
        />
        <motion.p
          className="absolute bottom-4 left-4 md:left-6 text-white text-sm md:text-base font-semibold bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg max-w-xs md:max-w-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Watch how <span className="text-orange-400 font-bold">FLOOREXX</span> blends <br /> 
          <span className="font-medium">innovation, craftsmanship, and sustainability</span> 
          to deliver world-class surfaces.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default FlooringHero;
