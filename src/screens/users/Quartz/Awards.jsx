import React from "react";
import { motion } from "framer-motion";

const AwardsSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-[#fff5eb] py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#ff7f32] tracking-wide">
            Awards & Achievements
          </h2>
          <div className="w-24 h-1 bg-[#ff7f32] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Celebrating our milestones and global recognition over the years.
          </p>
        </motion.div>

        {/* Image Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <ImageCard
              src="https://images.unsplash.com/photo-1600566753151-384129cf4e1f?auto=format&fit=crop&w=800&q=80"
              title="Best Flooring Innovation"
            />
            <ImageCard
              src="https://images.unsplash.com/photo-1600566753151-384129cf4e1f?auto=format&fit=crop&w=801&q=80"
              title="International Design Award"
            />
          </div>

          {/* Center Featured Award */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1586201375761-83865001e17b?auto=format&fit=crop&w=900&q=80"
              alt="Center Award"
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-white text-2xl font-semibold">
                Global Excellence Award
              </h3>
              <p className="text-[#ff7f32] mt-2">2024</p>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-8">
            <ImageCard
              src="https://images.unsplash.com/photo-1556911073-52527ac437f5?auto=format&fit=crop&w=800&q=80"
              title="Sustainable Design Award"
            />
            <ImageCard
              src="https://images.unsplash.com/photo-1616627980343-1d295579ff11?auto=format&fit=crop&w=800&q=80"
              title="Best Exporter Recognition"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ImageCard = ({ src, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative group rounded-2xl overflow-hidden shadow-lg"
    >
      <img
        src={src}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h4 className="text-white text-lg font-semibold">{title}</h4>
      </div>
    </motion.div>
  );
};

export default AwardsSection;
