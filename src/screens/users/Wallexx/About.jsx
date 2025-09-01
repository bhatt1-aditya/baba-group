import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    name: "COREFLEXX",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", // Living room
  },
  {
    name: "BABA QUARTZ",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed", // Modern interior
  },
  {
    name: "CRISTALLOO",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6", // Stylish room
  },
  {
    name: "FLOOREXX",
    image: "https://images.unsplash.com/photo-1616047006789-bf8b0c6a58d6", // Cozy design
  },
];

export default function ProductShowcase() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleSelect = (index) => {
    setDirection(index > selectedIndex ? 1 : -1); // right = 1, left = -1
    setSelectedIndex(index);
  };

  return (
    <div className="bg-[#044d42] text-white py-10 flex flex-col items-center">
      {/* Heading */}
      <h3 className="text-lg font-light">Checkout our</h3>
      <h2 className="text-3xl font-serif tracking-wider mb-6">
        OTHER PRODUCTS
      </h2>

      {/* Image with animation */}
      <div className="w-[90%] max-w-5xl rounded-xl overflow-hidden shadow-xl relative h-[350px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={products[selectedIndex].image}
            src={products[selectedIndex].image}
            alt={products[selectedIndex].name}
            className="absolute top-0 left-0 w-full h-full object-cover"
            custom={direction}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-5 flex-wrap justify-center">
        {products.map((product, index) => (
          <button
            key={product.name}
            onClick={() => handleSelect(index)}
            className={`px-6 py-2 rounded-lg font-medium shadow-md transition-all duration-300 
              ${
                selectedIndex === index
                  ? "bg-green-700 text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
          >
            {product.name}
          </button>
        ))}
      </div>
    </div>
  );
}
