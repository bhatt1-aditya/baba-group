import { motion } from "framer-motion";

export default function StonePolymerComposite() {
  const features = [
    { icon: "🛡️", title: "Ultimate Durability" },
    { icon: "💧", title: "Waterproof" },
    { icon: "🐜", title: "Termite Resistant" },
    { icon: "⚡", title: "Quick & Easy Installation" },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800 py-16 px-4 md:px-6 lg:px-10">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold tracking-wide text-gray-900"
        >
          STONE
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl font-light text-gray-700 mt-2"
        >
          POLYMER COMPOSITE
        </motion.h2>
      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="max-w-3xl mx-auto text-center text-sm md:text-base text-gray-600 leading-relaxed mb-14"
      >
        Experience flooring that blends the elegance of real wood with the strength of stone. 
        This innovative solution surpasses traditional laminate and hardwood, offering a 
        dust-free, noise-free, and effortless installation — perfect for giving your 
        space a modern, timeless upgrade.
      </motion.p>

      {/* Features Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-16">
        {features.map((f, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md hover:shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.3 }}
              transition={{ duration: 0.6 }}
              className="text-4xl mb-3 text-gray-700"
            >
              {f.icon}
            </motion.div>
            <p className="text-gray-800 font-medium text-sm md:text-base">
              {f.title}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Navigation Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10"
      >
        <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition duration-300">
          BE A DEALER
        </button>

        <button className="relative text-lg font-semibold text-gray-800 hover:text-gray-900 transition duration-300">
          FIND A SHOWROOM
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 border-b-2 border-gray-400"></div>
        </button>

        <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition duration-300">
          LOCATE A DEALER
        </button>
      </motion.div>
    </div>
  );
}
