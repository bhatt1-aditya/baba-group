import React from "react";
import { LuArrowRight } from "react-icons/lu";
import image1 from "../../Assets/new_home/gallery1.png";
import image2 from "../../Assets/new_home/gallery2.png";
import image3 from "../../Assets/new_home/gallery3.png";
import image4 from "../../Assets/new_home/gallery4.png";
import image5 from "../../Assets/new_home/gallery5.png";
import image6 from "../../Assets/new_home/gallery6.png";
import image7 from "../../Assets/new_home/gallery7.png";
import image8 from "../../Assets/new_home/gallery8.png";
import image9 from "../../Assets/new_home/gallery9.png";
import image10 from "../../Assets/new_home/gallery10.png";
import image11 from "../../Assets/new_home/gallery11.png";
import image12 from "../../Assets/new_home/gallery12.png";
import image13 from "../../Assets/new_home/gallery13.png";
import image14 from "../../Assets/new_home/gallery14.png";
import image15 from "../../Assets/new_home/gallery15.png";
import image16 from "../../Assets/new_home/gallery16.png";
import image17 from "../../Assets/new_home/gallery17.png";
import image18 from "../../Assets/new_home/gallery18.png";
const Gallery = () => {
  return (
    <div>
      <div className="flex justify-center flex-col py-5 items-center text-center">
        <h1 className="text-4xl">Gallery</h1>
        <p className="py-6">
          Explore our journey through images of innovation, excellence, and
          global presence.
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 pb-6 gap-4 max-w-5xl mx-auto  px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-2">
          <img src={image1} className="object-contain w-full" />
          <img src={image4} className="object-contain w-full" />
          <div className="flex flex-col items-center text-center p-2 rounded-xl  max-w-md mx-auto">
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              Explore stunning visuals of our manufacturing, designs, and
              international reach.
            </p>
            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors">
              <LuArrowRight className="text-white w-6 h-6" />
            </button>
          </div>
          <img src={image9} className="object-contain w-full" />
          <img src={image12} className="object-contain w-full" />
          <img
            src={image15}
            className="flex justify-center items-center mx-auto"
          />
          <img src={image16} className="object-contain w-full" />
        </div>
        <div className="grid grid-cols-1 gap-2">
          <img src={image2} className="object-contain w-full" />
          <img
            src={image5}
            className="flex justify-center items-center bg-center mx-auto"
          />
          <img src={image7} className="object-contain w-full" />
          <img src={image10} className="object-contain w-full" />
          <div className="flex flex-col items-center text-center  p-2 rounded-xl max-w-md mx-auto">
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              Explore stunning visuals of our manufacturing, designs, and
              international reach.
            </p>
            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors">
              <LuArrowRight className="text-white w-6 h-6" />
            </button>
          </div>
          <img src={image14} className="object-contain w-full" />
          <img src={image17} className="object-contain w-full" />
        </div>{" "}
        <div className="grid grid-cols-1 gap-2">
          <img src={image3} className="object-contain w-full" />
          <img src={image6} className="object-contain w-full" />
          <img src={image8} className="object-contain w-full" />
          <div className="flex flex-col items-center text-center p-2 rounded-xl max-w-md mx-auto">
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              Explore stunning visuals of our manufacturing, designs, and
              international reach.
            </p>
            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors">
              <LuArrowRight className="text-white w-6 h-6" />
            </button>
          </div>
          <img src={image13} className="object-contain w-full" />
          <img
            src={image15}
            className="flex justify-center items-center mx-auto"
          />
          <img src={image18} className="object-contain w-full" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
