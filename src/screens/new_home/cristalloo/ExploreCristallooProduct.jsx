import React from 'react'
import image1 from "../../../Assets/new_home/cristalloo_pannel/product1.png"
import image2 from "../../../Assets/new_home/cristalloo_pannel/product2.png"
import image3 from "../../../Assets/new_home/cristalloo_pannel/product3.png"
import { Heart } from "lucide-react";
const products = [
  {
    id: 1,
    brand: "FLOOREXX",
    name: "ENTANA WALNUT",
    image: image1,
  },
  {
    id: 2,
    brand: "FLOOREXX",
    name: "ENTANA WALNUT",
    image: image2,
  },
  {
    id: 3,
    brand: "FLOOREXX",
    name: "ENTANA WALNUT",
    image: image3,
  },
];const ExploreCristallooProduct = () => {
  const features = [
     "WARRANTY",
     "WATERPROOF",
     "SOUNDPROOF",
     "ENDLESS OPTIONS",
     "TERMITE RESISTANT",
     "ECO-FRIENDLY",
     "ULTIMATE DURABILITY",
     "SAFE AND BETTER AIR QUALITY",
     "LOW COST INSTALLATION",
   ];
 
   return (
     <section className=" px-4 md:px-6 lg:px-10 bg-white mb-10 text-center">
       {/* Heading */}
       <h2 className="text-3xl font-semibold text-gray-900">
         Explore   <span className="text-teal-700">CRISTALLOO</span> Products.
       </h2>
 
       {/* Subtext */}
       <p className="mt-4 text-gray-600 max-w-3xl mb-4 mx-auto">
        Discover premium cristalloo countertops surfaces crafted for beauty, durability, and global style.
       </p>
 
      
 
       <div className="grid grid-cols-1 max-w-6xl mx-auto md:grid-cols-3 gap-10">
               {products.map((product) => (
                 <div key={product.id} className="space-y-4">
                   <div className="relative">
                     <img
                       src={product.image}
                       alt={product.name}
                       className=" object-contain rounded shadow-md"
                     />
                     <button className="absolute -bottom-10 xl:right-20 lg:right-2 right-0 bg-white/80 rounded-full p-2 hover:bg-white transition">
                       <Heart size={18} className="text-gray-600 hover:text-red-500" />
                     </button>
                   </div>
                   <h3 className="text-sm text-start font-medium text-red-500">
                     {product.brand}
                   </h3>
                   <h3 className="text-lg text-start font-medium text-gray-800">
                     {product.name}
                   </h3>
                 </div>
               ))}
             </div>
     </section>
   );
}

export default ExploreCristallooProduct