import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Florex = () => {
  // Sample data for 4 pages - replace with your actual images and content
  const navigate=useNavigate();
 
  const pagesData = [
  {
    id: 1,
    title: "FLOREXX",
    subtitle: "Elegant Flooring Solutions",
    description: "Discover refined flooring that blends timeless aesthetics with strength. FLOREXX tiles bring a modern edge to classic design, perfect for open living areas and high-traffic spaces.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=400&fit=crop", 
    bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
    path:"/floorrex"
  },
  {
    id: 2,
    title: "CORFLEXX",
    subtitle: "Premium Ceramic Collection",
    description: "CORFLEXX offers artisan-crafted ceramic finishes that combine smooth textures with vibrant tones, designed to elevate bathrooms and kitchens with sophistication.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop", 
    bgImage: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200&h=800&fit=crop",
    path:"/corflexx"
  },
  {
    id: 3,
    title: "WALLEX",
    subtitle: "Luxury Porcelain Series",
    description: "Engineered with precision, WALLEX porcelain tiles deliver seamless surfaces, rich tones, and ultra-modern appeal, redefining interiors with bold architectural presence.",
    image: "https://images.unsplash.com/photo-1628744443446-6ad2fcd3e99d?w=600&h=400&fit=crop", 
    bgImage: "https://images.unsplash.com/photo-1628744443446-8c3c64a84d3c?w=1200&h=800&fit=crop",
    path:"/wallexx"
  },
  {
    id: 4,
    title: "CRISTALO FLEXX",
    subtitle: "Natural Stone Finish",
    description: "Inspired by nature, CRISTALO FLEXX combines the beauty of raw stone with the durability of tile, offering earthy tones and unique textures for both rustic and elegant interiors.",
    image: "https://images.unsplash.com/photo-1618221195691-47fd0bff2c3a?w=600&h=400&fit=crop", 
    bgImage: "https://images.unsplash.com/photo-1594737625785-cf3d0e6c3f09?w=1200&h=800&fit=crop",
    path:"/cristalo-flexx"
  },
  {
    id: 5,
    title: "QUARTZ",
    subtitle: "Radiant Stone Surfaces",
    description: "QUARTZ tiles bring a luminous, crystalline sheen that enhances light-filled rooms. Known for their resilience and sparkle, they are perfect for luxury floors and countertops.",
    image: "https://images.unsplash.com/photo-1600585153934-843c2a3b1d5b?w=600&h=400&fit=crop", 
    bgImage: "https://images.unsplash.com/photo-1600607688969-31aa33b9a2d3?w=1200&h=800&fit=crop",
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
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentPage((prevPage) => (prevPage + 1) % pagesData.length);
          return 0;
        }
        return prev + (100 / (AUTO_SLIDE_INTERVAL / 50));
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [isAutoPlay, currentPage, pagesData.length]);

  // Reset progress when page changes manually
  useEffect(() => {
    setProgress(0);
  }, [currentPage]);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
    setIsAutoPlay(false); // Pause auto-play when manually navigating
    setTimeout(() => setIsAutoPlay(true), 2000); // Resume after 2 seconds
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pagesData.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 2000);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pagesData.length) % pagesData.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 2000);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  return (
    <div 
      className="w-full min-h-screen bg-gray-100 flex items-center justify-center p-6 bg-cover bg-no-repeat bg-center transition-all duration-1000 ease-in-out relative"
      style={{ backgroundImage: `url(${currentData.bgImage})` }}
    >
      {/* Background Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 transition-opacity duration-1000"></div>
      
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl flex flex-col md:flex-row max-w-6xl w-full overflow-hidden relative z-10">
        {/* Left Content */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center items-center">
          {/* Page Counter */}
          <p className="text-sm text-gray-500 mb-2">
            <span className="font-semibold text-black">
              {String(currentPage + 1).padStart(2, '0')}
            </span> - 05
          </p>
          <br/>
          
          <h1 className="text-3xl font-semibold text-black mb-2 transition-all duration-500">
            {currentData.title}
          </h1>
          <br/><br/>
          
          <h2 className="text-lg font-bold text-black mb-4 transition-all duration-500">
            {currentData.subtitle}
          </h2>
          <br/>
          
          <p className="text-gray-600 mb-6 text-lg transition-all duration-500 text-center">
            {currentData.description}
          </p>
          
          <button className="bg-gray-200 text-gray-800 px-5 py-2 rounded-full text-sm hover:bg-gray-300 transition-all w-fit"  onClick={() => {
    navigate(currentData.path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}>
            Explore more &rarr;
          </button>

          {/* Pagination Dots with Progress */}
          <div className="flex space-x-2 mt-8">
            {pagesData.map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index)}
                className={`relative w-8 h-3 rounded-full transition-all duration-300 ${
                  index === currentPage 
                    ? 'bg-gray-300' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {index === currentPage && (
                  <div
                    className="absolute top-0 left-0 h-full bg-black rounded-full transition-all duration-75"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Auto-play Control */}
          <button
            onClick={toggleAutoPlay}
            className="mt-4 text-xs text-gray-500 hover:text-gray-700 transition-colors flex items-center space-x-1"
          >
            {isAutoPlay ? (
              <>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
                <span>Auto-play ON</span>
              </>
            ) : (
              <>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span>Auto-play OFF</span>
              </>
            )}
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 p-10 relative transition-all duration-700 ease-out">
          <img
            src={currentData.image}
            alt={currentData.subtitle}
            className="w-full h-full object-cover rounded-lg transition-all duration-500 shadow-lg"
          />
          
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevPage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-black p-2 rounded-full shadow-lg transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={handleNextPage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-black p-2 rounded-full shadow-lg transition-all duration-200"
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