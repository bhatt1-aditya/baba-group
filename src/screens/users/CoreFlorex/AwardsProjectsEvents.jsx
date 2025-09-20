import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import image1 from "../../../Assets/core_flexx/events/project1.png"
import image2 from "../../../Assets/core_flexx/events/project2.png"
import image3 from "../../../Assets/core_flexx/events/project3.png"
// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AwardsProjectsEvents() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer
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

  const sections = [
    {
      title: "Awards & Achievements",
      img: image1,
      desc: "Recognizing excellence through prestigious awards and milestones achieved over the years.",
    },
    {
      title: "Our Projects",
      img: image2,
      desc: "Innovative designs brought to life with attention to detail and quality craftsmanship.",
    },
    {
      title: "Events",
      img: image3,
      desc: "Memorable moments where creativity and community come together.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-50 py-20 px-6 overflow-hidden"
    >
      {/* Soft background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-50 to-gray-200 opacity-70"></div>

      {/* Top Grid Section */}
      <motion.div
        className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 max-w-7xl mx-auto"
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {sections.map((item, index) => (
          <motion.div
            key={index}
            className="group relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500"
            variants={fadeUp}
          >
            {/* Image with subtle zoom on hover */}
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>

            {/* Decorative Bottom Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Quote Section */}
      <motion.div
        className="relative z-10 text-center mb-12"
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        variants={fadeUp}
      >
        <h3 className="text-3xl md:text-4xl font-serif text-gray-800 leading-relaxed">
          “CREATING BEAUTIFUL SPACES <br /> SINCE A DECADE.”
        </h3>
      </motion.div>

      {/* Paragraph Section */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed space-y-4"
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        variants={fadeUp}
      >
        <p>
          Baba Group has been a leading producer and exporter for over a decade,
          based in the Rajasthan province of India. We have been into Quartz
          Powder, Grit, and Engineered Quartz Slab with a splendid presence across
          the Globe. We’re a pioneer in India for the manufacturing and exporting
          Engineered Quartz Slab.
        </p>
        <p>
          After creating a very successful legacy in Quartz Powder, Grit & Engineered
          Quartz Stone, we are overjoyed to launch our new product - SPC Floors by
          Baba Flooring Pvt Ltd, a subsidiary of "BABA QUARTZ" (Baba Super Minerals Pvt Ltd).
        </p>
      </motion.div>
    </section>
  );
}
