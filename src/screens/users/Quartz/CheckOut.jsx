// import React from "react";
// // If you use "import productImg from './other-product.jpg';", update the img src below accordingly

// const products = [
//   { name: "COREFLEXX" },
//   { name: "WALLEX" },
//   { name: "FLOOREXX" },
//   { name: "CRISTALLOO" },
// ];

// const CheckOut = () => {
//   return (
//     <div className="bg-[#FDFBF6] min-h-screen flex flex-col items-center py-16">
//       {/* Heading */}
//       <div className="mb-10 text-center">
//         <p className="text-lg mb-2 font-light">Checkout our</p>
//         <h2 className="text-3xl md:text-4xl font-serif tracking-wide mb-2">
//           OTHER PRODUCTS
//         </h2>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//         {products.map((product, idx) => (
//           <div
//             key={product.name}
//             className="rounded-xl overflow-hidden bg-white shadow-lg pb-4 flex flex-col items-center group transition-all"
//           >
//             {/* Image */}
//             <div className="w-[200px] h-[200px] bg-gray-200 relative">
//               <img
//                 src="/other-product.jpg" // Or {productImg}
//                 alt={product.name}
//                 className="w-full h-full object-cover"
//               />
//               {/* Circles Decoration (optional, mimic the white circles) */}
//               <span className="absolute top-2 left-2 w-5 h-5 border-2 border-white rounded-full opacity-80"></span>
//               <span className="absolute top-8 left-6 w-3 h-3 border-2 border-white rounded-full opacity-70"></span>
//             </div>
//             {/* Product Name */}
//             <p className="mt-4 text-lg font-medium tracking-wide">
//               {product.name}
//             </p>
//             {/* Arrow Button */}
//             <button className="mt-2 w-8 h-8 flex items-center justify-center border border-orange-300 rounded-full text-orange-500 hover:bg-orange-50 transition">
//               <svg
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   d="M9 5l7 7-7 7"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CheckOut;



import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import image1 from "../../../Assets/Quartz/product1.png";
import image2 from "../../../Assets/Quartz/collections1.png";
import image3 from "../../../Assets/Quartz/collections2.png";
import image4 from "../../../Assets/wallex/about/sidebar.png";

const products = [
  { id: 1, name: "COREFLEXX", image: image1 },
  { id: 2, name: "WALLEXX", image: image2 },
  { id: 3, name: "FLOOREXX", image: image3 },
  { id: 4, name: "CRISTALLOO", image: image4 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function CheckOut() {
  return (
    <div className="relative bg-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Floating decorative shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-40"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center relative z-10"
      >
        <p className="text-orange-500 tracking-widest uppercase text-sm mb-2">
          Explore More
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Other Products
        </h2>
      </motion.div>

      {/* Products Grid */}
      <motion.div
        className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            custom={index}
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className="relative group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
            {/* Product Image */}
            <div className="aspect-square overflow-hidden">
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
              />
            </div>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition duration-500">
              <h3 className="text-white text-lg font-semibold">
                {product.name}
              </h3>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition"
                onClick={() => alert(`Navigating to ${product.name}`)}
              >
                <FaArrowRight />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
