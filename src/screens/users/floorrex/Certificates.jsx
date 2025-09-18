import React from "react";
import { motion } from "framer-motion";

// Sample certificate images (replace with your actual paths)
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

const Certificates = () => {
  return (
    <div className="bg-[#fafafa] py-16 px-4 lg:px-10 md:px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900">
          Certificates
        </h2>
        <p className="text-gray-500 mt-3 text-base">
          Recognized by international standards and certifications
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.1 }}
            className="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-xl transition"
          >
            <img
              src={cert.image}
              alt={cert.name}
              className="w-20 h-20 object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
