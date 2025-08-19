import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import bestsellerImage from "../../../Assets/core_flexx/best_seller/seller.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const BestSeller = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setAnimate(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <motion.img
        src={bestsellerImage}
        alt="Best Seller"
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={animate ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-32 text-white text-center px-4">
        {/* Small heading */}
        <motion.div
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0.2}
          style={{  fontFamily: "Poppins, sans-serif"}}
        >
          <p className="text-lg mb-2 font-light">Our</p>
          <motion.h2
            className="text-3xl md:text-4xl font-serif tracking-wide"
            variants={fadeUp}
            custom={0.4}
          >
            BESTSELLERS
          </motion.h2>
        </motion.div>

        {/* Product Code */}
        <motion.p
          className="mt-6 text-5xl md:text-6xl font-[cursive] drop-shadow-lg"
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0.6}
          style={{  fontFamily: "Comforter, cursive"}}
        >
          CFX-411
        </motion.p>
      </div>
    </section>
  );
};

export default BestSeller;
