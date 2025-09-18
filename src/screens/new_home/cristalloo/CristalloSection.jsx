import React from "react";
import image1 from "../../../Assets/new_home/cristalloo_pannel/image1.png"
import image2 from "../../../Assets/new_home/cristalloo_pannel/image2.png"
import image3 from "../../../Assets/new_home/cristalloo_pannel/image3.png"
const CristalloSection = () => {
  return (
    <div className="px-4 lg:px-10 md:px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <img
            src={image1}
            alt="Cristallo Factory"
            className="lg:h-96 w-fullrounded-lg shadow-md"
          />
          <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed text-justify">
            Cristalloo have Latest facilities to handle export orders & container
            packing. Packing materials conform to International standards and
            Mineral Bags are wrapped with plastic for protection. We have own
            Research & Development section with Moisture Analyzer, Spectrophotometer,
            Visual spectrometer, Chemical Testing and Sieve Analysis to Test the
            Sieve on ASTM Standards.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
            Cristalloo is the prominent manufacturer of engineered Quartz Surfaces,
            Headquartered in Rajasthan province in India. We have independent
            distributors across all part of world to serve our customers. With one
            state-of-the-art production sites of 40000 sq meter with 2 production
            line for Quartz slabs & 12 production line for Quartz grits and filler,
            Cristalloo has an annual capacity of over 75000 mt of quartz grits & fillers.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <img
              src={image2}
              alt="Quartz Machine 1"
              className="rounded-lg shadow-md"
            />
            <img
              src={image3}
              alt="Quartz Machine 2"
              className="rounded-lg shadow-md"
            />
          </div>

          <a
            href="#"
            className="mt-6 inline-block text-gray-600 font-medium hover:text-sky-600"
          >
            Learn More &gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default CristalloSection;
