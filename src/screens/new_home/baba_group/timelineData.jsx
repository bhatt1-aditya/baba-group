import React from "react";
import { motion, useReducedMotion } from "framer-motion";

import image1 from "../../../Assets/new_home/baba_group/image1.png";
import image2 from "../../../Assets/new_home/baba_group/image3.png";
import image3 from "../../../Assets/new_home/baba_group/image4.png";
import image4 from "../../../Assets/new_home/baba_group/image5.png";
import image5 from "../../../Assets/new_home/baba_group/image6.png";
import image6 from "../../../Assets/new_home/baba_group/image7.png";
import image7 from "../../../Assets/new_home/baba_group/image8.png";

const gradientStyle = {
  backgroundImage: "linear-gradient(90deg,#ff9b21,#ad5bff,#0e77ca)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

const OurJourney = () => {
  const reduceMotion = useReducedMotion();

  const items = [
    { year: "1964", title: "Baba Fabrics", text: `In 1964, a visionary person in Kishangarh Mr. Ramakishan Goyal, had a vision for the business potential of textile technology, started "Baba Fabrics" with very few customers and some handful of employees which developed & grew day by day with time.`, img: image1, left: true },
    { year: "2007", title: "Shakti Minerals", text: `As the requirement of business diversification, Baba Group started "Baba Minerals Pvt. Ltd." as a new Mining product processing/grinding unit at Nasirabad for the Domestic Glass and Ceramics market. Because of the increasing demand, Baba Group started "Shakti Minerals" in 2007 and a next plant in 2008 named "Tanush Micro Mineral Pvt. Ltd." for Calcium Carbonate minerals.`, img: image2, left: false },
    { year: "2008", title: "Tanush Micro Minerals Pvt. Ltd.", text: `In year 2009 Baba group marked the arrival of four fully automatic hi-tech production units at Shrinagar (Kishangarh); their selling market in India & abroad grew due to modern systematic & quality production.`, img: image3, left: true },
    { year: "2011", title: "Baba Super Minerals Pvt. Ltd.", text: `As the demand increased continuously throughout the Asia & Europe regions, Baba group was defined as a symbol of quality in this processing field in the world market, so in 2011 Baba group established four more state of art production units at Shrinagar (Kishangarh) and because of the huge production & export they were awarded the “Top Exporter of North India” by India Govt. in 2014-15.`, img: image4, left: false },
    { year: "2017-18", title: "Baba Quartz", text: `As the requirement of business diversification and huge requirement of raw material Baba Group registered a new factory "Baba Super Minerals Pvt. Ltd." with Brand Name "BABA QUARTZ" in 2017-18. After establishing in Quartz market, Baba Group entered a new field in FY 2022-23 and registered "Baba Flooring Pvt. Ltd." with Brand Name "FLOORREX" to manufacture Stone Plastic Composite (SPC) Flooring and in F.Y. 2024-25 "WALLEX" to manufacture SPC Wall Panels.`, img: image5, left: true },
    { year: "2022-23", title: "Floorrex", text: `In FY 2022-23 Baba Group registered "Baba Flooring Pvt. Ltd." under the brand "FLOORREX" for SPC flooring manufacturing; the company also planned "WALLEX" in FY 2024-25 to manufacture SPC wall panels.`, img: image6, left: false },
  ];

  const itemVariants = (fromLeft) => ({
    hidden: { opacity: 0, x: reduceMotion ? 0 : fromLeft ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  });

  const imgVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    hover: reduceMotion ? {} : { scale: 1.05, rotate: 2, filter: "brightness(1.1)", transition: { duration: 0.4 } },
  };

  const textVariants = (fromLeft) => ({
    hidden: { opacity: 0, x: reduceMotion ? 0 : fromLeft ? -30 : 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  });

  return (
    <div className="w-full bg-white px-4 md:px-20 py-16 font-sans">
      {/* Animated Heading */}
      <motion.h2
        className="text-center text-5xl md:text-6xl font-extralight tracking-wider mb-16"
        style={gradientStyle}
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05, textShadow: "0px 0px 20px rgba(173,91,255,0.8)" }}
      >
        Our <span style={gradientStyle}>Journey</span>
      </motion.h2>

      {/* Timeline container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Slim Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-orange-500 via-purple-500 to-blue-500 rounded" />

        {/* Timeline items */}
        {items.map((item, idx) => (
          <motion.section
            key={idx}
            className="relative mb-24 flex flex-col md:flex-row items-center md:items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants(item.left)}
          >
            {/* Left image */}
            {item.left && (
              <motion.div className="md:w-1/2 pr-6 flex justify-center" variants={imgVariants}>
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-[400px] h-[250px] object-cover rounded-xl shadow-lg"
                  whileHover={!reduceMotion ? { scale: 1.05, rotate: 2, filter: "brightness(1.1)" } : {}}
                />
              </motion.div>
            )}

            {/* Text content */}
            <div className="md:w-1/2 pl-6 mt-8 md:mt-0">
              {/* Year */}
              <motion.p
                className="text-5xl md:text-6xl font-bold leading-none mb-2"
                style={gradientStyle}
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                {item.year}
              </motion.p>

              {/* Title */}
              <motion.p
                className="mt-2 text-xl font-semibold text-gray-800"
                variants={textVariants(true)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                {item.title}
              </motion.p>

              {/* Paragraph */}
              <motion.p
                className="mt-4 text-gray-700 leading-relaxed"
                variants={textVariants(false)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                {item.text}
              </motion.p>
            </div>

            {/* Right image */}
            {!item.left && (
              <motion.div className="md:w-1/2 pl-6 flex justify-center" variants={imgVariants}>
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-[400px] h-[250px] object-cover rounded-xl shadow-lg"
                  whileHover={!reduceMotion ? { scale: 1.05, rotate: 2, filter: "brightness(1.1)" } : {}}
                />
              </motion.div>
            )}
          </motion.section>
        ))}

        {/* Centered extra image */}
        <motion.section className="relative mb-8 flex justify-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={imgVariants}>
          <motion.img
            src={image7}
            alt="extra"
            className="max-w-full h-auto object-cover rounded-xl shadow-lg"
            whileHover={!reduceMotion ? { scale: 1.03, rotate: 2, filter: "brightness(1.1)" } : {}}
          />
        </motion.section>
      </div>

      {/* Footer */}
      <p className="text-center text-gray-600 mt-12 text-lg">
        From our humble beginnings to becoming an international name in surface solutions – the milestones that define Baba Group.
      </p>
    </div>
  );
};

export default OurJourney;
