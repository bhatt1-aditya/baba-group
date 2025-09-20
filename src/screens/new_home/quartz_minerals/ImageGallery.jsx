import React from "react";
import image1 from "../../../Assets/new_home/quartz_minerals/image9.png"
import image2 from "../../../Assets/new_home/quartz_minerals/image10.png"
import image3 from "../../../Assets/new_home/quartz_minerals/image11.png"
const ImageGallery = () => {
  return (
    <div className="flex flex-col items-center py-10 justify-center ">
      <h1 className="text-2xl font-bold mb-8 text-gray-700">
        Industrial Operations
      </h1>

      <div className="grid grid-cols-1 max-w-5xl  mx-auto md:grid-cols-3 md:gap-6">
        {/* Left Image */}
        <div className=" rounded-2xl overflow-hidden md:p-6 p-4">
          <img
            src={image1}
            alt="Bagging process"
            className="rounded-lg"
          />
        </div>

        {/* Center Image */}
        <div className=" rounded-2xl overflow-hidden md:p-6 p-4">
          <img
            src={image2}
            alt="Workers on conveyor belt"
            className="rounded-lg md:mt-20"
          />
        </div>

        {/* Right Image */}
        <div className=" rounded-2xl overflow-hidden md:p-6 p-4">
          <img
            src={image3}
            alt="Worker monitoring conveyor"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
