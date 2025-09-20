import React, { useState } from "react";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-20 my-16 items-start md:items-center lg:px-10 px-4 md:px-6 py-12 bg-white">
      {/* Left Content */}
      <div className="lg:col-span-2 text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Careers at{" "}
          <span className="text-orange-500">BABA GROUP</span>
        </h2>
        <p className="italic text-gray-500 mb-6">
          Your Gateway to Growth and Opportunities
        </p>

        <p className="mb-4 leading-relaxed">
          At Baba Quartz, we believe that true success is built not only on
          customer satisfaction but also on creating an environment where our
          people thrive. With innovation, creativity, and commitment at the
          heart of what we do, we offer a workplace that encourages learning,
          collaboration, and growth.
        </p>

        <p className="mb-4 leading-relaxed">
          We are constantly looking for self-driven individuals who are
          independent, motivated, and ready to take on challenges with
          confidence.
        </p>

        <p className="text-orange-500 font-semibold mb-4 text-lg">
          “Work Together, Grow Together.”
        </p>

        <p className="leading-relaxed">
          Every team member plays a vital role in shaping our journey, and we
          ensure that every effort is valued. To help new members settle in
          seamlessly, we offer an intensive induction program—a warm welcome
          that introduces you not just to the company but also to the people
          who make Baba Quartz what it is.
        </p>

        <p className="mt-4 leading-relaxed">
          Join us, and discover a workplace where opportunities are endless,
          teamwork is celebrated, and Mondays are just another exciting day to
          create something meaningful.
        </p>
      </div>

      {/* Right Form */}
      <div className=" w-full bg-white shadow-lg rounded-xl p-6 mt-8 md:mt-0">
        <h3 className="text-center text-orange-500 font-semibold text-lg mb-6">
          JOIN US
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name."
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your mail address."
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address:
            </label>
            <textarea
              name="address"
              placeholder="Enter your current address."
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              rows="2"
              required
            />
          </div>

          {/* Upload CV */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload CV:
            </label>
            <input
              type="file"
              name="cv"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="w-full text-sm text-gray-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Careers;
