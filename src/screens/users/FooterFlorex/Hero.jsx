import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineMinus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

// Assets
import logo from "../../../Assets/footer_florex/logo.svg";
import home1 from "../../../Assets/core_flexx/core_flex/hero1.png";
import homeImage from "../../../Assets/footer_florex/home.png";
import homeImage2 from "../../../Assets/core_flexx/collections/image1.png";
import homeImage3 from "../../../Assets/core_flexx/collections/image2.png";
import homeImage4 from "../../../Assets/core_flexx/collections/image3.png";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const Hero = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // Trigger animations when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setAnimate(entry.isIntersecting)),
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Images for carousel
  const heroImages = [home1, homeImage, homeImage2, homeImage3, homeImage4];

  // Click handler for SVG
  const handleSvgClick = () => {
    navigate("/collections"); // Redirects to this route
  };

  return (
    <section
      className="bg-black relative overflow-hidden w-full"
      ref={sectionRef}
    >
      {/* Background floating blur layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Logo */}
      <motion.div
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        variants={fadeUp}
        className="py-4 flex justify-center relative z-20"
      >
        <img src={logo} className="w-44" alt="Logo" />
      </motion.div>

      {/* Swiper Carousel */}
      <div className="w-full h-screen rounded-2xl px-4 md:px-6 lg:px-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }} // Faster rotation
          loop={true}
          className="w-full h-[90vh] md:h-full rounded-2xl"
        >
          {/* Dynamically Render Slides */}
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full relative bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Centered Text */}
                <motion.div
                  className="relative z-10 flex flex-col items-center justify-center h-full text-white"
                  initial="hidden"
                  animate={animate ? "visible" : "hidden"}
                  variants={{
                    visible: { transition: { staggerChildren: 0.3 } },
                  }}
                >
                  <motion.h2
                    className="text-4xl md:text-6xl font-bold tracking-wide"
                    variants={fadeUp}
                    custom={0.2}
                  >
                    LUXUS
                  </motion.h2>
                  <motion.p
                    className="text-lg md:text-xl tracking-widest mt-3"
                    variants={fadeUp}
                    custom={0.4}
                  >
                    PREMIUM COLLECTION
                  </motion.p>
                </motion.div>

                {/* Rotating SVG Bottom CTA */}
                <motion.div
                  className="absolute bottom-12 flex justify-center w-full z-30"
                  initial={{ y: 0 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8 }}
                  onClick={handleSvgClick} // Make the whole SVG clickable
                >
                  <div className="relative w-28 h-28 flex items-center justify-center cursor-pointer">
                    {/* Rotating Text SVG */}
                    <motion.svg
                      viewBox="0 0 200 200"
                      className="w-full h-full absolute"
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 15,
                        ease: "linear",
                      }}
                    >
                      <defs>
                        <path
                          id="circlePath"
                          d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                        />
                      </defs>
                      <text
                        className="fill-gray-300 text-[11px] md:text-[13px] tracking-[3px]"
                        style={{
                          fontFamily: "sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        <textPath href="#circlePath" startOffset="0%">
                          EXPLORE MORE • PREMIUM COLLECTION • EXPLORE MORE •
                        </textPath>
                      </text>
                    </motion.svg>

                    {/* Center Arrow */}
                    <div className="absolute text-white text-3xl font-bold">
                      <FiArrowUpRight />
                    </div>
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}

          {/* Special Slide with Center Grid Layout */}
          <SwiperSlide>
            <div
              className="relative w-full h-full bg-cover bg-center flex flex-col items-center justify-center text-white"
              style={{ backgroundImage: `url(${homeImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90"></div>

              {/* Grid Content */}
              <motion.div
                className="relative z-10 grid md:grid-cols-5 items-center gap-6 px-4 text-center md:text-left"
                initial="hidden"
                animate={animate ? "visible" : "hidden"}
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
              >
                <motion.h1
                  className="uppercase text-2xl xl:text-4xl font-medium"
                  variants={fadeUp}
                  custom={0.2}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Popular Picks
                </motion.h1>

                <motion.span
                  className="text-5xl mx-auto"
                  variants={fadeUp}
                  custom={0.4}
                >
                  <HiOutlineMinus />
                </motion.span>

                <motion.div
                  className="flex flex-col items-center"
                  variants={fadeUp}
                  custom={0.6}
                >
                  <h1
                    className="capitalize text-5xl lg:text-7xl xl:text-9xl font-bold"
                    style={{ fontFamily: "Corinthia, cursive" }}
                  >
                    Tanzania
                  </h1>
                  <h2
                    className="mt-3 text-xl lg:text-3xl"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    THE HOPE
                  </h2>
                </motion.div>

                <motion.span
                  className="text-5xl mx-auto"
                  variants={fadeUp}
                  custom={0.8}
                >
                  <HiOutlineMinus />
                </motion.span>

                <motion.h1
                  className="uppercase text-2xl xl:text-4xl font-medium"
                  variants={fadeUp}
                  custom={1}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Popular Picks
                </motion.h1>
              </motion.div>

              {/* Rotating SVG CTA for this slide */}
              <motion.div
                className="absolute bottom-12 flex justify-center w-full z-30"
                initial={{ y: 0 }}
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
                onClick={handleSvgClick} // clickable here too
              >
                <div className="relative w-28 h-28 flex items-center justify-center cursor-pointer">
                  <motion.svg
                    viewBox="0 0 200 200"
                    className="w-full h-full absolute"
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 15,
                      ease: "linear",
                    }}
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                      />
                    </defs>
                    <text
                      className="fill-gray-300 text-[11px] md:text-[13px] tracking-[3px]"
                      style={{
                        fontFamily: "sans-serif",
                        fontWeight: "bold",
                      }}
                    >
                      <textPath href="#circlePath" startOffset="0%">
                        EXPLORE MORE • PREMIUM COLLECTION • EXPLORE MORE •
                      </textPath>
                    </text>
                  </motion.svg>
                  <div className="absolute text-white text-3xl font-bold">
                    <FiArrowUpRight />
                  </div>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
