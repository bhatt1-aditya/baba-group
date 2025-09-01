import { motion } from "framer-motion";
import { Users, Link, Lock, Globe } from "lucide-react";

export default function CoreflexxSection() {
  const features = [
    { icon: <Users size={36} />, text: "Customer Centric" },
    { icon: <Link size={36} />, text: "Quality & Design" },
    { icon: <Lock size={36} />, text: "Unilin Locking System" },
    { icon: <Globe size={36} />, text: "Since 2 decades" },
    { icon: <Link size={36} />, text: "HOMAG line German Technology" },
    { icon: <Globe size={36} />, text: "20+Countries Supply chain" },
    { icon: <Users size={36} />, text: "Representatives available worldwide" },
    { icon: <Users size={36} />, text: "Representatives available worldwide" },
  ];

  return (
    <div className="w-full bg-black text-white py-16 px-6 md:px-12 lg:px-20 text-center">
      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-lg md:text-xl text-gray-300 mb-2"
      >
        Why Choose
      </motion.h3>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl md:text-4xl font-semibold mb-12"
      >
        COREFLEXX SPC PRODUCTS ?
      </motion.h2>

      {/* Features */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 max-w-5xl mx-auto">
        {features.map((f, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center space-y-3"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              {f.icon}
            </motion.div>
            <p className="text-sm md:text-base text-gray-300">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
