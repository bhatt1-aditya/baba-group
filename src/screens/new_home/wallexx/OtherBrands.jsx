import React from "react";

const OtherBrands = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-6 py-12 max-w-6xl mx-auto gap-6">
      {/* Left Heading */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-medium leading-snug">
          Explore Our <br />
          Other <span className="text-green-800 font-semibold">BRANDS.</span>
        </h2>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Primary Button */}
        <a
          href="#"
          className="bg-green-900 text-white px-6 py-2 rounded-full text-sm font-medium shadow hover:bg-green-800 transition"
        >
          LOCATE A DEALER ›
        </a>

        {/* Outline Button */}
        <a
          href="#"
          className="border border-green-900 text-green-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-green-50 transition"
        >
          FIND A SHOWROOM ›
        </a>

        {/* Outline Button */}
        <a
          href="#"
          className="border border-green-900 text-green-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-green-50 transition"
        >
          BECOME A DEALER ›
        </a>
      </div>
    </div>
  );
};

export default OtherBrands;
