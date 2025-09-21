import React from "react";
import image1 from "../../Assets/menuImage/product1.png"
import image2 from "../../Assets/menuImage/product2.png"
import image3 from "../../Assets/menuImage/product3.png"
import image4 from "../../Assets/menuImage/product4.png"
const SimilarCristalloProductDetails = () => {
  return (
    <section className=" mx-auto py-24 px-4 md:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left - Images */}
      <div className="space-y-6">
        <img
          src={image1}
          alt="Main Product"
          className="rounded shadow-md w-full"
        />
        <img
          src={image2}
          alt="Product Closeup"
          className="rounded shadow-md w-full"
        />
        <div className="grid grid-cols-2 gap-4">
          <img
            src={image3}
            alt="Detail 1"
            className="rounded h-full w-full bg-cover shadow-md"
          />
          <img
            src={image4}
            alt="Detail 2"
            className="rounded h-full w-full bg-cover  shadow-md"
          />
        </div>
      </div>

      {/* Right - Product Info */}
      <div>
        <h3 className="text-sm text-orange-500 font-semibold uppercase mb-2">
          Baba Quartz
        </h3>
        <h2 className="text-3xl font-bold mb-4">Sparkle Grey</h2>
        <p className="text-gray-600 mb-4">
          127" × 64" (3230 mm × 1630 mm) (Stock) / 127" × 58" (3230 mm × 1470 mm)
          (Sp. Order)
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium shadow-md">
            Request a Sample
          </button>
          <button className="border border-orange-500 hover:bg-orange-50 text-orange-500 px-6 py-2 rounded-full font-medium shadow-md">
            Contact Us
          </button>
        </div>

        {/* Applications */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Applications</h4>
          <p className="text-gray-600">
            Kitchen Countertops, Bathroom Vanity Tops, Laboratory Counters,
            Reception Desk, Table Tops, Coffee Table, Window Sills, Stairs,
            Indoor Wall Cladding and Flooring.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SimilarCristalloProductDetails;
