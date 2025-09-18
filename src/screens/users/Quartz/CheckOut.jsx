import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import image1 from "../../../Assets/Quartz/product1.png";
import image2 from "../../../Assets/Quartz/collections1.png";
import image3 from "../../../Assets/Quartz/collections2.png";
import image4 from "../../../Assets/wallex/about/sidebar.png";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "COREFLEXX", image: image1, link: "/corflexx" },
  { id: 2, name: "WALLEXX", image: image2, link: "/wallexx" },
  { id: 3, name: "FLOOREXX", image: image3, link: "/floorrex" },
  { id: 4, name: "CRISTALLOO", image: image4, link: "/cristalo-flexx" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function CheckOut() {
  const navigate = useNavigate();
  return (
    <div className="relative bg-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Floating decorative shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-40"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center relative z-10"
      >
        <p className="text-orange-500 tracking-widest uppercase text-sm mb-2">
          Explore More
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Other Products
        </h2>
      </motion.div>

      {/* Products Grid */}
      <motion.div
        className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            custom={index}
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className="relative group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
            {/* Product Image */}
            <div className="aspect-square overflow-hidden">
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
              />
            </div>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition duration-500">
              <h3 className="text-white text-lg font-semibold">
                {product.name}
              </h3>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition"
                onClick={() => {
                  navigate(`${product.link}`);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <FaArrowRight />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
