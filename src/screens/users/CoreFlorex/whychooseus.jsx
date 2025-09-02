import { motion } from "framer-motion";

export default function StonePolymerComposite() {
  const features = [
    { icon: "🛡️", title: "ULTIMATE DURABILITY" },
    { icon: "💧", title: "WATERPROOF" },
    { icon: "🐜", title: "TERMITE RESISTANT" },
    { icon: "⚡", title: "QUICK & EASY INSTALLATION" },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800 py-16 md:px-6 px-4 xl:px-10 text-center">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold tracking-wide"
      >
        STONE
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-2xl md:text-3xl font-light mb-6"
      >
        POLYMER COMPOSITE
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="max-w-3xl mx-auto text-sm md:text-base text-gray-600 leading-relaxed mb-12"
      >
        A flooring that combines the look and feel of real wood with the durability of stone.
        It is a revolutionary solution that eliminates the limitations of traditional laminate
        and hardwood floors. It gives your space a beautiful makeover without any drawbacks of vinyl
        and laminate flooring. Plus, it is also easy to install and doesn’t create dust, noise, or require a lot of effort.
      </motion.p>

      {/* Features Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {features.map((f, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-center space-y-2"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              className="text-4xl"
            >
              {f.icon}
            </motion.div>
            <p className="text-sm md:text-base font-medium text-gray-700">{f.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12"
      >
        <button className="text-sm font-light hover:text-gray-900 transition">BE A DEALER</button>
        <button className="relative text-lg font-semibold tracking-wide hover:text-gray-900 transition">
          FIND A SHOWROOM
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 border-b border-gray-400"></div>
        </button>
        <button className="text-sm font-light hover:text-gray-900 transition">LOCATE A DEALER</button>
      </motion.div>
    </div>
  );
}
