import React from "react";
import { motion } from "framer-motion";
import spcImage from "../../../Assets/new_home/wallexx/spcPanels.png";

// Replace with real images
import img1 from "../../../Assets/new_home/wallexx/spcPanels.png";
import img2 from "../../../Assets/new_home/wallexx/spcPanels.png";
import img3 from "../../../Assets/new_home/wallexx/spcPanels.png";

const WhatsNewRedesign = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Hero Image with Thumbnails */}
        <div className="space-y-6">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-3xl shadow-2xl"
          >
            <motion.img
              src={spcImage}
              alt="Wallex main"
              className="w-full h-96 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-4">
            {[img1, img2, img3].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="overflow-hidden rounded-2xl shadow-md"
              >
                <motion.img
                  src={img}
                  alt={`Wallex ${i}`}
                  className="w-full h-28 object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Discover the <span className="text-green-700">New Era</span> of{" "}
            <span className="text-green-800">WALLEX</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Explore our latest quartz finishes — blending bold aesthetics,
            sustainable innovation, and timeless durability. Our new collection
            sets global design trends while ensuring unmatched quality.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-green-700 text-white font-semibold rounded-full shadow-lg hover:bg-green-800 transition"
          >
            Explore More →
          </motion.a>
        </motion.div>
      </div>

      {/* Floating Blurs for Luxury Effect */}
      <motion.div
        className="absolute -top-10 -left-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-40"
        animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-2xl opacity-50"
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />
    </section>
  );
};

export default WhatsNewRedesign;
