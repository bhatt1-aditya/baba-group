// App.jsx
import React from "react";
import mainImage from "../../../Assets/new_home/calcite/mainImage.png";
// import image2 from "../../../Assets/new_home/coreflexx/homeimage2.png";
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

        <div className="text-white z-50 absolute px-4 md:gap-0 gap-10 md:px-6 lg:px-10 flex md:flex-row flex-col md:justify-between justify-center items-center w-full md:bottom-44 bottom-20">
          <div className="text-white md:text-5xl text-3xl font-bold ">
            <h1>
              Redefining SPC Flooring
              <br />
              <span className="md:text-2xl text-xl">Floors that inspires.</span>
            </h1>
          </div>
          {/* <div className="">
            <img src={image2} />
            <p className="">
              Premium designs.
              <br />
              Long-lasting strength.
              <br /> Sustainable performance.
            </p>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default MainHome;
