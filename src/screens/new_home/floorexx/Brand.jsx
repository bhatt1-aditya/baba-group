import React from "react";
import { motion } from "framer-motion";
import image1 from "../../../Assets/new_home/homeimage7.png"; // your image

const brands = [
  {
    name: "BABA QUARTZ",
    logo: image1, // using your imported image here
    desc: "18 Classic design styles to elevate your space, trend. Featuring high performance construction built to endure.",
    features: ["Ultra Strong Layered Core", "Waterproof", "Greenguard Certified", "Warranty"],
  },
  {
    name: "WALLEX",
    logo: "/logos/wallexx.png", // replace with actual logo path
    desc: "18 Classic design styles to elevate your space, trend. Featuring high performance construction built to endure.",
    features: ["Ultra Strong Layered Core", "Waterproof", "Greenguard Certified", "Warranty"],
  },
  {
    name: "COREFLEXX",
    logo: "/logos/coreflexx.png",
    desc: "18 Classic design styles to elevate your space, trend. Featuring high performance construction built to endure.",
    features: ["Ultra Strong Layered Core", "Waterproof", "Greenguard Certified", "Warranty"],
  },
  {
    name: "CRISTALLOO",
    logo: "/logos/cristalloo.png",
    desc: "18 Classic design styles to elevate your space, no matter the trend. Featuring high performance construction built to endure.",
    features: ["Ultra Strong Layered Core", "Waterproof", "Greenguard Certified", "Warranty"],
  },
];

export default function BrandsSection() {
  return (
    <section className="w-full px-6 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">
          Explore Our <span className="text-[#9e6230]">Other BRANDS.</span>
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button className="bg-[#9e6230] text-white px-6 py-2 rounded-full hover:opacity-90 transition">
            LOCATE A DEALER
          </button>
          <button className="border border-[#9e6230] text-[#9e6230] px-6 py-2 rounded-full hover:bg-[#9e6230] hover:text-white transition">
            FIND A SHOWROOM
          </button>
          <button className="border border-[#9e6230] text-[#9e6230] px-6 py-2 rounded-full hover:bg-[#9e6230] hover:text-white transition">
            BECOME A DEALER
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {brands.map((brand, idx) => (
          <motion.div
            key={idx}
            className="relative bg-white rounded-lg shadow hover:shadow-lg overflow-hidden border border-gray-100"
            whileHover={{ x: -10 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Content */}
            <div className="p-6 flex flex-col items-start">
              {/* Logo */}
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-14 h-14 object-contain mb-4"
              />

              {/* Title + Desc */}
              <h3 className="font-bold text-lg">{brand.name}</h3>
              <p className="text-gray-500 text-sm mt-2">{brand.desc}</p>

              {/* Divider */}
              <div className="w-full border-t border-[#9e6230] my-4"></div>

              {/* Features */}
              <ul className="space-y-2 text-sm text-gray-700">
                {brand.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span>✔️</span> {f}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="mt-6 bg-[#9e6230] text-white px-4 py-2 rounded-md text-sm hover:opacity-90 transition">
                Explore Collection
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
