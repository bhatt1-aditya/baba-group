import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

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
    <section className="bg-gray-50 py-16 md:px-6 lg:px-10 px-4">
      <h2 className="text-center text-3xl font-semibold mb-12 text-gray-800">
        FAQs
      </h2>
      <div className="mx-auto max-w-2xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm bg-white"
          >
            <button
              className="flex justify-between items-center w-full p-5 text-left text-gray-800 font-medium focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <ChevronDownIcon
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-5 pb-5 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
