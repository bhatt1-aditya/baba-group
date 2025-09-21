import { motion } from "framer-motion";
import image1 from "../../Assets/menuImage/accessories1.png"
import image2 from "../../Assets/menuImage/accessories2.png"
import image3 from "../../Assets/menuImage/accessories3.png"
import image4 from "../../Assets/menuImage/accessories4.png"
const SimilarFloorrexAccessories = () => {
  const accessories = [
    {
      name: "SKIRTING",
      image: image1,
    },
    {
      name: "R-REDUCER",
      image: image2,
    },
    {
      name: "T-PROFILE",
      image: image3,
    },
    {
      name: "Q-ROUNDE",
      image: image4,
    },
  ];

  return (
    <div className="mx-auto my-24 px-4 md:px-6 lg:px-10 text-center">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Accessories of <span className="text-amber-700">FLOORREX.</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {accessories.map((item, index) => (
          <motion.div
            key={index}
            className="rounded p-4 flex flex-col items-center  transition"
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.image} alt={item.name} className="mb-4  object-contain" />
            <p className="font-semibold text-gray-800">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SimilarFloorrexAccessories;