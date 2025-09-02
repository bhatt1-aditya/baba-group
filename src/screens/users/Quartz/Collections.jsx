import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import img1 from "../../../Assets/Quartz/collections1.png";
import img2 from "../../../Assets/Quartz/collections2.png";

// ✅ Counter Component with K/L & decimals
const Counter = ({ from, to, duration = 2, decimals = 0 }) => {
  const [count, setCount] = useState(from);

  const startCounting = () => {
    let start = from;
    const end = to;
    const stepTime = 20; // ms
    const step = (end - start) / (duration * 1000 / stepTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, stepTime);
  };

  useEffect(() => {
    startCounting();
  }, [to]);

  // ✅ Format with K / L suffix
  const formatNumber = (num) => {
    if (decimals > 0) {
      return num.toFixed(decimals);
    }
    if (num >= 100000) {
      return `${(num / 100000).toFixed(1)}L`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return Math.floor(num);
  };

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => {
        setCount(from); // reset
        startCounting(); // restart
      }}
      transition={{ duration: 0.6 }}
    >
      {formatNumber(count)}+
    </motion.span>
  );
};

const images = [
  { src: img1, label: "RIO" },
  { src: img2, label: "GLIZZ" },
  { src: img1, label: "GLIZZ" },
  { src: img2, label: "GLIZZ" },
];

const Collections = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Auto-slide horizontally every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* ✅ Statistics Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto md:px-6 lg:px-10 px-4 max-w-7xl py-16"
      >
        <ul className="md:flex grid grid-cols-2 justify-between items-center gap-6 text-center md:text-left">
          <li>
            <h1 className="text-[#ed7326] text-2xl font-semibold">
              <Counter from={0} to={100000} />
            </h1>
            <h2 className="text-base">Products Sold</h2>
          </li>
          <li>
            <h1 className="text-[#ed7326] text-2xl font-semibold">
              <Counter from={0} to={1000} />
            </h1>
            <h2 className="text-base">Collections</h2>
          </li>
          <li>
            <h1 className="text-[#ed7326] text-2xl font-semibold">
              <Counter from={0} to={4.5} decimals={1} />
            </h1>
            <h2 className="text-base">Ratings</h2>
          </li>
          <li>
            <h1 className="text-[#ed7326] text-2xl font-semibold">
              <Counter from={0} to={100} />
            </h1>
            <h2 className="text-base">Outlets</h2>
          </li>
        </ul>
      </motion.div>

      {/* ✅ New Collections Section with Horizontal Slider */}
      <section className="bg-[#f8f4ed] py-16 px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center flex flex-col justify-center items-center"
          >
            <h1 className="text-base font-semibold">New</h1>
            <h2 className="uppercase text-xl font-semibold">Collections</h2>
            <button className="mt-4 px-6 py-2 bg-[#ed7326] text-white rounded-full hover:bg-[#d6611f] transition-all">
              Discover More
            </button>
          </motion.div>

          {/* Right Slider */}
        <div className="col-span-2 overflow-hidden relative">
  <motion.div
    className="flex w-[50%]"
    animate={{ x: `-${currentIndex * 100}%` }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
  >
    {images.map((img, index) => (
      <motion.div
        key={index}
        className="relative min-w-full rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0.6, scale: 0.9 }}
        animate={
          index === currentIndex
            ? { opacity: 1, scale: 1 }
            : { opacity: 0.6, scale: 0.9 }
        }
        transition={{ duration: 0.6 }}
      >
        {/* Image */}
        <img
          src={img.src}
          alt={img.label}
          className="w-full max-h-[400px] object-cover"
        />

        {/* Button Overlay */}
        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#ed7326] text-white py-2 px-6 rounded-full hover:bg-[#d6611f] transition-all">
          {img.label}
        </button>
      </motion.div>
    ))}
  </motion.div>
</div>

        </div>
      </section>
    </div>
  );
};

export default Collections;
