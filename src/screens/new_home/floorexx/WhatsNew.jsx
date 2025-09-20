import React from "react";
import { motion } from "framer-motion";
import img1 from "../../../Assets/new_home/floorexx/whatsnew.png";
import img2 from "../../../Assets/new_home/homeimage4.png";
import whatsnew from "../../../Assets/new_home/floorexx/whatsnew.png";

const WhatsNew = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-12">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 items-center">

        {/* Left Column */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Two small images */}
          <div className="grid grid-cols-2 gap-4">
            <motion.img
              src={img1}
              alt="Floor design 1"
              className="w-full h-56 object-cover rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={img2}
              alt="Floor design 2"
              className="w-full h-56 object-cover rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-4xl font-light text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What’s New at {" "}
            <span className="text-orange-500 font-semibold">FLOOREXX?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-gray-600 leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our latest SPC flooring designs, fresh textures, and
            upgraded finishes that bring even more durability and style to
            your spaces. Floorexx keeps innovating so your floors always stay
            ahead of trends.
          </motion.p>

          {/* Explore Button */}
          <motion.button
            className="px-6 py-2 bg-orange-500 text-white font-medium rounded-lg shadow-md hover:bg-orange-600 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            Explore More →
          </motion.button>
        </motion.div>

        {/* Right Column - Big Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.img
            src={whatsnew}
            alt="New flooring"
            className="w-full h-full object-cover rounded-lg shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default WhatsNew;