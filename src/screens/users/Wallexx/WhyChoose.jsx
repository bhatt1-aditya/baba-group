import React from "react";

const WhyChoose = () => {
  return (
    <div className="bg-[#044d42]">
      <div className="py-12 md:mx-6 lg:mx-10 mx-4 bg-white  text-center rounded-2xl ">
        <div className="p-10">
          <div className="text-center mb-12   md:px-6 lg:px-10 px-4">
            <p className="text-black text-sm tracking-wide">Why Choose</p>
            <h2 className="text-3xl md:text-4xl uppercase font-serif tracking-wide text-black">
              Wallex?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:gap-8 gap-4 md:px-4 px-2 divide-y-2 max-w-7xl mx-auto">
            <div className="flex md:flex-row flex-col justify-between items-center gap-10">
              <div className="text-lg font-medium text-teal-500">
                Soundproof
              </div>
              <div className="text-lg font-medium text-teal-500">
                Safe & Better Air Quality
              </div>
              <div className="text-lg font-medium text-teal-500">Warranty</div>
            </div>

            <div className="flex md:flex-row flex-col justify-between items-center">
              <div className="text-lg font-medium text-teal-500 mt-8">
                Endless Options
              </div>
              <div className="text-lg font-medium text-teal-500 mt-8 text-center">
                Low Cost Installation
              </div>
              <div className="text-lg font-medium text-teal-500 mt-8">
                Ultimate Durability
              </div>
            </div>

            <div className="flex justify-between md:flex-row flex-col items-center">
              <div className="text-lg font-medium text-teal-500 mt-8">
                Termite Resistant
              </div>
              <div className="text-lg font-medium text-teal-500 mt-8">
                Eco-friendly
              </div>
              <div className="text-lg font-medium text-teal-500 mt-8">
                Waterproof
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
