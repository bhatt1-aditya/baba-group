import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import map from "../../../Assets/footer_florex/map.png";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

const Map = () => {
  const [counters, setCounters] = useState({
    products: 0,
    collections: 0,
    ratings: 0,
    outlets: 0,
  });

  const targetValues = {
    products: 100000,
    collections: 1000,
    ratings: 4.5,
    outlets: 100,
  };

  const statsRef = useRef(null);

  const startCounters = () => {
    // Reset counters before animating
    setCounters({
      products: 0,
      collections: 0,
      ratings: 0,
      outlets: 0,
    });

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

  // ✅ Use IntersectionObserver to trigger counters each time visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounters();
          }
        });
      },
      { threshold: 0.4 } // Trigger when 40% of section is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
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

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <div className="text-black xl:p-10 md:p-6 p-4 min-h-screen" ref={statsRef}>
      {/* Counters */}
      <motion.div
        className="w-full bg-white rounded-lg shadow-sm py-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }} // ✅ Re-animates every time in view
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <ul className="grid md:grid-cols-4 grid-cols-2 gap-4 divide-x divide-gray-900 text-center py-10">
          {[
            { value: counters.products, type: "products", label: "Products Sold" },
            { value: counters.collections, type: "collections", label: "Collections" },
            { value: counters.ratings, type: "ratings", label: "Ratings" },
            { value: counters.outlets, type: "outlets", label: "Outlets" },
          ].map((item, i) => (
            <motion.li key={i} variants={fadeUp} custom={i} style={{
              fontFamily: "Poppins, sans-serif",
            }}>
              <h2 className="text-2xl font-semibold">
                {formatNumber(item.value, item.type)}
              </h2>
              <p className="text-sm text-gray-500">{item.label}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Dealer / Map / Showroom */}
      <motion.div
        className="mt-20 grid md:grid-cols-3 grid-cols-1 gap-5 place-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <motion.div className="text-white" variants={fadeUp}>
          <div className="flex flex-col gap-5 items-center justify-center">
            <h1 className="uppercase">LOCATE A DEALER</h1>
            <FaRegArrowAltCircleLeft className="text-xl" />
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <img src={map} alt="Map" />
        </motion.div>

        <motion.div className="text-white" variants={fadeUp}>
          <div className="flex flex-col gap-5 items-center justify-center">
            <h1 className="uppercase">FIND A SHOWROOM NEAR YOU</h1>
            <FaRegArrowAltCircleRight className="text-xl" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Map;
