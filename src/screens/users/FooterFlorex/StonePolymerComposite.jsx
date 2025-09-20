import React from "react";
import { ShieldCheck, Droplets, Bug, Timer } from "lucide-react";
import { motion } from "framer-motion";

export default function StonePolymerComposite() {
  const features = [
    { icon: ShieldCheck, label: "Ultimate Durability" },
    { icon: Droplets, label: "Waterproof" },
    { icon: Bug, label: "Termite Resistant" },
    { icon: Timer, label: "Quick & Easy Installation" },
  ];

  return (
    <section className="bg-black text-white py-24 px-4 md:px-10 xl:px-20 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
      
      {/* Decorative Background Circles */}
      {/* <div className="absolute -top-32 -left-32 w-72 h-72 bg-white/5 rounded-full filter blur-3xl animate-pulse"></div> */}
      {/* <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-white/5 rounded-full filter blur-3xl animate-pulse"></div> */}

      {/* Left Section - Text */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-snug tracking-wide">
          STONE <br /> POLYMER <br /> COMPOSITE
        </h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
          Experience flooring that merges the elegance of wood with the durability of stone. 
          Revolutionary and hassle-free, it’s dust-free, noise-free, and easy to install—perfect for modern spaces.
        </p>
      </motion.div>

      {/* Right Section - Animated Feature Boxes */}
      <motion.div
        className="md:w-1/2 grid grid-cols-2 gap-8 md:gap-10 justify-items-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center justify-center w-44 h-44 p-5 rounded-3xl cursor-pointer shadow-lg border border-gray-700"
            whileHover={{ scale: 1.1, y: -10, rotate: [0, 5, -5, 0] }}
            animate={{ y: [0, -5, 0, 5, 0], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
          >
            {/* Icon Background */}
            <motion.div
              className="w-16 h-16 mb-4 rounded-full flex items-center justify-center bg-black border border-gray-700 shadow-lg"
              whileHover={{ scale: 1.2, rotate: 10, boxShadow: "0px 0px 20px rgba(255,255,255,0.3)" }}
            >
              <item.icon className="w-8 h-8 text-gray-400" />
            </motion.div>

            <p className="text-center text-sm md:text-base uppercase tracking-wider">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
