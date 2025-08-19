import React from "react";
import homeImage from "../../../Assets/wallex/about/icon.png";
import homeBottomImage from "../../../Assets/wallex/about/bottomIcons.svg";
const About = () => {
  return ( <div className=" pb-20 md:px-6 lg:px-10 px-4 bg-[#044d42]">
      <div
        className=" relative w-full rounded-3xl min-h-screen bg-cover object-fill bg-center text-white flex items-center justify-center px-4 pd:mb-0 pb-10 transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${homeImage})` }}
      >
        <div className="flex z-10 gap-5 flex-col items-center text-white">
        <h1 className="">Learn More About</h1>
          <h1 className="">
            <span className="uppercase flex items-center flex-col">
              <h1 className="text-5xl uppercase">Wallexx</h1> <br />
            </span>
          </h1>
        
        </div>

        <div className="absolute bottom-10 scale-125">
            <img src={homeBottomImage} className="relative"/>
            
        </div>

        <div>
        </div>
      </div>
          
    </div>
  )
}

export default About