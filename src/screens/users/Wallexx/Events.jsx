import React from 'react';
import { motion } from 'framer-motion';

// Example events array (you can replace images and titles accordingly)
const events = [
  {
    title: "Product Launch 2023",
    image: "https://source.unsplash.com/random/400x300?product",
  },
  {
    title: "Global Distributor Meet",
    image: "https://source.unsplash.com/random/400x300?conference",
  },
  {
    title: "Innovation Award 2022",
    image: "https://source.unsplash.com/random/400x300?award",
  },
  {
    title: "Sustainability Event",
    image: "https://source.unsplash.com/random/400x300?eco",
  },
];

const Events = () => {
  return (
    <section className="relative bg-[#004736] py-20 px-4 md:px-12 lg:px-24 flex flex-col items-center overflow-hidden">
      
      {/* Heading */}
      <motion.h2
        className="relative z-10 text-white text-3xl md:text-5xl font-serif mb-16 text-center drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        EVENTS
      </motion.h2>

      {/* Events Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-[0_10px_50px_rgba(0,255,192,0.4)] hover:-translate-y-3 transition-all duration-500 cursor-pointer overflow-hidden w-full"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Event Image */}
            <div className="w-full h-48 rounded-2xl overflow-hidden mb-4">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Event Title */}
            <p className="text-white text-center font-medium text-sm md:text-base">
              {event.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Events;
