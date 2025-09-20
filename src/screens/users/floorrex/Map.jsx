
import React from "react";
import worldMap from "../../../Assets/floorrex/worldMap.png"; // Replace with your actual map image path
import { FiMapPin } from "react-icons/fi";

const Map = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#fdf9f6] md:px-6 px-4 lg:px-10 py-12">
      {/* Left Text Section */}
      <div className="text-center md:text-left mb-6 md:mb-0 md:px-6 lg:px-10 px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-light text-[#7a4a24]">
          LOCATE
        </h1>
        <h1 className="text-4xl md:text-5xl font-light text-[#7a4a24]">
          A DEALER
        </h1>
        <div className="w-16 border-b-2 border-[#7a4a24] mx-auto md:mx-0 mt-2"></div>
      </div>

      {/* Right Image Section */}
      <div className="relative">
        <img
          src={worldMap}
          alt="World Map"
          className="w-[300px] md:w-[500px] h-auto"
        />
        {/* Tap to Locate */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center text-[#7a4a24] text-sm md:text-base cursor-pointer">
          <FiMapPin className="mr-1" />
          TAP TO LOCATE
        </div>
      </div>
    </div>
  );
};

export default Map;
