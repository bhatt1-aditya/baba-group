import React from "react";
import image1 from "../../../Assets/new_home/wallexx/category1.png"
import image2 from "../../../Assets/new_home/wallexx/category2.png"
const Categories = () => {
  const categories = [
    {
      title: "Wall Panels",
      img: image1,
      link: "#",
    },
    {
      title: "Shower Panels",
      img: image2,
      link: "#",
    },
  ];

  return (
    <div className="px-4 md:px-6 lg:px-10 py-12 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold">
        Explore <span className="text-green-800">WALLEX</span> categories.
      </h2>
      <p className="text-gray-500 mt-2 text-sm md:text-base">
        Discover premium Wallex surfaces crafted for beauty, durability, and
        global style.
      </p>

      {/* Categories Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg group"
          >
            {/* Background Image */}
            <img
              src={cat.img}
              alt={cat.title}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
              <h3 className="text-2xl md:text-3xl font-semibold">
                {cat.title}
              </h3>
              <a
                href={cat.link}
                className="mt-4 bg-white text-gray-800 px-6 py-2 rounded-full shadow hover:bg-gray-100 text-sm font-medium transition"
              >
                EXPLORE NOW ›
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
