import React from "react";
import { motion } from "framer-motion";
import explore1 from "../../../Assets/footer_florex/explore.png";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const Explore = () => {
  const products = [
    { label: "New", title: "Tanzania", subtitle: "The Hope", tag: "New" },
    { label: "New", title: "Tanzania", subtitle: "The Hope", tag: "New" },
    { label: "Bestseller", title: "Tanzania", subtitle: "The Hope", tag: "Bestseller" },
    { label: "Bestseller", title: "Tanzania", subtitle: "The Hope", tag: "Bestseller" },
  ];

  const categories = [
    "GLIZZ", "GORGIA", "INFINITY", "KAO", "LISCIA", "LUXE",
    "LUXUR", "MADONNA", "ORAPA", "RIO", "TANZANIA"
  ];

  return (
    <div className="text-white p-10 min-h-screen" style={{
              fontFamily: "Poppins, sans-serif",
            }}>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className="whitespace-nowrap leading-none font-normal font-libertinus text-center">
          <span className="text-xl block">Explore Cristalloo</span>
          <br />
          <span className="text-4xl">PRODUCTS</span>
        </h1>
      </motion.div>

      {/* Categories */}
     <motion.ul
  className="uppercase text-center m-10 flex items-center gap-9 justify-start overflow-x-auto whitespace-nowrap scrollbar-hide"
  initial="hidden"
  whileInView="visible"
  variants={{
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05 }
    }
  }}
  viewport={{ once: false, amount: 0.3 }}
>
  {categories.map((cat, i) => (
    <motion.li
      key={i}
      className="px-4" // spacing for better scroll touch
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.4 }}
    >
      {cat}
    </motion.li>
  ))}
</motion.ul>


      {/* Product Grid */}
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-6">
        {products.map((p, i) => (
          <motion.div
            key={i}
            className="flex md:flex-row flex-col gap-1 bg-white rounded-xl shadow-lg relative w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="top-9 absolute w-[20%]">
              <button className="uppercase absolute bg-black text-white px-5 rounded-tr-full rounded-br-full py-3 ml-3 w-full">
                {p.tag}
              </button>
            </div>
            <img src={explore1} className="object-contain  p-3" alt={p.title} />
            <div className="text-black flex flex-col p-3 md:gap-8 gap-6 mx-3 md:mt-10 mt-1">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl">{p.title}</h2>
                <h1 className="text-3xl font-bold uppercase">{p.subtitle}</h1>
              </div>
              <p className="text-lg font-medium">
                Luxurious marble tiles with natural veining patterns....Read more.
              </p>
              <div className="flex justify-end">
                <div className="bg-black w-[30%] rounded-full flex justify-center items-center">
                  <button className="uppercase px-5 py-2 text-white text-sm">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More */}
      <motion.div
        className="flex justify-center gap-1 mt-10 flex-col items-center animate-bounce"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className="text-white text-center uppercase">Load More</h1>
        <FaRegArrowAltCircleDown className="text-xl" />
      </motion.div>
    </div>
  );
};

export default Explore;
