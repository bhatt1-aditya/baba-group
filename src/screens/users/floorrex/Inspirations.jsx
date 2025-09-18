import { useState } from "react";
import image1 from "../../../Assets/floorrex/inspiration1.png"
import image2 from "../../../Assets/floorrex/inspiration2.png"
import image3 from "../../../Assets/floorrex/inspiration3.png"
import image4 from "../../../Assets/floorrex/inspiration4.png"
import image5 from "../../../Assets/floorrex/inspiration5.png"
const images = [
  {
    src: image1,
    title: "Innovative Tech",
  },
  {
    src: image2,
    title: "Modern Design",
  },
  {
    src: image3,
    title: "Business Growth",
  },
  {
    src: image4,
    title: "Startup Ideas",
  },
  {
    src: image5,
    title: "Future Vision",
  },
];

export default function CreativeImageShowcase() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 md:px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-16 text-gray-900">
          Inspirations
        </h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent 
                  transition-opacity duration-500 ${
                    hoverIndex === index ? "opacity-100" : "opacity-0"
                  }`}
              />

              {/* Text and Button */}
              <div
                className={`absolute bottom-0 w-full md:px-6 px-4 lg:px-10 py-4 flex items-center justify-between 
                  transition-all duration-500 transform
                  ${
                    hoverIndex === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
              >
                <h2 className="text-lg font-semibold text-white">
                  {item.title}
                </h2>
                <button className="bg-white/20 hover:bg-white/40 backdrop-blur-md text-white font-bold text-xl px-3 py-2 rounded-full transition">
                  →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Modern Staggered Section */}
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="relative group h-80 md:h-[400px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] group-hover:bg-black/30 transition-all duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white transition-all duration-500 group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm">Discover limitless possibilities.</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
