import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Droplets, Bug, Hammer } from "lucide-react";

import inspiration from "../../../Assets/wallex/about/inspiration.png"

/**
 * Stone Polymer Composite – Hero Section
 * Matches the provided layout precisely, with subtle animations and full responsiveness.
 * Replace BACKGROUND_URL with your exact image to mirror the visual.
 */
const BACKGROUND_URL = inspiration; // <- swap with your image path

const Feature = ({ icon: Icon, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center gap-3 text-white"
  >
    <Icon className="w-12 h-12 md:w-14 md:h-14" strokeWidth={1.25} />
    <div className="text-center">
      <p className="tracking-[0.2em] text-xs md:text-sm uppercase opacity-90">{title}</p>
      <p className="text-base md:text-lg font-medium">{subtitle}</p>
    </div>
  </motion.div>
);

const CircularCTA = () => (
  <motion.div
  >
    <div className="relative mx-auto mt-12 w-40 h-40 md:w-52 md:h-52">
      {/* Rotating Circular Text */}
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full absolute"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text
          className="fill-white text-[12px] md:text-[14px] tracking-[4px]"
          style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
        >
          <textPath href="#circlePath" startOffset="0%">
            PROXIMON HOME • EXPLORE MORE • PROXIMON HOME • EXPLORE MORE •
          </textPath>
        </text>
      </motion.svg>

      {/* Center Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg cursor-pointer"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          whileHover={{ scale: 1.25 }}
        >
          <motion.span
            className="rotate-45 text-teal-900 text-3xl leading-none"
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          >
            ↗
          </motion.span>
        </motion.div>
      </div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/90 flex items-center justify-center">
        <span className="rotate-45 text-teal-900 text-xl leading-none">↗</span>
      </div>
    </div>
  </motion.div>
);

const StonePolymerComposite = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-teal-900"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay to ensure white typography readability */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content container */}
      <div className="relative max-w-6xl w-[92%] mx-auto text-center text-white py-10 md:py-14">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-serif leading-tight mb-3 md:mb-4"
        >
          <span className="block text-4xl md:text-6xl lg:text-7xl">STONE</span>
          <span className="block text-3xl md:text-5xl lg:text-6xl tracking-wide">POLYMER COMPOSITE</span>
        </motion.h1>

        {/* Description (two-line feel on larger screens) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mx-auto max-w-6xl text-sm md:text-base lg:text-[17px] leading-relaxed md:leading-7 opacity-95"
        >
          A flooring that combines the look and feel of real wood with the durability of stone. It is a revolutionary
          solution that eliminates the limitations of traditional laminate and hardwood floors. It gives your space a
          beautiful makeover without any drawbacks of vinyl and laminate flooring. Plus, it is also easy to install and
          doesn't create dust, noise, or require a lot of effort.
        </motion.p>

        {/* Feature row */}
        <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 md:gap-x-10">
          <Feature icon={ShieldCheck} title="ULTIMATE" subtitle="DURABILITY" />
          <Feature icon={Droplets} title="" subtitle="WATERPROOF" />
          <Feature icon={Bug} title="TERMITE" subtitle="RESISTANT" />
          <Feature icon={Hammer} title="QUICK & EASY" subtitle="INSTALLATION" />
        </div>

        {/* Learn more */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-8 md:mt-12 text-sm md:text-base tracking-wider"
        >
          Learn More About
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl"
        >
          WALLEXX
        </motion.h2>

        <CircularCTA />
      </div>
    </section>
  );
};

export default StonePolymerComposite;
