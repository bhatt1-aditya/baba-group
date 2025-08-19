import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { IoChevronUp,IoChevronDown  } from "react-icons/io5";

const BottomNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);

  // Desktop Navbar items
  const desktopMenuItems = [
    { title: "Home", id: "home" },
    { title: "Brands", id: "brands" },
    { title: "Products", id: "products" },
    { title: "Galleria", id: "gallery" },
    { title: "About", id: "about" },
    { title: "Testimonials", id: "testimonials" },
  ];

  // Mobile Navbar items
  const mobileMenuItems = [
    { title: "About Baba Group", id: "about"},
    { title: "Group History", id: "history" },
    {
      title: "Partnering with Baba Group",
      children: [
        { title: "Become an authorized fabricator", id: "fabricator" },
        { title: "Become a distributor", id: "distributor" },
        { title: "Become a dealer", id: "dealer" },
      ],
    },
    { title: "Our Core Responsibilities", id: "responsibilities",  },
    {
      title: "Resources",
      children: [
        { title: "Visualizers", id: "visualizers" },
        { title: "Brand Videos", id: "brand-videos" },
        { title: "Catalogues", id: "catalogues" },
        { title: "Installation Videos", id: "installation-videos" },
        { title: "Brand Images", id: "brand-images" },
        { title: "Why Choose Us?", id: "why-choose-us" },
        { title: "Order Samples", id: "order-samples" },
      ],
    },
    { title: "Contact Us - Location", id: "contact" },
    { title: "Our Network", id: "network"},
    {
      title: "News",
      children: [
        { title: "Event", id: "event" },
        { title: "Press Releases", id: "press" },
        { title: "In the News", id: "in-the-news" },
      ],
    },
    { title: "Sitemap", id: "sitemap" },
    { title: "Career", id: "career" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reset expanded items when menu closes
  useEffect(() => {
    if (!menuOpen) {
      setExpandedItems({});
    }
  }, [menuOpen]);

  const handleScrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const toggleExpanded = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="w-full z-50">
      {/* Desktop Navbar */}
      <div className="flex items-center justify-between bg-transparent absolute top-0 w-full text-white md:px-6 lg:px-10 px-4 py-4">
        <div className="text-2xl font-semibold tracking-wide flex flex-col items-center">
          <span className="font-serif">BABA</span>
          <span className="text-xs tracking-widest">GROUP</span>
        </div>

        {/* Desktop Menu */}
        <div className="lg:flex hidden gap-6 items-center text-base bg-white/10 text-white px-10 py-3 rounded-full backdrop-blur-md">
          {desktopMenuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleScrollToSection(item.id)}
              className="px-5 py-2 rounded-full hover:bg-white/20 transition-all duration-200"
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex items-center">
          <div
            className="h-12 w-12 bg-white/15 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/25 transition-all duration-200"
            onClick={() => setMenuOpen(true)}
          >
            <IoMdMenu className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white text-gray-800 transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto shadow-2xl ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        ref={menuRef}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 bg-gradient-to-r from-[#7a4a24] to-[#8b5a2b] text-white shadow-md">
          <div className="flex flex-col">
            <span className="text-lg font-bold">BABA GROUP</span>
            <span className="text-xs opacity-90">Navigation Menu</span>
          </div>
          <button
            className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-200"
            onClick={() => setMenuOpen(false)}
          >
            <IoMdClose className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col py-4">
          {mobileMenuItems.map((item, index) => (
            <div key={index} className="border-b border-gray-100 last:border-b-0">
              {/* Parent Item */}
              <div
                className={`flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-all duration-200 ${
                  item.children && expandedItems[index] ? 'bg-gray-50' : ''
                }`}
                onClick={() => {
                  if (item.children) {
                    toggleExpanded(index);
                  } else {
                    handleScrollToSection(item.id);
                  }
                }}
              >
                <div className="flex items-center space-x-3">
                  {item.icon && (
                    <span className="text-lg">{item.icon}</span>
                  )}
                  <span className="font-medium text-gray-800 hover:text-[#7a4a24] transition-colors">
                    {item.title}
                  </span>
                </div>
                
                {item.children && (
                  <div className="ml-2">
                    {expandedItems[index] ? (
                      <IoChevronUp className="h-4 w-4 text-gray-500" />
                    ) : (
                      <IoChevronDown className="h-4 w-4 text-gray-500" />
                    )}
                  </div>
                )}
              </div>

              {/* Child Items */}
              {item.children && (
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedItems[index] 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-[#7a4a24] ml-6">
                    {item.children.map((child, childIndex) => (
                      <button
                        key={childIndex}
                        onClick={() => handleScrollToSection(child.id)}
                        className="w-full text-left px-6 py-3 text-sm text-gray-700 hover:text-[#7a4a24] hover:bg-white transition-all duration-200 border-b border-gray-200 last:border-b-0 flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-[#7a4a24] rounded-full opacity-60"></div>
                        <span>{child.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="text-center text-xs text-gray-500">
            © 2024 Baba Group. All rights reserved.
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default BottomNavbar;