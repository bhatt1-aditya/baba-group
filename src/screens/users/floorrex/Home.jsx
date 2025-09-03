import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import hero1 from "../../../Assets/core_flexx/collections/image2.png";
import hero2 from "../../../Assets/core_flexx/collections/image3.png";
import hero3 from "../../../Assets/core_flexx/collections/image1.png";
import hero4 from "../../../Assets/core_flexx/collections/image2.png";

const slides = [
  { type: "basic", image: hero1, title: "LUXUS", subtitle: "POPULAR PICKS" },
  { type: "animated", image: hero2, title: "WOODEN SERIES", subtitle: "ENTANA WALNUT" },
  { type: "basic", image: hero3, title: "MODERN COLLECTION", subtitle: "PREMIUM DESIGN" },
  { type: "animated", image: hero4, title: "ELEGANT SERIES", subtitle: "LUXURY FINISH" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

export default function Home() {
  const [animate, setAnimate] = useState(false);
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setAnimate(entry.isIntersecting)),
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="w-full h-screen rounded-3xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-screen flex items-center justify-center overflow-hidden rounded-3xl"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

              {/* Text Content */}
              <motion.div
                initial="hidden"
                animate={animate ? "visible" : "hidden"}
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
                className="relative text-center text-white px-6 md:px-0 z-20"
              >
                <motion.h2
                  className="text-4xl md:text-6xl font-serif tracking-wider mb-4"
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

              {/* Rotating Circular Button Centered */}
              <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 md:w-40 md:h-40 cursor-pointer group"
                onClick={handleNext}
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
                      id={`circlePath-${index}`}
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <text
                    className="fill-white text-[11px] md:text-[13px] tracking-[3px]"
                    style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                  >
                    <textPath href={`#circlePath-${index}`} startOffset="0%">
                      EXPLORE MORE • PREMIUM COLLECTION • EXPLORE MORE •
                    </textPath>
                  </text>
                </motion.svg>

                <motion.div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-900 flex items-center justify-center shadow-lg transition group-hover:bg-gray-800">
                    <FiArrowRight className="text-white text-xl" />
                  </div>
                </motion.div>
              </motion.div>

              {/* SVG Wave Bottom */}
              <div className="absolute bottom-0 w-full">
                <svg
                  className="w-full"
                  viewBox="0 0 1440 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0,0 C360,100 1080,100 1440,0 L1440,120 L0,120 Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
