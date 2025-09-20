import React from "react";
import image1 from "../../../Assets/new_home/calcite/image5.png"
import image2 from "../../../Assets/new_home/calcite/image6.png"
import image3 from "../../../Assets/new_home/calcite/image7.png"
const FactoryShowcase = () => {
  return (
    <div className="w-full bg-white py-12 px-6 flex flex-col items-center">
      {/* Section Title */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Our Facilities
      </h2>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        <img
          src={image1}
          alt="Laboratory"
          className="rounded-2xl shadow-md object-cover w-full h-72"
        />
        <img
          src={image2}
          alt="Factory"
          className="rounded-2xl shadow-md object-cover w-full h-72"
        />
        <img
          src={image3}
          alt="Machinery"
          className="rounded-2xl shadow-md object-cover w-full h-72"
        />
      </div>
    </div>
  );
};

export default FactoryShowcase;
