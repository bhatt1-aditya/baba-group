import React from "react";
import { CheckCircle } from "lucide-react"; 
import brand from "../../../Assets/new_home/wallex-pannel/brandImage.png"
const OtherBrands = () => {
  return (
    <section className="md:py-12 bg-white text-center">
      {/* Section Heading */}
      <h2 className="text-3xl font-semibold text-gray-900">
        Explore Our Other <span className="text-teal-700">BRANDS.</span>
      </h2>

      {/* Brand Card */}
      <div className="mt-10 max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border">
        {/* Top Section */}
        <div className="px-6 py-4 text-left">
          <h3 className="text-lg font-semibold text-gray-900">FLOORREX</h3>
          <p className="text-sm text-gray-600 mt-1 md:max-w-xl">
            18 Classic design styles to elevate your space, no matter the trend.
            Featuring high performance construction built to endure.
          </p>
        </div>

        <hr />

        {/* Middle Section - Logo & Image */}
        <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-6">
          {/* Logo + Features */}
          <div className="flex-1 text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[saddlebrown] text-white font-bold">
                FLOORREX
              </div>
            </div>

            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-teal-700" />
                Ultra Strong Layered Core
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-teal-700" />
                Waterproof
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-teal-700" />
                Greenguard Certified
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-teal-700" />
                Warranty
              </li>
            </ul>

            <button className="mt-4 px-4 py-2 bg-teal-700 text-white text-sm rounded hover:bg-teal-800 transition">
              Explore Collection
            </button>
          </div>

          {/* Image */}
          <div className="flex-1">
            <img
              src={brand}
              alt="Floorrex Product"
              className="rounded-md w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherBrands;
