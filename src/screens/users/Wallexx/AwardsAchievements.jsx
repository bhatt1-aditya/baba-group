import React from 'react'
import image from "../../../Assets/wallex/about/image3.png"

const AwardsAchievements = () => {
  return (
    <div className="bg-[#004736] py-10 min-h-screen px-4 md:px-6 lg:px-10 flex justify-center">
      <div
        className="relative w-full  rounded-xl overflow-hidden "
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}

        {/* Text Content */}
        <div className="relative z-10 flex items-center h-full p-10">
          <h2 className="text-white text-2xl md:text-5xl font-serif absolute bottom-5 leading-snug drop-shadow-lg">
            AWARDS <br /> & ACHIEVEMENTS
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AwardsAchievements