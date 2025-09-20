import React from "react";
import image1 from "../../../Assets/new_home/calcite/image1.png"
import image2 from "../../../Assets/new_home/calcite/image2.png"
import image3 from "../../../Assets/new_home/calcite/image3.png"
import image4 from "../../../Assets/new_home/calcite/image4.png"
const CalciteSection = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 lg:px-10 py-12 text-center">
      {/* Text Section */}
      <div className="mb-10">
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Natural brightness and superior performance.
          <br />
          Our premium-grade calcite enhances strength, whiteness, and smoothness
          in a variety of products — making it ideal for flooring, wall panels,
          and composite manufacturing.
        </p>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex items-center justify-center p-4"
          >
            <img
              src={src}
              alt={`Calcite product ${index + 1}`}
              className="object-contain h-full w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CalciteSection;
