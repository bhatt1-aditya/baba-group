import React from "react";
import wallexBanner from "../../../Assets/new_home/wallex-pannel/wallexBanner.png"
const LuxuryBanner=()=> {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
      {/* Background Image */}
      <img
        src={wallexBanner}
        alt="Luxury Bathroom"
        className="w-full h-full object-cover"
      />

      {/* Overlay Text - Bottom Left */}
      <div className="absolute bottom-6 left-6 text-white">
        <h2 className="text-4xl md:text-5xl font-serif font-bold">WALLS</h2>
        <p className="text-lg md:text-xl font-light">
          That Speak Luxury.
        </p>
      </div>

      {/* Overlay Text - Top Right */}
      <div className="absolute top-6 right-6 text-white text-right">
        <p className="text-lg md:text-xl font-light tracking-wide">
          POPULAR PICKS
        </p>
        <p className="text-sm md:text-base font-thin">WLX-314</p>
      </div>
    </div>
  );
}

export default LuxuryBanner