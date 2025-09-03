import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import image1 from "../../../Assets/Quartz/product1.png";
import image2 from "../../../Assets/Quartz/collections1.png";
import image3 from "../../../Assets/Quartz/collections2.png";
import image4 from "../../../Assets/wallex/about/sidebar.png";

// Product Data
const products = [
  { id: 1, name: "COREFLEXX", image: image1, link: "/products/coreflexx" },
  { id: 2, name: "WALLEXX", image: image2, link: "/products/wallexx" },
  { id: 3, name: "FLOOREXX", image: image3, link: "/products/floorexx" },
  { id: 4, name: "CRISTALLOO", image: image4, link: "/products/cristalloo" },
];

const CheckOut = () => {
  // Handle button click
  const handleProductClick = (link) => {
    // Example navigation - you can replace this with react-router's navigate
    window.location.href = link;
  };

  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full px-6 lg:px-12 py-20 max-w-7xl">
        
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">
            Explore More
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
            Our Other Products
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto">
            Discover our range of premium products designed to bring elegance and
            durability to your spaces.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition"
            >
              {/* Product Image */}
              <div className="aspect-square overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-out"
                />
              </div>

              {/* Product Info */}
              <div className="p-4 flex flex-col items-center text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Premium quality and elegant design
                </p>

                {/* Clickable Arrow Button */}
                <motion.button
                  onClick={() => handleProductClick(product.link)}
                  whileHover={{ scale: 1.05 }}
                  className="mt-3 w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 transition cursor-pointer"
                >
                  <FaArrowRight className="text-lg" />
                </motion.button>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-white font-medium text-lg">
                  View Details
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
