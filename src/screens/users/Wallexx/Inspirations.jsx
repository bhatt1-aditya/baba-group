// import React, { useState, useEffect } from 'react';

// // Unsplash image URLs for the carousel. You can add more here.
// const carouselImages = [
//   'https://images.unsplash.com/photo-1579298245158-30678d46249d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjU4Mzh8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZsb29yJTIwZGVzaWdufGVufDB8fHx8MTcwOTMxNDIwMHww&ixlib=rb-4.0.3&q=80&w=1920',
//   'https://images.unsplash.com/photo-1558980327-e4351a660a92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjU4Mzh8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMHBvb2wlMjBvbiUyMGhvdXNlJTIwdG9wfGVufDB8fHx8MTcwOTMxNDI5MXww&ixlib=rb-4.0.3&q=80&w=1920',
//   'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjU4Mzh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb250ZW1wb3JhcnklMjBpbnRlcmlvcnxlbnwwfHx8fDE3MDkzMTQzOTV8MA&ixlib=rb-4.0.3&q=80&w=1920',
//   'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjU4Mzh8MHwxfHNlYXJjaHwxfHxkZWx1eGUlMjByb29tJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzA5MzE0NDUzfDA&ixlib=rb-4.0.3&q=80&w=1920'
// ];

// const products = [
//   {
//     id: 1,
//     name: 'CALCATTA ANGELO',
//     description: 'Luxurious marble tiles with natural veining patterns.',
//     rating: '4.5+',
//     isBestseller: true,
//     imageUrl: 'https://images.unsplash.com/photo-1618172193622-ae2d025fabb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjU4Mzh8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBmbG9vcnxlbnwwfHx8fDE3MDkyMzE0Mjh8MA&ixlib=rb-4.0.3&q=80&w=400',
//   },
//   {
//     id: 2,
//     name: 'CALCATTA ANGELO',
//     description: 'Luxurious marble tiles with natural veining patterns.',
//     rating: '4.5+',
//     isBestseller: true,
//     imageUrl: 'https://images.unsplash.com/photo-1618172193622-ae2d025fabb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjU4Mzh8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBmbG9vcnxlbnwwfHx8fDE3MDkyMzE0Mjh8MA&ixlib=rb-4.0.3&q=80&w=400',
//   },
//   {
//     id: 3,
//     name: 'CALCATTA ANGELO',
//     description: 'Luxurious marble tiles with natural veining patterns.',
//     rating: '4.5+',
//     isBestseller: true,
//     imageUrl: 'https://images.unsplash.com/photo-1618172193622-ae2d025fabb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjU4Mzh8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBmbG9vcnxlbnwwfHx8fDE3MDkyMzE0Mjh8MA&ixlib=rb-4.0.3&q=80&w=400',
//   },
//   {
//     id: 4,
//     name: 'CALCATTA ANGELO',
//     description: 'Luxurious marble tiles with natural veining patterns.',
//     rating: '4.5+',
//     isBestseller: true,
//     imageUrl: 'https://images.unsplash.com/photo-1618172193622-ae2d025fabb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjU4Mzh8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBmbG9vcnxlbnwwfHx8fDE3MDkyMzE0Mjh8MA&ixlib=rb-4.0.3&q=80&w=400',
//   },
//   {
//     id: 5,
//     name: 'CALCATTA ANGELO',
//     description: 'Luxurious marble tiles with natural veining patterns.',
//     rating: '4.5+',
//     isBestseller: true,
//     imageUrl: 'https://images.unsplash.com/photo-1618172193622-ae2d025fabb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjU4Mzh8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBmbG9vcnxlbnwwfHx8fDE3MDkyMzE0Mjh8MA&ixlib=rb-4.0.3&q=80&w=400',
//   },
//   {
//     id: 6,
//     name: 'CALCATTA ANGELO',
//     description: 'Luxurious marble tiles with natural veining patterns.',
//     rating: '4.5+',
//     isBestseller: true,
//     imageUrl: 'https://images.unsplash.com/photo-1618172193622-ae2d025fabb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjU4Mzh8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBmbG9vcnxlbnwwfHx8fDE3MDkyMzE0Mjh8MA&ixlib=rb-4.0.3&q=80&w=400',
//   },
//   {
//     id: 7,
//     name: 'CALCATTA ANGELO',
//     description: 'Luxurious marble tiles with natural veining patterns.',
//     rating: '4.5+',
//     isBestseller: true,
//     imageUrl: 'https://images.unsplash.com/photo-1618172193622-ae2d025fabb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjU4Mzh8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBmbG9vcnxlbnwwfHx8fDE3MDkyMzE0Mjh8MA&ixlib=rb-4.0.3&q=80&w=400',
//   },
//   {
//     id: 8,
//     name: 'CALCATTA ANGELO',
//     description: 'Luxurious marble tiles with natural veining patterns.',
//     rating: '4.5+',
//     isBestseller: true,
//     imageUrl: 'https://images.unsplash.com/photo-1618172193622-ae2d025fabb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjU4Mzh8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBmbG9vcnxlbnwwfHx8fDE3MDkyMzE0Mjh8MA&ixlib=rb-4.0.3&q=80&w=400',
//   },
// ];

