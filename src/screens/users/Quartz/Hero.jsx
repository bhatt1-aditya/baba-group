// import React from "react";
// import { motion } from "framer-motion";
// import homeBottomImage from "../../../Assets/Quartz/icon.svg";
// import hero from "../../../Assets/Quartz/hero.png";

// const Hero = () => {
//   // Animation variants
//   const textVariant = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 1 } },
//   };

//   const circleVariant = {
//     hidden: { opacity: 0, scale: 0 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 1, type: "spring", stiffness: 120 },
//     },
//   };

//    const CircularCTA = () => (
//       <motion.div
//       >
//         <div className="relative mx-auto mt-12 w-40 h-40 md:w-52 md:h-52">
//           {/* Rotating Circular Text */}
//           <motion.svg
//             viewBox="0 0 200 200"
//             className="w-full h-full absolute"
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
//           >
//             <defs>
//               <path
//                 id="circlePath"
//                 d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
//               />
//             </defs>
//             <text
//               className="fill-white text-[12px] md:text-[14px] tracking-[4px]"
//               style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
//             >
//               <textPath href="#circlePath" startOffset="0%">
//                 PROXIMON HOME • EXPLORE MORE • PROXIMON HOME • EXPLORE MORE •
//               </textPath>
//             </text>
//           </motion.svg>
    
//           {/* Center Button */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <motion.div
//               className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg cursor-pointer"
//               animate={{ scale: [1, 1.15, 1] }}
//               transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
//               whileHover={{ scale: 1.25 }}
//             >
//               <motion.span
//                 className="rotate-45 text-teal-900 text-3xl leading-none"
//                 animate={{ y: [0, -3, 0] }}
//                 transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
//               >
//                 ↗
//               </motion.span>
//             </motion.div>
//           </div>
//         </div>
//         {/* <div className="absolute inset-0 flex items-center justify-center">
//           <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/90 flex items-center justify-center">
//             <span className="rotate-45 text-teal-900 text-xl leading-none">↗</span>
//           </div>
//         </div> */}
//       </motion.div>
//     );

//   return (
//     <div className="overflow-x-hidden">
//       <div
//         className="relative w-full rounded-3xl min-h-screen object-fill bg-center text-white flex flex-col items-center justify-center px-4 pb-10 transition-all duration-1000 ease-in-out"
//         style={{ backgroundImage: `url(${hero})` }}
//       >
//         {/* Text Grid */}
//         <motion.ul
//           className="grid md:grid-cols-5 grid-cols-1 items-center justify-between lg:gap-24 gap-16 w-full text-center mb-10"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: {},
//             visible: {
//               transition: { staggerChildren: 0.3 },
//             },
//           }}
//         >
//           {["POPULAR PICKS", "Kao\nBULGARI", "POPULAR PICKS", "Kao\nBULGARI", "POPULAR PICKS"].map(
//             (item, index) => (
//               <motion.li
//                 key={index}
//                 variants={textVariant}
//                 className={`text-lg font-semibold text-black ${
//                   item.includes("\n") ? "flex flex-col" : ""
//                 }`}
//               >
//                 {item.split("\n").map((line, i) => (
//                   <span key={i} className={i === 0 && item.includes("\n") ? "text-5xl font-semibold" : ""}>
//                     {line}
//                   </span>
//                 ))}
//               </motion.li>
//             )
//           )}
//         </motion.ul>

//         {/* Bottom Circle Button */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={circleVariant}
//           className="absolute bottom-20 w-[80%] md:flex hidden justify-center items-center px-10"
//         >
//           <div className="flex flex-col justify-center items-center">
//             {/* <div className="relative scale-110">
//               <img src={homeBottomImage} className="relative" />
//             </div> */}
//             <CircularCTA/>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hero;




import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import hero1 from "../../../Assets/Quartz/hero.png";
import hero2 from "../../../Assets/floorrex/image1.png";
import homeBottomImage from "../../../Assets/Quartz/icon.svg";

