import React, { useState, useEffect } from "react";

const Testimonials = () => {
  // Sample testimonials data - replace with your actual data
  const testimonialsData = [
    {
      id: 1,
      name: "KRSTY JONAS",
      position: "Interior Designer",
      testimonial: "Premium natural stone tiles and countertops that bring timeless elegance to every space. The quality and craftsmanship exceeded all our expectations.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&h=400&fit=crop&face", // Profile image
      bgImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop" // Kitchen background
    },
    {
      id: 2,
      name: "MICHAEL CHEN",
      position: "Architect",
      testimonial: "Outstanding ceramic collection with innovative designs. Perfect for creating stunning modern interiors that combine functionality with aesthetic appeal.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&face", // Profile image
      bgImage: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&h=800&fit=crop" // Bathroom background
    },
    {
      id: 3,
      name: "SARAH WILLIAMS",
      position: "Homeowner",
      testimonial: "The porcelain tiles transformed our home completely. Exceptional durability and the luxurious finish makes every room feel like a premium space.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&face", // Profile image
      bgImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&h=800&fit=crop" // Modern interior background
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const AUTO_SLIDE_INTERVAL = 5000; // 5 seconds per slide

  const currentTestimonial = testimonialsData[currentSlide];

  // Auto-slide effect
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonialsData.length);
          return 0;
        }
        return prev + (100 / (AUTO_SLIDE_INTERVAL / 50)); // Update every 50ms
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [isAutoPlay, currentSlide, testimonialsData.length]);

  

  // Reset progress when slide changes manually
  useEffect(() => {
    setProgress(0);
  }, [currentSlide]);

  // Trigger transition animation
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 600);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const handleSlideChange = (slideIndex) => {
    if (slideIndex === currentSlide) return;
    setCurrentSlide(slideIndex);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 3000); // Resume after 3 seconds
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialsData.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 3000);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 3000);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  return (
    <div
      className="relative w-full min-h-screen bg-cover object-fill bg-center text-white flex items-center justify-center px-4 pd:mb-0 pb-10 transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${currentTestimonial.bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0 transition-opacity duration-1000"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Heading with slide-in animation */}
        <h2 className={`text-4xl md:text-5xl font-bold md:mb-12 mb-6 uppercase tracking-wide md:mt-6 mt-20 transition-all duration-700 ${
          isTransitioning ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          Testimonials
        </h2>

        {/* Testimonial Card with enhanced animations */}
        <div className={`relative bg-white/90 backdrop-blur-md text-black flex flex-col md:flex-row items-center gap-6 rounded-2xl shadow-xl p-6 md:p-10 w-full max-w-3xl transition-all duration-700 transform ${
          isTransitioning ? 'scale-95 opacity-80 rotate-1' : 'scale-100 opacity-100 rotate-0'
        }`}>
          {/* Navigation Arrows with hover animations */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200/80 hover:bg-gray-300 hover:scale-110 text-black p-2 rounded-full shadow-lg transition-all duration-300 z-10 hover:shadow-xl"
          >
            <svg className="w-5 h-5 transition-transform duration-300 hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={handleNextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200/80 hover:bg-gray-300 hover:scale-110 text-black p-2 rounded-full shadow-lg transition-all duration-300 z-10 hover:shadow-xl"
          >
            <svg className="w-5 h-5 transition-transform duration-300 hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Text with staggered animation */}
          <div className="flex-1 text-left">
            <h3 className={`text-xl font-bold transition-all duration-500 delay-100 ${
              isTransitioning ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
            }`}>
              {currentTestimonial.name}
            </h3>
            <p className={`text-sm text-gray-600 mb-4 transition-all duration-500 delay-200 ${
              isTransitioning ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
            }`}>
              {currentTestimonial.position}
            </p>
            <p className={`text-sm text-gray-800 transition-all duration-500 delay-300 ${
              isTransitioning ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
            }`}>
              {currentTestimonial.testimonial}
            </p>
          </div>

          {/* Image Container with enhanced effects */}
          <div className="relative">
            <div className={`relative w-60 h-60 rounded-xl overflow-hidden shadow-lg transition-all duration-700 ${
              isTransitioning ? 'scale-110 rotate-3 opacity-70' : 'scale-100 rotate-0 opacity-100'
            }`}>
              {testimonialsData.map((testimonial, index) => (
                <img
                  key={testimonial.id}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}
                />
              ))}
              {/* Animated border */}
              <div className={`absolute inset-0 border-4 border-transparent rounded-xl transition-all duration-500 ${
                isTransitioning ? 'border-white/30' : 'border-transparent'
              }`}></div>
            </div>
            {/* Floating animation effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Enhanced Pagination Dots with Progress and hover effects */}
        <div className="mt-6 flex gap-3">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`relative w-10 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentSlide 
                  ? 'bg-gray-400 shadow-lg' 
                  : 'bg-gray-600/50 hover:bg-gray-500'
              } ${isTransitioning && index === currentSlide ? 'animate-pulse' : ''}`}
            >
              {index === currentSlide && (
                <div
                  className="absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-75 shadow-sm"
                  style={{ width: `${progress}%` }}
                />
              )}
              {/* Ripple effect on click */}
              <div className="absolute inset-0 rounded-full bg-white/30 scale-0 opacity-0 transition-all duration-300 hover:scale-150 hover:opacity-100"></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;