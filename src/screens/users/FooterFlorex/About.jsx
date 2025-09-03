import React from "react";
import homeImage from "../../../Assets/footer_florex/about2.png";
import { motion } from "framer-motion";

const About = () => {

  const CircularCTA = () => (
    <motion.div className="relative w-40 h-40 md:w-52 md:h-52 mx-auto">
      {/* Rotating Circular Text */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute w-full h-full"
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
          className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-800/90 flex items-center justify-center shadow-lg cursor-pointer"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          whileHover={{ scale: 1.25 }}
        >
          <motion.span
            className="rotate-45 text-white text-3xl leading-none"
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          >
            ↗
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section className="relative bg-black text-white py-24 px-4 md:px-10 overflow-hidden">
      {/* Background Image */}
      <div
        className="relative w-full rounded-3xl min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${homeImage})` }}
      >
        {/* Overlay for dark effect */}
        <div className="absolute inset-0 bg-black/60 rounded-3xl z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center gap-4 md:gap-6">
          <motion.h2
            className="text-3xl md:text-4xl font-light tracking-wide text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Learn More About
          </motion.h2>
          <motion.h1
            className="text-5xl md:text-6xl font-bold uppercase"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Cristalloo
          </motion.h1>
        </div>

        {/* Circular CTA */}
        <div className="absolute bottom-10 md:bottom-16">
          <CircularCTA />
        </div>

        {/* Floating Animated Shapes */}
        <motion.div
          className="absolute -top-20 -left-20 w-48 h-48 rounded-full bg-white/5 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 8, repeatType: "mirror" }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-60 h-60 rounded-full bg-gray-700/10 blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 10, repeatType: "mirror" }}
        />
      </div>
    </section>
  );
};

export default About;
