import React, { useState } from "react";
import { motion } from "framer-motion";
import collection1 from "../../../Assets/footer_florex/collection1.png";
import collection2 from "../../../Assets/footer_florex/collection2.png";
import collection3 from "../../../Assets/footer_florex/collection3.png";
import collection5 from "../../../Assets/footer_florex/collection2.png";
import { LuArrowRight } from "react-icons/lu";

const collections = [
  { img: collection1, title: "THE HOPE" ,discover: true},
  { img: collection2, title: "ELUSIVE WHITE",discover: true },
  { img: collection3, title: "ELUSIVE WHITE", discover: true },
  { img: collection1, title: "ELUSIVE WHITE",discover: true },
  { img: collection5, title: "THE HOPE" ,discover: true},
];

const Collections = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div className="text-white px-4 sm:px-6 lg:px-10 py-10 overflow-hidden"style={{
              fontFamily: "Poppins, sans-serif",
            }}>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className="uppercase text-2xl sm:text-3xl lg:text-4xl font-normal font-libertinus text-center">
          New <br /> Collections
        </h1>
        <h2 className="uppercase text-center mt-3 text-sm sm:text-base lg:text-lg">
          LOOK WHAT’S NEW IN CRISTALLOO
        </h2>
      </motion.div>

      {/* 👇 Small & Medium Devices - Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10 lg:hidden">
        {collections.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.img}
              alt={item.title}
              className="w-full max-w-[180px] sm:max-w-[220px] object-cover rounded-md shadow-lg"
            />
            <h1 className="uppercase mt-2 text-xs sm:text-sm text-center">
              {item.title}
            </h1>
          </div>
        ))}
      </div>

      {/* 👇 Large Devices - Carousel Layout */}
      <div className="relative my-10 h-[400px] hidden lg:flex justify-center items-center overflow-hidden">
        {collections.map((item, index) => {
          const offset = index - activeIndex;
          const translateX = offset * 310; // spacing only for lg
          let scale = index === activeIndex ? 1.1 : 0.8;
          let zIndex = index === activeIndex ? 20 : 10;
          let opacity = Math.abs(offset) > 2 ? 0 : 1;

          return (
            <motion.div
              key={index}
              className="absolute cursor-pointer"
              style={{ zIndex }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ x: translateX, scale, opacity }}
              transition={{ duration: 0.5 }}
              onClick={() => setActiveIndex(index)}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-[300px] h-[350px] object-cover rounded-md shadow-lg"
              />

              {/* Buttons */}
              {item.discover ? (
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center bg-white rounded-full shadow-lg overflow-hidden group"
    >
      <span className="px-5 py-2 text-sm font-normal whitespace-nowrap text-gray-800 tracking-wider">
        DISCOVER MORE
      </span>
      <span className="flex items-center justify-center rounded-full m-1 w-10 h-10 bg-black overflow-hidden relative">
        <motion.div
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, repeatType: "loop" }}
        >
          <LuArrowRight className="text-white text-xl" />
        </motion.div>
      </span>
    </motion.button>
  </div>
) : null}


              {/* Title */}
              <h1 className="uppercase absolute left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap" >
                {item.title}
              </h1>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Collections;
