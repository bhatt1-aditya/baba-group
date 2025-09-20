import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const BottomNavbar = () => {
   const location = useLocation();
  const permission = location.state?.permission;
  console.log("permission",permission)
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [showNavbar, setShowNavbar] = useState(true);
  const navigate = useNavigate();
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

  const mobileMenuItems = 
  permission==="florexx"?
  [
    { title: "Home", id: "/" },
    { title: "About BF", id: "/" },
    { title: "Product Collection", id: "/" },
    { title: "Why Florex", id: "/" },
    { title: "Become a distributor", id: "/" },
    { title: "Sample Request", id: "/" },
    { title: "E-catelogue", id: "/" },
    { title: "Contact Us", id: "/" },
    { title: "Carrerrs", id: "/" },
    { title: "Resources", id: "/" },
  ]
:permission==="wallex"? [
    { title: "About Wallex", id: "about" },
    { title: "Wallex Story", id: "story" },
    { title: "Technology", id: "technology" },
    { title: "Applications", id: "applications" },
    { title: "Projects", id: "projects" },
    { title: "Contact Wallex", id: "contact" },
  ]
  :permission==="coreflexx"?
  [
    { title: "Home", id: "/" },
    { title: "About BF", id: "/" },
    { title: "Product Collection", id: "/" },
    { title: "Why Coreflexx", id: "/" },
    { title: "Become a Distrubuter", id: "/" },
    { title: "Distributor Locater", id: "/" },
    { title: "Sample Request", id: "/" },
    { title: "E-Catelogue", id: "/" },
    { title: "Contact Us", id: "/" },
    { title: "Carrers", id: "/" },
    { title: "Resources", id: "/" },
  ]:
  permission==="quartz"? [
    { title: "Home", id: "/" },
    { title: "About Baba Quartz", id: "/" },
    { title: "Product Collection", id: "/" },
    { title: "Why Baba Quartz", id: "/" },
    { title: "Bio Quartz", id: "/" },
    { title: "Become a Dealer", id: "/" },
    { title: "Sample Request", id: "/" },
      {
      title: "E-Cateloge",
      children: [
        { title: "Baba Quartz", id: "/" },
        { title: "Cristallo Overseas", id: "/" },
        { title: "-----------", id: "/" },
        { title: "-------", id: "/" },
        { title: "--------", id: "/" },
        { title: "--------", id: "/" },
      ],
    },
    { title: "Mineral's", id: "/" },
    { title: "Contact Us", id: "/" },
    { title: "----------", id: "/" },
  ]:permission==="cristalo"? [
    { title: "Home", id: "/" },
    { title: "About Cristallo", id: "/" },
    { title: "Product Collection", id: "/" },
    { title: "Why Choose Cristallo", id: "/" },
    { title: "Become a dealer", id: "/" },
    { title: "Sample Request", id: "/" },
     {
      title: "E-catelogue",
      children: [
        { title: "Cristallo Demostic Collection", id: "/" },
      ],
    },
    { title: "Contact Us", id: "/" },
    { title: "Resources", id: "/" },
  ]:[
    { title: "Home", id: "/" },
    { title: "Promoters", id: "/Promoters" },
    { title: "Projects", id: "/projects-page" },
    { title: "Inspiration's", id: "/inspirations" },
    { title: "Awards & Achievement's", id: "/awards-achievements" },
    { title: "Career's", id:"/carrers" },
    { title: "Global Presence", id: "/global-presence" },
    { title: "Our Care Responsibilitie's", id: "/core-responsibilities" },
    { title: "Trade shows", id: "/" },
    { title: "Contact Us", id: "/contact-us" },
    {
      title: "Resource's",
      children: [
        { title: "Baba Group", id: "/" },
        { title: "Baba Quartz Overseas", id: "/" },
        { title: "Baba Quartz Minearls", id: "/" },
        { title: "Florexx", id: "/" },
        { title: "Coreflexx", id: "/" },
        { title: "Wallexx Spc wall Panels", id: "/" },
        { title: "Wallexx Spc Shower Panels", id: "/" },
      ],
    },
    { title: "Environmental Commitment", id: "/environmental-commitment" },
    { title: "New's & Events", id: "/news-event-section" },
    { title: "Our Publication's", id: "/publications-section" },
    { title: "Sitemap", id: "/" },
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
  if (!id) return;

  // if id starts with "/" → treat it as route
  if (id.startsWith("/")) {
    navigate(id);
    setMenuOpen(false);
  } else {
    // smooth scroll inside same page
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(
        () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
        100
      );
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  }
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
         className="flex items-center justify-between 
             fixed top-4 left-0 right-0 
           w-[91%] md:w-[93.5%] lg:w-[92.4%] xl:w-[95%] mx-4 md:mx-6 lg:mx-10 
             text-white z-50 px-8 py-3 
             backdrop-blur-md bg-white/10 
             rounded-3xl shadow-lg transition-all duration-500"
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
          className="xl:flex hidden gap-12 items-center text-base"
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
                © 2025 Baba Group. All rights reserved.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BottomNavbar;
