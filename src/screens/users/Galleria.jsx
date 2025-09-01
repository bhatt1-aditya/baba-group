import React, { useState, useEffect } from "react";
import img1 from "../../Assets/galleria/galleria1.svg";
import img2 from "../../Assets/galleria/galleria2.svg";
import img3 from "../../Assets/galleria/galleria3.svg";
import img4 from "../../Assets/galleria/galleria4.svg";
import img5 from "../../Assets/galleria/galleria5.svg";
import img6 from "../../Assets/galleria/galleria6.svg";
import img7 from "../../Assets/galleria/galleria7.svg";
import backgroundImage1 from "../../Assets/galleria/backgroundImage.svg";
import { FaRegArrowAltCircleRight, FaExpand, FaTimes, FaHeart, FaShare } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { 
    id: 1, 
    url: img1, 
    title: "Elegant Marble Collection",
    description: "Premium marble tiles with natural veining patterns",
    category: "Marble",
    height: "h-64",
    likes: 128
  },
  { 
    id: 2, 
    url: img2, 
    title: "Modern Ceramic Design",
    description: "Contemporary ceramic tiles for modern spaces",
    category: "Ceramic",
    height: "h-80",
    likes: 95
  },
  { 
    id: 3, 
    url: img3, 
    title: "Luxury Stone Surfaces",
    description: "Exquisite stone surfaces for premium interiors",
    category: "Stone",
    height: "h-72",
    likes: 156
  },
  { 
    id: 4, 
    url: img4, 
    title: "Artistic Tile Patterns",
    description: "Unique patterns that transform any space",
    category: "Pattern",
    height: "h-96",
    likes: 203
  },
  { 
    id: 5, 
    url: img5, 
    title: "Glass Tile Elegance",
    description: "Sophisticated glass tiles for contemporary design",
    category: "Glass",
    height: "h-60",
    likes: 87
  },
  { 
    id: 6, 
    url: img6, 
    title: "Natural Stone Beauty",
    description: "Organic stone textures for rustic elegance",
    category: "Natural",
    height: "h-88",
    likes: 142
  },
  { 
    id: 7, 
    url: img7, 
    title: "Contemporary Mosaics",
    description: "Modern mosaic designs for artistic expression",
    category: "Mosaic",
    height: "h-76",
    likes: 178
  },
  { 
    id: 8, 
    url: img1, 
    title: "Classic Marble Elegance",
    description: "Timeless marble designs for sophisticated spaces",
    category: "Marble",
    height: "h-68",
    likes: 134
  },
  { 
    id: 9, 
    url: img2, 
    title: "Minimalist Ceramic",
    description: "Clean ceramic lines for minimalist aesthetics",
    category: "Ceramic",
    height: "h-84",
    likes: 112
  },
  { 
    id: 10, 
    url: img3, 
    title: "Premium Stone Collection",
    description: "High-end stone materials for luxury projects",
    category: "Stone",
    height: "h-92",
    likes: 189
  },
  { 
    id: 11, 
    url: img4, 
    title: "Geometric Patterns",
    description: "Modern geometric designs for contemporary spaces",
    category: "Pattern",
    height: "h-56",
    likes: 167
  },
  { 
    id: 12, 
    url: img5, 
    title: "Crystal Glass Tiles",
    description: "Crystal clear glass tiles for modern bathrooms",
    category: "Glass",
    height: "h-80",
    likes: 145
  }
];

const Galleria = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [likedImages, setLikedImages] = useState(new Set());

  // const categories = ["All", "Marble", "Ceramic", "Stone", "Pattern", "Glass", "Natural", "Mosaic"];

  const filteredImages = selectedCategory === "All" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const handleLike = (imageId) => {
    setLikedImages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(imageId)) {
        newSet.delete(imageId);
      } else {
        newSet.add(imageId);
      }
      return newSet;
    });
  };

  return (
    <div className="relative min-h-screen bg-gray-200 overflow-hidden">

      <div className="relative z-10 flex flex-col items-center py-12 px-4">
        {/* Modern Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-black mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
        GALLERIA
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
          <motion.p 
            className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Discover our curated collection of premium surfaces and materials
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        {/* <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </motion.div> */}

        {/* Masonry Gallery */}
        <div className="relative w-full max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6 space-y-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative group cursor-pointer break-inside-avoid mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.02,
                  zIndex: 10
                }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:shadow-2xl transition-all duration-500">
                  <motion.img
                    src={image.url}
                    alt={image.title}
                    className={`w-full object-cover transition-all duration-700 ${image.height}`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  {/* Content Overlay */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                        {image.category}
                      </span>
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
                          <FaHeart 
                            className={`text-sm ${likedImages.has(image.id) ? 'text-red-500 fill-current' : 'text-white'}`} 
                          />
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
                      <span className="text-xs text-gray-300">
                        {image.likes} likes
                      </span>
                      <motion.button
                        className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/30 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </motion.div>
                  
                  {/* Expand Icon */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaExpand className="text-white text-lg" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
      </div>

        {/* Modern Footer */}
        <motion.div 
          className="flex flex-col items-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.p 
            className="uppercase text-gray-600 tracking-widest text-sm font-medium mb-2"
            whileHover={{ color: "#3B82F6" }}
            transition={{ duration: 0.3 }}
          >
          Discover
          </motion.p>
          <motion.h2 
            className="uppercase text-black tracking-wider text-2xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
          A SHOWROOM NEAR YOU
          </motion.h2>
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Find Showroom</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaRegArrowAltCircleRight className="text-xl" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Modal for selected image */}
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
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-cover"
              />
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300 mb-4">{selectedImage.description}</p>
                <button
                  className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  Close
                </button>
      </div>
              <button
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300"
                onClick={() => setSelectedImage(null)}
              >
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
