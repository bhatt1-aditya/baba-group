import React from "react";
import homeImage from "../../../Assets/footer_florex/about2.png";
import topImage from "../../../Assets/footer_florex/topImage.png";
import homeBottomImage from "../../../Assets/footer_florex/about.png";
import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineMinus } from "react-icons/hi";
const About = () => {
  return ( <div className="pt-24 pb-20">
      <div
        className=" relative w-full rounded-3xl min-h-screen bg-cover object-fill bg-center text-white flex items-center justify-center px-4 pd:mb-0 pb-10 transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${homeImage})` }}
      >
        <div className="flex z-10 gap-5 flex-col items-center">
        <h1 className="text-black">Learn More About</h1>
          <h1 className="">
            <span className="uppercase flex items-center flex-col">
              <h1 className="text-5xl text-black">Cristalloo</h1> <br />
            </span>
          </h1>
        
        </div>

        <div className="absolute bottom-10 scale-125">
            <img src={homeBottomImage} className="relative"/>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 inset-4 top-5 mx-auto z-30 text-black font-bold text-3xl"><FiArrowUpRight/></div>
           
        </div>

        <div>
        </div>
      </div>
          
    </div>
  )
}

export default About