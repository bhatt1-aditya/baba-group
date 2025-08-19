import React from "react";
import { motion } from "framer-motion";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import productImg from "../../../Assets/core_flexx/core_flex_products/products.png";

const products = [
  { id: 1, title: "CFX-411", tag: "NEW" },
  { id: 2, title: "CFX-411" },
  { id: 3, title: "CFX-411" },
  { id: 4, title: "CFX-411", tag: "BESTSELLER" },
];

// ✅ Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const QuartzProducts = () => {
  return (
    <section className="bg-gray-50 py-16 md:px-6 lg:px-10 px-4">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }} // 🔄 triggers every visit
        className="text-center mb-12"
      >
        <p className="text-gray-500 text-sm tracking-wide">
          Explore Baba Quartz
        </p>
        <h2 className="text-3xl md:text-4xl font-serif tracking-wide">
          PRODUCTS
        </h2>
        {/* <div className="flex gap-10 pt-10 justify-center items-center">
          <h1>OVERSEAS</h1>
          <h1>CRISTALLOO</h1>
        </div> */}
      </motion.div>

      {/* Product grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            className="bg-white rounded-xl flex shadow-md overflow-hidden relative hover:shadow-lg transition-shadow duration-300"
          >
            <div>
              {/* Tag badge */}
              {product.tag && (
                <span className="absolute top-3 bg-[#ed7326] text-white lg:text-lg text-[12px] m-1 font-semibold px-3 py-1 z-10 rounded-r-full">
                  {product.tag}
                </span>
              )}

              {/* Image */}
              <div className="relative">
                <img
                  src={productImg}
                  alt={product.title}
                  className="w-full h-52 object-cover p-1 rounded-2xl"
                />
                {/* Pagination dots */}
                <div className="flex justify-center mt-2 space-x-2 absolute bottom-2 w-full">
                  <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                  <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                  <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 text-center">
              <p className="text-gray-500 text-sm">Coreflexx</p>
              <h3 className="md:text-2xl text-xl font-semibold">
                {product.title}
              </h3>
              <p className="text-gray-500 lg:text-lg font-semibold text-sm mt-2">
                Luxurious marble tiles with natural veining patterns...Read more.
              </p>
              <button className="mt-4 px-4 py-1 border border-gray-800 text-white bg-black rounded-full text-sm hover:bg-white hover:text-gray-800 transition">
                EXPLORE
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Load more */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="flex justify-center gap-1 mt-12 flex-col items-center animate-bounce"
      >
        <h1 className="text-black text-center uppercase">Load More</h1>
        <FaRegArrowAltCircleDown className="text-xl" />
      </motion.div>
    </section>
  );
};

export default QuartzProducts;
