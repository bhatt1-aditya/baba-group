"use client";

import { motion, useAnimation, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Users, Award, Globe, Briefcase } from "lucide-react"; // ✅ modern icons

const stats = [
  { value: 100, suffix: "+", label: "Current Clients", icon: Users },
  { value: 20, suffix: "+", label: "Years of Experience", icon: Briefcase },
  { value: 25, suffix: "+", label: "Awards Won", icon: Award },
  { value: 15, suffix: "+", label: "Availability Worldwide", icon: Globe },
];

// ✅ Framer Motion number animation
const AnimatedNumber = ({ value }) => {
  const controls = useAnimation();
  const [displayValue, setDisplayValue] = useState(0);
  const springValue = useSpring(0, { stiffness: 80, damping: 20 });

  useEffect(() => {
    controls.start({ count: value, transition: { duration: 2 } });
    springValue.set(value);
    const unsubscribe = springValue.on("change", (latest) =>
      setDisplayValue(Math.floor(latest))
    );
    return () => unsubscribe();
  }, [value, controls, springValue]);

  return <motion.span>{displayValue}</motion.span>;
};

const StatsSection = () => {
  return (
    <section className="relative px-4 md:px-6 lg:px-10 py-20 bg-gradient-to-b from-white via-green-50 to-white overflow-hidden">
      {/* Background accents */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute -top-20 -left-20 w-72 h-72 bg-green-200 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-green-300 rounded-full blur-3xl"
      />

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
          Our Impact in Numbers
        </h2>
        <div className="mt-3 mx-auto w-16 h-1 bg-green-600 rounded-full"></div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center relative z-10">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.07, rotateX: 3, rotateY: -3 }}
              className="bg-white/70 backdrop-blur-lg border border-green-100 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:border-green-300 transition-all"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="p-3 rounded-full bg-green-100 text-green-700 shadow-inner"
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
              </div>

              {/* Number */}
              <p className="text-green-700 text-4xl md:text-5xl font-extrabold">
                <AnimatedNumber value={stat.value} />
                {stat.suffix}
              </p>

              {/* Label */}
              <p className="text-gray-700 text-sm md:text-base mt-3 font-medium">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;
