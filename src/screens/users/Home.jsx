import React, { useRef, useEffect, useState } from "react";
import { FaSearch, FaChevronUp, FaHome, FaInfoCircle, FaStar, FaImages, FaBox, FaUsers } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Brands from "./Brands";
import Products from "./Products";
import Galleria from "./Galleria";
import Testimonials from "./Testimonials";
import AboutUs from "./AboutUs";
import babaVideo from "../../Assets/home/PRINCIE_BABA QUARTZ_Kitchen 29_Animation 2.mp4"
import Florex from "./Florex"

const Home = () => {
  const videoContainerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const videoSlides = [
    { id: 1, src: babaVideo },
    { id: 2, src: "https://assets-global.website-files.com/65ae37af356fab4845432048/65ae37af356fab48454320ae_BatteryRemoval_Pingpong_001-transcode.mp4" },
    { id: 3, src: babaVideo },
  ];

  const infiniteVideoSlides = [...videoSlides, ...videoSlides, ...videoSlides];

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Video slider effect
  useEffect(() => {
    const container = videoContainerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      let nextSlide = currentSlide + direction;

      if (nextSlide >= videoSlides.length) {
        setDirection(-1);
        nextSlide = currentSlide - 1;
      } else if (nextSlide < 0) {
        setDirection(1);
        nextSlide = currentSlide + 1;
      }

      setCurrentSlide(nextSlide);
      container.scrollTo({
        left: nextSlide * (container.offsetWidth / 3),
        behavior: "smooth",
      });
    }, 30000);

    const handleScroll = () => {
      const maxScrollLeft = container.scrollWidth / 3;
      if (container.scrollLeft >= maxScrollLeft * 2) {
        container.scrollLeft -= maxScrollLeft;
        setCurrentSlide(currentSlide % videoSlides.length);
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += maxScrollLeft;
        setCurrentSlide((currentSlide + videoSlides.length) % videoSlides.length);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(interval);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [currentSlide, direction, videoSlides.length]);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <motion.div
          className="text-white text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-white border-t-transparent rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <h2 className="text-2xl font-bold mb-2">BABA GROUP</h2>
          <p className="text-gray-300">Loading premium experience...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full relative overflow-hidden ">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />

      {/* Navigation Menu */}
      <motion.nav
        className="fixed top-1/2 right-6 transform -translate-y-1/2 z-40 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="bg-white/10 backdrop-blur-md rounded-full p-2">
          {/* The sections array has been removed, so this loop will not render any buttons */}
          {/* This part of the code will need to be re-evaluated based on the new navigation structure */}
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 lg:hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="bg-white/10 backdrop-blur-md rounded-full p-2 flex gap-2">
          {/* The sections array has been removed, so this loop will not render any buttons */}
          {/* This part of the code will need to be re-evaluated based on the new navigation structure */}
        </div>
      </motion.div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {scrollProgress > 20 && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white z-40 lg:right-20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1, bg: 'rgba(255,255,255,0.2)' }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronUp className="text-lg" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative w-full min-h-screen overflow-hidden">
        <div
          ref={videoContainerRef}
          className="absolute top-0 left-0 w-[300%] h-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-black"
        >
          {infiniteVideoSlides.map((video, index) => (
            <video
              key={`${video.id}-${index}`}
              className="w-[33.33%] h-full object-cover flex-shrink-0 snap-center"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-[1]"></div>
        <motion.div
          className="relative z-[10] min-h-screen flex items-center justify-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="text-center px-4 max-w-6xl">
            <motion.h1
              className="text-3xl xl:text-8xl lg:text-7xl md:text-5xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Shaping spaces
              <br className="hidden md:block" />
              with timeless surfaces.
            </motion.h1>
            <motion.p
              className="uppercase tracking-widest xl:text-3xl font-bold md:text-base mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
            >
              Premium Home Building Materials
            </motion.p>
            {/* <motion.div
              className="flex items-center bg-white/15 text-black rounded-full overflow-hidden max-w-lg mx-auto px-4 py-2 shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="text"
                placeholder="WHAT ARE YOU LOOKING FOR ?"
                className="flex-1 bg-transparent outline-none text-sm placeholder-white py-3"
              />
              <div className="h-10 w-10 p-1 bg-white flex justify-center items-center rounded-full cursor-pointer">
                <FaSearch className="text-gray-500 text-lg" />
              </div>
            </motion.div> */}
          </div>
        </motion.div>
      </section>

    

      {/* Brands Section */}
      <section id="brands" className="relative">
        <Brands />
      </section>

      {/* Products Section */}
      <section id="products" className="relative">
        <Products />
      </section>

      {/* Florex Section */}
      <section id="florex" className="relative">
        <Florex />
      </section>

       {/* Galleria Section */}
       <section id="gallery" className="relative">
        <Galleria />
      </section>

        {/* About Us Section */}
        <section id="about" className="relative">
        <AboutUs />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative">
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;