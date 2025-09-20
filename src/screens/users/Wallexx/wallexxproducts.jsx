import React from "react";
import { motion } from "framer-motion";
import { Globe, Users, Lock, Link } from "lucide-react";

const features = [
  { icon: Users, text: "Customer Centric" },
  { icon: Link, text: "Quality & Design" },
  { icon: Lock, text: "Unilin Locking System" },
  { icon: Globe, text: "Since 2 decades" },
  { icon: Link, text: "HOMAG line German Technology" },
  { icon: Users, text: "Representatives available worldwide" },
  { icon: Globe, text: "20+ Countries Supply Chain" },
  { icon: Globe, text: "Eco-Friendly Production" },
];

export default function WallexxProducts() {
  return (
    <section className="relative bg-gradient-to-br from-[#004736] to-[#04685c] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center overflow-hidden">

      {/* Heading */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-lg font-light mb-2 tracking-wide">Why Choose</h3>
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
          WALLEXX SPC PRODUCTS?
        </h2>
        <p className="text-sm md:text-base max-w-3xl mx-auto">
          FLOOREXX is the only SPC producing company in India with an in-house
          source of raw material (CaCO3), ensuring attractive pricing, high
          quality standards, and uniformity across all products.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-[0_10px_50px_rgba(0,255,192,0.4)] hover:-translate-y-4 transition-all duration-500 cursor-pointer"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.07 }}
          >
            <motion.div
              className="w-12 h-12 mb-4 text-[#00ffc0] p-2 rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.3, rotate: 15 }}
            >
              <item.icon className="w-6 h-6" />
            </motion.div>
            <p className="text-center text-sm md:text-base font-medium">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
