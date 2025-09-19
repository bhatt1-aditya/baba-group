import React from "react";
import image1 from "../../../Assets/new_home/wallexx/brandCard.png"
const brands = [
  {
    name: "FLOORREX",
    desc: "18 Classic design styles to elevate your space,no matter the trend.Featuring high performance construction built to endure.",
    logo: "FLOORREX", // placeholder text, replace with image if needed
    logoBg: "bg-amber-600",
    image: image1
  },
  {
    name: "COREFLEXX",
    desc: "18 Classic design styles to elevate your space,no matter the trend.Featuring high performance construction built to endure.",
    logo: "COREFLEXX",
    logoBg: "bg-gray-700",
    image: image1
  },
  {
    name: "BABA QUARTZ",
    desc: "18 Classic design styles to elevate your space,no matter the trend.Featuring high performance construction built to endure.",
    logo: "WALLEX",
    logoBg: "bg-green-700",
    image: image1
  },
  {
    name: "CRISTALLOO",
    desc: "18 Classic design styles to elevate your space,no matter the trend.Featuring high performance construction built to endure.",
    logo: "CRISTALLOO",
    logoBg: "bg-black",
    image: image1
  },
];

const BrandCards = () => {
  return (
    <div className="px-4 lg:px-10 md:px-6 md:py-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-start gap-6"
          >
            {/* Left Content */}
            <div className="flex-1">
              {/* Title + Logo */}
              <h3 className="text-lg font-bold">{brand.name}</h3>
              <p className="text-gray-500 text-sm mt-1 w-[70%]">{brand.desc}</p>

              {/* Logo Circle */}
              <div className="flex items-center gap-4 mt-4">
                <div
                  className={`${brand.logoBg} text-white rounded-full w-20 h-20 flex items-center justify-center text-xs font-semibold`}
                >
                  {brand.logo}
                </div>
              </div>

             <div className="flex gap-4">
                 {/* Features */}
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>⚙ Ultra Strong Layered Core</li>
                <li>💧 Waterproof</li>
                <li>🌱 Greenguard Certified</li>
                <li>🛡 Warranty</li>
              </ul>
               {/* Right Image */}
            <div className="flex-shrink-0">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-48 h-36 object-cover rounded-md"
              />
            </div>
             </div>

              {/* Button */}
              <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded text-sm hover:bg-green-800 transition">
                Explore Collection
              </button>
            </div>

           
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCards;
