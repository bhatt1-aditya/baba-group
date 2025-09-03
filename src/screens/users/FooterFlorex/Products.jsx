import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const products = [
  {
    id: 1,
    title: "CALCATTA ANGELO",
    category: "STONA",
    description: "Luxurious marble tiles with natural veining patterns.",
    rating: "4.5+ Ratings",
    img: "https://source.unsplash.com/600x400/?luxury,interior",
  },
  {
    id: 2,
    title: "CALCATTA ANGELO",
    category: "STONA",
    description: "Luxurious marble tiles with natural veining patterns.",
    rating: "4.5+ Ratings",
    img: "https://source.unsplash.com/600x400/?bedroom,modern",
  },
  {
    id: 3,
    title: "CALCATTA ANGELO",
    category: "STONA",
    description: "Luxurious marble tiles with natural veining patterns.",
    rating: "4.5+ Ratings",
    img: "https://source.unsplash.com/600x400/?livingroom,interior",
  },
  {
    id: 4,
    title: "CALCATTA ANGELO",
    category: "STONA",
    description: "Luxurious marble tiles with natural veining patterns.",
    rating: "4.5+ Ratings",
    img: "https://source.unsplash.com/600x400/?sofa,interior",
  },
];

const InfiniteScrollProducts = () => {
  return (
    <section className="bg-black text-white py-20 relative overflow-hidden">
      {/* Floating Background Blobs */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gray-700/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Section Title */}
      <div className="relative text-center mb-16 z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          PRODUCTS
        </motion.h2>
        <motion.p
          className="mt-3 text-lg md:text-xl text-gray-400"
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
          className="flex gap-8 px-4"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...products, ...products].map((product, index) => (
            <motion.div
              key={index}
              className="min-w-[280px] max-w-sm bg-black/70 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden flex-shrink-0 border border-gray-800 hover:shadow-white/20 transition-shadow duration-500 relative"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-56 object-cover"
                />
                <motion.span
                  className="absolute top-3 left-3 bg-white/20 text-gray-800 px-3 py-1 text-xs rounded-full font-medium shadow-md"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
                >
                  BESTSELLER
                </motion.span>
                <motion.button
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart className="w-5 h-5 text-gray-800 hover:text-gray-400 transition-colors" />
                </motion.button>
              </div>

              {/* Product Info */}
              <div className="p-5 text-center">
                <h3 className="font-bold text-xl text-white tracking-tight">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-400">{product.category}</p>
                <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                  {product.description}
                </p>
                <p className="mt-3 text-gray-400 font-medium">
                  ⭐ {product.rating}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Discover More Button */}
      <div className="flex justify-center mt-12 z-10 relative">
        <motion.button
          className="bg-gray-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:bg-gray-600 transition"
          whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0], y: [0, -2, 2, 0] }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -4, 0], transition: { repeat: Infinity, duration: 2 } }}
        >
          DISCOVER MORE ⬇
        </motion.button>
      </div>
    </section>
  );
};

export default InfiniteScrollProducts;
