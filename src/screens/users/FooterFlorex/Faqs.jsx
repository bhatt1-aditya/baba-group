import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';
import image from "../../../Assets/footer_florex/products5.png"
 

const Faqs = () => {
     const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    "How to find a dealer near me?",
    "Are these verified products and is it safe for children?",
    "How to find a dealer near me?",
    "Are these verified products and is it safe for children?",
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="text-white p-5 ">
      <div>
        <h1 className="  whitespace-nowrap leading-none font-normal font-libertinus text-center">
          <span className="text-4xl"><span className='uppercase'>Faq</span>s</span>
        </h1>
      </div>
      <div className="bg-black text-white py-14 px-4 md:px-12">
      <div className="mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Left: FAQs */}
        <div className="space-y-20">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-600 pb-4">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left text-base md:text-lg font-light"
              >
                <span>{faq}</span>
                <FaChevronDown
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-3 text-sm text-gray-400">
                  This is the answer to the question. You can update this content with actual FAQs.
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="flex justify-end w-full h-full">
          <img
            src={image}
            alt="Bathroom Example"
            className="rounded-xl shadow-lg object-cover md:w-[80%] w-[100%] xl:h-[50%] h-[100%]"
          />
        </div>
      </div>
    </div>
      </div>
  )
}

export default Faqs