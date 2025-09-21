// WhySPCSection.jsx
import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import image from "../../../Assets/new_home/floorexx/floorexxing.png";

const features = [
  "Representatives available worldwide",
  "HOMAG line German Technology",
  "20+Countries Supply chain",
  "Unilin Locking System",
  "Quality & Design",
  "Customer Centric",
  "Since 2 decades",
];

const WhySPCSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const [animatedFeatures, setAnimatedFeatures] = useState(features.map(() => false));

  useEffect(() => {
    if (!isInView) return;

    features.forEach((_, idx) => {
      setTimeout(() => {
        setAnimatedFeatures((prev) => {
          const newArr = [...prev];
          newArr[idx] = true;
          return newArr;
        });
      }, idx * 150);
    });
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="max-w-6xl mx-auto px-4 md:px-6 lg:px-10 md:py-16 py-6 grid md:grid-cols-2 gap-12 items-center bg-gray-50 rounded-xl shadow-lg overflow-hidden"
    >
      {/* Left Content */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Why <span className="text-orange-600">SPC Floorings?</span>
        </h2>
        <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
          FLOORREX is the only SPC producing company in India with an in-house
          source of raw material (CaCO₃), ensuring attractive pricing, consistent
          quality standards, and uniformity.
        </p>

        {/* Feature tags with animation */}
        <div className="flex flex-wrap gap-3 mt-6">
          {features.map((feature, idx) => (
            <motion.span
              key={idx}
              className={`px-4 py-2 text-sm border border-orange-400 rounded-full text-orange-700 hover:bg-orange-50 transition`}
              initial={{ opacity: 0, y: 20 }}
              animate={animatedFeatures[idx] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              {feature}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={image}
          alt="SPC Flooring Production"
          className="object-contain w-full lg:w-[80%] xl:w-[70%] rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
        />
      </motion.div>
    </section>
  );
};

export default WhySPCSection;
