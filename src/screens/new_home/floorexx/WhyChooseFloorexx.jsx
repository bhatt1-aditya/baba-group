import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WhyChoose() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // parallax effect for lines
  const xScroll1 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const xScroll2 = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  const line1 = [
    "SOUNDPROOF",
    "ECO-FRIENDLY",
    "SAFE AND BETTER AIR QUALITY",
    "TERMITE RESISTANT",
    "ENDLESS OPTIONS",
    "ULTIMATE DURABILITY",
  ];

  const line2 = [
    "ECO-FRIENDLY",
    "SAFE AND BETTER AIR QUALITY",
    "TERMITE RESISTANT",
    "WATERPROOF",
    "WARRANTY",
    "LOW COST INSTALLATION",
    "ENDLESS OPTIONS",
  ];

  const gradientText = {
    backgroundImage: "linear-gradient(90deg,#8B5E3C,#D2691E)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };

  const duplicatedLine1 = [...line1, ...line1];
  const duplicatedLine2 = [...line2, ...line2];

  return (
    <section
      ref={containerRef}
      className="w-full bg-white text-center py-16 px-4 md:px-8 overflow-hidden"
    >
      {/* Heading + Paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-3xl mx-auto space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Why Choose <span style={gradientText}>FLOOREXX</span>?
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Floorexx combines advanced SPC flooring technology with elegant design to deliver unmatched value. 
          Our floors are built to last, easy to install, and crafted with sustainable practices to fit today’s modern spaces.
        </p>
        <motion.button
          className="mt-4 px-6 py-2 bg-[#8B5E3C] text-white rounded-full font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition-all"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(139, 94, 60, 0.4)" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          Learn More →
        </motion.button>
      </motion.div>

      {/* First Line: Parallax Scroll */}
      <div className="overflow-hidden mt-12">
        <motion.div
          className="flex gap-4 whitespace-nowrap"
          style={{ x: xScroll1 }}
        >
          {duplicatedLine1.map((f, i) => (
            <motion.button
              key={i}
              className="px-4 py-2 bg-orange-50 border border-orange-400 rounded-full text-sm font-medium text-orange-600 transition-all"
              whileHover={{ scale: 1.1, backgroundColor: "#D2691E", color: "#fff", boxShadow: "0 6px 15px rgba(210,105,30,0.4)" }}
              transition={{ duration: 0.3 }}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Second Line: Parallax Scroll */}
      <div className="overflow-hidden mt-6">
        <motion.div
          className="flex gap-4 whitespace-nowrap"
          style={{ x: xScroll2 }}
        >
          {duplicatedLine2.map((f, i) => (
            <motion.button
              key={i}
              className="px-4 py-2 bg-orange-50 border border-orange-400 rounded-full text-sm font-medium text-orange-600 transition-all"
              whileHover={{ scale: 1.1, backgroundColor: "#D2691E", color: "#fff", boxShadow: "0 6px 15px rgba(210,105,30,0.4)" }}
              transition={{ duration: 0.3 }}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
