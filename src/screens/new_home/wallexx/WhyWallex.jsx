import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  "WARRANTY",
  "WATERPROOF",
  "SOUNDPROOF",
  "ECO-FRIENDLY",
  "ENDLESS OPTIONS",
  "ULTIMATE DURABILITY",
  "TERMITE RESISTANT",
  "SAFE AND BETTER AIR QUALITY",
  "LOW COST INSTALLATION",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const iconVariants = {
  hover: {
    scale: [1, 1.3, 1],
    rotate: [0, 15, -15, 0],
    transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" },
  },
};

const lineVariants = {
  hidden: { pathLength: 0 },
  visible: { pathLength: 1, transition: { duration: 1.5, ease: "easeInOut" } },
};

const WhyWallex = () => {
  return (
    <section className="px-4 md:px-6 lg:px-10 md:py-16 bg-gray-50 relative">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 relative">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-800">
            Why Choose{" "}
            <span className="text-green-700 font-semibold">WALLEX</span> panels?
          </h2>

          <p className="text-gray-600 max-w-md leading-relaxed">
            Premium quality, formulated finishes, durable, eco-friendly, smart
            surfaces with timeless craftsmanship — crafted to elevate every
            space.
          </p>

          <a
            href="#"
            className="inline-block text-green-700 font-medium hover:underline transition-all duration-300"
          >
            Learn More ›
          </a>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="relative flex">
          {/* Curved SVG Line */}
          <svg
            className="absolute left-6 top-0 h-full"
            width="4"
            height="100%"
            viewBox="0 0 4 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M2 0 C2 150, 2 300, 2 450 C2 600, 2 750, 2 1000"
              stroke="#34D399"
              strokeWidth="4"
              strokeLinecap="round"
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          </svg>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-gray-800 text-sm font-medium relative z-10"
          >
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300 relative"
              >
                {/* Animated Icon */}
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className="text-green-700"
                >
                  <FaCheckCircle size={18} />
                </motion.div>

                <span className="tracking-wide">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyWallex;
