import { motion } from "framer-motion";
import { useState } from "react";
import project1 from "../../../Assets/floorrex/project1.png";
import project2 from "../../../Assets/floorrex/project2.png";
import project3 from "../../../Assets/floorrex/project3.png";
import logo1 from "../../../Assets/floorrex/logo1.png";
import logo2 from "../../../Assets/floorrex/logo2.png";
import logo3 from "../../../Assets/floorrex/logo3.png";
const projects = [
  {
    name: "Piramal Realty",
    logo: logo1,
    image: project1,
  },
  {
    name: "Adani Realty",
    logo: logo2,
    image: project2,
  },
  {
    name: "DLF Realty",
    logo: logo3,
    image: project3,
  },
  {
    name: "Godrej Properties",
    logo: logo1,
    image: project3,
  },
  {
    name: "Tata Realty",
    logo: logo2,
    image: project2,
  },
  {
    name: "Sobha Realty",
    logo: logo3,
    image: project1,
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative bg-white py-24 md:px-6 px-4 lg:px-10 w-full overflow-hidden">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className=" text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Our Inspirations
        </h2>
        <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
          Luxury real estate brands that inspire us to create timeless designs.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-lg"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Background Image */}
            <motion.img
              src={project.image}
              alt={project.name}
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

            {/* Logo + Name */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: hoveredIndex === index ? 0 : 40,
                opacity: hoveredIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-6 left-0 w-full flex flex-col items-center text-center"
            >
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-3 shadow-md">
                <img
                  src={project.logo}
                  alt={project.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mt-3 drop-shadow-lg">
                {project.name}
              </h3>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Future Scaling Helper */}
      <div className="text-center mt-16">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-full bg-black text-white text-lg font-medium hover:bg-gray-800 transition"
          onClick={() => alert("Load more projects coming soon!")}
        >
          Load More
        </motion.button>
      </div>
    </section>
  );
}
