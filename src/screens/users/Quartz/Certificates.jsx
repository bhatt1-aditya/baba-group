import React from "react";
import { motion } from "framer-motion";

// Certificate Images (replace with real ones)
import cert1 from "../../../Assets/florex/backgroundImage1.svg";
import cert2 from "../../../Assets/florex/backgroundImage1.svg";
import cert3 from "../../../Assets/florex/backgroundImage1.svg";
import cert4 from "../../../Assets/florex/backgroundImage1.svg";
import cert5 from "../../../Assets/florex/backgroundImage1.svg";
import cert6 from "../../../Assets/florex/backgroundImage1.svg";

const certificates = [
  { id: 1, image: cert1, name: "Greenguard" },
  { id: 2, image: cert2, name: "ISO 9001:2015" },
  { id: 3, image: cert3, name: "ISO 14001:2015" },
  { id: 4, image: cert4, name: "OHSAS 18001:2007" },
  { id: 5, image: cert5, name: "CE" },
  { id: 6, image: cert6, name: "NSF" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Certificates = () => {
  return (
    <div className="relative bg-white py-20 md:px-6 px-4 xl:px-10 overflow-hidden">
      {/* Floating decorative orbs */}
      <motion.div
        className="absolute top-10 left-10 w-28 h-28 bg-orange-100 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-25"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center relative z-10"
      >
        <p className="text-orange-500 tracking-widest uppercase text-sm mb-2">
          Certified Excellence
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Certificates
        </h2>
        <p className="text-gray-500 mt-3 text-base max-w-lg mx-auto">
          Recognized by international standards and certifications.
        </p>
      </motion.div>

      {/* Certificates Grid */}
      <motion.div
        className="max-w-6xl mx-auto mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            custom={index}
            variants={fadeUp}
            whileHover={{ scale: 1.15 }}
            className="group relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-orange-200 border border-gray-100 transition-all duration-500"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 bg-orange-500 blur-lg"></div>

            {/* Certificate Logo */}
            <img
              src={cert.image}
              alt={cert.name}
              className="w-16 h-16 object-contain relative z-10"
            />

            {/* Certificate Name */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-[-30px] text-gray-800 text-sm font-medium opacity-0 group-hover:opacity-100"
            >
              {cert.name}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certificates;
