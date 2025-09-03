import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Faq = () => {
  const faqs = [
    {
      question: "How to find a dealer near me?",
      answer:
        "You can find a dealer near you by visiting our dealer locator page and entering your location.",
    },
    {
      question: "Are these verified products and is it safe for children?",
      answer:
        "Yes, our products are verified and meet strict safety standards, making them safe for children.",
    },
    {
      question: "How to find a dealer near me?",
      answer:
        "Check our website's dealer locator tool to find the nearest dealer with just a few clicks.",
    },
    {
      question: "Are these verified products and is it safe for children?",
      answer:
        "Absolutely! We ensure all our products are certified and safe for children.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#fafafa] py-16 md:px-6 lg:px-10 px-4 overflow-hidden">
      {/* Decorative floating background shapes */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-25"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative text-center mb-12 z-10"
      >
        <p className="text-orange-500 text-sm tracking-widest uppercase mb-2">
          Have Questions?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
      </motion.div>

      {/* FAQ Section */}
      <div className="max-w-2xl mx-auto space-y-4 relative z-10">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* FAQ Question */}
            <button
              className="flex justify-between items-center w-full p-5 text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-gray-900 font-medium text-lg">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <ChevronDownIcon className="w-6 h-6 text-orange-500" />
              </motion.div>
            </button>

            {/* Smooth Expandable Answer */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1], // Smooth easing
                  }}
                  className="overflow-hidden px-5 pb-5"
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
