// import React from "react";

// const timelineData = [
//   {
//     year: "1964",
//     title: "Baba Factory",
//     text: "With a strong presence in development, Mr. Mohamed Hussein Baba set up the first factory, laying the foundation for Baba Group's legacy...",
//     img: "https://via.placeholder.com/200x150",
//   },
//   {
//     year: "2007",
//     title: "Studio Mosaic",
//     text: "Later, Baba Group launched the brand of Floor & wall décor solutions, Studio Mosaic...",
//     img: "https://via.placeholder.com/200x150",
//   },
//   {
//     year: "2008",
//     title: "Terrazzo Micro & Quartz LUXE",
//     text: "In 2008, Baba Group expanded into engineered quartz surfaces and terrazzo flooring...",
//     img: "https://via.placeholder.com/200x150",
//   },
//   {
//     year: "2011",
//     title: "Baba Export House Pvt. Ltd.",
//     text: "Baba Group further strengthened its presence with international export operations...",
//     img: "https://via.placeholder.com/200x150",
//   },
//   {
//     year: "2017-18",
//     title: "Baba Quartz",
//     text: "Baba Quartz was established as a leading engineered quartz manufacturing brand...",
//     img: "https://via.placeholder.com/200x150",
//   },
//   {
//     year: "2022-23",
//     title: "Pioneers",
//     text: "Baba Group continued its global journey by expanding operations and enhancing facilities...",
//     img: "https://via.placeholder.com/200x150",
//   },
// ];

// const Timeline = () => {
//   return (
//     <section className="px-6 md:px-16 py-16">
//       {/* Heading */}
//       <h2 className="text-3xl font-semibold text-center text-gray-900">
//         Our <span className="text-sky-500">Journey.</span>
//       </h2>

//       {/* Timeline Container */}
//       <div className="relative mt-12 border-l border-gray-300">
//         {timelineData.map((item, index) => (
//           <div
//             key={index}
//             className="mb-12 ml-6 flex flex-col md:flex-row md:items-center"
//           >
//             {/* Dot on the line */}
//             <div className="absolute -left-2 w-4 h-4 bg-sky-500 rounded-full border-2 border-white"></div>

//             {/* Content */}
//             <div
//               className={`md:w-1/2 ${
//                 index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"
//               }`}
//             >
//               <h3 className="text-xl font-bold text-orange-500">{item.year}</h3>
//               <h4 className="mt-1 text-lg font-semibold text-gray-800">
//                 {item.title}
//               </h4>
//               <p className="mt-2 text-gray-600 text-sm md:text-base">
//                 {item.text}
//               </p>
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="mt-4 rounded-lg shadow-md w-64"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Timeline;





import React from 'react';
import image1 from "../../../Assets/new_home/baba_group/image1.png"
import image2 from "../../../Assets/new_home/baba_group/image3.png"
import image3 from "../../../Assets/new_home/baba_group/image4.png"
import image4 from "../../../Assets/new_home/baba_group/image5.png"
import image5 from "../../../Assets/new_home/baba_group/image6.png"
import image6 from "../../../Assets/new_home/baba_group/image7.png"
import image7 from "../../../Assets/new_home/baba_group/image8.png"

const Timeline = () => {
  const timelineData = [
    {
      year: "1964",
      title: "Robert Bosch",
      image: image1,
      description: "In 1964, a company named 'Aktiengesellschaft Thermostaat Bosch' was a start-up that became active in selling automobile parts to vehicle fleets and car traders. Over time they expanded their products and eventually grew to become a leader in the way they manufacture and distribute their products.",
      side: "left"
    },
    {
      year: "2007",
      title: "Robert Bosch Ltd",
      image: image2, 
      description: "In year 2007 Robert group entered the world of Real high-tech/Hi-tech applications under the heading of breakthrough Diagnostics and hence a new brand was introduced in the market by the name of Robert Bosch Ltd.",
      side: "right"
    },
    {
      year: "2008",
      title: "Ronald Morris Industries Pvt. Ltd.",
      image: image3,
      description: "As they decided the overall continuously expanding the floor from 3 corners gallery, filling more area than the previous one. The previous one was around 20 thousand square feet while the new expanded area was around 30 thousand square feet so that they could enhance development in not because of it but expansion as a plant that has the same benefits as the 'old' process of a new one out in 2008 as.",
      side: "left"
    },
    {
      year: "2011",
      title: "Bolex Super Plus India Pvt. Ltd.",
      image: image4,
      description: "Diversification of their markets, company became superlative. Boschian Chromatix as a processing unit for making. Thetas and then Aliphatic mounts measurements where the company proceeded for large scale manufacturing. Manufacturing company with Bolex superlative and Boley plate chromatix devices.",
      side: "right"
    },
    {
      year: "2017-18",
      title: "Best Quality",
      image: image5,
      description: "As the modernisation of business manufacturing was highly characteristic of our national BUILDING equipment Company the World with Stainless Pvt. Ltd. and Robert Morris Industries Pvt. Ltd. Combination businesses for making large scale and commercial buildings. Nowadays for the companies GFRC (Glass Fiber Reinforced Concrete), GRC (Glassfibre GFRC) Roofing and GFRC 2008 etc GFRC Pvt is essential tool GRC they provide.",
      side: "left"
    },
    {
      year: "2022-23",
      title: "Present",
      image: image6,
      description: "Currently operating with advanced manufacturing capabilities and continuing to expand our market presence with innovative solutions and cutting-edge technology.",
      side: "right"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-gray-800 mb-2">
            Our <span className="text-yellow-500 font-normal">Journey</span>.
          </h1>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gray-300 md:flex hidden"></div>

          {timelineData.map((item, index) => (
            <div key={index} className={`relative flex items-center mb-16 md:flex-row flex-col ${
              item.side === 'left' ? 'justify-start' : 'justify-end'
            }`}>
              
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10 md:flex hidden"></div>

              {/* Content container */}
              <div className={`md:w-5/12 w-full ${item.side === 'left' ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  {/* Year badge */}
                  <div className={`inline-block px-4 py-2 m-6 mb-4 rounded-full text-sm font-medium ${
                    item.side === 'left' 
                      ? 'bg-yellow-100 text-yellow-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {item.year}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-800 mx-6 mb-4">
                    {item.title}
                  </h3>

                  {/* Image */}
                  <div className="mx-6 mb-4">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-45 object-cover rounded-lg"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mx-6 mb-6">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Year label on opposite side */}
              <div className={`absolute ${
                item.side === 'left' ? 'right-0 pr-6' : 'left-0 pl-6'
              } w-5/12 md:flex hidden`}>
                <div className={`${
                  item.side === 'left' ? 'text-right' : 'text-left'
                }`}>
                  <span className="text-3xl font-light text-yellow-500">
                    {item.year}
                  </span>
                  <div className="text-sm text-gray-500 mt-1">
                    {item.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-16">
          <div className=" flex flex-col justify-center items-center mx-auto">
            <img src={image7}/>
            <p1 className="text-center mt-4 max-w-3xl">From our humble beginnings to becoming an international name in surface solutions – the milestones that define Baba Group.</p1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;