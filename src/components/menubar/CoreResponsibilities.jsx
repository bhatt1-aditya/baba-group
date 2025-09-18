import React from "react";
import image from "../../Assets/menuImage/babaresponsibilities.png"
const CoreResponsibilities = () => {
  return (
    <div className="md:px-6 lg:px-10 px-4 my-24">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center">
        Our Core <span className="text-orange-500">Responsibilities</span>
      </h2>

      {/* Description */}
      <p className="text-center text-gray-600 mt-4 mx-auto">
        Baba Group believes that a healthy environment is not only complementary.
        But also critical to a healthy business. Our mission is to develop a high 
        performance, high value products in order to satisfy our customers total needs.
      </p>

      {/* Image */}
      <div className="mt-8">
        <img
          src={image}
          alt="Baba Quartz Building"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Stats */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-4xl font-bold text-orange-500">95%</h3>
          <p className="mt-2 text-gray-600">Environment Friendly</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-orange-500">98%</h3>
          <p className="mt-2 text-gray-600">Creative & Execution</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-orange-500">99%</h3>
          <p className="mt-2 text-gray-600">Technology Giants</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-orange-500">100%</h3>
          <p className="mt-2 text-gray-600">Quality Production</p>
        </div>
      </div>
    </div>
  );
};

export default CoreResponsibilities;
