import React from "react";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import image from "../../../Assets/new_home/homeimage6.png"
const products = [
  {
    id: 1,
    title: "Baba Quartz Overseas",
    name: "SPARKLE GREY",
    img: image,
    liked: false,
  },
  {
    id: 2,
    title: "Cristalo Collection",
    name: "SPARKLE GREY",
    img: image,
    liked: true,
  },
  {
    id: 3,
    title: "Cristalo Collection",
    name: "SPARKLE GREY",
    img:image,
    liked: false,
  },
];

const ProductSection = () => {
  return (
    <section className="py-12 text-center bg-white">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold">
        Explore <span className="text-orange-500">BABA QUARTZ</span> Products.
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mt-2 text-sm md:text-base">
        Discover premium quartz surfaces crafted for beauty, durability, and global style.
      </p>

      {/* Product Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-6 lg:px-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-2 border"
          >
            {/* Image */}
            <img
              src={product.img}
              alt={product.name}
              className="rounded-lg w-full object-cover"
            />

            {/* Info */}
            <div className="flex justify-between items-center mt-3">
              <div className="text-left">
                <p className="text-xs text-orange-500 font-medium">{product.title}</p>
                <h3 className="text-sm font-semibold">{product.name}</h3>
              </div>

              {/* Like Button */}
              <button className="text-lg text-gray-700 hover:text-red-500">
                {product.liked ? <FaHeart className="text-red-500" /> : <FiHeart />}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Explore Button */}
      <div className="mt-8">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm md:text-base font-medium hover:bg-orange-600 transition">
          EXPLORE MORE →
        </button>
      </div>
    </section>
  );
};

export default ProductSection;
