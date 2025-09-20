const WhyChooseFloorexx=()=> {
  const features = [
    "Soundproof",
    "Eco-Friendly",
    "Safe and Better Air Quality",
    "Termite Resistant",
    "Endless Options",
    "Ultimate Durability",
    "Waterproof",
    "Warranty",
    "Low Cost Installation",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Heading + description */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Why Choose <span className="text-orange-600">FLOOREXX</span>?
        </h2>
        <p className="text-gray-600 mt-3 text-sm md:text-base max-w-3xl mx-auto">
          Floorexx combines advanced SPC flooring technology with elegant design
          to deliver unmatched value. Our floors are built to last, easy to
          install, and crafted with sustainable practices to fit today&apos;s
          modern spaces.
        </p>

        {/* Button */}
        <div className="mt-5">
          <a
            href="#"
            className="inline-block bg-orange-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-orange-600 transition"
          >
            Learn More &gt;
          </a>
        </div>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="px-4 py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-800 hover:border-orange-500 hover:text-orange-600 transition"
          >
            {feature}
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseFloorexx