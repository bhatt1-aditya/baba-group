import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import sidebarImage from "../../../Assets/wallex/about/sidebar.png"; // Update with the correct image path

const Faq = () => {
  const faqs = [
    { question: "How to find a dealer near me ?", answer: "You can find a dealer near you by visiting our dealer locator page and entering your location." },
    { question: "Are these verified products and is it safe for children ?", answer: "Yes, our products are verified and meet safety standards for children." },
    { question: "How to find a dealer near me ?", answer: "Check our website's dealer locator tool to find the nearest dealer." },
    { question: "Are these verified products and is it safe for children ?", answer: "Absolutely, we ensure all products are certified and child-safe." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#044d42] py-16 md:px-6 lg:px-10 px-4">
      <div className="md:p-10 p-4 rounded-md bg-white mx-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 gap-5">
        {/* FAQ Section */}
        <div className="flex-1 pr-10">
          <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10 text-gray-800">
            FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  className="flex justify-between items-center w-full py-4 text-left text-gray-700 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <p className="pb-4 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Image */}
        <div className="md:w-1/3 mt-8 md:mt-0">
          <img src={sidebarImage} alt="Sidebar" className="w-full h-96 rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Faq;
