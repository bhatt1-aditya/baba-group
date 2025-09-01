import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    img: "https://source.unsplash.com/800x600/?building,city",
    name: "Piramal Realty",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/Piramal_Logo.png",
  },
  {
    img: "https://source.unsplash.com/800x600/?industry,factory",
    name: "Adani Realty",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Adani_logo.png",
  },
  {
    img: "https://source.unsplash.com/800x600/?skyscraper,city",
    name: "Piramal Realty",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/Piramal_Logo.png",
  },
];

const faqs = [
  { q: "What are the different types?", a: "We offer a variety of options to suit every need." },
  { q: "Where can I checkout the products?", a: "You can checkout products on our official website." },
  { q: "Where can I checkout the products?", a: "Visit our store or website for easy checkout." },
];

export default function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-serif">
      {/* Projects Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold text-[#8b5e3c] mb-8">OUR PROJECTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img src={project.img} alt={project.name} className="w-full h-56 object-cover" />
              <div className="py-4 flex justify-center items-center">
                <img src={project.logo} alt={project.name} className="h-10 object-contain" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
