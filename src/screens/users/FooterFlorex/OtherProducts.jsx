import React from "react";
import { motion } from "framer-motion";
import img1 from "../../../Assets/footer_florex/products1.png";
import img2 from "../../../Assets/footer_florex/products2.png";
import img3 from "../../../Assets/footer_florex/products3.png";
import img4 from "../../../Assets/footer_florex/products4.png";
import { FiArrowRightCircle } from "react-icons/fi";

const OtherProducts = () => {
  // Animation variant for fade-up
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },

    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  const products = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
  ];

  return (
    <div className="text-white min-h-screen">
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }} // 🔹 Removed once:true so it triggers every time
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        style={{
              fontFamily: "Poppins, sans-serif",
            }}
      >
        <h1 className="whitespace-nowrap leading-none font-normal font-libertinus text-center">
          <h1 className="text-xl">Checkout our</h1>
          <br />
          <span className="md:text-4xl text-3xl">OTHER PRODUCTS</span>
        </h1>
      </motion.div>

      {/* Products */}
      <motion.div
        className="text-white mt-10 flex justify-between gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }} // 🔹 Will run again whenever you scroll back
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {products.map((product, i) => (
          <motion.div
            key={i}
            className="relative"
            variants={fadeUp}
            custom={i}
          >
            <img src={product.img} alt={`Product ${i + 1}`} />
            {i > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute inset-y-96"
              >
                <FiArrowRightCircle className="text-3xl" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OtherProducts;
