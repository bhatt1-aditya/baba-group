import React from "react";
import image from "../../Assets/componentImage/news1.png"
const resourceData = [
  {
    id: 1,
    type: "Video",
    title: "Cristalloo walkthrough",
    description: "Explore the cristalloo world with our latest collections and dive into the world of luxury.",
    duration: "10 mins",
    action: "Watch Now",
    views: "3.2M views",
    image:image
  },
  {
    id: 2,
    type: "Catalogues",
    title: "Cristalloo catalogue",
    description: "Explore the cristalloo world with our latest collections and dive into the world of luxury.",
    duration: "20 mins",
    action: "Read Now",
    views: "3.2M read",
    image:image
  },
  {
    id: 3,
    type: "Business Profiles",
    title: "Cristalloo walkthrough",
    description: "Explore the cristalloo world with our latest collections and dive into the world of luxury.",
    duration: "10 mins",
    action: "Download Now",
    views: "3.2M downloads",
    image:image
  },
  {
    id: 4,
    type: "Flyers",
    title: "Cristalloo walkthrough",
    description: "Explore the cristalloo world with our latest collections and dive into the world of luxury.",
    duration: "2 mins",
    action: "View Now",
    views: "3.2M views",
    image:image
  },
];

const ResourcesSection = () => {
  return (
    <div className="text-center my-28 px-4 md:px-6 lg:px-10">
      <h2 className="text-3xl font-semibold mb-2">Resources</h2>
      <p className="text-orange-500 mb-8">
        Discover our valuable products and tools for your projects
      </p>

      {/* <div className="flex justify-center space-x-4 text-sm text-gray-600 mb-8">
        <button className="text-orange-500 font-semibold">All</button>
        <button>Videos</button>
        <button>Catalogues</button>
        <button>Business Profiles</button>
        <button>Flyers</button>
        <button>Photos</button>
        <button>Visualisers</button>
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {resourceData.map((res) => (
          <div key={res.id} className="bg-white shadow rounded-lg overflow-hidden p-4">
            <img src={res.image} alt={res.title} className="w-full object-contain" />

            <div className="mt-4 text-left">
              <div className="flex items-center justify-between text-xs text-orange-500 font-semibold mb-2">
                <span className="bg-orange-100 px-2 py-1 rounded">{res.type}</span>
                <span>{res.views}</span>
              </div>

              <h3 className="font-semibold text-lg mb-2">{res.title}</h3>
              <p className="text-gray-600 mb-4">{res.description}</p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{res.duration}</span>
                <button className="text-orange-500 font-medium hover:underline">
                  {res.action}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesSection;
