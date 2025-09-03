import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const BottomNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [showNavbar, setShowNavbar] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);
  const lastScrollY = useRef(0);

  const desktopMenuItems = [
    { title: "Home", id: "home" },
    { title: "Brands", id: "brands" },
    { title: "Products", id: "products" },
    { title: "Galleria", id: "gallery" },
    { title: "About", id: "about" },
    { title: "Testimonials", id: "testimonials" },
  ];

  const mobileMenuItems = [
    { title: "About Baba Group", id: "about" },
    { title: "Group History", id: "history" },
    {
      title: "Partnering with Baba Group",
      children: [
        { title: "Become an authorized fabricator", id: "fabricator" },
        { title: "Become a distributor", id: "distributor" },
        { title: "Become a dealer", id: "dealer" },
      ],
    },
    { title: "Our Core Responsibilities", id: "responsibilities" },
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
    { title: "Our Network", id: "network" },
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

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!menuOpen) setExpandedItems({});
  }, [menuOpen]);

  const handleScrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const toggleExpanded = (index) => {
    setExpandedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="w-full z-50">
      {/* Navbar */}
      <motion.div
        animate={{ y: showNavbar ? 0 : -150 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="flex items-center justify-between left-20 fixed top-4  transform -translate-x-1/2 w-[95%] lg:w-[90%] text-white z-50 px-8 py-3 backdrop-blur-md bg-white/10 rounded-3xl shadow-lg transition-all duration-500"
      >
        {/* Logo */}
        <motion.div
          className="flex justify-start text-2xl font-semibold tracking-wide flex-col items-center text-white drop-shadow-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <span className="font-serif">BABA</span>
          <span className="text-xs tracking-widest">GROUP</span>
        </motion.div>

        {/* Middle Navigation */}
        <motion.div
          className="flex gap-12 items-center text-base"
          initial={{ y: -20, opacity: 0 }}
          animate={showNavbar ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {desktopMenuItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => handleScrollToSection(item.id)}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-5 py-2 rounded-full transition-all duration-300 text-white font-medium"
            >
              {item.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Hamburger Menu */}
        <motion.div
          className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          animate={{ rotate: menuOpen ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {menuOpen ? <IoMdClose className="h-6 w-6 text-white" /> : <IoMdMenu className="h-6 w-6 text-white" />}
        </motion.div>
      </motion.div>

      {/* Mobile Slide-In Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              ref={menuRef}
              className="fixed top-0 right-0 h-full w-80 bg-white/70 backdrop-blur-xl text-gray-900 shadow-2xl z-50 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Header */}
              <div className="flex justify-between items-center px-6 py-5 bg-gradient-to-r from-[#7a4a24] to-[#8b5a2b] text-white rounded-b-xl shadow-md">
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
                  <div key={index} className="border-b border-gray-200 last:border-b-0">
                    <div
                      className={`flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-white/30 transition-all duration-300 ${
                        item.children && expandedItems[index] ? "bg-white/20" : ""
                      }`}
                      onClick={() => (item.children ? toggleExpanded(index) : handleScrollToSection(item.id))}
                    >
                      <span className="font-medium text-gray-900 hover:text-[#7a4a24] transition-colors">
                        {item.title}
                      </span>
                      {item.children &&
                        (expandedItems[index] ? <IoChevronUp className="h-4 w-4 text-gray-700" /> : <IoChevronDown className="h-4 w-4 text-gray-700" />)}
                    </div>

                    {/* Child Items */}
                    {item.children && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={expandedItems[index] ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-6 border-l-2 border-[#7a4a24] bg-white/50">
                          {item.children.map((child, childIndex) => (
                            <button
                              key={childIndex}
                              onClick={() => handleScrollToSection(child.id)}
                              className="w-full text-left px-6 py-3 text-sm text-gray-700 hover:text-[#7a4a24] hover:bg-white/30 transition-all duration-200 flex items-center"
                            >
                              <div className="w-2 h-2 bg-[#7a4a24] rounded-full opacity-70 mr-3"></div>
                              {child.title}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 text-center text-xs text-gray-700 border-t border-gray-300">
                © 2024 Baba Group. All rights reserved.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BottomNavbar;
