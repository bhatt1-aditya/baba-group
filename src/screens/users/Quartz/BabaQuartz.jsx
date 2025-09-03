import React from "react";
import { motion } from "framer-motion";
import { Volume2, Infinity, ShieldCheck, Droplet, Leaf, Hammer } from "lucide-react";

const features = [
  { title: "Soundproof", icon: <Volume2 className="w-6 h-6" /> },
  { title: "Endless Options", icon: <Infinity className="w-6 h-6" /> },
  { title: "Termite Resistant", icon: <ShieldCheck className="w-6 h-6" /> },
  { title: "Safe & Better Air Quality", icon: <Droplet className="w-6 h-6" /> },
  { title: "Low Cost Installation", icon: <Hammer className="w-6 h-6" /> },
  { title: "Eco-friendly", icon: <Leaf className="w-6 h-6" /> },
  { title: "Warranty", icon: <ShieldCheck className="w-6 h-6" /> },
  { title: "Ultimate Durability", icon: <Hammer className="w-6 h-6" /> },
  { title: "Waterproof", icon: <Droplet className="w-6 h-6" /> },
];

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const BabaQuartz = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 px-4 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl w-full bg-white rounded-2xl shadow-lg p-8 md:p-12"
      >
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-sm text-gray-500 uppercase tracking-wide">
            Why Choose
          </h3>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-2">
            BABA <span className="text-[#ed7326]">QUARTZ</span> ?
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-4 rounded-lg bg-white hover:bg-gray-50 transition duration-300 shadow-sm hover:shadow-md"
            >
              {/* Icon Animation */}
              <motion.div
                className="text-[#ed7326] mb-3"
                whileHover={{ rotate: 10, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {feature.icon}
              </motion.div>

              {/* Title */}
              <p className="text-gray-800 text-sm font-medium">
                {feature.title}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BabaQuartz;
