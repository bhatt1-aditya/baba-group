import React from "react";
import {
  Lock,
  Ruler,
  Globe,
  Clock,
  Shield,
  Droplet,
  Bug,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

export default function FloorrexPage() {
  return (
    <div className="font-serif text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-16 py-16 bg-gradient-to-r from-[#fff8f5] to-[#ffffff]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-semibold text-[#ed7326] uppercase tracking-wider">
              Why Choose
            </h2>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
              FLOORREX SPC <br /> Products?
            </h1>
            <p className="mt-5 text-base leading-relaxed max-w-md text-gray-600">
              FLOORREX is India’s only SPC manufacturer with an in-house raw
              material source (CaCO3), ensuring unmatched quality, consistent
              standards, and competitive pricing.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-5 mt-8">
              <Feature icon={<Globe className="w-5 h-5" />} text="Customer Centric" />
              <Feature icon={<Lock className="w-5 h-5" />} text="Unilin Locking System" />
              <Feature icon={<Ruler className="w-5 h-5" />} text="Premium Quality & Design" />
              <Feature icon={<Wrench className="w-5 h-5" />} text="German Technology" />
              <Feature icon={<Clock className="w-5 h-5" />} text="Legacy of 20 Years" />
              <Feature icon={<Globe className="w-5 h-5" />} text="Global Supply Chain" />
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600607686163-1be1ebf3a1e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Floor Example"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#ed7326] text-white text-sm px-4 py-2 rounded-lg shadow-lg">
                Premium Quality
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stone Polymer Composite Section */}
      <section className="px-6 lg:px-16 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Living Room"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 md:p-10 text-white">
            <h3 className="text-2xl md:text-3xl font-bold uppercase">
              Stone Polymer Composite
            </h3>
            <p className="mt-4 text-sm md:text-base max-w-3xl leading-relaxed">
              Combining the elegance of real wood with the strength of stone,
              FLOORREX SPC flooring delivers unmatched durability and beauty.
              Easy to install, dust-free, and noise-free, it’s the ultimate
              flooring solution for modern spaces.
            </p>
          </div>
        </motion.div>

        {/* Icon Features */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
        >
          <IconFeature icon={<Shield className="w-8 h-8" />} label="Ultimate Durability" />
          <IconFeature icon={<Droplet className="w-8 h-8" />} label="Waterproof" />
          <IconFeature icon={<Bug className="w-8 h-8" />} label="Termite Resistant" />
          <IconFeature icon={<Wrench className="w-8 h-8" />} label="Easy Installation" />
        </motion.div>
      </section>
    </div>
  );
}

/* === Feature Component === */
function Feature({ icon, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-3 bg-white/60 backdrop-blur-lg rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition"
    >
      <div className="p-2 bg-[#fff4ed] rounded-full text-[#ed7326]">{icon}</div>
      <span className="text-sm font-medium text-gray-800">{text}</span>
    </motion.div>
  );
}

/* === IconFeature Component === */
function IconFeature({ icon, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition text-center border border-gray-100"
    >
      <div className="p-4 bg-[#fff4ed] rounded-full text-[#ed7326] shadow-sm">{icon}</div>
      <p className="mt-4 text-sm font-semibold text-gray-800">{label}</p>
    </motion.div>
  );
}
