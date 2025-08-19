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
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import image1 from "../../../Assets/Quartz/product1.png"
import image2 from "../../../Assets/Quartz/collections1.png"
import image3 from "../../../Assets/Quartz/collections2.png"
import image4 from "../../../Assets/wallex/about/sidebar.png"
// import image5 from "../../../Assets/Quartz/product2.png"
// Sample product data
const products = [
  { id: 1, name: "COREFLEXX", image: image1 },
  { id: 2, name: "WALLEXX", image: image2 },
  { id: 3, name: "FLOOREXX", image: image3 },
  { id: 4, name: "CRISTALLOO", image: image4 },
  // { id: 5, name: "Quartz", image: image5 },
];

const CheckOut = () => {
  return (
    <div className="bg-[#faf7f2] py-12 px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-gray-700 tracking-wide mb-2">Checkout our</p>
        <h2 className="text-3xl font-serif tracking-wider">OTHER PRODUCTS</h2>
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center p-4 hover:shadow-lg transition"
          >
            {/* Product Image */}
            <div className="w-full aspect-square overflow-hidden rounded-xl">
              <img
                src={product.image}
                alt={product.name}
                className=" object-cover"
              />
            </div>

            {/* Product Name */}
            <h3 className="mt-4 text-base font-semibold tracking-wide">{product.name}</h3>

            {/* Arrow Icon */}
            <FaRegArrowAltCircleRight className="text-orange-500 text-xl mt-2 cursor-pointer hover:scale-110 transition" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckOut;
