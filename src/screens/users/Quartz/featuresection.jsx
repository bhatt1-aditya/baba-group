import React from "react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  return (
    <div className="bg-white font-serif overflow-hidden">
      {/* Top Images with Animation */}
      <div className="flex justify-center gap-8 py-12">
        <motion.img
          src="https://source.unsplash.com/600x400/?living-room,interior"
          alt="Living Room"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-2xl shadow-xl w-[320px] h-[220px] object-cover hover:scale-105 transition-transform"
        />
        <motion.img
          src="https://source.unsplash.com/600x400/?sofa,modern-home"
          alt="Modern Sofa"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="rounded-2xl shadow-xl w-[320px] h-[220px] object-cover hover:scale-105 transition-transform"
        />
      </div>

      {/* Quote Section */}
      <div className="text-center md:px-6 px-4 xl:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-serif text-[#ed7326] tracking-wide italic py-4"
        >
          "CREATING BEAUTIFUL SPACES SINCE A DECADE."
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-md md:text-lg"
        >
          Baba Group has been a leading producer and exporter for over a decade,
          based in Rajasthan, India. We have been pioneers in Quartz Powder,
          Grit, and Engineered Quartz Slabs, making our mark across the globe.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-md md:text-lg mt-4 mb-10"
        >
          Building on our successful legacy, we are thrilled to launch SPC Floors
          through Baba Flooring Pvt Ltd — a proud subsidiary of "BABA QUARTZ"
          that continues our tradition of innovation and excellence.
        </motion.p>
      </div>

      {/* Special Features Highlight */}
      <div className="relative w-full h-[75vh] overflow-hidden rounded-t-2xl shadow-lg">
        {/* Background Image */}
        <motion.img
          src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1920&q=80"
          alt="floor background"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Glassmorphic Center Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center p-6"
        >
          <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-center px-10 py-16 md:px-20 md:py-24 rounded-3xl shadow-2xl max-w-2xl w-full">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-6xl font-extrabold tracking-widest drop-shadow-lg text-[#ed7326]"
            >
              SPECIAL
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-6xl font-extrabold tracking-widest drop-shadow-lg text-[#ed7326]"
            >
              FEATURES
            </motion.h2>

            {/* Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="mt-6 mx-auto border-t-4 border-[#ed7326]"
            ></motion.div>
          </div>
        </motion.div>

        {/* Scrolling Marquee Text */}
        <div className="absolute bottom-8 w-full overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex text-white text-5xl md:text-6xl font-bold tracking-wide drop-shadow-lg">
            <span className="px-8">
              Soundproof • Air Quality • Scratch Resistant • Durable • Stylish
            </span>
            <span className="px-8">
              Soundproof • Air Quality • Scratch Resistant • Durable • Stylish
            </span>
          </div>
        </div>
      </div>

      {/* Custom Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
