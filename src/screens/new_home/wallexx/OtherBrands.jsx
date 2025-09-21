import React from "react";
import { motion } from "framer-motion";

const OtherBrands = () => {
  const buttonData = [
    { text: "LOCATE A DEALER ›", type: "primary", href: "#" },
    { text: "FIND A SHOWROOM ›", type: "outline", href: "#" },
    { text: "BECOME A DEALER ›", type: "outline", href: "#" },
  ];

  const headingWords = ["Explore", "Our", "Other", "BRANDS."];

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
    hover: { y: -5, transition: { type: "spring", stiffness: 300 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, ease: "easeOut" } },
    hover: {
      scale: 1.05,
      boxShadow: "0px 15px 25px rgba(52, 211, 153, 0.4)",
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <section className="relative px-6 py-16 max-w-6xl mx-auto overflow-hidden">
      {/* Floating background accent */}
      <motion.div
        className="absolute top-0 right-0 w-72 h-72 bg-green-200 rounded-full opacity-20 -z-10"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.15, rotate: 0 }}
      />

      <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Animated Heading */}
        <div className="text-center md:text-left flex flex-wrap gap-2 md:gap-0 md:flex-col">
          {headingWords.map((word, idx) => (
            <motion.h2
              key={idx}
              custom={idx}
              variants={headingVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className={`text-3xl md:text-5xl font-medium leading-snug ${
                word === "BRANDS." ? "text-green-800 font-semibold" : "text-gray-900"
              }`}
            >
              {word}
            </motion.h2>
          ))}
        </div>

        {/* Animated Buttons */}
        <div className="flex flex-col md:flex-row gap-6">
          {buttonData.map((btn, idx) => (
            <motion.a
              key={idx}
              href={btn.href}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-colors duration-300 ${
                btn.type === "primary"
                  ? "bg-gradient-to-r from-green-700 to-green-900 text-white"
                  : "border border-green-900 text-green-900 hover:bg-green-50"
              }`}
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              {btn.text}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherBrands;
