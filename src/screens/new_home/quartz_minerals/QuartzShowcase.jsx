import React from "react";

import image1 from "../../../Assets/new_home/quartz_minerals/image1.png"
import image2 from "../../../Assets/new_home/quartz_minerals/image2.png"
import image3 from "../../../Assets/new_home/quartz_minerals/image3.png"
import image4 from "../../../Assets/new_home/quartz_minerals/image4.png"
import image5 from "../../../Assets/new_home/quartz_minerals/image5.png"
import image6 from "../../../Assets/new_home/quartz_minerals/image6.png"
import image7 from "../../../Assets/new_home/quartz_minerals/image7.png"
import image8 from "../../../Assets/new_home/quartz_minerals/image8.png"
const QuartzShowcase = () => {
  const products = [
    { img:image1, label: "0.063mm – 0.2mm" },
    { img: image2, label: "0.1 mm – 0.4 mm" },
    { img: image3, label: "0.3 mm – 0.7 mm" },
    { img: image4, label: "0.6 mm – 1.2 mm" },
    { img: image5, label: "1.2 mm – 2.5 mm" },
    { img: image6, label: "2.5 mm – 4 mm" },
    { img: image7, label: "4 – 6 mm" },
    { img: image8, label: "38 Microns" },
  ];

  return (
    <div className="w-full bg-white py-12 px-4 lg:px-10 md:px-6 flex flex-col items-center">
      {/* Heading / Description */}
      <p className="text-gray-700 text-center max-w-3xl mb-10 leading-relaxed">
        Baba Group’s high-purity quartz is responsibly mined and refined to
        deliver exceptional clarity, strength, and consistency for surfaces,
        panels, and industrial uses worldwide.
      </p>

      {/* Grid of Quartz Products */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={item.img}
              alt={item.label}
              className="rounded shadow-md object-cover"
            />
            {/* <p className="mt-3 text-gray-800 text-sm font-medium">
              {item.label}
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuartzShowcase;
