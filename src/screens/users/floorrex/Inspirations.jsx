import { useState } from "react";

const images = [
  "https://source.unsplash.com/random/1600x900?tech",
  "https://source.unsplash.com/random/1600x900?design",
  "https://source.unsplash.com/random/1600x900?business",
  "https://source.unsplash.com/random/1600x900?startup",
  "https://source.unsplash.com/random/1600x900?future",
];

export default function ModernImageShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full overflow-hidden bg-white text-black py-16">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-10 tracking-tight">
          Inspirations
        </h1>

        <div className="flex flex-col md:flex-row gap-4 md:h-[75vh] w-full">
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative flex-1 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out 
                ${activeIndex === index ? "md:flex-[3]" : "md:flex-[1.2]"}`}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={src}
                alt={`Modern design ${index + 1}`}
                className="w-full h-60 md:h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-xl md:text-3xl font-bold text-white">Creative {index + 1}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