// Slides config
const slides = [
  {
    type: "grid",
    image: hero1,
  },
  {
    type: "animated",
    image: hero2,
  },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

// Circular CTA Component
const CircularCTA = () => (
  <motion.div>
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
  </motion.div>
);

const Hero = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setAnimate(entry.isIntersecting));
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="overflow-x-hidden">
      <div className="w-full h-screen overflow-hidden rounded-3xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="w-full h-full rounded-3xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {slide.type === "grid" ? (
                // ---------- Slide 1: Grid Text + Circular CTA ----------
                <div
                  className="relative w-full min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center px-4 pb-10"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  {/* Text Grid */}
                  <motion.ul
                    className="grid md:grid-cols-5 grid-cols-1 items-center justify-between lg:gap-24 gap-16 w-full text-center mb-10"
                    initial="hidden"
                    animate={animate ? "visible" : "hidden"}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: { staggerChildren: 0.3 },
                      },
                    }}
                  >
                    {[
                      "POPULAR PICKS",
                      "Kao\nBULGARI",
                      "POPULAR PICKS",
                      "Kao\nBULGARI",
                      "POPULAR PICKS",
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        variants={fadeUp}
                        className={`text-lg font-semibold text-black ${
                          item.includes("\n") ? "flex flex-col" : ""
                        }`}
                      >
                        {item.split("\n").map((line, j) => (
                          <span
                            key={j}
                            className={
                              j === 0 && item.includes("\n")
                                ? "text-5xl font-semibold"
                                : ""
                            }
                          >
                            {line}
                          </span>
                        ))}
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Bottom Circle CTA */}
                  <motion.div
                    initial="hidden"
                    animate={animate ? "visible" : "hidden"}
                    variants={fadeUp}
                    className="absolute bottom-20 w-[80%] md:flex hidden justify-center items-center px-10"
                  >
                    <CircularCTA />
                  </motion.div>
                </div>
              ) : (
                // ---------- Slide 2: Animated Layout ----------
                <div
                  className="relative w-full min-h-screen bg-cover bg-center text-white flex items-center justify-center px-4 pb-10"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  {/* Title */}
                  <motion.div
                    className="text-center z-10"
                    initial="hidden"
                    animate={animate ? "visible" : "hidden"}
                    variants={{
                      visible: { transition: { staggerChildren: 0.2 } },
                    }}
                  >
                    <motion.h2
                      className="text-3xl md:text-5xl font-light tracking-widest"
                      variants={fadeUp}
                      custom={0}
                    >
                      WOODEN SERIES:
                    </motion.h2>
                    <motion.h1
                      className="text-4xl md:text-6xl font-bold mt-2 tracking-wider"
                      variants={fadeUp}
                      custom={0.2}
                    >
                      ENTANA WALNUT
                    </motion.h1>
                  </motion.div>

                  {/* Bottom Row */}
                  <motion.div
                    className="absolute bottom-20 md:flex hidden justify-between items-center px-10 gap-10"
                    initial="hidden"
                    animate={animate ? "visible" : "hidden"}
                    variants={{
                      visible: { transition: { staggerChildren: 0.3 } },
                    }}
                  >
                    {/* Left text */}
                    <motion.div
                      className="text-white text-lg md:text-xl text-center"
                      variants={fadeUp}
                      custom={0}
                    >
                      POPULAR PICKS . POPULAR PICKS . POPULAR PICKS
                    </motion.div>

                    {/* Center Image Button */}
                    <motion.div
                      className="flex flex-col items-center"
                      variants={fadeUp}
                      custom={0.3}
                    >
                      <div className="relative scale-125">
                        <img src={homeBottomImage} alt="Explore" />
                        <div className="absolute inset-0 flex items-center justify-center text-black font-bold text-3xl">
                          <FiArrowRight />
                        </div>
                      </div>
                    </motion.div>

                    {/* Right text */}
                    <motion.div
                      className="text-white text-lg md:text-xl text-center"
                      variants={fadeUp}
                      custom={0.6}
                    >
                      POPULAR PICKS . POPULAR PICKS . POPULAR PICKS
                    </motion.div>
                  </motion.div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
