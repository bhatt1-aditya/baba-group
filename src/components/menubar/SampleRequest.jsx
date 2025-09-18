import React from "react";

const SampleRequest = () => {
  return (
    <div className="text-center my-28 px-4 md:px-6 lg:px-10">
      <h2 className="text-3xl font-semibold mb-2">Sample Request</h2>
      <p className="text-lg mb-8">
        Our <span className="text-orange-500">Quartz Experts</span> will happy
        to assist you
      </p>

      <div className="max-w-6xl md:px-20 px-10 py-10 mx-auto bg-white shadow-lg rounded-lg p-8">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-start">
            <label className="text-gray-700">Name:</label>
            <input
              type="text"
              placeholder="Enter your full name."
              className="border border-gray-300 w-full bg-gray-100 rounded px-4 py-2"
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-gray-700">Email:</label>
            <input
              type="email"
              placeholder="Enter your mail address."
              className="border w-full border-gray-300 bg-gray-100 rounded px-4 py-2"
            />
          </div>

          <div className="flex flex-col items-start">
            <label className="text-gray-700">Company Name:</label>
            <input
              type="text"
              placeholder="Enter your company name."
              className="border w-full border-gray-300 bg-gray-100 rounded px-4 py-2"
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-gray-700">Mobile No.:</label>
            <input
              type="text"
              placeholder="Enter your contact no."
              className="border w-full border-gray-300 bg-gray-100 rounded px-4 py-2"
            />
          </div>

          <div className="flex flex-col items-start">
            <label className="text-gray-700">Address:</label>
            <input
              type="text"
              placeholder="Enter your address."
              className="border w-full border-gray-300 bg-gray-100 rounded px-4 py-2"
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-gray-700">State:</label>
            <input
              type="text"
              placeholder="Enter your State."
              className="border w-full border-gray-300 bg-gray-100 rounded px-4 py-2"
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-gray-700">City.:</label>
            <input
              type="text"
              placeholder="Enter your city."
              className="border w-full border-gray-300 bg-gray-100 rounded px-4 py-2"
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-gray-700">Zip Code:</label>
            <input
              type="text"
              placeholder="Enter your zip code."
              className="border w-full border-gray-300 bg-gray-100 rounded px-4 py-2"
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-gray-700">Request Products:</label>
            <input
              type="text"
              placeholder="Enter the product you want for sample."
              className="border w-full border-gray-300 bg-gray-100 rounded px-4 py-2 md:col-span-2"
            />
          </div>

          <div className="flex justify-center items-end text-center">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 shadow-md"
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SampleRequest;
