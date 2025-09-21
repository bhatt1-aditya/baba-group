import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../../../Assets/new_home/baba_group/product1.png";
import image2 from "../../../Assets/new_home/baba_group/product2.png";
import image3 from "../../../Assets/new_home/baba_group/product2.png";
import image4 from "../../../Assets/new_home/baba_group/product1.png";

const products = [
  {
    name: "Calacatta Canyon",
    brand: "GLIZZ | Cristalloo",
    description:
      "Best for – Kitchen Countertops, Bathroom Vanity Tops, Laboratory Counters, Reception Desk, Table Tops, Coffee Table, Window Sills, Stairs, Indoor Wall Cladding and Flooring.",
    image: image1,
  },
  {
    name: "Arabescato Quartz",
    brand: "GLIZZ | Cristalloo",
    description:
      "Best for – Luxury countertops, decorative walls, coffee tables, and premium interior surfaces.",
    image: image2,
  },
  {
    name: "Statuario Quartz",
    brand: "GLIZZ | Cristalloo",
    description:
      "Best for – Modern interiors, kitchen countertops, bathroom vanity tops, and statement walls.",
    image: image3,
  },
  {
    name: "Carrara Quartz",
    brand: "GLIZZ | Cristalloo",
    description:
      "Best for – Elegant countertops, flooring, and decorative interior accents.",
    image: image4,
  },
];

const PopularProducts = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="px-4 md:px-6 lg:px-10 py-12">
      <h2 className="text-2xl font-semibold mb-8">Popular Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Product Image */}
        <div className="relative flex justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={products[selected].name}
              src={products[selected].image}
              alt={products[selected].name}
              className="rounded-lg shadow-md w-96 h-96 object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          {/* <div className="absolute bottom-2 left-2 text-gray-600 text-sm flex items-center gap-2">
            <span className="w-6 h-6 border border-black rounded-full flex items-center justify-center">
              ↔
            </span>
            Hold and move to view.
          </div> */}
        </div>

        {/* Right Side - Product Details */}
        <div>
          {/* Small Thumbnails */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {products.map((prod, i) => (
              <img
                key={i}
                src={prod.image}
                alt="Thumbnail"
                onClick={() => setSelected(i)}
                className={`w-20 h-20 rounded-md border cursor-pointer hover:border-black transition ${
                  selected === i ? "border-black" : "border-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Product Info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={products[selected].name + "info"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl md:text-4xl font-light">{products[selected].name}</h3>
              <p className="text-gray-500 mt-1">{products[selected].brand}</p>

              <p className="mt-4 text-sm text-gray-600">
                <span className="font-semibold">Best for –</span>{" "}
                {products[selected].description}
              </p>

              {/* Buttons */}
              <div className="mt-6 flex gap-4 flex-wrap">
                <button className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
                  View Product
                </button>
                <button className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
                  Sample Request
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
