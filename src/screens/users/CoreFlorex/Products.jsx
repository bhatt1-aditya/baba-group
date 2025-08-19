import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import explore1 from "../../../Assets/footer_florex/explore.png";
import explore2 from "../../../Assets/footer_florex/products1.png";
import explore3 from "../../../Assets/footer_florex/products2.png";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

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
  hidden: { opacity: 0, x: -60 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay },
  }),
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay },
  }),
};

// Zoom carousel for each product
const ZoomCarousel = ({ images, interval = 2500 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  const variants = {
    enter: { scale: 0.8, opacity: 0 },
    center: { scale: 1, opacity: 1, zIndex: 1 },
    exit: { scale: 1.2, opacity: 0, zIndex: 0 },
  };

  return (
    <div className="relative w-full h-[350px] overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={`Slide ${index}`}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
};

const Products = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  // Detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setAnimate(entry.isIntersecting));
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gray-50 py-16 md:px-6 lg:px-10 px-4"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Title */}
      <motion.div
        className="text-center mb-10"
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        variants={fadeUp}
      >
        <h1 className="whitespace-nowrap leading-none font-normal font-libertinus text-center">
          <h1 className="text-xl">Checkout our</h1>
          <br />
          <span className="md:text-4xl text-3xl">OTHER PRODUCTS</span>
        </h1>
      </motion.div>

      {/* Product Cards */}
      <div className="md:mx-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Floorexx - Slide from Left */}
        <motion.div
          className="relative group rounded-2xl overflow-hidden shadow-lg"
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          variants={slideLeft}
          custom={0.3}
        >
          {/* Zoom Carousel */}
          <ZoomCarousel images={[explore1, explore2, explore3]} />

          {/* Arrow */}
          <div className="absolute bottom-6 right-6 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-black hover:text-white transition">
            <FaRegArrowAltCircleDown size={20} />
          </div>
          {/* Label */}
          <div className="absolute bottom-6 left-6 bg-white px-6 py-2 rounded-full text-lg font-medium shadow-md">
            FLOOREXX
          </div>
        </motion.div>

        {/* Wallexx - Slide from Right */}
        <motion.div
          className="relative group rounded-2xl overflow-hidden shadow-lg"
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          variants={slideRight}
          custom={0.6}
        >
          {/* Zoom Carousel */}
          <ZoomCarousel images={[explore1, explore3, explore2]} />

          {/* Arrow */}
          <div className="absolute bottom-6 right-6 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-black hover:text-white transition">
            <FaRegArrowAltCircleDown size={20} />
          </div>
          {/* Label */}
          <div className="absolute bottom-6 left-6 bg-white px-6 py-2 rounded-full text-lg font-medium shadow-md">
            WALLEXX
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
