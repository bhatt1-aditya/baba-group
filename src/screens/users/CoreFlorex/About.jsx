import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import homeImage from "../../../Assets/core_flexx/about/home.png";
import buttonIcons from "../../../Assets/core_flexx/about/bottomIcons.svg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
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

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{
        backgroundImage: `url(${homeImage})`,
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Glass Card */}
      <motion.div
        className="bg-white/40 md:pt-0 mt-2 backdrop-blur-lg rounded-2xl shadow-lg px-6 py-10 md:px-10 md:py-14 max-w-5xl w-full text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <div className="grid grid-cols-2 md:grid-cols-2 gap-y-16  md:mt-10 mt-6 md:py-16 gap-x-6 text-white">
          {stats.map((stat, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}>
              <p className="text-xl md:text-3xl font-semibold">
                {formatNumber(counters[stat.key], stat.key)}
              </p>
              <p className="text-xs md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Links Underneath */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center mt-12 gap-6 md:gap-24 text-center text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <motion.div variants={fadeUp}>
          <p className="text-xs md:text-sm">Learn More About</p>
          <p className="text-lg md:text-xl font-serif tracking-wide">
            COREFLEXX
          </p>
        </motion.div>

        <motion.img src={buttonIcons} alt="Button Icon" variants={fadeUp} />

        <motion.div variants={fadeUp}>
          <p className="text-xs md:text-sm">Learn More About</p>
          <p className="text-lg md:text-xl font-serif tracking-wide">
            COREFLEXX
          </p>
        </motion.div>
      </motion.div>

      {/* Footer Links */}
      <motion.div
        className="w-full overflow-x-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeUp}
        custom={1}
      >
        <div className="flex gap-6 md:gap-10 mt-10 text-xs md:text-2xl tracking-widest md:pb-5 pb-10 text-white whitespace-nowrap px-4 justify-center">
          <span className="cursor-pointer hover:underline">BE A DEALER</span>
          <span className="cursor-pointer hover:underline">
            FIND A SHOWROOM
          </span>
          <span className="cursor-pointer hover:underline">
            LOCATE A DEALER
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
