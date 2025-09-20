import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import img1 from "../../../Assets/Quartz/collections1.png";
import img2 from "../../../Assets/Quartz/collections2.png";

// ------------------- Counter Component -------------------
const Counter = ({ from, to, duration = 2, decimals = 0 }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = from;
    const stepTime = 20;
    const step = (to - start) / (duration * 1000 / stepTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= to) {
        clearInterval(timer);
        setCount(to);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [from, to, duration]);

  const formatNumber = (num) => {
    if (decimals > 0) return num.toFixed(decimals);
    if (num >= 100000) return `${(num / 100000).toFixed(1)}L`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return Math.floor(num);
  };

  return <span>{formatNumber(count)}+</span>;
};

// ------------------- Data -------------------
const images = [
  { src: img1, label: "RIO" },
  { src: img2, label: "GLIZZ" },
  { src: img1, label: "NOVA" },
  { src: img2, label: "ZENITH" },
];

const stats = [
  { value: 100000, label: "Products Sold" },
  { value: 1000, label: "Collections" },
  { value: 4.8, label: "Ratings", decimals: 1 },
  { value: 120, label: "Outlets" },
];

// ------------------- Main Component -------------------
const Collections = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* ===== Floating Statistics ===== */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-gray-100"
              whileHover={{ y: -8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#ed7326]">
                <Counter from={0} to={stat.value} decimals={stat.decimals || 0} />
              </h2>
              <p className="mt-2 text-gray-700 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ===== Split Layout ===== */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-8 py-20">
        {/* ---- Left Section (Text) ---- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center text-center md:text-left"
        >
          <span className="text-gray-500 uppercase text-sm tracking-widest">
            Exclusive Collection
          </span>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Discover The Future
            <span className="block text-[#ed7326]">Of Luxury Interiors</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-md">
            Crafted with precision, designed for elegance. Our latest collection
            blends modern technology with timeless luxury to transform your space.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 px-8 py-3 bg-[#ed7326] text-white rounded-full shadow-md hover:bg-[#d6611f] transition-all w-fit mx-auto md:mx-0"
          >
            Explore More
          </motion.button>
        </motion.div>

        {/* ---- Right Section (Carousel) ---- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden"
        >
          <div className="relative w-full overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  className="relative min-w-full rounded-2xl overflow-hidden shadow-lg group"
                  initial={{ opacity: 0.9, scale: 0.95 }}
                  animate={
                    index === currentIndex
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0.9, scale: 0.95 }
                  }
                  transition={{ duration: 0.6 }}
                >
                  {/* Image */}
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full max-h-[480px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <button className="px-6 py-2 bg-[#ed7326] text-white rounded-full shadow-lg hover:bg-[#d6611f] transition">
                      View {img.label}
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {images.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-[#ed7326]" : "bg-gray-300"
                }`}
                animate={{
                  scale: currentIndex === index ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Collections;
