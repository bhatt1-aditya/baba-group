// App.jsx
import React from "react";
import mainImage from "../../../Assets/new_home/wallexx/homeImage.png";
import image2 from "../../../Assets/new_home/wallexx/homeimage2.png";
const MainHome = () => {
  return (
    <div className="font-sans ">
      {/* Hero Section */}
      <section className="relative h-screen w-full ">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${mainImage})`,
          }}
        >
          {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
        </div>

        <div className="text-white text-center z-50 absolute px-4 md:gap-5 gap-10 md:px-6 lg:px-10 flex  flex-col justify-between items-center w-full md:bottom-44 bottom-20">
          <div className="flex gap-1 md:flex-row flex-col">
            <img src={image2} className="border-r"/>
            <p className="">
              “Transform your walls with durable,<br/> stylish, and effortless solutions.”
            </p>
          </div>
          <div className="text-white md:text-5xl text-3xl font-bold ">
            <h1>
              Luxury SPC Wall<span className="text-[#ff9000]"> &  </span>
              
               Shower Panels
            </h1>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default MainHome;
