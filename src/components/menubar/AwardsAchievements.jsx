import React from "react";
import image1 from "../../Assets/menuImage/awards1.png"
import image2 from "../../Assets/menuImage/awards2.png"
import image3 from "../../Assets/menuImage/awards3.png"
import image4 from "../../Assets/menuImage/awards4.png"
import image5 from "../../Assets/menuImage/awards5.png"
import image6 from "../../Assets/menuImage/awards6.png"
// Sample image data
const awards = [
 image1,
 image2,
 image3,
 image4,
 image5,
 image6,
];

const AwardsAchievements = () => {
  return (
    <div className="max-w-7xl mx-auto md:px-6 lg:px-10 px-4 my-24 text-center">
      <h2 className="text-4xl font-semibold">
        AWARDS <span className="text-orange-500">&</span> <br/> ACHIEVEMENTS
      </h2>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
        {awards.map((award, index) => (
          <div key={index} className="p-4 bg-white shadow-lg rounded-lg">
            <img
              src={award}
              alt={`Award ${index + 1}`}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsAchievements;
