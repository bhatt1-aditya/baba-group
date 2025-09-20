import React from "react";
import image1 from "../../../Assets/new_home/baba_group/product1.png"
import image2 from "../../../Assets/new_home/baba_group/product2.png"
const PopularProducts = () => {
  return (
    <section className="px-4 md:px-6 lg:px-10 py-12">
      <h2 className="text-2xl font-semibold mb-8">Popular Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Product Image */}
        <div className="relative flex justify-center">
          <img
            src={image1}
            alt="Calacatta Canyon"
            className="rounded-lg shadow-md"
          />
          <div className="absolute bottom-2 left-2 text-gray-600 text-sm flex items-center gap-2">
            <span className="w-6 h-6 border border-black rounded-full flex items-center justify-center">
              ↔
            </span>
            Hold and move to view.
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div>
          {/* Small Thumbnails */}
          <div className="flex gap-2 mb-6">
            {Array(6)
              .fill("")
              .map((_, i) => (
                <img
                  key={i}
                  src={image2}
                  alt="Thumbnail"
                  className="w-16 h-16 rounded-md border border-gray-300 cursor-pointer hover:border-black"
                />
              ))}
          </div>

          {/* Product Info */}
          <h3 className="text-xl font-medium">Calacatta Canyon</h3>
          <p className="text-gray-500 mt-1">GLIZZ | Cristalloo</p>

          <p className="mt-4 text-sm text-gray-600">
            <span className="font-semibold">Best for –</span> Kitchen Countertops, 
            Bathroom Vanity Tops, Laboratory Counters, Reception Desk, Table Tops, 
            Coffee Table, Window Sills, Stairs, Indoor Wall Cladding and Flooring.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
              View Product
            </button>
            <button className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
              Sample Request
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
