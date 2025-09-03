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
    name: "DLF Builders",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/DLF_Logo.png",
  },
  {
    img: "https://source.unsplash.com/800x600/?modern,architecture",
    name: "Tata Realty",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Tata_logo.svg",
  },
  // {
  //   img: "https://source.unsplash.com/800x600/?construction,site",
  //   name: "Godrej Properties",
  //   logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Godrej_Logo.svg",
  // },
];

export default function ProjectsSection() {
  return (
    <div className="font-serif bg-gradient-to-b from-white to-[#fff5eb]">
      {/* Section Wrapper */}
      <section className="py-20 md:px-6 px-4 xl:px-10">
        {/* Title */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#ff7f32] tracking-wide">
            Our Projects
          </h2>
          <div className="w-24 h-1 bg-[#ff7f32] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            A showcase of our proudest collaborations with top builders and developers.
          </p>
        </motion.div>

        {/* Scrollable Grid for Mobile, Responsive Grid for Larger Screens */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 min-w-max md:min-w-full">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative group rounded-2xl overflow-hidden shadow-xl cursor-pointer bg-white"
              >
                {/* Project Image */}
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Logo & Name */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
                  <motion.img
                    src={project.logo}
                    alt={project.name}
                    className="h-12 mx-auto mb-3 transition-transform duration-500 group-hover:scale-110"
                  />
                  <p className="text-white text-lg font-semibold tracking-wide">
                    {project.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CSS for Hiding Scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
