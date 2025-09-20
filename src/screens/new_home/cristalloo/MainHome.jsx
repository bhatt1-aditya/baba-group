// App.jsx
import React from "react";
import mainImage from "../../../Assets/new_home/cristalloo_pannel/mainImage.png";
import image2 from "../../../Assets/new_home/cristalloo_pannel/homeimage2.png";
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

        <div className="text-white z-50 absolute px-4 md:gap-0 gap-10 md:px-6 lg:px-10 flex md:flex-row flex-col md:justify-between justify-center items-center w-full inset-y-1/2">
          <div className="text-white md:text-5xl text-3xl font-bold flex flex-col justify-center mx-auto items-center">
            <img src={image2} />

            <h1 className="text-center">
              {" "}
              Quartz Surfaces
              <br />
              <span className="">That Shine</span>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainHome;
