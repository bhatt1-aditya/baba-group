import React from "react";
import image1 from "../../../Assets/new_home/feldspar/image6.png"
import image2 from "../../../Assets/new_home/feldspar/image7.png"
import image3 from "../../../Assets/new_home/feldspar/image8.png"
const ImageShowcase = () => {
  const images = [
    image1,
    image2,
    image3,
  ];

  return (
    <div className="flex flex-col items-center justify-center md:py-16 py-0 md:px-6 px-4 lg:px-10 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
         {images.map((src, index) => (
          <div
            key={index}
            className={` overflow-hidden ${
              index === 0 || index === images.length - 1 ? "mt-10" : ""
            }`}
          >
            <img
              src={src}
              alt={`Showcase ${index + 1}`}
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageShowcase;
