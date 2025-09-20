import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Leaf, Droplets, Shield, Volume2, Wrench } from "lucide-react";

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Choose = () => {
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

  const features = [
    {
      icon: <Volume2 className="w-8 h-8 text-gray-600" />,
      title: "Soundproof",
      desc: "Minimize noise and create a peaceful environment.",
    },
    {
      icon: <Shield className="w-8 h-8 text-gray-600" />,
      title: "Safe & Better Air Quality",
      desc: "Improved safety and cleaner indoor air.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-gray-600" />,
      title: "Warranty",
      desc: "Reliable products with a trusted warranty.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-gray-600" />,
      title: "Eco-Friendly",
      desc: "Made with sustainable and recyclable materials.",
    },
    {
      icon: <Droplets className="w-8 h-8 text-gray-600" />,
      title: "Waterproof",
      desc: "Durable against water damage and moisture.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-gray-600" />,
      title: "Low Cost Installation",
      desc: "Easy installation that saves both time and money.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-50 py-20 px-6 overflow-hidden"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 via-gray-50 to-gray-200 opacity-70"></div>

      {/* Heading */}
      <motion.div
        className="relative text-center mb-16 z-10"
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        variants={fadeUp}
      >
        <p className="text-sm text-gray-500 mb-2 tracking-wide uppercase">
          Why Choose
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-gray-800">
          COREFLEXX
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Discover why our solutions stand out with unmatched durability, quality, and modern design.
        </p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200 hover:shadow-2xl transition duration-300 ease-in-out hover:-translate-y-1"
            variants={fadeUp}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Choose;
