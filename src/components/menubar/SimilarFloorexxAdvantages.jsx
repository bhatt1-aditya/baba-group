import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const SimilarFloorrexAdvantages = () => {
  const advantages = [
    "Scratch Resistant",
    "Quick Installation",
    "Noise Free",
    "Dust Free",
    "Glue Free Installation",
    "Mix & Match Pattern",
    "Weather Proof",
    "Stain Protect",
    "Green Product",
    "Fire Resistant",
    "Waterproof",
    "Can be installed on existing floors",
  ];

  return (
    <div className="max-w-5xl mx-auto py-24 px-4 md:px-6 lg:px-10 text-center">
      <motion.h2
        className="text-3xl font-bold mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Advantages of <span className="text-amber-600">FLOORREX.</span>
      </motion.h2>

      <motion.p
        className="text-gray-600 mb-10 text-sm md:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Discover the timeless elegance of Baba Quartz's premium natural marble slabs, where nature's artistry meets superior craftsmanship. Each meticulously crafted slab showcases unique crystalline patterns and lustrous surfaces that transform everyday spaces into statements of luxury. Perfect for tabletops, window frames, staircases, and sitting benches, our quartz slabs combine durability with sophisticated beauty. Experience the perfect harmony of strength and style, as each piece brings the raw magnificence of natural marble into your living spaces.
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        {advantages.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-2xl p-4 text-gray-800 hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            {item}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex justify-center items-center space-x-2 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <ShieldCheck className="text-green-600 w-6 h-6" />
        <span className="font-semibold">10 YEARS WARRANTY</span>
      </motion.div>
    </div>
  );
};

export default SimilarFloorrexAdvantages;
