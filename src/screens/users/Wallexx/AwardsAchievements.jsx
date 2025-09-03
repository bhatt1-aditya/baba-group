import React from 'react';
import { motion } from 'framer-motion';
import image from "../../../Assets/wallex/about/image3.png";

const achievements = [
  "ISO Certified Company",
  "Best SPC Product Award 2022",
  "Global Distributor Network",
  "Excellence in Innovation 2021",
  "Customer Choice Award 2020",
  "Sustainability Leader 2023",
];

const AwardsAchievements = () => {
  return (
    <section className="relative bg-[#004736] py-20 px-4 md:px-8 lg:px-16 flex justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-40"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#004736]/90 to-[#004736]/50"></div>

      {/* Heading */}
      <motion.h2
        className="relative z-10 text-white text-3xl md:text-5xl font-serif mb-16 text-center drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        AWARDS & ACHIEVEMENTS
      </motion.h2>

      {/* Achievements Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl text-white text-center hover:shadow-[0_10px_50px_rgba(0,255,192,0.4)] hover:-translate-y-3 transition-all duration-500 cursor-pointer"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            <p className="font-medium text-sm md:text-base">{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AwardsAchievements;
