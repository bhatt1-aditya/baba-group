import React from "react";
import { motion } from "framer-motion";
import homeBottomImage from "../../../Assets/Quartz/icon.svg";
import hero from "../../../Assets/Quartz/hero.png";

const Hero = () => {
  // Animation variants
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const circleVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, type: "spring", stiffness: 120 },
    },
  };

  return (
    <div className="overflow-x-hidden">
      <div
        className="relative w-full rounded-3xl min-h-screen object-fill bg-center text-white flex flex-col items-center justify-center px-4 pb-10 transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Text Grid */}
        <motion.ul
          className="grid md:grid-cols-5 grid-cols-1 items-center justify-between lg:gap-24 gap-16 w-full text-center mb-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {["POPULAR PICKS", "Kao\nBULGARI", "POPULAR PICKS", "Kao\nBULGARI", "POPULAR PICKS"].map(
            (item, index) => (
              <motion.li
                key={index}
                variants={textVariant}
                className={`text-lg font-semibold text-black ${
                  item.includes("\n") ? "flex flex-col" : ""
                }`}
              >
                {item.split("\n").map((line, i) => (
                  <span key={i} className={i === 0 && item.includes("\n") ? "text-5xl font-semibold" : ""}>
                    {line}
                  </span>
                ))}
              </motion.li>
            )
          )}
        </motion.ul>

        {/* Bottom Circle Button */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={circleVariant}
          className="absolute bottom-20 w-[80%] md:flex hidden justify-center items-center px-10"
        >
          <div className="flex flex-col justify-center items-center">
            <div className="relative scale-110">
              <img src={homeBottomImage} className="relative" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
