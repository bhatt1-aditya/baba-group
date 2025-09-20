import React from "react";
import image1 from "../../../Assets/new_home/cristalloo_pannel/whatsnew.png"
const WhatsNew = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold">
        What’s New at <span className="text-gray-400">CRISTALLOO?</span>
      </h2>

      {/* Subheading */}
      <p className="mt-4 max-w-3xl text-gray-600 text-sm md:text-base leading-relaxed">
        See our fresh quartz surface designs, larger formats, and premium
        finishes crafted to transform kitchens, bathrooms, and commercial spaces
        with timeless elegance. Cristalloo redefines luxury surfaces.
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <img
          src={image1}
          alt="Cristalloo Surface 1"
          className="w-full md:mt-10 rounded-md shadow-md"
        />
        <img
          src={image1}
          alt="Cristalloo Surface 2"
          className="w-full rounded-md shadow-md"
        />
        <img
          src={image1}
          alt="Cristalloo Surface 3"
          className="w-full md:mt-10 rounded-md shadow-md"
        />
      </div>

      {/* Button */}
      <a
        href="#"
        className="mt-8 px-6 py-2 bg-gray-200 text-gray-700 text-sm md:text-base rounded-full shadow hover:bg-gray-300 transition"
      >
        Explore More &gt;
      </a>
    </div>
  );
};

export default WhatsNew;
