import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const awards = [
  {
    id: 1,
    title: "Best Innovation Award",
    year: "2024",
    img: "https://source.unsplash.com/800x800/?trophy,award",
  },
  {
    id: 2,
    title: "Global Excellence",
    year: "2023",
    img: "https://source.unsplash.com/800x800/?medal,award",
  },
  {
    id: 3,
    title: "Top 100 Companies",
    year: "2022",
    img: "https://source.unsplash.com/800x800/?certificate,achievement",
  },
  {
    id: 4,
    title: "Leadership Recognition",
    year: "2021",
    img: "https://source.unsplash.com/800x800/?success,award",
  },
  {
    id: 5,
    title: "Customer Choice",
    year: "2020",
    img: "https://source.unsplash.com/800x800/?gold,award",
  },
];

const AwardsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      {/* Section Heading */}
      <div className="text-center mb-14">
        <motion.h2
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
        >
          Awards & Achievements
        </motion.h2>
        <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto">
          A glimpse of our journey of excellence and recognition over the years.
        </p>
      </div>

      {/* Horizontal Scroll Section */}
      <div className="max-w-7xl mx-auto relative">
        <div className="flex overflow-x-auto no-scrollbar gap-8 px-6 snap-x snap-mandatory">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[340px] lg:min-w-[360px] 
                         bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-xl 
                         transition-all duration-500 snap-center cursor-pointer relative overflow-hidden group"
            >
              {/* Award Image */}
              <div className="relative overflow-hidden rounded-t-3xl">
                <motion.img
                  src={award.img}
                  alt={award.title}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Award Details */}
              <div className="p-6 text-center">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg font-semibold text-gray-800"
                >
                  {award.title}
                </motion.h3>
                <p className="mt-2 text-sm text-gray-500">{award.year}</p>
              </div>

              {/* Hover Overlay with Animation */}
              <motion.div
                className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 
                           flex flex-col justify-center items-center transition duration-500"
              >
                <p className="text-gray-900 text-lg font-medium mb-2">
                  {award.title}
                </p>
                <span className="text-gray-600 text-sm">View Details</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default AwardsSection;
