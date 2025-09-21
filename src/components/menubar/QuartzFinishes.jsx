import React from "react";
import image1 from "../../Assets/menuImage/finish1.png"
import image2 from "../../Assets/menuImage/finish2.png"
import image3 from "../../Assets/menuImage/finish3.png"
const finishes = [
  {
    title: "LEATHER FINISH",
    image: image1
  },
  {
    title: "MATTE FINISH",
    image: image2
  },
  {
    title: "HONED FINISH",
    image: image3
  },
];

const QuartzFinishes=()=> {
  return (
    <section className="md:px-6 px-4 lg:px-10 py-24 max-w-7xl mx-auto text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        <span className="text-orange-500">Quartz</span> Finishes.
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        Discover BABA Quartz's quartz finishes in Leather, Honed, and Matte. Each
        finish has different experience and visual appearance that appeal to a
        wide variety of design styles.
      </p>

      {/* Finishes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {finishes.map((finish, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-full h-56 overflow-hidden rounded-lg shadow-md">
              <img
                src={finish.image}
                alt={finish.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="mt-4 text-sm font-medium text-gray-800 tracking-wide">
              {finish.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default QuartzFinishes;