import React from "react";
import image1 from "../../../Assets/new_home/shower_pannel/watchnowsection.png"
const WatchNowSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
      {/* Image */}
      <div className="rounded overflow-hidden shadow-lg">
        <img
          src={image1}
          alt="Luxury Lounge"
          className="w-full h-auto"
        />
      </div>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-gray-600 text-sm md:text-base leading-relaxed">
        Watch how Baba Group blends innovation, craftsmanship, and sustainability
        to deliver world-class surfaces.
      </p>

      {/* Watch Now Link */}
      <a
        href="#"
        className="mt-4 inline-block text-gray-800 font-medium hover:text-sky-600"
      >
        Watch Now &gt;
      </a>
    </div>
  );
};

export default WatchNowSection;
