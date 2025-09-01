import React from "react";

const BabaQuartz = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative max-w-5xl w-full bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-10 text-center">
        {/* Title Section */}
        <h3 className="text-lg text-gray-700 mb-2">Why Choose</h3>
        <h2 className="text-2xl font-serif tracking-wide mb-10">BABA QUARTZ ?</h2>

        {/* Content Grid */}
        <div className="relative grid grid-cols-3 gap-y-14 text-gray-900 font-light">
          {/* Left Column */}
          <div className="space-y-14">
            <p>Soundproof</p>
            <p>Endless Options</p>
            <p>Termite Resistant</p>
          </div>

          {/* Middle Column */}
          <div className="space-y-14 flex flex-col items-center">
            <p>Safe & Better Air Quality</p>
            <p>Low Cost Installation</p>
            <p>Eco-friendly</p>
          </div>

          {/* Right Column */}
          <div className="space-y-14">
            <p>Warranty</p>
            <p>Ultimate Durability</p>
            <p>Waterproof</p>
          </div>

          {/* Perfect Orange Divider Lines */}
          {/* Main Center Cross */}
          {/* <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-px bg-orange-500"></div> */}
          {/* <div className="absolute top-1/2 left-0 w-full h-px bg-orange-500"></div> */}

          {/* Additional Vertical Lines */}
          <div className="absolute inset-y-0 left-1/3 transform -translate-x-1/2 w-px bg-orange-500"></div>
          <div className="absolute inset-y-0 left-2/3 transform -translate-x-1/2 w-px bg-orange-500"></div>

          {/* Additional Horizontal Lines */}
          {/* <div className="absolute top-1/3 left-0 w-full h-px bg-orange-500"></div> */}
          {/* <div className="absolute top-2/3 left-0 w-full h-px bg-orange-500"></div> */}
        </div>
      </div>
    </div>
  );
};

export default BabaQuartz;
