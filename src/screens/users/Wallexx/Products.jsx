import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import productImg from "../../../Assets/core_flexx/core_flex_products/products.png";

// Products data
const products = [
  { id: 1, title: "WLX-311", tag: "NEW" },
  { id: 2, title: "WLX-312", tag: "BESTSELLER" },
  { id: 3, title: "WLX-313" },
  { id: 4, title: "WLX-314", tag: "HOT" },
  { id: 5, title: "WLX-315", tag: "NEW" },
  { id: 6, title: "WLX-316" },
];

const CoreFlexxProducts = () => {
  const [position, setPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const speed = 1; // pixels per interval
  const intervalTime = 20; // ms

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setPosition((prev) => {
          const width = containerRef.current.scrollWidth / 2;
          const next = prev - speed;
          return next <= -width ? 0 : next;
        });
      }
    }, intervalTime);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Duplicate products for seamless loop
  const loopProducts = [...products, ...products];

  const handleClick = (product) => {
    alert(`Clicked on ${product.title}`);
  };

  return (
    <section className="bg-gradient-to-b from-[#044d42] to-[#022c23] py-16 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide mb-2">
          Top Products
        </h2>
        <p className="text-gray-300 text-lg md:text-xl">
          Discover our trending CoreFlexx items
        </p>
      </div>

      <div
        className="relative w-full flex overflow-hidden"
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex"
          style={{ x: position }}
          transition={{ ease: "linear", duration: intervalTime / 1000 }}
        >
          {loopProducts.map((product, index) => {
            const isFirst = index % products.length === 0; // first item larger
            return (
              <div
                key={index}
                onClick={() => handleClick(product)}
                className={`flex-shrink-0 mx-4 rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 cursor-pointer ${
                  isFirst
                    ? "w-[300px] md:w-[350px] h-[450px]"
                    : "w-[250px] md:w-[280px] h-[400px]"
                }`}
              >
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-[#044d42] text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full z-10">
                    {product.tag}
                  </span>
                )}
                <img
                  src={productImg}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 text-white">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {product.title}
                  </h3>
                  <p className="text-sm md:text-base line-clamp-2">
                    Luxurious marble tiles with natural veining patterns...
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreFlexxProducts;
