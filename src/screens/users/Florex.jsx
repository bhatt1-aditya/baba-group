import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import florexx from "../../Assets/floorrex/image1.png";
import coreFlex from "../../Assets/core_flexx/core_flex/hero1.png";
import wallex from "../../Assets/core_flexx/wallexx/home.png";
import quartz from "../../Assets/Quartz/hero.png";
import cristaloFlex from "../../Assets/footer_florex/home.png"
const Florex = () => {
  const navigate = useNavigate();

  const pagesData = [
    {
      id: 1,
      title: "FLOREXX",
      subtitle: "Elegant Flooring Solutions",
      description: "Discover refined flooring that blends timeless aesthetics with strength. FLOREXX tiles bring a modern edge to classic design, perfect for open living areas and high-traffic spaces.",
      image: florexx,
      path:"/floorrex"
    },
    {
      id: 2,
      title: "CORFLEXX",
      subtitle: "Premium Ceramic Collection",
      description: "CORFLEXX offers artisan-crafted ceramic finishes that combine smooth textures with vibrant tones, designed to elevate bathrooms and kitchens with sophistication.",
      image:coreFlex,
      path:"/corflexx"
    },
    {
      id: 3,
      title: "WALLEX",
      subtitle: "Luxury Porcelain Series",
      description: "Engineered with precision, WALLEX porcelain tiles deliver seamless surfaces, rich tones, and ultra-modern appeal, redefining interiors with bold architectural presence.",
      image: wallex,
      path:"/wallexx"
    },
    {
      id: 4,
      title: "CRISTALO FLEXX",
      subtitle: "Natural Stone Finish",
      description: "Inspired by nature, CRISTALO FLEXX combines the beauty of raw stone with the durability of tile, offering earthy tones and unique textures for both rustic and elegant interiors.",
      image: cristaloFlex,
      path:"/cristalo-flexx"
    },
    {
      id: 5,
      title: "QUARTZ",
      subtitle: "Radiant Stone Surfaces",
      description: "QUARTZ tiles bring a luminous, crystalline sheen that enhances light-filled rooms. Known for their resilience and sparkle, they are perfect for luxury floors and countertops.",
      image: quartz,
      path:"/quartz"
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [progress, setProgress] = useState(0);
  const AUTO_SLIDE_INTERVAL = 4000; 
  const currentData = pagesData[currentPage];

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setCurrentPage(prevPage => (prevPage + 1) % pagesData.length);
          return 0;
        }
        return prev + (100 / (AUTO_SLIDE_INTERVAL / 50));
      });
    }, 50);
    return () => clearInterval(interval);
  }, [isAutoPlay, currentPage, pagesData.length]);

  useEffect(() => setProgress(0), [currentPage]);

  const handlePageChange = (index) => {
    setCurrentPage(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 2000);
  };

  const handleNextPage = () => {
    setCurrentPage(prev => (prev + 1) % pagesData.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 2000);
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => (prev - 1 + pagesData.length) % pagesData.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 2000);
  };

  const toggleAutoPlay = () => setIsAutoPlay(!isAutoPlay);

  return (
    <div className="relative w-full min-h-screen bg-white flex items-center justify-center md:p-6 p-4 lg:-10 overflow-hidden">
      {/* Background Floating Blobs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-float" />

      {/* Main Content */}
      <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl flex flex-col md:flex-row max-w-6xl w-full overflow-hidden relative z-10 transition-all duration-1000 ease-in-out">
        
        {/* Left Info */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center items-center text-center md:text-left transition-all duration-700">
          <p className="text-sm text-gray-500 mb-2">
            <span className="font-semibold text-black">{String(currentPage + 1).padStart(2,'0')}</span> - 05
          </p>

          <h1 className="text-3xl font-bold text-black mb-2 transition-transform duration-500 transform hover:scale-105">
            {currentData.title}
          </h1>

          <h2 className="text-lg font-semibold text-black mb-4 transition-transform duration-500 transform hover:scale-105">
            {currentData.subtitle}
          </h2>

          <p className="text-gray-600 mb-6 text-lg transition-opacity duration-700">
            {currentData.description}
          </p>

          {/* Explore Button with Pulse */}
          <button
            onClick={() => { navigate(currentData.path); window.scrollTo({ top:0, behavior:'smooth' }); }}
            className="mt-4 md:px-6 lg:px-10 px-4 py-4 bg-gradient-to-r from-purple-400 to-blue-400 text-white font-bold rounded-full shadow-lg animate-pulse hover:scale-110 transition-all duration-300"
          >
            Explore more
          </button>

          {/* Pagination */}
          <div className="flex space-x-2 mt-8">
            {pagesData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handlePageChange(idx)}
                className={`relative w-8 h-3 rounded-full transition-all duration-300 ${idx === currentPage ? 'bg-gray-400' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {idx === currentPage && (
                  <div
                    className="absolute top-0 left-0 h-full bg-black rounded-full transition-all duration-75"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Auto-play toggle */}
          <button
            onClick={toggleAutoPlay}
            className="mt-4 text-xs text-gray-500 hover:text-gray-700 transition-colors flex items-center space-x-1"
          >
            {isAutoPlay ? 'Auto-play ON' : 'Auto-play OFF'}
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 p-10 relative transition-all duration-700 ease-out">
          <img
            src={currentData.image}
            alt={currentData.subtitle}
            className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105 hover:shadow-2xl"
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevPage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-black p-2 rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNextPage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-black p-2 rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Florex;
