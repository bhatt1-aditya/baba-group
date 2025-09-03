import React from "react";
import { motion } from "framer-motion";
import { Globe, Users, Lock, Link } from "lucide-react";

const features = [
  { icon: Users, text: "Customer Centric" },
  { icon: Link, text: "Quality & Design" },
  { icon: Lock, text: "Unilin Locking System" },
  { icon: Globe, text: "Since 2 decades" },
  { icon: Link, text: "HOMAG line German Technology" },
  { icon: Users, text: "Representatives worldwide" },
  { icon: Globe, text: "20+ Countries Supply Chain" },
];

export default function WallexxProducts() {
  return (
    <section className="relative bg-[#044d42] text-white py-28 px-6 flex flex-col items-center overflow-hidden">
      {/* Floating Background Shapes */}
      <div className="absolute -top-48 -left-48 w-96 h-96 bg-gradient-to-r from-white/5 to-white/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-48 -right-48 w-[28rem] h-[28rem] bg-gradient-to-r from-white/5 to-white/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-white/5 rounded-full filter blur-2xl animate-pulse"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24 z-10 relative"
      >
        <h3 className="text-lg font-light mb-1">Why Choose</h3>
        <h2 className="text-4xl md:text-5xl font-serif mb-3 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-300">
          WALLEXX SPC PRODUCTS?
        </h2>
        <p className="text-sm md:text-base max-w-2xl mx-auto">
          FLOOREXX is the only SPC producing company in India with an in-house
          source of raw material (CaCO3), ensuring attractive pricing, quality,
          and consistency.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 max-w-6xl w-full z-10 relative">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl cursor-pointer transition-transform duration-500 hover:scale-110 hover:-translate-y-4 hover:shadow-3xl hover:backdrop-brightness-125"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            whileHover={{ rotateX: 6, rotateY: 6 }}
          >
            <item.icon className="w-16 h-16 mb-4 text-white" />
            <p className="text-center font-semibold text-white text-lg">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
