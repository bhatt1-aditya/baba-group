import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { FaRegArrowAltCircleRight, FaExpand, FaTimes, FaHeart, FaShare } from "react-icons/fa";
import img1 from "../../Assets/galleria/galleria1.svg";
import img2 from "../../Assets/galleria/galleria2.svg";
import img3 from "../../Assets/galleria/galleria3.svg";
import img4 from "../../Assets/galleria/galleria4.svg";
import img5 from "../../Assets/galleria/galleria5.svg";
import img6 from "../../Assets/galleria/galleria6.svg";
import img7 from "../../Assets/galleria/galleria7.svg";

const images = [
  { id: 1, url: img1, title: "Elegant Marble Collection", description: "Premium marble tiles with natural veining patterns", category: "Marble", height: "h-64", likes: 128 },
  { id: 2, url: img2, title: "Modern Ceramic Design", description: "Contemporary ceramic tiles for modern spaces", category: "Ceramic", height: "h-80", likes: 95 },
  { id: 3, url: img3, title: "Luxury Stone Surfaces", description: "Exquisite stone surfaces for premium interiors", category: "Stone", height: "h-72", likes: 156 },
  { id: 4, url: img4, title: "Artistic Tile Patterns", description: "Unique patterns that transform any space", category: "Pattern", height: "h-96", likes: 203 },
  { id: 5, url: img5, title: "Glass Tile Elegance", description: "Sophisticated glass tiles for contemporary design", category: "Glass", height: "h-60", likes: 87 },
  { id: 6, url: img6, title: "Natural Stone Beauty", description: "Organic stone textures for rustic elegance", category: "Natural", height: "h-88", likes: 142 },
  { id: 7, url: img7, title: "Contemporary Mosaics", description: "Modern mosaic designs for artistic expression", category: "Mosaic", height: "h-76", likes: 178 },
];

const InteractiveCard = ({ image, likedImages, handleLike, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);
  const shadowX = useTransform(x, [-50, 50], [5, -5]);
  const shadowY = useTransform(y, [-50, 50], [5, -5]);

  return (
    <motion.div
      className="relative group cursor-pointer break-inside-avoid mb-6"
      style={{ perspective: 800 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      onClick={onClick}
    >
      <motion.div
        className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 relative"
        style={{ rotateX, rotateY, boxShadow: `${shadowX}px ${shadowY}px 25px rgba(0,0,0,0.15)` }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        <motion.img
          src={image.url}
          alt={image.title}
          className={`w-full object-cover transition-all duration-700 ${image.height}`}
          whileHover={{ scale: 1.1 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="bg-white/20 backdrop-blur-sm md:px-6 px-4 lg:px-10 py-1 rounded-full text-xs font-semibold">{image.category}</span>
            <div className="flex items-center gap-2">
              <motion.button
                className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleLike(image.id);
                }}
              >
                <FaHeart className={`text-sm ${likedImages.has(image.id) ? "text-red-500 fill-current" : "text-white"}`} />
              </motion.button>
              <motion.button
                className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <FaShare className="text-sm text-white" />
              </motion.button>
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2">{image.title}</h3>
          <p className="text-sm text-gray-200 mb-4 leading-relaxed">{image.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-300">{image.likes} likes</span>
            <motion.button
              className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Details
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Galleria = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [likedImages, setLikedImages] = useState(new Set());

  const handleLike = (imageId) => {
    setLikedImages((prev) => {
      const newSet = new Set(prev);
      newSet.has(imageId) ? newSet.delete(imageId) : newSet.add(imageId);
      return newSet;
    });
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden py-24">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">GALLERIA</motion.h1>
        <motion.div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" initial={{ width: 0 }} animate={{ width: 96 }} transition={{ duration: 1 }} />
        <motion.p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
          Discover our curated collection of premium surfaces and materials
        </motion.p>
      </motion.div>

      <div className="relative w-full max-w-7xl mx-auto columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6 space-y-6">
        {images.map((image) => (
          <InteractiveCard
            key={image.id}
            image={image}
            likedImages={likedImages}
            handleLike={handleLike}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden border border-white/10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.url} alt={selectedImage.title} className="w-full h-auto max-h-[70vh] object-cover" />
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300 mb-4">{selectedImage.description}</p>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors" onClick={() => setSelectedImage(null)}>
                  Close
                </button>
              </div>
              <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300" onClick={() => setSelectedImage(null)}>
                <FaTimes className="text-white text-lg" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Galleria;
