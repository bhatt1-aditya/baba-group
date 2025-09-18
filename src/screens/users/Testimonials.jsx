import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import testimonial1 from "../../Assets/home/testimonials1.png"
const testimonialsData = [
  {
    id: 1,
    name: "KRSTY JONAS",
    position: "Interior Designer",
    testimonial: "Premium natural stone tiles and countertops that bring timeless elegance to every space. The quality and craftsmanship exceeded all our expectations.",
    image: testimonial1,
  },
  {
    id: 2,
    name: "MICHAEL CHEN",
    position: "Architect",
    testimonial: "Outstanding ceramic collection with innovative designs. Perfect for creating stunning modern interiors that combine functionality with aesthetic appeal.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&face",
  },
  {
    id: 3,
    name: "SARAH WILLIAMS",
    position: "Homeowner",
    testimonial: "The porcelain tiles transformed our home completely. Exceptional durability and the luxurious finish makes every room feel like a premium space.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&face",
  }
];

const InteractiveCard = ({ testimonial, isActive }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);
  const shadowX = useTransform(x, [-50, 50], [5, -5]);
  const shadowY = useTransform(y, [-50, 50], [5, -5]);

  return (
    <motion.div
      className="relative w-full max-w-3xl mx-auto cursor-pointer z-20"
      style={{ perspective: 800 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div
        className={`relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 transition-all duration-700`}
        style={{ rotateX, rotateY, boxShadow: `${shadowX}px ${shadowY}px 35px rgba(0,0,0,0.2)` }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
      >
        <div className="relative w-60 h-60 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
          <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover rounded-xl" />
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-xl blur-2xl opacity-50 animate-float"></div>
        </div>

        <div className="flex-1 text-left">
          <motion.h3 className="text-xl font-bold mb-1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            {testimonial.name}
          </motion.h3>
          <motion.p className="text-sm text-gray-600 mb-3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            {testimonial.position}
          </motion.p>
          <motion.p className="text-sm text-gray-800" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            {testimonial.testimonial}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const AUTO_SLIDE_INTERVAL = 6000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonialsData.length);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background floating blobs */}
      <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-floatSlow"></motion.div>
      <motion.div className="absolute bottom-10 right-1/4 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-floatSlow delay-5000"></motion.div>

      {/* Heading */}
      <motion.h2 className="md:text-5xl text-4xl font-bold text-gray-800 mb-12 relative z-10 uppercase tracking-wider">
        Testimonials
        <motion.div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mt-2 rounded" initial={{ width: 0 }} animate={{ width: 128 }} transition={{ duration: 1 }} />
      </motion.h2>

      {/* Cards */}
      {testimonialsData.map((testimonial, index) => (
        <AnimatePresence key={testimonial.id}>
          {index === currentSlide && <InteractiveCard testimonial={testimonial} isActive={index === currentSlide} />}
        </AnimatePresence>
      ))}

      {/* Pagination */}
      <div className="absolute bottom-10 flex gap-3 z-10">
        {testimonialsData.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full ${index === currentSlide ? "bg-purple-500 shadow-lg" : "bg-gray-400/50"}`}
            whileHover={{ scale: 1.5, backgroundColor: "#6366F1" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
