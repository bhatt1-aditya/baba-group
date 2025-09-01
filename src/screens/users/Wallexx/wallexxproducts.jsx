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
  { icon: Globe, text: "20+Countries Supply chain" },
  { icon: Globe, text: "20+Countries Supply chain" },
  { icon: Globe, text: "20+Countries Supply chain" },
];

export default function WallexxProducts() {
  return (
    <div className="bg-[#044d42] text-white py-16 px-4 md:px-6 lg:px-10 flex flex-col items-center">
      {/* Heading */}
      <h3 className="text-lg font-light mb-2">Why Choose</h3>
      <h2 className="text-3xl md:text-4xl font-serif mb-3 text-center">
        WALLEXX SPC PRODUCTS?
      </h2>
      <p className="text-sm md:text-base max-w-2xl text-center mb-10">
        FLOOREXX is the only SPC producing company in India with an in-house
        source of raw material (CaCO3) hence attractive Pricing & Quality
        Standards and uniformity.
      </p>

      {/* Features Box */}
      <div className="bg-white text-[#004736] rounded-xl shadow-lg w-full  p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center mx-auto">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <item.icon className="w-8 h-8" />
              <p className="text-sm md:text-base">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
