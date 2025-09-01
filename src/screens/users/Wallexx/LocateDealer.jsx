import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import backgroundImage from "../../../Assets/core_flexx/dealer/home.png";
import icon from "../../../Assets/core_flexx/dealer/icon.svg";
// Counter target values
const targetValues = {
  products: 100000,
  collections: 1000,
  ratings: 4.5,
  outlets: 100,
};

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const LocateDealer = () => {
  const [counters, setCounters] = useState({
    products: 0,
    collections: 0,
    ratings: 0,
    outlets: 0,
  });

  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  // Start counters
  const startCounters = () => {
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

    return () => Object.values(intervals).forEach(clearInterval);
  };

  // Observe section for animation & counter restart
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            startCounters();
          } else {
            setAnimate(false);
            setCounters({ products: 0, collections: 0, ratings: 0, outlets: 0 });
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const formatNumber = (num, type) => {
    if (type === "products") {
      if (num >= 100000) return "1L+";
      return Math.floor(num / 1000) + "K+";
    }
    if (type === "ratings") {
      return num.toFixed(1) + "+";
    }
    return Math.floor(num) + "+";
  };

  return (
    <div className="bg-[#044d42] md:px-6 lg:px-10 px-4" ref={sectionRef}>
      <motion.div
        className="relative bg-cover bg-center h-screen rounded-2xl"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <div className="relative z-10 text-center text-white pt-24">
          {/* Numbers Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 mb-12 divide-x-2">
            {[
              { value: counters.products, type: "products", label: "Products Sold" },
              { value: counters.collections, type: "collections", label: "Collections" },
              { value: counters.ratings, type: "ratings", label: "Ratings" },
              { value: counters.outlets, type: "outlets", label: "Outlets" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                variants={fadeUp}
                custom={i * 0.2}
              >
                <p className="text-3xl font-semibold">
                  {formatNumber(item.value, item.type)}
                </p>
                <p className="text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Locate a Dealer Section */}
          <motion.div
            className="relative z-10 mb-8 mt-52"
            variants={fadeUp}
            custom={0.5}
          >
            <p className="md:text-5xl text-4xl font-serif mb-4" style={{  fontFamily: "Cinzel Decorative, serif"
}}>
              LOCATE <br /> A DEALER
            </p>
            <div className="px-8 md:py-6 py-4">
              <img src={icon} alt="Locate Dealer Icon" className="mx-auto h-20 w-20 md:w-32 md:h-32" />
            </div>
          </motion.div>

          {/* Arrow Icon */}
          <motion.div
            className="absolute md:bottom-6 left-1/2 transform -translate-x-1/2"
            variants={fadeUp}
            custom={0.7}
          >
            <a href="#dealer-location">
              <svg
                className="w-10 h-10 text-teal-500 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LocateDealer;
