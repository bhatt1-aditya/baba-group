import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "What makes Baba Quartz products different?",
    answer:
      "Baba Quartz products stand out due to their superior durability, unique design, global style, and certified quality standards.",
  },
  {
    id: 2,
    question: "Are Baba Quartz surfaces environmentally friendly?",
    answer:
      "Yes, all Baba Quartz products are Greenguard certified, eco-friendly, and manufactured with sustainability in mind.",
  },
  {
    id: 3,
    question: "Do Baba Quartz products come with a warranty?",
    answer:
      "Absolutely, Baba Quartz surfaces come with warranty coverage for peace of mind and long-lasting performance.",
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-12 bg-white text-center">
      {/* Heading */}
      <p className="text-orange-500 font-medium">FAQS</p>
      <h2 className="text-2xl md:text-3xl font-semibold">
        Frequently Asked <span className="text-orange-500">Ques.</span>
        <br />
        <span className="text-orange-500">Everything</span> you Need to Know !
      </h2>

      {/* FAQ List */}
      <div className="mt-10 px-4 md:px-6 lg:px-10 space-y-4 text-left">
        {faqs.map((faq) => (
          <motion.div
            key={faq.id}
            className="relative border rounded-lg shadow-sm overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            {/* Neon Glow Overlay */}
            <motion.div
              className="absolute inset-0 rounded-lg pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: 0.2,
                background:
                  "linear-gradient(135deg, rgba(52,211,153,0.3), rgba(16,185,129,0.3), rgba(5,150,105,0.3))",
                transition: { duration: 0.5 },
              }}
            />

            {/* Question */}
            <button
              onClick={() => toggleFAQ(faq.id)}
              className={`w-full flex justify-between items-center px-4 py-3 text-sm md:text-base font-medium relative z-10 ${
                openId === faq.id ? "text-orange-500" : "text-gray-800"
              }`}
            >
              {`Q${faq.id}: ${faq.question}`}
              <motion.div
                animate={{ rotate: openId === faq.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiChevronDown className="text-xl" />
              </motion.div>
            </button>

            {/* Answer */}
            <AnimatePresence>
              {openId === faq.id && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="px-4 pb-4 text-gray-600 text-sm md:text-base relative z-10"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
