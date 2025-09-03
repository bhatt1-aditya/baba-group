import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import home1 from "../../../Assets/core_flexx/core_flex/hero1.png";
import logo from "../../../Assets/wallex/logo.svg";

const slides = [
  { image: home1, title: "LUXUS", subtitle: "POPULAR PICKS" },
  { image: home1, title: "WOODEN SERIES", subtitle: "ENTANA WALNUT" },
  { image: home1, title: "FLOORREX", subtitle: "PREMIUM COLLECTION" },
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
        entries.forEach((entry) => setAnimate(entry.isIntersecting));
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleExplore = () => {
    alert("Explore more clicked!");
  };

  return (
    <div className="relative bg-[#044d42] pt-16 md:pb-24" ref={sectionRef}>
      {/* Logo */}
      <motion.img
        src={logo}
        className="mx-auto w-44 py-4"
        alt="Logo"
        initial={{ opacity: 0, y: -20 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
      />

      {/* Hero Slider */}
      <div className="w-full h-screen overflow-hidden rounded-2xl md:px-6 lg:px-10 px-4 relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="w-full h-full rounded-2xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center relative rounded-2xl"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-2xl"></div>

                {/* Animated Text */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 text-center px-4"
                  initial="hidden"
                  animate={animate ? "visible" : "hidden"}
                  variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
                >
                  <motion.h2
                    className="text-4xl md:text-6xl font-serif mb-4"
                    variants={fadeUp}
                    custom={0.2}
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.p
                    className="text-lg md:text-2xl tracking-widest"
                    variants={fadeUp}
                    custom={0.4}
                  >
                    {slide.subtitle}
                  </motion.p>
                </motion.div>

                {/* Circular SVG Explore Button */}
                <motion.div
                  className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 md:w-40 md:h-40 cursor-pointer group"
                  onClick={handleExplore}
                  whileHover={{ scale: 1.1 }}
                >
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
                      className="fill-white text-[11px] md:text-[13px] tracking-[3px]"
                      style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                    >
                      <textPath href="#circlePath" startOffset="0%">
                        EXPLORE MORE • PREMIUM COLLECTION • EXPLORE MORE •
                      </textPath>
                    </text>
                  </motion.svg>

                  <motion.div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center shadow-lg transition group-hover:bg-gray-200">
                      <FiArrowRight className="text-black text-xl" />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
