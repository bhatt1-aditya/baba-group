import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Droplets, Bug, Hammer } from "lucide-react";
import inspiration from "../../../Assets/wallex/about/inspiration.png";

const features = [
  { icon: ShieldCheck, title: "ULTIMATE", subtitle: "DURABILITY" },
  { icon: Droplets, title: "", subtitle: "WATERPROOF" },
  { icon: Bug, title: "TERMITE", subtitle: "RESISTANT" },
  { icon: Hammer, title: "QUICK & EASY", subtitle: "INSTALLATION" },
];

const FeatureCard = ({ icon: Icon, title, subtitle }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.05 }}
    className="flex flex-col items-center gap-3 text-white p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg transition"
  >
    <Icon className="w-12 h-12 md:w-14 md:h-14 text-teal-300" strokeWidth={1.5} />
    {title && <p className="text-xs md:text-sm uppercase tracking-widest">{title}</p>}
    <p className="text-base md:text-lg font-medium">{subtitle}</p>
  </motion.div>
);

const CircularCTA = () => (
  <motion.div className="relative mx-auto mt-12 w-40 h-40 md:w-52 md:h-52 cursor-pointer" whileHover={{ scale: 1.1 }}>
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
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <motion.span className="rotate-45 text-teal-900 text-3xl">↗</motion.span>
      </motion.div>
    </div>
  </motion.div>
);

const StonePolymerComposite = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-black"
      style={{ backgroundImage: `url(${inspiration})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div className="relative max-w-6xl w-[92%] mx-auto text-center text-white py-12 md:py-16">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-serif leading-tight mb-4"
        >
          <span className="block text-4xl md:text-6xl lg:text-7xl">STONE</span>
          <span className="block text-3xl md:text-5xl lg:text-6xl tracking-wide">POLYMER COMPOSITE</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mx-auto max-w-3xl text-sm md:text-base lg:text-[17px] leading-relaxed md:leading-7 opacity-95"
        >
          A flooring that combines the look and feel of real wood with the durability of stone. Revolutionary solution
          that eliminates limitations of traditional laminate and hardwood floors. Easy to install, dust-free, and noise-free.
        </motion.p>

        {/* Feature cards */}
        <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {features.map((f, idx) => (
            <FeatureCard key={idx} {...f} />
          ))}
        </div>

        {/* Learn more */}
        <motion.p className="mt-10 md:mt-14 text-sm md:text-base tracking-wider">
          Learn More About
        </motion.p>
        <motion.h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-2">
          WALLEXX
        </motion.h2>

        {/* Circular CTA */}
        <CircularCTA />
      </div>
    </section>
  );
};

export default StonePolymerComposite;
