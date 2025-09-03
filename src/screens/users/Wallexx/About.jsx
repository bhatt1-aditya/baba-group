import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  { name: "COREFLEXX", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
  { name: "BABA QUARTZ", image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed" },
  { name: "CRISTALLOO", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6" },
  { name: "FLOOREXX", image: "https://images.unsplash.com/photo-1616047006789-bf8b0c6a58d6" },
];

export default function ProductShowcase() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleSelect = (index) => {
    setDirection(index > selectedIndex ? 1 : -1);
    setSelectedIndex(index);
  };

  return (
    <section className="bg-[#044d42] text-white py-16 px-4 flex flex-col items-center">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h3 className="text-lg font-light mb-1">Checkout our</h3>
        <h2 className="text-5xl md:text-6xl font-serif tracking-wider">
          OTHER PRODUCTS
        </h2>
      </motion.div>

      {/* Big Image Showcase */}
      <div className="w-full max-w-7xl h-[500px] md:h-[600px] rounded-3xl overflow-hidden relative shadow-2xl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={products[selectedIndex].image}
            src={products[selectedIndex].image}
            alt={products[selectedIndex].name}
            className="absolute w-full h-full object-cover rounded-3xl"
            custom={direction}
            initial={{ x: direction > 0 ? 500 : -500, opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: direction > 0 ? -500 : 500, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Centered Buttons */}
      <motion.div
        className="flex mt-8 gap-6 justify-center flex-wrap"
      >
        {products.map((product, index) => (
          <motion.button
            key={product.name}
            onClick={() => handleSelect(index)}
            className={`px-8 py-3 rounded-3xl font-semibold shadow-md transition-all duration-300 border-2
              ${
                selectedIndex === index
                  ? "bg-white text-[#044d42] border-white"
                  : "bg-transparent text-white border-white hover:bg-white hover:text-[#044d42]"
              }`}
            whileHover={{ scale: 1.1 }}
          >
            {product.name}
          </motion.button>
        ))}
      </motion.div>
    </section>
  );
}
