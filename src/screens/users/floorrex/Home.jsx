import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import hero1 from "../../../Assets/core_flexx/core_flex/hero1.png";
import hero2 from "../../../Assets/floorrex/image1.png";
import homeBottomImage from "../../../Assets/footer_florex/homeFooter.svg";
import { FiArrowRight } from "react-icons/fi";

const slides = [
  {
    type: "basic",
    image: hero1,
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

const Home = () => {
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
      <div className="w-full h-screen overflow-hidden rounded-2xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="w-full h-full rounded-2xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {slide.type === "basic" ? (
                // ---------- Slide 1 ----------
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
                // ---------- Slide 2 (Your Existing Layout) ----------
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
                    style={{ fontFamily: "Hanken Grotesk, sans-serif" }}
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
                      <div className="uppercase tracking-widest">
                        POPULAR PICKS . POPULAR PICKS . POPULAR PICKS
                      </div>
                    </motion.div>

                    {/* Center Circle Button */}
                    <motion.div
                      className="flex flex-col items-center"
                      variants={fadeUp}
                      custom={0.3}
                    >
                      <div className="relative scale-125">
                        <img src={homeBottomImage} alt="Explore" />
                        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 inset-4 top-5 mx-auto z-30 text-black font-bold text-3xl">
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
                      <div className="uppercase tracking-widest">
                        POPULAR PICKS . POPULAR PICKS . POPULAR PICKS
                      </div>
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

export default Home;
