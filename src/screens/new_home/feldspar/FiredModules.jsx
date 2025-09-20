import React from "react";

const FiredModules = () => {
  const images = [
    "/images/module1.png",
    "/images/module2.png",
    "/images/module3.png",
    "/images/module4.png",
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-16 px-6 bg-white">
      {/* Left Images Grid */}
      <div className="grid grid-cols-2 gap-4 flex-1">
        <img
          src={images[0]}
          alt="Module 1"
          className="rounded-lg shadow-md object-cover w-full h-full"
        />
        <img
          src={images[1]}
          alt="Module 2"
          className="rounded-lg shadow-md object-cover w-full h-full"
        />
        <img
          src={images[2]}
          alt="Module 3"
          className="rounded-lg shadow-md object-cover w-full h-full"
        />
        <img
          src={images[3]}
          alt="Module 4"
          className="rounded-lg shadow-md object-cover w-full h-full"
        />
      </div>

      {/* Right Text */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Fired <br /> Modules.
        </h2>
      </div>
    </div>
  );
};

export default FiredModules;
