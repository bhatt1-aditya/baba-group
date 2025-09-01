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
      <div className="text-center mb-8">
        <h2 className="text-lg text-gray-600">Explore Floorrex</h2>
        <h1 className="text-5xl font-bold text-gray-900 tracking-wide">PRODUCTS</h1>
      </div>

      <div className="relative overflow-hidden w-full">
        {/* Infinite Scroll Container */}
        <motion.div
          className="flex gap-6"
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
              className="min-w-[280px] bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0"
            >
              <div className="relative">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 left-2 bg-yellow-800 text-white px-2 py-1 text-xs rounded">
                  BESTSELLER
                </span>
                <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
                  🤍
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                <p className="text-sm text-gray-500">{product.description}</p>
                <p className="mt-2 text-yellow-600">⭐ {product.rating}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-yellow-800 text-white px-6 py-3 rounded-full hover:bg-yellow-700 transition">
          DISCOVER MORE ⬇
        </button>
      </div>
    </section>
  );
};

export default InfiniteScrollProducts;
