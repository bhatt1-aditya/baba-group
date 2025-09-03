
import { motion } from "framer-motion";

const projects = [
  {
    name: "Piramal Realty",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/Piramal_Logo.png",
    image: "https://source.unsplash.com/800x600/?luxury,building",
  },
  {
    name: "Adani Realty",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Adani_logo.png",
    image: "https://source.unsplash.com/800x600/?skyscraper",
  },
  {
    name: "DLF Realty",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a3/DLF_Logo.png",
    image: "https://source.unsplash.com/800x600/?villa,luxury",
  },
  {
    name: "Godrej Properties",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Godrej_Logo.svg",
    image: "https://source.unsplash.com/800x600/?modern,apartment",
  },
  {
    name: "Tata Realty",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Tata_logo.svg",
    image: "https://source.unsplash.com/800x600/?residential,building",
  },
  {
    name: "Sobha Realty",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Sobha_Developers_logo.png",
    image: "https://source.unsplash.com/800x600/?house,interior",
  },
];

export default function Projects() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20 w-full overflow-x-hidden">
      <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-20 tracking-tight">
        Inspirations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            whileHover={{ scale: 1.08 }}
            className="relative group rounded-3xl shadow-xl overflow-hidden bg-white cursor-pointer"
          >
            {/* Animated Background Image */}
            <motion.img
              src={project.image}
              alt={project.name}
              className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />

            {/* Floating Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end items-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              <img
                src={project.logo}
                alt={project.name}
                className="h-14 mb-4 bg-white rounded-xl p-2 shadow-md"
              />
              <h3 className="text-2xl font-semibold text-white drop-shadow-lg">
                {project.name}
              </h3>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
























// import { motion } from "framer-motion";

// const projects = [
//   {
//     name: "Piramal Realty",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/Piramal_Logo.png",
//     images: [
//       "https://source.unsplash.com/800x600/?luxury,building",
//       "https://source.unsplash.com/800x600/?city,architecture",
//       "https://source.unsplash.com/800x600/?interior,design",
//     ],
//   },
//   {
//     name: "Adani Realty",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Adani_logo.png",
//     images: [
//       "https://source.unsplash.com/800x600/?construction",
//       "https://source.unsplash.com/800x600/?skyscraper",
//       "https://source.unsplash.com/800x600/?apartment",
//     ],
//   },
//   {
//     name: "DLF Realty",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/a/a3/DLF_Logo.png",
//     images: [
//       "https://source.unsplash.com/800x600/?tower,building",
//       "https://source.unsplash.com/800x600/?villa,luxury",
//       "https://source.unsplash.com/800x600/?residential",
//     ],
//   },
// ];

// export default function Projects() {
//   return (
//     <div className="bg-[#f8f5f0] py-16 px-6 md:px-12 lg:px-20 font-serif">
//       <h2 className="text-4xl font-bold text-center text-[#8b5e3c] mb-12">
//         Our Projects
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             whileHover={{ scale: 1.02 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
//           >
//             {/* Hero Image */}
//             <motion.img
//               src={project.images[0]}
//               alt={project.name}
//               className="w-full h-56 object-cover"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.4 }}
//             />

//             {/* Small Thumbnails */}
//             <div className="flex gap-2 p-3">
//               {project.images.slice(1).map((img, i) => (
//                 <motion.img
//                   key={i}
//                   src={img}
//                   alt={`${project.name}-${i}`}
//                   className="w-1/2 h-28 object-cover rounded-lg"
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ type: "spring", stiffness: 200 }}
//                 />
//               ))}
//             </div>

//             {/* Logo + Name */}
//             <div className="p-4 flex flex-col items-center border-t">
//               <img
//                 src={project.logo}
//                 alt={project.name}
//                 className="h-12 mb-2 object-contain"
//               />
//               <h3 className="text-lg font-semibold text-gray-800">
//                 {project.name}
//               </h3>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }
