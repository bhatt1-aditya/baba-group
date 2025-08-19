import React from "react";
import image1 from "../../../Assets/core_flexx/wallexx/home.png";  
import image2 from "../../../Assets/core_flexx/wallexx/home.png";  
import image3 from "../../../Assets/core_flexx/wallexx/home.png";  

const Inspirations = () => {
  return (
    <div className="py-16 md:px-6 lg:px-10 px-4 bg-[#044d42] overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-white">Inspirations</h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 animate-marquee">
          {/* Repeat images for smooth infinite effect */}
          {[image1, image2, image3, image1, image2, image3].map((img, i) => (
            <div
              key={i}
              className="min-w-[300px] h-64 rounded-lg overflow-hidden shadow-lg flex-shrink-0"
            >
              <img
                src={img}
                alt={`Inspiration ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inspirations;
