// import React from 'react';

// const DiamondIcon = () => {
//   const brands = [
//     {
//       name: "COREFLEXX",
//       background: "bg-gray-700",
//       textColor: "text-white",
//       logo: "COREFLEXX"
//     },
//     {
//       name: "FLOORREX",
//       background: "bg-amber-700",
//       textColor: "text-white", 
//       logo: "FLOORREX"
//     },
//     {
//       name: "CRISTALLO",
//       background: "bg-black",
//       textColor: "text-white",
//       logo: "CRISTALLO",
//       subtitle: "Italian Marble Stone Veneer"
//     },
//     {
//       name: "WALLEXX",
//       background: "bg-teal-600",
//       textColor: "text-white",
//       logo: "WALLEXX"
//     },
//     {
//       name: "BABA QUARTZ",
//       background: "bg-gray-900",
//       textColor: "text-orange-400",
//       logo: "BABA QUARTZ"
//     }
//   ];

//   const DiamondIcon = () => (
//     <div className="flex items-center justify-center mb-4">
//       <div className="w-8 h-8 bg-white transform rotate-45 border-2 border-gray-300"></div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-light text-gray-800 mb-6">
//             Our BRANDS.
//           </h1>
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
//             Each Baba Group brand carries a legacy of innovation and excellence, delivering 
//             specialized solutions for diverse needs.
//           </p>
//         </div>

//         {/* Brands Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0">
//           {brands.map((brand, index) => (
//             <div 
//               key={index}
//               className={`${brand.background} ${brand.textColor} h-80 flex flex-col justify-between p-8 relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10 hover:shadow-2xl`}
//             >
//               {/* Background Pattern/Texture */}
//               <div className="absolute inset-0 opacity-10">
//                 <div className="w-full h-full" style={{
//                   backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
//                   backgroundSize: '20px 20px'
//                 }}></div>

import React from "react";
import image1 from "../../../Assets/new_home/baba_group/brand1.png"
import image2 from "../../../Assets/new_home/baba_group/brand2.png"
import image3 from "../../../Assets/new_home/baba_group/brand3.png"
import image4 from "../../../Assets/new_home/baba_group/brand4.png"
import image5 from "../../../Assets/new_home/baba_group/brand5.png"
const brands = [
  {
    name: "COREFLEXX",
    img: image1,
    link: "#",
  },
  {
    name: "FLOORREX",
    img: image2,
    link: "#",
  },
  {
    name: "CRISTALLCO",
    img: image3,
    link: "#",
  },
  {
    name: "WALLEX",
    img: image4,
    link: "#",
  },
  {
    name: "BABA QUARTZ",
    img:image5,
    link: "#",
  },
];

const DiamondIcon = () => {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-10 bg-white text-center">
      <h2 className="text-3xl font-bold mb-2">Our BRANDS.</h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        Each BABA Group brand carries a legacy of innovation and excellence,
        delivering specialized solutions for diverse needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
        {brands.map((brand, index) => (
          <div
            key={index}
            className=" rounded overflow-hidden  transition"
          >
            <img
              src={brand.img}
              alt={brand.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              {/* <h3 className="font-semibold text-lg">{brand.name}</h3> */}
              <a
                href={brand.link}
                className="text-blue-600 text-sm mt-2 inline-block hover:underline"
              >
                Explore More &gt;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiamondIcon;
