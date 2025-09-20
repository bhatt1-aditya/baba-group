// StatsSection.jsx
import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import factoryImage from "../../../Assets/new_home/homeimage5.png";

const stats = [
  { value: 100, label: "Current Clients" },
  { value: 20, label: "Years of Experience" },
  { value: 25, label: "Awards Won" },
  { value: 15, label: "Availability Worldwide" },
];

const StatsSection = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [progress, setProgress] = useState(stats.map(() => 0));
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const interval = 30; // update interval
    const steps = duration / interval;

    stats.forEach((stat, idx) => {
      let start = 0;
      const increment = stat.value / steps;
      const progressIncrement = 100 / steps;

      const counter = setInterval(() => {
        start += increment;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[idx] = Math.ceil(start);
          return newCounts;
        });

        setProgress((prev) => {
          const newProgress = [...prev];
          newProgress[idx] = Math.min(newProgress[idx] + progressIncrement, 100);
          return newProgress;
        });
      }, interval);

      setTimeout(() => clearInterval(counter), duration);
    });
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="px-4 md:px-6 lg:px-10 md:pb-16 pb-6 text-center bg-gray-50 relative overflow-hidden rounded-xl shadow-lg"
    >
      {/* Background image */}
      <img
        src={factoryImage}
        alt="Factory"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      {/* Stats Grid */}
      <motion.div
        className="relative grid grid-cols-2 md:grid-cols-4 gap-8 md:mb-12 mb-8 mt-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="relative p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-default flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 rounded-b-xl overflow-hidden">
              <motion.div
                className="h-full bg-orange-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress[idx]}%` }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </div>

            <motion.p
              className="text-orange-500 text-3xl md:text-4xl font-bold mb-2"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {counts[idx]}+
            </motion.p>
            <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.p
        className="text-gray-700 mt-12 md:text-lg text-sm max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        Our achievements reflect our commitment to quality, reliability, and
        excellence in every project we deliver worldwide.
      </motion.p>
    </section>
  );
};

export default StatsSection;
