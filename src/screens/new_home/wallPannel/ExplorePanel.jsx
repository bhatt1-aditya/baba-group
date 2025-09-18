import React from "react";
import image1 from "../../../Assets/new_home/floorexx/product1.png";
import image2 from "../../../Assets/new_home/floorexx/product2.png";
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
    image: image1,
  },
];
const ExplorePanel = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-10 bg-white">
      <div className=" flex flex-col lg:flex-row items-center mb-10 max-w-6xl mx-auto justify-between ">
        
        {/* Left Section - Text */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900">
            Explore <span className="text-teal-700">WALL PANEL<br/></span> Products.
          <span className="mt-2 text-gray-600 text-lg xl:inline block">
            Discover premium Wallex surfaces crafted for beauty, durability, and global style.
          </span>
          </h2>
        </div>

        {/* Right Section - Button */}
        <div className="mt-10 md:mt-0">
          <a
            href="#"
            className="px-5 py-2 border border-teal-700 text-teal-700 rounded-full text-sm font-medium hover:bg-teal-700 hover:text-white transition duration-300"
          >
            EXPLORE MORE &gt;
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 max-w-6xl mx-auto md:grid-cols-3 gap-10">
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

export default ExplorePanel;
