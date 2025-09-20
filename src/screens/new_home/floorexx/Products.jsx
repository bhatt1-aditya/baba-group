import React, { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

const products = [
  { id: 1, brand: "FLOOREXX", name: "ENTANA WALNUT", image: require("../../../Assets/new_home/floorexx/product1.png") },
  { id: 2, brand: "FLOOREXX", name: "ENTANA WALNUT", image: require("../../../Assets/new_home/floorexx/product2.png") },
  { id: 3, brand: "FLOOREXX", name: "ENTANA WALNUT", image: require("../../../Assets/new_home/floorexx/product1.png") },
  { id: 4, brand: "FLOOREXX", name: "ENTANA WALNUT", image: require("../../../Assets/new_home/floorexx/product2.png") },
];

const Products = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [duration, setDuration] = useState(20);

  // Adaptive duration based on container width
  useEffect(() => {
    const updateDuration = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setDuration(Math.max(15, Math.min(30, width / 30)));
      }
    };
    updateDuration();
    window.addEventListener("resize", updateDuration);
    return () => window.removeEventListener("resize", updateDuration);
  }, []);

  // Start infinite scroll after mount
  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        },
      },
    });
  }, [controls, duration]);

  return (
    <section className="px-4 md:px-6 lg:px-10 md:py-12 py-6 text-center bg-white">
      <h2 className="text-3xl md:text-4xl font-light text-gray-800">
        Explore <span className="text-orange-500 font-semibold">FLOOREXX</span> Products
      </h2>
      <p className="text-gray-500 mt-2 mb-12">
        Discover premium Floorexx surfaces crafted for beauty, durability, and global style.
      </p>

      {/* Infinite Horizontal Scroll with Fade Edges */}
      <div
        ref={containerRef}
        className="relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <motion.div
          animate={controls}
          className="flex gap-8 whitespace-nowrap"
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...products, ...products].map((product, index) => (
            <div key={index} className="flex-none w-64 text-left">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-contain transition-transform hover:scale-105"
                />
                <button className="absolute top-3 right-3 bg-white/80 rounded-full p-2 hover:bg-white transition">
                  <Heart size={20} className="text-gray-600 hover:text-red-500" />
                </button>
              </div>
              <h3 className="text-sm font-medium text-red-500 mt-2">{product.brand}</h3>
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-12">
        <button className="bg-orange-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-orange-700 transition">
          EXPLORE MORE
        </button>
      </div>
    </section>
  );
};

export default Products;
