import React from "react";
import { motion } from "framer-motion";
import image1 from "../../../Assets/cristalo-flex/image1.png"
import image2 from "../../../Assets/cristalo-flex/image2.png"
const cards = [
  {
    title: "Awards & Achievements",
    img: image1,
    buttonColor: "white",
    textColor: "black",
  },
  {
    title: "Our Projects",
    img: image2,
    buttonColor: "black",
    textColor: "white",
  },
  {
    title: "Events",
    img:image1,
    buttonColor: "white",
    textColor: "black",
  },
];

export default function CreatingBeautifulSpaces() {
  return (
    <section className="bg-black text-white py-24 px-4 md:px-10 xl:px-20 text-center overflow-hidden">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-serif mb-6 leading-snug"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        “CREATING BEAUTIFUL SPACES <br /> SINCE A DECADE.”
      </motion.h2>

      {/* Paragraphs */}
      <motion.div
        className="max-w-4xl mx-auto text-gray-300 mb-16 space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-sm md:text-base leading-relaxed">
          Baba Group has been a leading producer and exporter for over a decade,
          based in the Rajasthan province of India. We have been into Quartz
          Powder, Grit and Engineered Quartz Slab with a splendid presence across
          the Globe. We’re a pioneer in India for the manufacturing and exporting
          Engineered Quartz Slab.
        </p>
        <p className="text-sm md:text-base leading-relaxed">
          After creating a very successful legacy in Quartz Powder, Grit & Engineered Quartz Stone, we are overjoyed to launch our New Product - SPC floors by Baba Flooring Pvt Ltd, a subsidiary organization of “BABA QUARTZ” (Baba Super Minerals Pvt Ltd).
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white/5 rounded-3xl shadow-lg overflow-hidden cursor-pointer relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="overflow-hidden rounded-t-3xl">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-64 md:h-72 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col items-center">
              <button
                className={`rounded-full px-8 py-2 text-xs tracking-wider shadow-md font-medium transition-colors duration-300`}
                style={{
                  backgroundColor: card.buttonColor,
                  color: card.textColor,
                }}
              >
                {card.title}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
