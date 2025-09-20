import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import image from "../../../Assets/footer_florex/products5.png";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How to find a dealer near me?",
      a: "You can use our dealer locator by entering your city or ZIP code to find the nearest authorized dealer."
    },
    {
      q: "Are these verified products and is it safe for children?",
      a: "Yes, all our products are verified and tested to meet safety standards, making them safe for children."
    },
    {
      q: "What warranty do you provide?",
      a: "We provide up to 5 years of warranty depending on the product category."
    },
    {
      q: "Can I get installation services?",
      a: "Yes, installation services are available with our verified dealers at an additional cost."
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-white  md:px-6 lg:px-10 px-4 py-12">
      {/* Heading */}
      <h1 className="text-center text-4xl font-bold mb-12">
        <span className="uppercase">FAQ</span>'s
      </h1>

      {/* FAQs + Image Section */}
      <div className="mx-auto max-w-3xl  items-start">
        
        {/* Left: FAQs */}
        <div className="space-y-6">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-xl shadow-lg p-5 transition hover:shadow-xl"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-lg font-medium">{item.q}</span>
                <FaChevronDown
                  className={`ml-4 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Smooth Expand */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Image */}
        {/* <div className="flex justify-center md:justify-end w-full">
          <img
            src={image}
            alt="FAQ Illustration"
            className="rounded-2xl shadow-xl object-cover w-full md:w-[67%] lg:w-[50%] xl:w-[40%] h-auto"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Faqs;
