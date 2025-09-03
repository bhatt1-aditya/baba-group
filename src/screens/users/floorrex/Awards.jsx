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
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-16 tracking-tight"
       >
          Awards & Achievements
        </motion.h2>

        {/* Carousel Style Layout */}
        <div className="relative w-full flex overflow-x-auto space-x-8 pb-6 no-scrollbar">
          {awards.map((award) => (
            <motion.div
              key={award.id}
              whileHover={{ scale: 1.1, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="min-w-[280px] sm:min-w-[340px] lg:min-w-[400px] bg-gradient-to-br from-gray-100 to-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={award.img}
                  alt={award.title}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-white">
                  <h3 className="text-2xl font-semibold">{award.title}</h3>
                  <p className="mt-2 text-lg">{award.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
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
