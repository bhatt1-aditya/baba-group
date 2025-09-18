import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import images
import hero1 from "../../../Assets/Quartz/hero.png";
import hero2 from "../../../Assets/floorrex/image1.png";
import homeImage2 from "../../../Assets/core_flexx/collections/image1.png";
import homeImage3 from "../../../Assets/core_flexx/collections/image2.png";
import homeImage4 from "../../../Assets/core_flexx/collections/image3.png";

// Animation for fade up
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  }),
};

const CircularCTA = ({ onClick }) => (
  <motion.div
    className="relative mx-auto w-40 h-40 md:w-52 md:h-52 cursor-pointer"
    onClick={onClick}
    whileHover={{ scale: 1.1 }}
  >
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
        className="fill-gray-900 text-[12px] md:text-[14px] tracking-[4px]"
        style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
      >
        <textPath href="#circlePath" startOffset="0%">
          EXPLORE MORE • PREMIUM COLLECTION • EXPLORE MORE •
        </textPath>
      </text>
    </motion.svg>

    {/* Center button with arrow */}
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-black text-white flex items-center justify-center shadow-lg"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <motion.span
          className="text-2xl"
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        >
          ↗
        </motion.span>
      </motion.div>
    </div>
  </motion.div>
);

const Hero = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  // Scroll animation trigger
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

  const slides = [hero1, hero2, homeImage2, homeImage3, homeImage4];

  return (
    <div ref={sectionRef} className="overflow-hidden">
      <div className="w-full h-screen rounded-3xl overflow-hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          className="w-full h-full rounded-3xl"
        >
          {slides.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
                style={{ backgroundImage: `url(${image})` }}
              >
                {/* Title */}
                <motion.div
                  className="text-center"
                  initial="hidden"
                  animate={animate ? "visible" : "hidden"}
                  variants={{
                    visible: { transition: { staggerChildren: 0.2 } },
                  }}
                >
                  <motion.h1
                    className="text-4xl md:text-6xl font-bold tracking-wide drop-shadow-lg"
                    variants={fadeUp}
                  >
                    PREMIUM COLLECTION
                  </motion.h1>
                  <motion.p
                    className="mt-4 text-lg md:text-xl drop-shadow-md"
                    variants={fadeUp}
                    custom={0.2}
                  >
                    Discover the elegance of timeless design
                  </motion.p>
                </motion.div>

                {/* Circular CTA at Bottom */}
                <motion.div
                  initial="hidden"
                  animate={animate ? "visible" : "hidden"}
                  variants={fadeUp}
                  className="absolute bottom-16"
                >
                  <CircularCTA onClick={() => navigate("/explore")} />
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
