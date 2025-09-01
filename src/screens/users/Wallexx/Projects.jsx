import React from "react";
import { motion } from "framer-motion";
import logo1 from "../../../Assets/wallex/about/logo1.png"
import logo2 from "../../../Assets/wallex/about/logo2.png"
const logos = [
logo1,logo2,logo1,logo2,
logo2,logo1,logo2,logo1,
logo1,logo2,logo1,logo2,
];

export default function Projects() {
  return (
    <div className="bg-[#004736] py-16 md:px-6 lg:px-10 px-4 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
      {/* Left Side - Text */}
      <div className="text-white text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-serif leading-snug">
          OUR <br /> PROJECTS
        </h2>
      </div>

      {/* Right Side - Logos */}
      <div className="bg-white rounded-xl shadow-lg p-8 w-full ">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center">
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt={`Project logo ${index + 1}`}
              className="w-28 h-auto object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
