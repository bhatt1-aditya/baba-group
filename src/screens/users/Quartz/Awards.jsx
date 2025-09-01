import React from "react";
import { motion } from "framer-motion";

const AwardsSection = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-light text-black mb-10 text-center md:text-left"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          AWARDS & <br /> ACHIEVEMENTS
        </motion.h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Large Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <img
              src="https://images.unsplash.com/photo-1600566753151-384129cf4e1f?auto=format&fit=crop&w=800&q=80"
              alt="Kitchen Design 1"
              className="rounded-lg shadow-md w-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1600566753151-384129cf4e1f?auto=format&fit=crop&w=801&q=80"
              alt="Kitchen Design 2"
              className="rounded-lg shadow-md w-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            <img
              src="https://images.unsplash.com/photo-1586201375761-83865001e17b?auto=format&fit=crop&w=800&q=80"
              alt="Floor Tiles"
              className="rounded-lg shadow-md w-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1556911073-52527ac437f5?auto=format&fit=crop&w=800&q=80"
              alt="Table Design"
              className="rounded-lg shadow-md w-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
