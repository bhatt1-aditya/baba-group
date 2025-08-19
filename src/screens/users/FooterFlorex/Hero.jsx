import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import home1 from "../../../Assets/core_flexx/core_flex/hero1.png";
import homeImage from "../../../Assets/footer_florex/home.png";
import homeBottomImage from "../../../Assets/footer_florex/homeFooter.svg";
import logo from "../../../Assets/footer_florex/logo.svg";
import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineMinus } from "react-icons/hi";

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
            setAnimate(true);
          } else {
            setAnimate(false);
          }
        });
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black pt-16 md:pb-16" ref={sectionRef}>
      <motion.h1
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        variants={fadeUp}
      >
        <img src={logo} className="py-4 mx-auto w-44" alt="Logo" />
      </motion.h1>

      {/* Swiper Carousel */}
      <div className="w-full h-screen overflow-hidden rounded-2xl md:px-6 lg:px-10 px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="w-full md:h-full h-[90vh] rounded-2xl"
        >
          {/* ---- Slide 1 ---- */}
          <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-no-repeat relative"
              style={{ backgroundImage: `url(${home1})` }}
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
                  LUXUS
                </motion.h2>
                <motion.p
                  className="text-lg tracking-widest"
                  variants={fadeUp}
                  custom={0.4}
                >
                  POPULAR PICKS
                </motion.p>
              </motion.div>
            </div>
          </SwiperSlide>

          {/* ---- Slide 2 (Your Tanzania Hero Layout) ---- */}
          <SwiperSlide>
            <div
              className="relative w-full min-h-screen bg-cover bg-center text-white flex items-center justify-center px-4 pb-10"
              style={{ backgroundImage: `url(${homeImage})` }}
            >
              {/* Center Grid */}
              <motion.div
                className="grid md:grid-cols-5 z-10 items-center"
                initial="hidden"
                animate={animate ? "visible" : "hidden"}
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
              >
                {/* Left text */}
                <motion.h1
                  className="uppercase xl:text-4xl text-2xl whitespace-nowrap font-normal"
                  variants={{
                    hidden: { opacity: 0, x: -100, scale: 0.9 },
                    visible: { opacity: 1, x: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Popular Picks
                </motion.h1>

                {/* Minus */}
                <motion.h1
                  className="uppercase text-5xl mx-auto"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <HiOutlineMinus />
                </motion.h1>

                {/* Center Title */}
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, scale: 0.5 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.9, delay: 0.6 }}
                >
                  <span className="uppercase flex items-center flex-col">
                    <h1
                      className="capitalize xl:text-9xl lg:text-7xl text-5xl"
                      style={{ fontFamily: "Corinthia, cursive", fontWeight: 700 }}
                    >
                      Tanzania
                    </h1>
                    <br />
                    <h2
                      className="lg:text-3xl sm:text-2xl text-xl"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      THE HOPE
                    </h2>
                  </span>
                </motion.h1>

                {/* Minus */}
                <motion.h1
                  className="uppercase mx-auto text-5xl"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <HiOutlineMinus />
                </motion.h1>

                {/* Right text */}
                <motion.h1
                  className="uppercase xl:text-4xl text-2xl whitespace-nowrap font-normal"
                  variants={{
                    hidden: { opacity: 0, x: 100, scale: 0.9 },
                    visible: { opacity: 1, x: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.8, delay: 1 }}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Popular Picks
                </motion.h1>
              </motion.div>

              {/* Bouncing Arrow */}
              <motion.div
                className="absolute bottom-10 scale-125"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <img src={homeBottomImage} className="relative" />
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 inset-4 top-5 mx-auto z-30 text-black font-bold text-3xl">
                  <FiArrowUpRight />
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
