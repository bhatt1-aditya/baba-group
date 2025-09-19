import React from "react";
import image1 from "../../../Assets/new_home/feldspar/image1.png";
import image2 from "../../../Assets/new_home/feldspar/image2.png";
import image3 from "../../../Assets/new_home/feldspar/image3.png";
import image4 from "../../../Assets/new_home/feldspar/image4.png";
import image5 from "../../../Assets/new_home/feldspar/image5.png";
const FeldsparSection = () => {
  const images = [image1, image2, image3, image4, image5];

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 md:px-6 lg:px-10 bg-white text-center">
      {/* Small Description */}
      <p className="text-gray-600 text-sm md:text-base max-w-2xl mb-4">
        Essential mineral for innovative materials.
        <br />
        We supply high-quality feldspar that improves durability, workability,
        and finish, serving as a key ingredient in ceramics, glass, and
        engineered surfaces.
      </p>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
        Top Quality Raw Feldspar Lumps.
      </h2>

      {/* Images */}
      <div className="flex flex-wrap justify-center gap-6">
        {images.map((src, index) => (
          <div key={index} className="w-32 h-32 md:w-40 md:h-40">
            <img
              src={src}
              alt={`Feldspar ${index + 1}`}
              className="w-full h-full object-cover rounded-full shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeldsparSection;
