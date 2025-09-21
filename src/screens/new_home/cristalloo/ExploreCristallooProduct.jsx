import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import image1 from "../../../Assets/new_home/cristalloo_pannel/product1.png";
import image2 from "../../../Assets/new_home/cristalloo_pannel/product2.png";
import image3 from "../../../Assets/new_home/cristalloo_pannel/product3.png";

const products = [
  { id: 1, brand: "FLOOREXX", name: "ENTANA WALNUT", image: image1 },
  { id: 2, brand: "FLOOREXX", name: "ENTANA WALNUT", image: image2 },
  { id: 3, brand: "FLOOREXX", name: "ENTANA WALNUT", image: image3 },
];

const ExploreCristallooProduct = () => {
  const [liked, setLiked] = useState({});

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="px-4 md:px-6 lg:px-10 bg-white mb-20 text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-extralight tracking-widest text-gray-500"
      >
        Explore{" "}
        <span className="font-bold tracking-wider text-gray-500">CRISTALLOO</span>{" "}
        Products
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 text-gray-600 max-w-3xl mb-10 mx-auto"
      >
        Discover premium cristalloo countertops surfaces crafted for beauty,
        durability, and global style.
      </motion.p>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="space-y-4 hover:scale-105 transition-transform"
          >
            <div className="relative group">
              <motion.img
                src={product.image}
                alt={product.name}
                className="object-contain rounded shadow-md w-full h-64 md:h-72 lg:h-80"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />

              {/* Heart button with pop animation */}
              <motion.button
                onClick={() => toggleLike(product.id)}
                whileTap={{ scale: 1.3 }}
                className="absolute -bottom-10 right-0 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition"
              >
                <Heart
                  size={20}
                  className={`transition-colors ${
                    liked[product.id] ? "text-red-500" : "text-gray-600"
                  }`}
                />
              </motion.button>
            </div>
            <h3 className="text-sm text-start font-medium text-red-500">
              {product.brand}
            </h3>
            <h3 className="text-lg text-start font-medium text-gray-800">
              {product.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExploreCristallooProduct;
