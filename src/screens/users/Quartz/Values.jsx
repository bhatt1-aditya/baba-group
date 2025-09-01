import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light text-orange-600 leading-tight mb-6">
            A NEW <br /> GENERATION
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We – BABA QUARTZ is the prominent manufacturer of engineered Quartz
            Surfaces, Headquartered in Rajasthan province in India. We have
            independent distributors across all part of world to serve our
            customers. Our product is made with one of the nature's hardest
            stone. It is the most versatile and practical building material used
            for beautiful kitchen countertops, table tops, feel good bathroom
            vanity, elegant floorings and wall claddings! BABA QUARTZ strive to
            optimize our client’s satisfaction level by providing our
            extinguished product range.
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-orange-600 mb-6">
            OUR CORE VALUES
          </h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            Baba Group believes that a healthy environment is not only
            complementary, But also critical to a healthy business. Our mission
            is to develop a high performance, high value products in order to
            satisfy our customers total needs.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "95%", label: "Environment Friendly" },
              { value: "98%", label: "Creative & Execution" },
              { value: "99%", label: "Technology Giants" },
              { value: "100%", label: "Quality Production" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-2xl font-bold text-orange-600">{item.value}</p>
                <p className="text-sm text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
