import React from "react";
import image1 from "../../Assets/menuImage/adventagesImage.png"
const SimilarCristalloAdvantagesAndUses = () => {
  const advantages = [
    "10 Years Warranty",
    "Durable",
    "Heat Resistant",
    "Acidic Substances",
    "Hygienic",
    "Various Colors & Style",
    "Non-Porous",
    "Scratch Resistant",
    "Water Resistant",
  ];

  const uses = [
    "Airport",
    "Bar Counter tops",
    "Bathroom Vanity Tops",
    "Coffee Table",
    "Floorings",
    "Hotel",
    "Kitchen Countertops",
    "Laboratory Counters",
    "Residential Spaces",
    "Restaurants",
    "Shopping Malls",
    "Stair-Case",
    "Window Sills",
    "Table Tops",
    "Reception Desk",
    "Commercial Spaces",
  ];

  return (
    <div className="mx-auto md:px-6 px-4 lg:px-10 py-24 text-gray-800">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold mb-4">
          Advantages & Uses <br />
          <span className="text-orange-500 font-bold">of CRISTALLOO.</span>
        </h1>
        <p className="text-sm text-gray-600 max-w-7xl mx-auto leading-relaxed">
          Discover the timeless elegance of Baba Quartz’s premium natural marble slabs,
          where nature’s artistry meets superior craftsmanship. Each meticulously crafted
          slab showcases unique crystalline patterns and lustrous surfaces that transform
          everyday spaces into statements of luxury. Perfect for tabletops, window frames,
          staircases, and sitting benches, our quartz slabs combine durability with
          sophisticated beauty. Experience the perfect harmony of strength and style, as
          each piece brings the raw magnificence of natural marble into your living spaces.
        </p>
      </div>

      {/* Advantages */}
      <div className="text-center mb-12">
        <h2 className="text-xl font-semibold mb-6">ADVANTAGES.</h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {advantages.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 border rounded-full text-gray-700 hover:bg-orange-50"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Uses */}
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-8">USES.</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {uses.map((use, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm hover:shadow-md transition bg-white"
            >
              <img
                src={image1}
                alt={use}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <p className="py-2 text-sm font-medium text-gray-700">{use}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarCristalloAdvantagesAndUses;
