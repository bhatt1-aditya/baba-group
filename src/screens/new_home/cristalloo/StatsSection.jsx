// StatsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import factoryImage from "../../../Assets/new_home/homeimage5.png";

const stats = [
  { number: "100+", label: "Current Clients" },
  { number: "20+", label: "Years of Experience" },
  { number: "25+", label: "Awards Won" },
  { number: "15+", label: "Availability Worldwide" },
];

const StatsSection = () => {
  return (
    <section className="px-4 md:px-6 lg:px-10 pb-16 text-center relative">
      <h2 className="text-2xl md:text-4xl font-light mb-10">
        <span>“ Surfaces Beyond </span>
        <span className="text-gray-500 font-semibold">
          Luxury<span className="font-light text-black"> Living.</span> ” {/* Luxury in grey */}
        </span>
      </h2>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Neon Glow Overlay on Hover */}
            <motion.div
              className="absolute inset-0 rounded-lg pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: 0.2,
                background:
                  "linear-gradient(135deg, rgba(52,211,153,0.3), rgba(16,185,129,0.3), rgba(5,150,105,0.3))",
                transition: { duration: 0.5 },
              }}
            />

            <p className="text-gray-500 text-2xl font-bold relative z-10"> {/* Number in grey */}
              {stat.number}
            </p>
            <p className="text-gray-600 text-sm relative z-10">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Optional Factory Image at bottom */}
      <div className="mt-10 flex justify-center">
        <motion.img
          src={factoryImage}
          alt="Factory"
          className="w-full max-w-4xl rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
};

export default StatsSection;
