import React from "react";
import homeImage from "../../../Assets/footer_florex/about2.png";
import topImage from "../../../Assets/footer_florex/topImage.png";
import homeBottomImage from "../../../Assets/footer_florex/about.png";
import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineMinus } from "react-icons/hi";
import {motion} from "framer-motion"
const About = () => {

   const CircularCTA = () => (
    <motion.div
    >
      <div className="relative mx-auto mt-12 w-40 h-40 md:w-52 md:h-52">
        {/* Rotating Circular Text */}
        <motion.svg
          viewBox="0 0 200 200"
          className="w-full h-full absolute"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text
            className="fill-white text-[12px] md:text-[14px] tracking-[4px]"
            style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
          >
            <textPath href="#circlePath" startOffset="0%">
              PROXIMON HOME • EXPLORE MORE • PROXIMON HOME • EXPLORE MORE •
            </textPath>
          </text>
        </motion.svg>
  
        {/* Center Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg cursor-pointer"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            whileHover={{ scale: 1.25 }}
          >
            <motion.span
              className="rotate-45 text-teal-900 text-3xl leading-none"
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            >
              ↗
            </motion.span>
          </motion.div>
        </div>
      </div>
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/90 flex items-center justify-center">
          <span className="rotate-45 text-teal-900 text-xl leading-none">↗</span>
        </div>
      </div> */}
    </motion.div>
  );
  
  
  return ( <div className="pt-24  pb-20">
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
            <CircularCTA/>
        </div>

        <div>
        </div>
      </div>
          
    </div>
  )
}

export default About