// const ProductCard = ({ product }) => (
//   <div className="relative bg-white rounded-lg overflow-hidden shadow-lg p-3">
//     {product.isBestseller && (
//       <span className="absolute top-3 left-3 bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-md">
//         BESTSELLER
//       </span>
//     )}
//     <img
//       src={product.imageUrl}
//       alt={product.name}
//       className="w-full h-auto rounded-lg"
//     />
//     <div className="p-4 text-left">
//       <h3 className="text-sm font-bold text-gray-800">{product.name}</h3>
//       <p className="text-xs text-gray-500 mt-1">{product.description}</p>
//       <div className="flex items-center text-xs mt-2">
//         <span className="text-yellow-500 flex mr-1">
//           {/* Using Unicode star characters as a simple alternative to FaStar */}
//           <span className="mr-0.5">⭐</span>
//           <span className="mr-0.5">⭐</span>
//           <span className="mr-0.5">⭐</span>
//           <span className="mr-0.5">⭐</span>
//         </span>
//         <span className="text-gray-800">{product.rating} Ratings</span>
//       </div>
//     </div>
//     <button className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition-colors duration-200">
//       {/* Using Unicode heart character */}
//       ❤️
//     </button>
//   </div>
// );

// const App = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Effect to handle automatic image transitions
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => 
//         (prevIndex + 1) % carouselImages.length
//       );
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <div
//       className="bg-cover bg-center min-h-screen p-8 text-white transition-opacity duration-1000 ease-in-out"
//       style={{ backgroundImage: `url('${carouselImages[currentImageIndex]}')` }}
//     >
//       <header className="text-center mb-12">
//         <p className="text-xl font-light tracking-wide">Explore Floorrex</p>
//         <h1 className="text-6xl font-bold tracking-widest mt-2">PRODUCTS</h1>
//         <nav className="mt-8 text-2xl font-light space-x-12">
//           <a href="#" className="border-b-2 border-white font-semibold pb-1">STONA</a>
//           <a href="#" className="opacity-75 hover:opacity-100 transition-opacity">WOOD</a>
//         </nav>
//       </header>

//       <main className="container mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//         <div className="flex justify-center mt-12">
//           <button className="border border-white text-white px-8 py-3 rounded-lg text-sm tracking-widest font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
//             DISCOVER MORE
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { motion } from "framer-motion";

import image from "../../../Assets/wallex/about/image2.png";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
  "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  image
];

export default function Inspirations() {
  return (
    <section className="bg-[#044d42] text-white py-16 px-4 flex flex-col items-center">
      {/* Title */}
      <motion.h2
        className="text-3xl md:text-5xl font-serif mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        INSPIRATIONS
      </motion.h2>

      {/* Grid of images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={src}
              alt={`Inspiration ${index + 1}`}
              className="w-full h-72 object-cover rounded-2xl transition-transform duration-500"
            />
            {/* Overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl"
              whileHover={{ opacity: 1 }}
            >
              <p className="text-white font-semibold text-lg md:text-xl">
                {`Inspiration ${index + 1}`}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
