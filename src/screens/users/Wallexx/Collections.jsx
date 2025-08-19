import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import image1 from "../../../Assets/core_flexx/collections/image1.png";
import image2 from "../../../Assets/core_flexx/collections/image2.png";
import image3 from "../../../Assets/core_flexx/collections/image3.png";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay },
  }),
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay },
  }),
};

const Collections = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Trigger animations on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
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

  const collections = [image1, image2, image3,image2,image1];

  // Auto-advance carousel when in view; pauses on hover
  useEffect(() => {
    if (!animate || isPaused) return;
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % collections.length);
    }, 2500);
    return () => clearInterval(intervalId);
  }, [animate, isPaused, collections.length]);

  return (
    <div className="bg-[#044d42] bg-cover bg-center" ref={sectionRef}>
      <motion.div
        className="text-center bg-white md:mx-10 mx-4 rounded-2xl"
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <div className="pt-10 max-h-screen">
          {/* Heading */}
          <motion.h1
            className="text-xl font-semibold"
            variants={fadeUp}
            custom={0.1}
          >
            New
          </motion.h1>
          <motion.h1
            className="text-3xl font-semibold mb-8"
            variants={fadeUp}
            custom={0.3}
            style={{ fontFamily: "Cinzel Decorative, serif" }}
          >
            Collections
          </motion.h1>

          {/* Small/Medium screens - your original 3 animations */}
          <div className="flex justify-between items-center md:mx-10 mx-2 pb-10 lg:hidden">
            <motion.div variants={slideLeft} custom={0.4}>
              <img src={image1} alt="Collection 1" />
            </motion.div>
            <motion.div variants={fadeUp} custom={0.6}>
              <img src={image2} alt="Collection 2" className="xl:h-[550px]" />
            </motion.div>
            <motion.div variants={slideRight} custom={0.8}>
              <img src={image3} alt="Collection 3" />
            </motion.div>
          </div>

          {/* Large screens - carousel style */}
          <div
            className="relative  h-[450px] hidden lg:flex justify-center items-center overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {collections.map((img, index) => {
              const offset = index - activeIndex;
              const translateX = offset * 300;
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
                  <img
                    src={img}
                    alt={`Collection ${index + 1}`}
                    className="w-[300px] h-[350px] object-contain rounded-2xl"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Collections;
