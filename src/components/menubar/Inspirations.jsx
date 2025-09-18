import React from "react";
import image1 from "../../Assets/menuImage/inspiration1.png"
import image2 from "../../Assets/menuImage/inspiration2.png"
import image3 from "../../Assets/menuImage/inspiration3.png"
import image4 from "../../Assets/menuImage/inspiration4.png"
import image5 from "../../Assets/menuImage/inspiration5.png"
import image6 from "../../Assets/menuImage/inspiration6.png"
import image7 from "../../Assets/menuImage/inspiration7.png"
import image8 from "../../Assets/menuImage/inspiration8.png"
import image9 from "../../Assets/menuImage/inspiration9.png"
import image10 from "../../Assets/menuImage/inspiration10.png"
import image11 from "../../Assets/menuImage/inspiration11.png"
import image12 from "../../Assets/menuImage/inspiration12.png"
import image13 from "../../Assets/menuImage/inspiration13.png"
import image14 from "../../Assets/menuImage/inspiration14.png"
// Sample images array
const inspirations = [
 image1,
 image2,
 image3,
 image4,
 image5,
 image6,
 image7,
 image8,
 image9,
 image10,
 image11,
 image12,
 image13,
 image14,
];

const Inspirations = () => {
  return (
    <div className="mx-auto px-4 md:px-6 lg:px-10 my-24 text-center">
      <p className="text-sm text-orange-500 uppercase tracking-widest mb-4">
        The products we make – inspirations for tomorrow
      </p>

      <h2 className="text-4xl font-semibold mb-8">
        INSPIRATIONS
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {inspirations.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={image}
              alt={`Inspiration ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inspirations;
