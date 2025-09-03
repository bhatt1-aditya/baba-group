import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const faqs = [
    {
      question: "How to find a dealer near me?",
      answer:
        "You can find a dealer near you by visiting our dealer locator page and entering your location.",
    },
    {
      question: "Are these verified products and safe for children?",
      answer:
        "Yes, our products are verified and meet strict safety standards to ensure they are safe for children.",
    },
    {
      question: "How to check product authenticity?",
      answer:
        "All our products come with a unique QR code and serial number to verify authenticity on our website.",
    },
    {
      question: "Do you provide international shipping?",
      answer:
        "Yes, we ship internationally. Delivery charges and times vary depending on the location.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 md:px-6 lg:px-10 px-4">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-10 text-gray-800">
        FAQs
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 rounded-lg shadow-sm bg-white"
          >
            <button
              className="flex justify-between items-center w-full py-4 px-4 text-left text-gray-700 focus:outline-none hover:bg-gray-100 transition"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <ChevronDownIcon
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-gray-600" : "text-gray-500"
                }`}
              />
            </button>

            {/* Smooth Animated Answer */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-4 pb-4 text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
