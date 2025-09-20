import React from "react";
import image1 from "../../Assets/componentImage/publicationSection1.png";
import image2 from "../../Assets/componentImage/publicationSection2.png";
import image3 from "../../Assets/componentImage/publicationSection3.png";
import image4 from "../../Assets/componentImage/publicationSection4.png";

const data = [
  { id: 1, image: image1, alt: "Publication 1", top: 20, bottom: 0 },
  { id: 2, image: image2, alt: "Publication 2", top: 0, bottom: 20 },
  { id: 3, image: image3, alt: "Publication 3", top: 0, bottom: 20 },
  { id: 4, image: image4, alt: "Publication 4", top: 20, bottom: 0 },
];

const PublicationsSection = () => {
  return (
    <div className="text-center my-28 px-4 md:px-6 lg:px-10">
      <h2 className="text-2xl font-semibold mb-8">Our <span className="text-orange-500">Publications</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {data.map((dt) => (
          <div
            key={dt.id}
            className="flex flex-col items-center bg-white p-4 shadow rounded"
            style={{ marginTop: `${dt.top}px`, marginBottom: `${dt.bottom}px` }}
          >
            <img src={dt.image} alt={dt.alt} className="mb-4 object-cover max-h-64" />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 shadow-md hover:shadow-lg">
              Read now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicationsSection;
