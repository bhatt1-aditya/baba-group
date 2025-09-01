import React from "react";
import { ShieldCheck, Droplets, Bug, Timer } from "lucide-react"; // using lucide-react icons (replace with custom SVG if needed)

export default function StonePolymerComposite() {
  return (
    <div className="bg-black text-white py-16 px-8 md:px-20 flex flex-col md:flex-row items-start justify-between">
      
      {/* Left Section - Text */}
      <div className="md:w-1/2 mb-12 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
          STONE <br /> POLYMER <br /> COMPOSITE
        </h2>
        <p className="text-sm md:text-base leading-relaxed text-gray-300 max-w-md">
          A flooring that combines the look and feel of real wood with the
          durability of stone. It is a revolutionary solution that eliminates
          the limitations of traditional laminate and hardwood floors. It gives
          your space a beautiful makeover without any drawbacks of vinyl and
          laminate flooring. Plus, it is also easy to install and doesn’t create
          dust, noise, or require a lot of effort.
        </p>
      </div>

      {/* Right Section - Icons */}
      <div className="grid grid-cols-2 gap-10 md:gap-16">
        {/* Durability */}
        <div className="flex flex-col items-center text-center">
          <ShieldCheck className="w-10 h-10 mb-3" />
          <p className="text-xs uppercase tracking-widest">Ultimate Durability</p>
        </div>

        {/* Waterproof */}
        <div className="flex flex-col items-center text-center">
          <Droplets className="w-10 h-10 mb-3" />
          <p className="text-xs uppercase tracking-widest">Waterproof</p>
        </div>

        {/* Termite Resistant */}
        <div className="flex flex-col items-center text-center">
          <Bug className="w-10 h-10 mb-3" />
          <p className="text-xs uppercase tracking-widest">Termite Resistant</p>
        </div>

        {/* Quick Installation */}
        <div className="flex flex-col items-center text-center">
          <Timer className="w-10 h-10 mb-3" />
          <p className="text-xs uppercase tracking-widest">
            Quick & Easy Installation
          </p>
        </div>
      </div>
    </div>
  );
}
