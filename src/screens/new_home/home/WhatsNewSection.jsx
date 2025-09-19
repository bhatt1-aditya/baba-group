import React from "react";
import image1 from "../../../Assets/new_home/sample1.png";
import image2 from "../../../Assets/new_home/sample2.png";
import image3 from "../../../Assets/new_home/sample3.png";

const WhatsNewSection = () => {
  return (
    <section className="md:py-12 px-4 md:px-6 lg:px-10 overflow-hidden ">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-2">
        <div className="relative ml-4 md:md-6">
          {" "}
          {/* <img src={image3}className="absolute" /> */}
          <img src={image2} className="absolute -rotate-12"/>
          <img src={image1} className="absolute" />
           <img src={image1} className="absolute rotate-[24deg]" />
        </div>
        {/* Right Side - Content */}
        <div className="space-y-8">
          {/* Title */}
          <div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight">
              What's New at
            </h2>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
              <span className="text-orange-500 font-normal">BABA QUARTZ</span>
              <span className="text-gray-800">?</span>
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Discover our latest quartz designs and finishes with bolder
              textures, and even more sustainable production. Each new
              collection is crafted to meet global style trends while
              maintaining the strength and quality you trust.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2">
              <span>Explore More</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNewSection;
