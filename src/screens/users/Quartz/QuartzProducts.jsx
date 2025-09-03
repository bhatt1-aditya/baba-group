import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import productImg from "../../../Assets/core_flexx/core_flex_products/products.png";

// ✅ Product Data
const products = [
  { id: 1, title: "CFX-411", tag: "NEW" },
  { id: 2, title: "CFX-412" },
  { id: 3, title: "CFX-413", tag: "TRENDING" },
  { id: 4, title: "CFX-414", tag: "BESTSELLER" },
  { id: 5, title: "CFX-415" },
  { id: 6, title: "CFX-416" },
  { id: 7, title: "CFX-417" },
  { id: 8, title: "CFX-418" },
  { id: 9, title: "CFX-419" },
  { id: 10, title: "CFX-420" },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const QuartzProducts = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-6 lg:px-10">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="text-center mb-10"
      >
        <p className="text-gray-500 text-sm tracking-wide uppercase">
          Explore Baba Quartz
        </p>
        <h2 className="text-3xl md:text-4xl font-serif tracking-wide">
          Our Products
        </h2>
      </motion.div>

      {/* Horizontal Scrollable Slider */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="relative"
      >
        <div className="flex overflow-x-auto space-x-6 no-scrollbar px-2 md:px-4">
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex-none w-64 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition relative group"
            >
              {/* Tag Badge */}
              {product.tag && (
                <span className="absolute top-3 left-3 bg-[#ed7326] text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                  {product.tag}
                </span>
              )}

              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={productImg}
                  alt={product.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Product Details */}
              <div className="p-4 text-center">
                <p className="text-gray-500 text-sm mb-1">Coreflexx</p>
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  Luxurious marble tiles with natural veining patterns, perfect
                  for modern interiors.
                </p>
                <button className="mt-4 px-4 py-2 flex items-center justify-center gap-2 text-sm border border-gray-800 bg-black text-white rounded-full hover:bg-white hover:text-black transition duration-300">
                  Explore <FaArrowRight className="text-xs" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default QuartzProducts;
