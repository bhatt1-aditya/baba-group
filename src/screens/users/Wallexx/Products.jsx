import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import productImg from "../../../Assets/core_flexx/core_flex_products/products.png";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

// Products data
const products = [
  { id: 1, title: "WLX-311", tag: "NEW" },
  { id: 2, title: "WLX-311", tag: "NEW" },
  { id: 3, title: "WLX-311" },
  { id: 4, title: "WLX-311", tag: "BESTSELLER" },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const CoreFlexxProducts = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  // Trigger animation when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setAnimate(true);
          else setAnimate(false); // reset so it animates again on re-entry
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#044d42] py-16 md:px-6 lg:px-10 px-4"
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.p
          className="text-white text-sm tracking-wide"
          variants={fadeUp}
          custom={0}
        >
          Explore Coreflexx
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl font-serif tracking-wide text-white"
          variants={fadeUp}
          custom={0.2}
        >
          PRODUCTS
        </motion.h2>
      </motion.div>

      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-xl flex md:flex-row flex-col shadow-md overflow-hidden relative hover:shadow-lg transition-shadow duration-300"
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
            variants={zoomIn}
            custom={i * 0.2}
          >
            <div>
              {/* Tag badge */}
              {product.tag && (
                <span className="absolute top-3 bg-[#044d42] text-white lg:text-lg text-[12px] m-1 font-semibold px-3 py-1 z-10 rounded-r-full">
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
              <p className="text-gray-500 text-sm">Luxus</p>
              <h3 className="md:text-2xl text-xl font-semibold">
                {product.title}
              </h3>
              <p className="text-gray-500 lg:text-lg font-semibold text-sm mt-2">
                Luxurious marble tiles with natural veining patterns...Read
                more.
              </p>
              <button className="mt-4 px-4 py-1 border border-gray-800 text-white bg-[#044d42] rounded-full text-sm hover:bg-white hover:text-gray-800 transition">
                EXPLORE
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load more */}
      <motion.div
        className="flex justify-center gap-1 mt-12 flex-col items-center text-white animate-bounce"
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        variants={fadeUp}
        custom={0.4}
      >
        <h1 className="text-center uppercase">Load More</h1>
        <FaRegArrowAltCircleDown className="text-xl" />
      </motion.div>
    </section>
  );
};

export default CoreFlexxProducts;
