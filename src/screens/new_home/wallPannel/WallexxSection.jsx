import React from "react";
import image1 from "../../../Assets/new_home/wallex-pannel/wallex1.png"
import image2 from "../../../Assets/new_home/wallex-pannel/wallex2.png"
const WallexxSection=()=> {
  return (
    <div className="max-w-7xl mx-auto md:px-6 px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Content */}
      <div>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Wallexx</span> is a premium brand under
          the Baba Group, delivering next-generation SPC wall and shower panel
          solutions. Designed for modern interiors, Wallexx blends style,
          durability, and ease of installation — offering elegant, long-lasting
          choices for both dry and wet areas.
        </p>
        <p className="text-gray-700 mb-6">
          Our Vision is to transform Indian interiors with premium, practical,
          and aesthetic panel solutions for walls and bathrooms — panels that
          are effortless to install, built to endure, and elevate every space
          they adorn.
        </p>
        <a
          href="#"
          className="text-green-600 font-medium hover:underline inline-flex items-center"
        >
          Learn More
          <span className="ml-1">›</span>
        </a>
      </div>

      {/* Right Images */}
      <div className="flex gap-4">
        <img
          src={image1}
          alt="Wallexx Panel Installation"
          className="w-1/2 lg:h-60 h-full shadow-md"
        />
        <img
          src={image2}
          alt="Wallexx Quality Testing"
          className="w-1/2 lg:h-72 h-full shadow-md"
        />
      </div>
    </div>
  );
}

export default WallexxSection