import React from "react";
import { Heart } from "lucide-react"; // Optional: for heart icon
import image1 from "../../../Assets/new_home/floorexx/product1.png";
import image2 from "../../../Assets/new_home/floorexx/product2.png";
// Sample product data
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

const Products = () => {
  return (
    <section className="px-4 md:px-6 lg:px-10 md:py-12 py-4 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-light text-gray-800">
        Explore <span className="text-orange-500 font-semibold">FLOOREXX</span>{" "}
        Products.
      </h2>

      {/* Subtext */}
      <p className="text-gray-500 mt-2 mb-12">
        Discover premium Floorexx surfaces crafted for beauty, durability, and
        global style.
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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

      {/* Explore More Button */}
      <div className="mt-14">
        <button className="bg-orange-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-orange-700 transition">
          EXPLORE MORE
        </button>
      </div>
    </section>
  );
};

export default Products;
