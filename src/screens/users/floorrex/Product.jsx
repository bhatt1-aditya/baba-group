import React from "react";
import { motion } from "framer-motion";
import explore2 from "../../../Assets/floorrex/image1.png";
import explore1 from "../../../Assets/footer_florex/explore.png";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const Product = () => {
  return (
    <div
      className="text-white p-10 min-h-screen bg-cover bg-no-repeat bg-center w-screen scale-x-105 overflow-x-hidden"
      style={{ backgroundImage: `url(${explore2})` }}
    >
      <div className="md:px-6 lg:px-10 px-4">
        {/* Title */}
        <motion.h1
          className="whitespace-nowrap leading-none font-normal font-libertinus text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-xl"> Explore Floorrex </h1>
          <br />
          <span className="text-4xl">PRODUCTS</span>
        </motion.h1>

        {/* Categories */}
        {/* <motion.div
          className="uppercase text-center m-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ul className="flex items-center gap-9 justify-center">
            <li>STONA</li>
            <li>WOOD</li>
          </ul>
        </motion.div> */}

        {/* Product Grid */}
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-10">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="flex md:flex-row flex-col gap-1 bg-white rounded-xl shadow-lg relative w-full"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              custom={i}
            >
              {/* Tag */}
              <div className="top-9 absolute w-[20%]">
                <button className="uppercase absolute bg-black text-white px-5 rounded-tr-full rounded-br-full py-3 ml-3 w-full">
                  {i < 2 ? "New" : "Bestseller"}
                </button>
              </div>

              {/* Image with scale animation */}
              <motion.img
                src={explore1}
                className="object-contain p-3"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
              />

              {/* Text Content */}
              <div className="text-black flex flex-col p-3 md:gap-8 gap-3 mx-3 md:mt-10">
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl">Tanzania</h2>
                  <h1 className="text-3xl font-bold uppercase">The Hope</h1>
                </div>
                <p className="text-lg font-medium">
                  Luxurious marble tiles with natural veining patterns....Read
                  more.
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-white text-center uppercase">Load More</h1>
          <FaRegArrowAltCircleDown className="text-xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Product;
