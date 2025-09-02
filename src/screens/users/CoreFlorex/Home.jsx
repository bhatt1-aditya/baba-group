import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import home1 from "../../../Assets/core_flexx/core_flex/hero1.png";
import hero2 from "../../../Assets/core_flexx/core_flex/hero1.png"; // from second code
import homeBottomImage from "../../../Assets/footer_florex/homeFooter.svg";
import logo from "../../../Assets/core_flexx/core_flex/logo1.svg";
import { FiArrowRight } from "react-icons/fi";

const slides = [
  {
    type: "basic",
    image: home1,
    title: "LUXUS",
    subtitle: "POPULAR PICKS",
  },
  {
    type: "animated",
    image: hero2,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const Hero = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setAnimate(entry.isIntersecting);
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
      </motion.div>
    );
  return (
    <div className="" ref={sectionRef}>
      {/* Logo */}
     

      {/* Swiper */}
      <div className="w-full h-screen overflow-hidden rounded-2xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full h-full rounded-2xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {slide.type === "basic" ? (
                // ---------- Slide 1 (Simple Luxus) ----------
                <div
                  className="w-full h-full bg-cover bg-no-repeat relative"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center text-white z-10"
                    initial="hidden"
                    animate={animate ? "visible" : "hidden"}
                    variants={{
                      visible: { transition: { staggerChildren: 0.3 } },
                    }}
                  >
                    <motion.h2
                      className="text-4xl md:text-5xl font-serif"
                      variants={fadeUp}
                      custom={0.2}
                    >
                      {slide.title}
                    </motion.h2>
                    <motion.p
                      className="text-lg tracking-widest"
                      variants={fadeUp}
                      custom={0.4}
                    >
                      {slide.subtitle}
                    </motion.p>
                  </motion.div>
                </div>
              ) : (
                // ---------- Slide 2 (Your Animated Home Layout) ----------
                <div
                  className="relative w-full min-h-screen bg-cover bg-center text-white flex items-center justify-center px-4 pb-10"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute bottom-20 w-[80%] md:flex hidden justify-between items-center px-10">
                    {/* Left text */}
                    <motion.div
                      className="text-black text-lg md:text-xl text-center"
                      initial={{ opacity: 0, x: -50 }}
                      animate={
                        animate ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                      }
                      transition={{ duration: 0.8 }}
                    >
                      <div
                        className="uppercase tracking-widest"
                        style={{ fontFamily: "Cormorant, serif" }}
                      >
                        POPULAR PICKS
                      </div>
                      <div
                        className="italic text-2xl font-semibold"
                        style={{ fontFamily: "Comforter, cursive" }}
                      >
                        CFX-401
                      </div>
                    </motion.div>

                    {/* Center Circle */}
                  <CircularCTA/>

                    {/* Right text */}
                    <motion.div
                      className="text-black text-lg md:text-xl text-center"
                      initial={{ opacity: 0, x: 50 }}
                      animate={
                        animate ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                      }
                      transition={{ duration: 0.8 }}
                    >
                      <div
                        className="uppercase tracking-widest"
                        style={{ fontFamily: "Cormorant, serif" }}
                      >
                        POPULAR PICKS
                      </div>
                      <div
                        className="italic text-2xl font-semibold"
                        style={{ fontFamily: "Comforter, cursive" }}
                      >
                        CFX-401
                      </div>
                    </motion.div>
                  </div>
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
