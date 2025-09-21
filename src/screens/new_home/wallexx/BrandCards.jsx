import React, { useState } from "react";
import { motion } from "framer-motion";
import image1 from "../../../Assets/new_home/wallexx/brandCard.png";

const brands = [
  {
    name: "FLOORREX",
    desc: "18 Classic design styles to elevate your space, no matter the trend. Featuring high performance construction built to endure.",
    logo: "FLOORREX",
    logoBg: "bg-amber-600",
    image: image1,
  },
  {
    name: "COREFLEXX",
    desc: "18 Classic design styles to elevate your space, no matter the trend. Featuring high performance construction built to endure.",
    logo: "COREFLEXX",
    logoBg: "bg-gray-700",
    image: image1,
  },
  {
    name: "BABA QUARTZ",
    desc: "18 Classic design styles to elevate your space, no matter the trend. Featuring high performance construction built to endure.",
    logo: "WALLEX",
    logoBg: "bg-green-700",
    image: image1,
  },
  {
    name: "CRISTALLOO",
    desc: "18 Classic design styles to elevate your space, no matter the trend. Featuring high performance construction built to endure.",
    logo: "CRISTALLOO",
    logoBg: "bg-black",
    image: image1,
  },
];

const BrandCards = () => {
  return (
    <div className="px-4 lg:px-10 md:px-6 md:py-12 max-w-6xl mx-auto relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {brands.map((brand, index) => (
          <InteractiveCard key={index} brand={brand} />
        ))}
      </div>
    </div>
  );
};

const InteractiveCard = ({ brand }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      className="relative rounded-lg overflow-hidden cursor-pointer"
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Glow following mouse */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, rgba(52,211,153,0.35), transparent 80%)`,
        }}
      />

      {/* Card content */}
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-start gap-6 relative z-10">
        <div className="flex-1 flex flex-col">
          <h3 className="text-lg font-bold">{brand.name}</h3>
          <p className="text-gray-500 text-sm mt-1 w-full md:w-[80%]">{brand.desc}</p>

          {/* Logo Circle */}
          <motion.div
            className={`flex items-center justify-center mt-4 ${brand.logoBg} rounded-full w-20 h-20 text-white font-semibold text-xs`}
            whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0], transition: { duration: 0.6 } }}
          >
            {brand.logo}
          </motion.div>

          {/* Features and Image */}
          <div className="flex flex-col md:flex-row gap-4 mt-4 items-start">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>⚙ Ultra Strong Layered Core</li>
              <li>💧 Waterproof</li>
              <li>🌱 Greenguard Certified</li>
              <li>🛡 Warranty</li>
            </ul>

            <div className="flex-shrink-0">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-48 h-36 object-cover rounded-md"
              />
            </div>
          </div>

          {/* Button */}
          <motion.button
            className="mt-4 bg-green-700 text-white px-4 py-2 rounded text-sm"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(52, 211, 153, 0.5)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Explore Collection
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default BrandCards;
