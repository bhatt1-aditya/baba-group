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

// Sample product data
const products = [
  { id: 1, name: "COREFLEXX", image: image1 },
  { id: 2, name: "WALLEXX", image: image2 },
  { id: 3, name: "FLOOREXX", image: image3 },
  { id: 4, name: "CRISTALLOO", image: image4 },
];

const CheckOut = () => {
  return (
    <div className="bg-gradient-to-b from-[#faf7f2] to-white py-16 md:px-6 px-4 xl:px-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-gray-500 tracking-wide uppercase text-sm mb-2">
          Explore More
        </p>
        <h2 className="text-4xl md:text-5xl font-serif tracking-wider text-gray-900">
          Other Products
        </h2>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="relative group rounded-2xl overflow-hidden shadow-lg bg-white/70 backdrop-blur-md border border-gray-100 hover:shadow-2xl transition"
          >
            {/* Product Image */}
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <div className="flex flex-col items-center text-white">
                <h3 className="text-lg font-semibold tracking-wide">
                  {product.name}
                </h3>
                <FaArrowRight className="text-xl mt-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CheckOut;
