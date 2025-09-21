import React from "react";
import { motion } from "framer-motion";
import image1 from "../../../Assets/new_home/baba_group/image1.png";

export default function AboutSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-white px-8 py-20 grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto font-[Poppins]">
      {/* Left Side */}
      <div className="flex flex-col">
        {/* Heading */}
        <motion.h2
          className="text-5xl font-light text-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          About
        </motion.h2>

        {/* BABA GROUP Slim Gradient */}
        <motion.span
          className="text-4xl font-semibold tracking-wide bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent mb-6 block"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          BABA GROUP.
        </motion.span>

        {/* Paragraphs */}
        <motion.p
          className="text-gray-700 mb-4 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Baba Group is a leading Indian manufacturer and exporter in the flooring,
          wall décor, and engineered quartz surface industry. With multiple
          specialized brands under its umbrella, the group focuses on offering
          high-performance, innovative, and visually rich interior & architectural
          solutions.
        </motion.p>
        <motion.p
          className="text-gray-700 mb-8 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Our mission is to deliver world-class products with cutting-edge designs
          and eco-conscious manufacturing, while building trust across global and
          Indian markets.
        </motion.p>

        {/* Image */}
        <motion.img
          src={image1}
          alt="About Baba Group"
          className="rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        />
      </div>

      {/* Right Side */}
      <div className="flex flex-col">
        {/* Our Story Big Slim Gradient */}
        <motion.h2
          className="text-5xl md:text-6xl font-extralight mb-8 bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          Our Story
        </motion.h2>

        {/* Button + In Motion Black Slim */}
        <motion.div
          className="flex items-center gap-6 mb-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          <button className="border border-gray-400 rounded-full px-6 py-2 hover:bg-gray-100 transition">
            Watch Now
          </button>
          <motion.span
            className="text-3xl font-light text-black"
            whileHover={{ scale: 1.05, x: 2 }}
            transition={{ duration: 0.3 }}
          >
            in motion.
          </motion.span>
        </motion.div>

        {/* Paragraph */}
        <motion.p
          className="text-gray-700 mb-8 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Watch how Baba Group evolved from a single unit to a global supplier,
          delivering unmatched quality and reliability.
        </motion.p>

        {/* Right Side Image */}
        <motion.img
          src={image1}
          alt="Our Story"
          className="rounded-lg shadow-md w-full h-[330px] object-cover"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03, rotate: 1, transition: { duration: 0.4 } }}
        />
      </div>
    </section>
  );
}
