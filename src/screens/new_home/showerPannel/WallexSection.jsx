import React from "react";
import image1 from "../../../Assets/new_home/shower_pannel/image1.png";
import image2 from "../../../Assets/new_home/shower_pannel/image2.png";
const WallexSection = () => {
  return (
    <div className="flex flex-col items-center justify-center md:px-6 px-4 lg:px-10 py-12 text-center">
      {/* Heading Text */}
      <p className="max-w-3xl text-gray-700 text-sm md:text-base leading-relaxed">
        Wallex is a premium brand under the Baba Group, delivering
        next-generation SPC wall and shower panel solutions. Designed for modern
        interiors, Wallex blends style, durability, and ease of installation —
        offering elegant, long-lasting choices for both dry and wet areas.
      </p>

      <p className="max-w-3xl mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
        Our Vision is to transform Indian interiors with premium, practical, and
        aesthetic panel solutions for walls and bathrooms — panels that are
        effortless to install, built to endure, and elevate every space they
        adorn.
      </p>

      {/* Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:mt-10 mt-0">
        <img
          src={image1}
          alt="Panel Showcase 1"
          className="w-full rounded-lg md:mt-20 mt-10 shadow-md"
        />
        <img
          src={image2}
          alt="Panel Showcase 2"
          className="w-full rounded-lg shadow-md"
        />
        <img
          src={image1}
          alt="Panel Showcase 3"
          className="w-full  md:mt-20 mt-0 rounded-lg shadow-md"
        />
      </div>

      {/* Learn More */}
      <a
        href="#"
        className="mt-8 inline-block text-green-700 font-medium hover:underline"
      >
        Learn More →
      </a>
    </div>
  );
};

export default WallexSection;
