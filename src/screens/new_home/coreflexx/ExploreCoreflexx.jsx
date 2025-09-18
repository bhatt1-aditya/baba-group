import React from 'react'
import image1 from "../../../Assets/new_home/shower_pannel/product1.png"
import image2 from "../../../Assets/new_home/shower_pannel/product2.png"
import image3 from "../../../Assets/new_home/shower_pannel/product3.png"
import { Heart } from "lucide-react";
const products = [
  {
    id: 1,
    brand: "FLOOREXX",
    name: "ENTANA WALNUT",
    image: image1,
  },
  {
    id: 2,
    brand: "FLOOREXX",
    name: "ENTANA WALNUT",
    image: image2,
  },
  {
    id: 3,
    brand: "FLOOREXX",
    name: "ENTANA WALNUT",
    image: image3,
  },
];
const ExploreCoreflexx = () => {
      const features = [
    "WARRANTY",
    "WATERPROOF",
    "SOUNDPROOF",
    "ENDLESS OPTIONS",
    "TERMITE RESISTANT",
    "ECO-FRIENDLY",
    "ULTIMATE DURABILITY",
    "SAFE AND BETTER AIR QUALITY",
    "LOW COST INSTALLATION",
  ];
  return (
    <section className="py-16 bg-white">
      <div className="md:px-6 lg:px-10 px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-left mb-4 max-w-xl">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">
            Explore <span className="font-bold">COREFLEXX</span> Products.
          </h2>
          <p className="text-gray-500 mb-6">
            Discover premium Walleex surfaces crafted for beauty, durability, and global style.
          </p>
          <button className="px-6 py-2 border border-gray-400 rounded-full text-gray-700 text-sm font-medium hover:bg-gray-100 transition">
            EXPLORE MORE ›
          </button>
        </div>
        
      </div>
         <div className="grid grid-cols-1 max-w-7xl mx-auto md:grid-cols-3 gap-10">
                    {products.map((product) => (
                      <div key={product.id} className="space-y-4">
                        <div className="relative">
                          <img
                            src={product.image}
                            alt={product.name}
                            className=" object-contain rounded shadow-md"
                          />
                          <button className="absolute -bottom-10 xl:right-20 lg:right-2 right-0 bg-white/80 rounded-full p-2 hover:bg-white transition">
                            <Heart size={18} className="text-gray-600 hover:text-red-500" />
                          </button>
                        </div>
                        <h3 className="text-sm text-start font-medium text-red-500">
                          {product.brand}
                        </h3>
                        <h3 className="text-lg text-start font-medium text-gray-800">
                          {product.name}
                        </h3>
                      </div>
                    ))}
                  </div>
    </section>
  );
};

export default ExploreCoreflexx;