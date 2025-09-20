import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import homeImage from "../../../Assets/core_flexx/about/home.png";

// Import multiple background images
import bg1 from "../../../Assets/core_flexx/collections/image1.png";
import bg2 from "../../../Assets/core_flexx/collections/image2.png";
import bg3 from "../../../Assets/core_flexx/collections/image3.png";
import bg4 from "../../../Assets/core_flexx/collections/image1.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.2, ease: "easeInOut" },
  }),
};

const About = () => {
  const [counters, setCounters] = useState({
    products: 0,
    ratings: 0,
    collections: 0,
    outlets: 0,
  });

  const targetValues = {
    products: 100000, // 1L+
    ratings: 4.5,
    collections: 1000, // 1K+
    outlets: 100,
  };

  const sectionRef = useRef(null);

  // Background images array
  const backgroundImages = [homeImage, bg1, bg2, bg3, bg4];
  const [currentBg, setCurrentBg] = useState(0);

  // Smooth counters animation
  const startCounters = () => {
    setCounters({ products: 0, ratings: 0, collections: 0, outlets: 0 });

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    const intervals = {};

    Object.keys(targetValues).forEach((key) => {
      intervals[key] = setInterval(() => {
        setCounters((prev) => {
          const increment = targetValues[key] / steps;
          const newValue = Math.min(prev[key] + increment, targetValues[key]);
          if (newValue >= targetValues[key]) {
            clearInterval(intervals[key]);
            return { ...prev, [key]: targetValues[key] };
          }
          return { ...prev, [key]: newValue };
        });
      }, stepTime);
    });
  };

  // Trigger counters when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) startCounters();
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Background image auto change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num, type) => {
    if (type === "products")
      return num >= 100000 ? "1L+" : Math.floor(num / 1000) + "K+";
    if (type === "collections")
      return num >= 1000 ? "1K+" : Math.floor(num) + "+";
    if (type === "ratings") return num.toFixed(1) + "+";
    return Math.floor(num) + "+";
  };

  const stats = [
    { key: "products", label: "Products Sold" },
    { key: "ratings", label: "Ratings" },
    { key: "collections", label: "Collections" },
    { key: "outlets", label: "Outlets" },
  ];

  const CircularCTA = () => (
    <motion.div>
      <div className="relative mx-auto mt-12 w-40 h-40 md:w-52 md:h-52">
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
            className="fill-white text-[12px] md:text-[14px] tracking-[4px]"
            style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
          >
            <textPath href="#circlePath" startOffset="0%">
              PROXIMON HOME • EXPLORE MORE • PROXIMON HOME • EXPLORE MORE •
            </textPath>
          </text>
        </motion.svg>

        {/* Center Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg cursor-pointer"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            whileHover={{ scale: 1.25 }}
          >
            <motion.span
              className="rotate-45 text-teal-900 text-3xl leading-none"
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            >
              ↗
            </motion.span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center px-4 overflow-hidden"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Background Image Slider */}
      <AnimatePresence>
        <motion.div
          key={currentBg}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay to darken background slightly */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Glass Effect Stats Card */}
      <motion.div
        className="relative z-10 bg-white/30 backdrop-blur-lg rounded-2xl shadow-2xl px-6 py-10 md:px-10 md:py-14 max-w-5xl w-full text-center border border-white/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 text-white">
          {stats.map((stat, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}>
              <motion.p
                className="text-2xl md:text-4xl font-bold"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {formatNumber(counters[stat.key], stat.key)}
              </motion.p>
              <p className="text-sm md:text-base mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center justify-center mt-16 gap-10 md:gap-28 text-center text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <motion.div variants={fadeUp}>
          <p className="text-xs md:text-sm opacity-80">Learn More About</p>
          <p className="text-xl md:text-2xl font-semibold tracking-wide">
            COREFLEXX
          </p>
        </motion.div>

        <CircularCTA />

        <motion.div variants={fadeUp}>
          <p className="text-xs md:text-sm opacity-80">Learn More About</p>
          <p className="text-xl md:text-2xl font-semibold tracking-wide">
            COREFLEXX
          </p>
        </motion.div>
      </motion.div>

      {/* Footer Links */}
      <motion.div
        className="relative z-10 w-full overflow-x-auto mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeUp}
        custom={1}
      >
        <div className="flex gap-8 md:gap-16 text-sm md:text-xl tracking-widest text-white whitespace-nowrap px-4 justify-center">
          {["BE A DEALER", "FIND A SHOWROOM", "LOCATE A DEALER"].map(
            (link, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.1, color: "#d1d5db" }}
                className="cursor-pointer transition"
              >
                {link}
              </motion.span>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
