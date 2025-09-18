import React from "react";
import image from "../../Assets/componentImage/news1.png"
const newsData = [
  {
    id: 1,
    category: "News",
    readTime: "5 mins read",
    title: "Introducing the Wallex Wall Panel Collection",
    description: "Explore the innovative design of our new wall panel collections.",
    image:image
  },
  {
    id: 2,
    category: "Events",
    readTime: "4 mins read",
    title: "Grand Opening of New Factory",
    description: "Join us as we unveil our super jumbo quartz countertop manufacturing factory.",
    image:image
  },
  {
    id: 3,
    category: "Events",
    readTime: "4 mins read",
    title: "Upcoming events",
    description: "Join us as we unveil our super jumbo quartz countertop manufacturing factory.",
    image: image
  },
];

const NewsEvents = () => {
  return (
    <div className="text-center my-28 px-4 md:px-6 lg:px-10">
      <h2 className="text-3xl font-semibold mb-2">News & Events</h2>
      <p className="text-orange-500 mb-8">
        Stay informed with our latest developments and launches.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {newsData.map((news) => (
          <div key={news.id} className="bg-white  overflow-hidden">
            <img src={news.image} alt={news.title} className="w-full object-contain" />

            <div className="py-4 text-left">
              <div className="flex items-center gap-2 text-sm text-orange-500 font-semibold mb-2">
                <span className="bg-orange-100 px-2 py-1 rounded">{news.category}</span>
                <span>{news.readTime}</span>
              </div>

              <h3 className="font-semibold text-lg mb-2">{news.title}</h3>
              <p className="text-gray-600 mb-4">{news.description}</p>
              <button className="text-orange-500 font-medium hover:underline">
                Read More &gt;
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition duration-300">
        VIEW MORE
      </button>
    </div>
  );
};

export default NewsEvents;
