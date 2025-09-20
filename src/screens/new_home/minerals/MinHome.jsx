// App.jsx
import React from "react";
import mainImage from "../../../Assets/new_home/minerals/mainImage.png";
import image2 from "../../../Assets/new_home/minerals/homeImage2.png";
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

        <div className="text-white mx-auto z-50 absolute px-4 md:gap-0 gap-10 md:px-6 lg:px-10 flex md:flex-row flex-col justify-between items-center w-full md:bottom-44 bottom-20">
          <div className="text-center mx-auto">
            <h1 className="text-white mb-3 md:text-5xl text-3xl font-bold">
              Building the <span className="text-[#ff9000]">Foundation </span>
              <br />
              of Excellence.
            </h1>
          <div className="flex md:flex-row flex-col gap-2">
            <img src={image2} />
            <p className="">
              “Supplying premium minerals that power world- <br />  class surfaces and sustainable manufacturing.”

             
            </p>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainHome;
