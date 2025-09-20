import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import image1 from "../../../Assets/Quartz/product1.png";
import image2 from "../../../Assets/Quartz/collections1.png";
import image3 from "../../../Assets/Quartz/collections2.png";
import image4 from "../../../Assets/wallex/about/sidebar.png";
import { useNavigate } from "react-router-dom";

// Product data
const products = [
  { id: 1, name: "COREFLEXX", image: image1, link: "/corflexx" },
  { id: 2, name: "WALLEXX", image: image2, link: "/wallexx" },
  { id: 3, name: "FLOOREXX", image: image3, link: "/floorrex" },
  { id: 4, name: "CRISTALLOO", image: image4, link: "/cristalo-flexx" },
];

const CheckOut = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black py-16 md:px-6 xl:px-10 px-4 text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-gray-400 tracking-wide uppercase text-sm mb-2">
          Explore More
        </p>
        <h2 className="text-4xl md:text-5xl font-serif tracking-wider">
          Other Products
        </h2>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="relative group rounded-2xl overflow-hidden bg-gray-900 border border-gray-700 shadow-lg hover:shadow-2xl transition"
          >
            {/* Product Image */}
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500 grayscale group-hover:grayscale-0"
              />
            </div>

            {/* Product Name + Arrow (Bottom, appears on hover) */}
            <div
              className="absolute bottom-0 left-0 w-full bg-black/80 text-center px-4 py-3 opacity-0 translate-y-full 
              group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-between"
            >
              <h3 className="text-lg font-semibold text-white tracking-wide">
                {product.name}
              </h3>

              {/* Arrow button */}

              <FaArrowRight
                className="text-lg cursor-pointer"
                onClick={() => {
                  navigate(`${product.link}`);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CheckOut;
