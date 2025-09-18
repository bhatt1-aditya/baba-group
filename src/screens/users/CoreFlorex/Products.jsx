import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import image1 from "../../../Assets/core_flexx/products/products2.png"
const products = [
  {
    id: 1,
    title: "CALCATTA ANGELO",
    category: "STONA",
    description: "Luxurious marble tiles with natural veining patterns.",
    rating: "4.5+ Ratings",
    img:image1,
  },
  {
    id: 2,
    title: "CALCATTA ANGELO",
    category: "STONA",
    description: "Luxurious marble tiles with natural veining patterns.",
    rating: "4.5+ Ratings",
    img: image1,
  },
  {
    id: 3,
    title: "CALCATTA ANGELO",
    category: "STONA",
    description: "Luxurious marble tiles with natural veining patterns.",
    rating: "4.5+ Ratings",
    img: image1,
  },
  {
    id: 4,
    title: "CALCATTA ANGELO",
    category: "STONA",
    description: "Luxurious marble tiles with natural veining patterns.",
    rating: "4.5+ Ratings",
    img: image1,
  },
];

const InfiniteScrollProducts = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-200 py-16 relative overflow-hidden">
      {/* Floating gradient background for depth */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-100 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.35, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Section Title */}
      <div className="relative text-center mb-16">
        <motion.h2
          className="text-6xl font-extrabold text-gray-900 tracking-wide drop-shadow-md"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          PRODUCTS
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Explore the finest selection from Floorrex
        </motion.p>
      </div>

      {/* Infinite Scroll Product Cards */}
      <div className="relative overflow-hidden w-full">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...products, ...products].map((product, index) => (
            <motion.div
              key={index}
              className="min-w-[280px] max-w-sm bg-white/80 my-10 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden flex-shrink-0 border border-gray-100 hover:shadow-2xl transition-shadow duration-300 relative"
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-56 object-cover"
                />
                <motion.span
                  className="absolute top-3 left-3 bg-yellow-600 text-white px-3 py-1 text-xs rounded-full shadow-lg font-medium"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                >
                  BESTSELLER
                </motion.span>
                <motion.button
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors" />
                </motion.button>
              </div>

              {/* Product Info */}
              <div className="p-5 text-center">
                <h3 className="font-bold text-xl text-gray-900 tracking-tight">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
                <p className="mt-3 text-yellow-600 font-medium">
                  ⭐ {product.rating}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <motion.button
          className="bg-yellow-600 text-white px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-2xl hover:bg-yellow-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          DISCOVER MORE ⬇
        </motion.button>
      </div>
    </section>
  );
};

export default InfiniteScrollProducts;
