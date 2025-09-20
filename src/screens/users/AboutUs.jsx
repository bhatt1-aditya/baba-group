import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

// Features data
const sections = [
  {
    title: "Our Mission",
    content:
      "Deliver world-class products with cutting-edge designs and eco-conscious manufacturing while building trust globally.",
    icon: "🎯",
  },
  {
    title: "Our Vision",
    content:
      "Be the leading force in innovative surface solutions, creating spaces that inspire and endure for generations.",
    icon: "🌟",
  },
  {
    title: "Our Values",
    content:
      "Quality, Innovation, Sustainability, and Customer Excellence – pillars that drive every decision.",
    icon: "💎",
  },
];

const InteractiveCard = ({ section, active }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);
  const shadowX = useTransform(x, [-50, 50], [5, -5]);
  const shadowY = useTransform(y, [-50, 50], [5, -5]);

  return (
    <motion.div
      className="relative group cursor-pointer"
      style={{ perspective: 1000 }}
      whileHover={{ scale: 1.05 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div
        className="bg-white rounded-3xl p-8 shadow-lg"
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          boxShadow: `${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.15)`,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        <motion.div
          className="text-5xl mb-4"
          animate={{
            scale: active ? 1.2 : 1,
            rotate: active ? [0, 10, -10, 0] : 0,
          }}
          transition={{ duration: 0.6 }}
        >
          {section.icon}
        </motion.div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
          {section.title}
        </h3>
        <p className="text-gray-700 leading-relaxed">{section.content}</p>
      </motion.div>

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-300/20 to-pink-300/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-300"
      />
    </motion.div>
  );
};

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sections.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden py-24">
      {/* Hero Title */}
      <motion.div
        className="text-center mb-20 relative z-10"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-4"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          ABOUT US
        </motion.h1>
        <motion.div
          className="mx-auto h-1 w-32 md:w-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "128px" }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </motion.div>

      {/* Feature Cards */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        {sections.map((section, index) => (
          <InteractiveCard
            key={index}
            section={section}
            active={activeSection === index}
          />
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        className="relative z-10 mt-20 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          className="relative w-40 h-40 md:w-52 md:h-52 cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
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
              className="fill-gray-900 text-[12px] md:text-[14px] tracking-[4px]"
              style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
            >
              <textPath href="#circlePath" startOffset="0%">
                EXPLORE MORE • ABOUT US • EXPLORE MORE • ABOUT US •
              </textPath>
            </text>
          </motion.svg>

          {/* Center Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-900 flex items-center justify-center shadow-lg text-white text-2xl font-bold"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              ↗
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
