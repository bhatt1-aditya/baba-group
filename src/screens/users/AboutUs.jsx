import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  // Removed scroll-bound transforms to avoid jank during scroll

  // Removed background image list; AboutUs now uses the same animated gradient blobs as Galleria

  const sections = [
    {
      title: "Our Mission",
      content: "To deliver world-class products with cutting-edge designs and eco-conscious manufacturing, while building trust across global and Indian markets.",
      icon: "🎯"
    },
    {
      title: "Our Vision",
      content: "To be the leading force in innovative surface solutions, creating spaces that inspire and endure for generations to come.",
      icon: "🌟"
    },
    {
      title: "Our Values",
      content: "Quality, Innovation, Sustainability, and Customer Excellence - the pillars that drive every decision we make.",
      icon: "💎"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sections.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [sections.length]);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 overflow-hidden">
      

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-6xl mx-auto w-full">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              ABOUT US
            </motion.h1>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.div>

          {/* Content Sections */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
                  whileHover={{ 
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    borderColor: "rgba(255, 255, 255, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{ 
                      scale: activeSection === index ? 1.2 : 1,
                      rotate: activeSection === index ? [0, 10, -10, 0] : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {section.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {section.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
                
                {/* Hover effect glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Signature Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.div
              className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-white font-bold text-xl">
                ~ BABA GROUP
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;