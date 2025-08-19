import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import home1 from "../../../Assets/core_flexx/core_flex/hero1.png";
import logo from "../../../Assets/wallex/logo.svg";

const slides = [
  {
    image: home1,
    title: "LUXUS",
    subtitle: "POPULAR PICKS",
  },
  {
    image: home1,
    title: "LUXUS",
    subtitle: "POPULAR PICKS",
  },
  {
    image: home1,
    title: "LUXUS",
    subtitle: "POPULAR PICKS",
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

  // Intersection Observer to re-trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true); // Start animation
          } else {
            setAnimate(false); // Reset when out of view
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#044d42] pt-16 md:pb-16" ref={sectionRef}>
      <motion.h1
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        variants={fadeUp}
      >
        <img src={logo} className="py-4 mx-auto w-44" alt="Logo" />
      </motion.h1>

      <div className="w-full h-screen overflow-hidden rounded-2xl md:px-6 lg:px-10 px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full md:h-full h-[90vh] rounded-2xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-no-repeat relative"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Animated Text */}
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
