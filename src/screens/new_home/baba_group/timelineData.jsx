import React from "react";

const timelineData = [
  {
    year: "1964",
    title: "Baba Factory",
    text: "With a strong presence in development, Mr. Mohamed Hussein Baba set up the first factory, laying the foundation for Baba Group's legacy...",
    img: "https://via.placeholder.com/200x150",
  },
  {
    year: "2007",
    title: "Studio Mosaic",
    text: "Later, Baba Group launched the brand of Floor & wall décor solutions, Studio Mosaic...",
    img: "https://via.placeholder.com/200x150",
  },
  {
    year: "2008",
    title: "Terrazzo Micro & Quartz LUXE",
    text: "In 2008, Baba Group expanded into engineered quartz surfaces and terrazzo flooring...",
    img: "https://via.placeholder.com/200x150",
  },
  {
    year: "2011",
    title: "Baba Export House Pvt. Ltd.",
    text: "Baba Group further strengthened its presence with international export operations...",
    img: "https://via.placeholder.com/200x150",
  },
  {
    year: "2017-18",
    title: "Baba Quartz",
    text: "Baba Quartz was established as a leading engineered quartz manufacturing brand...",
    img: "https://via.placeholder.com/200x150",
  },
  {
    year: "2022-23",
    title: "Pioneers",
    text: "Baba Group continued its global journey by expanding operations and enhancing facilities...",
    img: "https://via.placeholder.com/200x150",
  },
];

const Timeline = () => {
  return (
    <section className="px-6 md:px-16 py-16">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center text-gray-900">
        Our <span className="text-sky-500">Journey.</span>
      </h2>

      {/* Timeline Container */}
      <div className="relative mt-12 border-l border-gray-300">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="mb-12 ml-6 flex flex-col md:flex-row md:items-center"
          >
            {/* Dot on the line */}
            <div className="absolute -left-2 w-4 h-4 bg-sky-500 rounded-full border-2 border-white"></div>

            {/* Content */}
            <div
              className={`md:w-1/2 ${
                index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"
              }`}
            >
              <h3 className="text-xl font-bold text-orange-500">{item.year}</h3>
              <h4 className="mt-1 text-lg font-semibold text-gray-800">
                {item.title}
              </h4>
              <p className="mt-2 text-gray-600 text-sm md:text-base">
                {item.text}
              </p>
              <img
                src={item.img}
                alt={item.title}
                className="mt-4 rounded-lg shadow-md w-64"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
