import React from "react";
import { motion } from "framer-motion";

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
    <section className="bg-white py-12">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-base text-gray-500 uppercase tracking-widest">
          Explore Floorrex
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-wide">
          PRODUCTS
        </h1>
      </div>

      {/* Infinite Scroll */}
      <div className="relative overflow-hidden w-full">
        <motion.div
          className="flex gap-4 sm:gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...products, ...products].map((product, index) => (
            <div
              key={index}
              className="min-w-[240px] sm:min-w-[260px] bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex-shrink-0"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-40 sm:h-44 object-cover"
                />
                <span className="absolute top-2 left-2 bg-gray-700 text-white text-xs px-2 py-1 rounded-md">
                  BESTSELLER
                </span>
                <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow hover:scale-110 transition">
                  🤍
                </button>
              </div>

              {/* Product Details */}
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-lg text-gray-800">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>
                <p className="mt-2 text-gray-700 font-medium">
                  ⭐ {product.rating}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300">
          DISCOVER MORE ⬇
        </button>
      </div>
    </section>
  );
};

export default InfiniteScrollProducts;
