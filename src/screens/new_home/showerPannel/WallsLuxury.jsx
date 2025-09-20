import React from "react";
import image from "../../../Assets/new_home/shower_pannel/walls.png";
const WallsLuxury = () => {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-7xl md:gap-10 gap-0 mx-auto justify-between px-6 md:px-16 md:py-12">
      {/* Left Section */}
      <div className="flex flex-col items-start md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-serif text-green-900">
          WALLS
        </h1>
        <p className="text-xl md:text-2xl font-light mt-2 text-gray-700">
          That Speak Luxury.
        </p>

        <img
          src={image}
          alt="Luxury Walls"
          className="mt-6 w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center md:w-1/2 mt-10 md:mt-0">
        <img
          src={image}
          alt="Popular Picks"
          className="mt-6 w-full rounded-lg shadow-lg"
        />
        <h2 className="mt-6 text-2xl font-semibold text-gray-900">
          POPULAR PICKS
        </h2>
        <p className="text-gray-600 mt-1">WLX-314</p>
      </div>
    </div>
  );
};

export default WallsLuxury;
